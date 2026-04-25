---
description: "Final verification step. Checks all docs are complete, project builds, removes setup commands, replaces placeholders, and commits v0. Use after /setup-3-init is complete."
allowed-tools: Read Write Edit Bash(*)
---

# Setup Step 4 — Verify, Clean Up, and Commit v0

This is the final setup step. After this, the project transitions from "setup mode" to "development mode." All cleanup happens here — no external scripts needed.

## Verification Checklist

Go through each item and report pass/fail:

### Documentation
- [ ] `README.md` (root) — Setup steps are still present and readable
- [ ] `docs/PRD.md` — Has all required sections filled (not placeholder text)
- [ ] `docs/TECH_STACK.md` — Has chosen stack with rationale
- [ ] `docs/CONSTRAINTS.md` — Has stack-specific coding rules
- [ ] `docs/TIMELINE.md` — Has Phase 0 (docs), Phase 1 (setup), Phase 2+ (features)
- [ ] `docs/README.md` — Links to all docs with summaries
- [ ] `CLAUDE.md` — References all docs, has project context
- [ ] No required setup file is accidentally missing

### Project Structure
- [ ] Folder structure matches `docs/CONSTRAINTS.md`
- [ ] Config files are present (linter, formatter, etc.)
- [ ] Dependencies are installed
- [ ] `.gitignore` exists and is appropriate

### Build/Run
- [ ] Project builds or runs without errors (if applicable)
- [ ] Dev server starts (if applicable)

### Tooling
- [ ] MCPs installed and functional (if any were configured)
- [ ] Hooks in place (if any)
- [ ] Settings updated
- [ ] Temporary README protection hook exists before cleanup

Report the full checklist to the user. If anything fails, fix it or ask the user how to proceed.

## Cleanup

Once everything passes, perform all cleanup steps in order.

### Step 1 — Replace `{{project_name}}` placeholders

Get the project name from the current directory:

```bash
basename $(pwd)
```

Then search all text files for the placeholder and replace with the actual project name. Use the Edit tool for each file containing `{{project_name}}`. Target these extensions: `.md`, `.json`, `.js`, `.mjs`, `.ts`, `.tsx`, `.py`, `.sh`, `.yaml`, `.yml`.

If no placeholders are found, skip this step.

### Step 2 — Check for unchanged template docs

For each file in `docs/`, check whether it still contains generic placeholder phrases like "TODO", "placeholder", "your project", or "describe your". If any doc looks template-like, warn the user with a list of files and ask them to review before continuing.

### Step 3 — Remove the temporary README protection hook

```bash
rm -f .claude/hooks/readme_protection.py
```

### Step 4 — Delete all `setup-*` commands (including this file)

```bash
rm -f .claude/commands/setup-*.md
```

This removes all four setup commands, including this one. That is expected — setup is complete.

### Step 5 — Delete `.setup-state/` if it exists

```bash
rm -rf .setup-state/
```

## Update CLAUDE.md

Rewrite `CLAUDE.md` to reflect the actual project. It should contain:

- Project name and one-line description
- Links to all docs in `/docs`
- Key constraints (from CONSTRAINTS.md — the most critical ones)
- Available commands: `/phase-start` and `/phase-review`
- Active hooks: `docs_protection.py` only
- Current state: "v0 committed — ready for Phase 2 development"
- Rules: do not modify docs without user confirmation, follow constraints, follow timeline phases

## Commit v0

If Git is available:
1. `git add -A`
2. `git commit -m "v0: project setup complete — docs, structure, configuration"`

Tell the user: "Your project is set up. Run `/phase-start` to begin Phase 2 development."

If Git is not available, tell the user to manually save/backup the project and note that Git should be installed before starting development.
