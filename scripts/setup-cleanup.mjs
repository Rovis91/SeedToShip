#!/usr/bin/env node

import {
  mkdirSync,
  existsSync,
  writeFileSync,
  readdirSync,
  rmSync,
  readFileSync,
} from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const projectRoot = process.cwd();
const stateDir = join(projectRoot, ".setup-state");
const markerFile = join(stateDir, "setup-cleanup.done");
const __dirname = dirname(fileURLToPath(import.meta.url));
const mdBaselinePath = join(__dirname, "md-baseline.json");
const placeholder = "{{project_name}}";
const projectName = projectRoot.split(/[\\/]/).filter(Boolean).at(-1) ?? "my-project";

function banner() {
  console.log("===============================================");
  console.log("  ____       _                ____ _");
  console.log(" / ___|  ___| |_ _   _ _ __  / ___| | ___  __ _ _ __");
  console.log(" \\___ \\ / _ \\ __| | | | '_ \\| |   | |/ _ \\/ _` | '_ \\");
  console.log("  ___) |  __/ |_| |_| | |_) | |___| |  __/ (_| | | | |");
  console.log(" |____/ \\___|\\__|\\__,_| .__/ \\____|_|\\___|\\__,_|_| |_|");
  console.log("                      |_|");
  console.log("===============================================");
}

function ensureStateDir() {
  if (!existsSync(stateDir)) {
    mkdirSync(stateDir, { recursive: true });
  }
}

function writeMarker() {
  writeFileSync(markerFile, `ok ${new Date().toISOString()}\n`, "utf-8");
}

function walkFiles(rootDir, predicate) {
  const files = [];
  const stack = [rootDir];
  const skipDirs = new Set([".git", "node_modules", ".setup-state"]);

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) continue;

    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const fullPath = join(current, entry.name);
      if (entry.isDirectory()) {
        if (!skipDirs.has(entry.name)) {
          stack.push(fullPath);
        }
      } else if (entry.isFile() && predicate(fullPath)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

function normalizeRel(filePath) {
  return relative(projectRoot, filePath).replace(/\\/g, "/");
}

function removeTemplateSetupSkillFolders() {
  const skillsRoot = join(projectRoot, ".agents", "skills");
  if (!existsSync(skillsRoot)) {
    console.log("[warn] .agents/skills not found; skipping skill folder cleanup.");
    return;
  }

  const deletableSkills = [
    "project-setup",
    "setup-tooling",
    "init-project",
    "verify-and-finalize",
  ];

  for (const skillName of deletableSkills) {
    const target = join(skillsRoot, skillName);
    if (!existsSync(target)) continue;
    rmSync(target, { recursive: true, force: true });
    console.log(`[remove] .agents/skills/${skillName}`);
  }
}

function replaceProjectPlaceholders() {
  const textLikeExtensions = new Set([
    ".md",
    ".txt",
    ".json",
    ".yaml",
    ".yml",
    ".js",
    ".mjs",
    ".ts",
    ".tsx",
    ".py",
    ".sh",
    ".ps1",
  ]);

  const files = walkFiles(projectRoot, (filePath) =>
    textLikeExtensions.has(filePath.slice(filePath.lastIndexOf(".")))
  );

  let replacements = 0;
  for (const file of files) {
    const original = readFileSync(file, "utf-8");
    if (!original.includes(placeholder)) continue;
    const updated = original.split(placeholder).join(projectName);
    writeFileSync(file, updated, "utf-8");
    replacements += 1;
    console.log(`[replace] ${normalizeRel(file)}`);
  }

  if (replacements === 0) {
    console.log("[ok] No {{project_name}} placeholders found.");
  } else {
    console.log(`[ok] Replaced placeholders in ${replacements} file(s).`);
  }
}

function deleteUnchangedMarkdownFiles() {
  if (!existsSync(mdBaselinePath)) {
    console.log("[warn] md-baseline.json missing; skipping markdown-length check.");
    return;
  }

  const baseline = JSON.parse(readFileSync(mdBaselinePath, "utf-8"));
  const mdFiles = walkFiles(projectRoot, (filePath) => filePath.endsWith(".md"));
  const unchangedFiles = [];

  for (const file of mdFiles) {
    const rel = normalizeRel(file);
    if (!(rel in baseline)) continue;

    const content = readFileSync(file, "utf-8");
    const currentLength = content.length;
    const originalLength = baseline[rel];

    if (currentLength === originalLength) {
      unchangedFiles.push(rel);
      console.log(`[warn] Unchanged markdown length, did you run all claude commands in order?`);
      console.log(`[warn] If you did, you can safely delete these files.`);
      console.log(`[warn] If you did not, you need to run the claude commands in order.`);
      console.log(`[warn] The claude commands are:`);
      console.log(`[warn] - /project-setup`);
      console.log(`[warn] - /setup-tooling`);
      console.log(`[warn] - /init-project`);
      console.log(`[warn] - /verify-and-finalize`);
    } else {
      console.log(`[ok] You properly wrote the docs.`);
    }
  }

  if (unchangedFiles.length > 0) {
    console.log("");
    console.log("[action] Review ALL docs carefully before committing.");
    console.log("[action] The following files still look template-like:");
    for (const file of unchangedFiles) {
      console.log(`         - ${file}`);
    }
  }
}

function removeTemporarySetupHooks() {
  const hookPath = join(projectRoot, ".claude", "hooks", "readme_protection.py");
  if (!existsSync(hookPath)) {
    return;
  }
  rmSync(hookPath, { force: true });
  console.log("[remove] .claude/hooks/readme_protection.py");
}

function scheduleSelfDeletion() {
  const cleanupScript = `
const { rmSync } = require("node:fs");
const { join } = require("node:path");

const root = ${JSON.stringify(projectRoot)};
const scriptsDir = join(root, "scripts");
const stateDir = join(root, ".setup-state");

setTimeout(() => {
  try {
    rmSync(scriptsDir, { recursive: true, force: true });
  } catch {}
  try {
    rmSync(stateDir, { recursive: true, force: true });
  } catch {}
}, 250);
`;

  const child = spawn(process.execPath, ["-e", cleanupScript], {
    detached: true,
    stdio: "ignore",
    windowsHide: true,
  });
  child.unref();
}

banner();

if (existsSync(markerFile)) {
  console.log("[info] Setup cleanup already ran once. Skipping.");
  process.exit(0);
}

removeTemplateSetupSkillFolders();
replaceProjectPlaceholders();
deleteUnchangedMarkdownFiles();
removeTemporarySetupHooks();

ensureStateDir();
writeMarker();
scheduleSelfDeletion();

console.log("");
console.log("[result] Setup cleanup completed.");
console.log("[result] Scheduled cleanup of scripts/ and .setup-state/.");
