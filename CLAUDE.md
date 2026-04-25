# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repository Is

This is a project initialization template. It is NOT a project itself. Its purpose is to help users go from an idea to a fully documented and configured project using Claude Code.

## Current State

This repository is in **template mode**. The docs/ folder contains placeholder files that will be filled during the `/setup-1-scope` workflow.

## Workflow

The user will run these commands in order:
1. `/setup-1-scope` — Scoping conversation → generates all docs (includes prerequisites check)
2. `/setup-2-tooling` — Installs MCPs, skills, hooks based on chosen stack
3. `/setup-3-init` — Creates project structure, installs dependencies
4. `/setup-4-finalize` — Validates everything, replaces placeholders, removes setup commands, commits v0

After v0, two permanent commands remain:
- `/phase-start` — Start next development phase from timeline
- `/phase-review` — Review and commit completed phase

No scripts need to be run manually. `/setup-4-finalize` handles all cleanup automatically.

## Documentation

All project documentation lives in `/docs` and is referenced here:
- [docs/README.md](docs/README.md) — Table of contents
- [docs/PRD.md](docs/PRD.md) — Product Requirements Document
- [docs/TECH_STACK.md](docs/TECH_STACK.md) — Technology stack choices
- [docs/CONSTRAINTS.md](docs/CONSTRAINTS.md) — Coding rules and conventions
- [docs/TIMELINE.md](docs/TIMELINE.md) — Development phases and milestones

## Active Hooks

- `.claude/hooks/docs_protection.py` — Runs on all write/edit tools targeting `docs/`. Blocks new `.md` files not listed in `docs/README.md`, blocks `docs/README.md` over 200 lines, warns for long docs missing a table of contents.
- `.claude/hooks/readme_protection.py` — Temporary hook active during setup only; removed automatically by `/setup-4-finalize`.

## Rules

- Do NOT generate application code until `/init-project` is complete
- Do NOT modify docs without user confirmation
- Do NOT install dependencies until the tech stack is confirmed
- Always ask for human review after generating or modifying documentation
- New docs files must be added to `docs/README.md` index before creation (enforced by hook)
