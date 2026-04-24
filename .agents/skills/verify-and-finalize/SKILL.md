---
name: verify-and-finalize
description: "Final verification step. Checks all docs are complete, project builds, removes setup commands, updates CLAUDE.md, and commits v0. Use after /init-project is complete."
disable-model-invocation: true
allowed-tools: Read Write Bash(*)
---

# Verify & Finalize — Validation, Cleanup, Commit v0

This is the final setup step. After this, the project transitions from "setup mode" to "development mode."

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

## Cleanup — Remove Setup Commands

Once everything passes, delete the setup-only skills:

```
rm -rf .agents/skills/project-setup
rm -rf .agents/skills/setup-tooling
rm -rf .agents/skills/init-project
rm -rf .agents/skills/verify-and-finalize
```

The two permanent skills remain:
- `.agents/skills/phase-start/SKILL.md`
- `.agents/skills/phase-review/SKILL.md`

## Update CLAUDE.md

Rewrite `CLAUDE.md` to reflect the actual project. It should contain:

- Project name and one-line description
- Links to all docs in `/docs`
- Key constraints (from CONSTRAINTS.md — the most critical ones)
- Available commands: `/phase-start` and `/phase-review`
- Current state: "v0 committed — ready for Phase 2 development"
- Rules: do not modify docs without user confirmation, follow constraints, follow timeline phases

## Commit v0

If Git is available:
1. `git add -A`
2. `git commit -m "v0: project setup complete — docs, structure, configuration"`

Tell the user: "Your project is set up. Run `/phase-start` to begin Phase 2 development."

If Git is not available, tell the user to manually save/backup the project and note that Git should be installed before starting development.
