#!/usr/bin/env node

import { mkdirSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const projectRoot = process.cwd();
const stateDir = join(projectRoot, ".setup-state");
const markerFile = join(stateDir, "preflight.done");

function banner() {
  console.log("===============================================");
  console.log("  ____            __ _ _       _     _");
  console.log(" |  _ \\ _ __ ___ / _(_) | __ _| |__ | |_");
  console.log(" | |_) | '__/ _ \\ |_| | |/ _` | '_ \\| __|");
  console.log(" |  __/| | |  __/  _| | | (_| | | | | |_");
  console.log(" |_|   |_|  \\___|_| |_|_|\\__, |_| |_|\\__|");
  console.log("                         |___/");
  console.log("===============================================");
}

function commandExists(command, args = ["--version"]) {
  const result = spawnSync(command, args, {
    stdio: "pipe",
    shell: process.platform === "win32",
    encoding: "utf-8",
  });
  return result.status === 0;
}

function checkNodeVersion() {
  const major = Number.parseInt(process.versions.node.split(".")[0], 10);
  return Number.isFinite(major) && major >= 18;
}

function ensureStateDir() {
  if (!existsSync(stateDir)) {
    mkdirSync(stateDir, { recursive: true });
  }
}

function writeMarker() {
  writeFileSync(markerFile, `ok ${new Date().toISOString()}\n`, "utf-8");
}

banner();

if (existsSync(markerFile)) {
  console.log("[info] Preflight already ran once. Skipping.");
  process.exit(0);
}

const checks = [
  {
    name: "Git",
    ok: commandExists("git"),
    failHint: "Install Git and make sure it is available in PATH.",
  },
  {
    name: "Node.js >= 18",
    ok: checkNodeVersion(),
    failHint: `Current Node.js version is ${process.versions.node}; please use v18+.`,
  },
  {
    name: "npm",
    ok: commandExists("npm"),
    failHint: "Install npm (usually included with Node.js).",
  },
];

let hasFailure = false;

for (const check of checks) {
  if (check.ok) {
    console.log(`[ok] ${check.name}`);
  } else {
    hasFailure = true;
    console.log(`[fail] ${check.name}`);
    console.log(`       -> ${check.failHint}`);
  }
}

if (hasFailure) {
  console.log("");
  console.log("[result] Preflight failed. Fix the issues and rerun this script.");
  process.exit(1);
}

ensureStateDir();
writeMarker();
console.log("");
console.log("[result] Preflight passed and marked as completed.");
