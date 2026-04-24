# CLAUDE.md — Project Starter Template

## What This Repository Is

This is a project initialization template. It is NOT a project itself. Its purpose is to help users go from an idea to a fully documented and configured project using Claude Code.

## Current State

This repository is in **template mode**. The docs/ folder contains placeholder files that will be filled during the `/project-setup` workflow.

## Workflow

The user will run these commands in order:
1. `/project-setup` — Scoping conversation → generates all docs
2. `/setup-tooling` — Installs MCPs, skills, hooks based on chosen stack
3. `/init-project` — Creates project structure, installs dependencies
4. `/verify-and-finalize` — Validates everything, removes setup commands, commits v0

After v0, two permanent commands remain:
- `/phase-start` — Start next development phase from timeline
- `/phase-review` — Review and commit completed phase

## Documentation

All project documentation lives in `/docs` and is referenced here:
- [docs/README.md](docs/README.md) — Table of contents
- [docs/PRD.md](docs/PRD.md) — Product Requirements Document
- [docs/TECH_STACK.md](docs/TECH_STACK.md) — Technology stack choices
- [docs/CONSTRAINTS.md](docs/CONSTRAINTS.md) — Coding rules and conventions
- [docs/TIMELINE.md](docs/TIMELINE.md) — Development phases and milestones

## Rules

- Do NOT generate application code until `/init-project` is complete
- Do NOT modify docs without user confirmation
- Do NOT install dependencies until the tech stack is confirmed
- Always ask for human review after generating or modifying documentation
