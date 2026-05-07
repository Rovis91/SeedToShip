---
description: "Initialize the project structure, install dependencies, and get to a working hello-world state. Use after /setup-2-tooling is complete."
allowed-tools: Read Write Bash(*)
---

# Setup Step 3 — Initialize the Project

You are initializing the actual project. Docs are written, tooling is configured. Now create the project structure and get it running.

## Pre-Check

Before starting, verify:
1. `docs/PRD.md` is filled and approved
2. `docs/TECH_STACK.md` is filled and approved
3. `docs/CONSTRAINTS.md` is filled and approved
4. `docs/TIMELINE.md` is filled and approved

If any are missing, tell the user to run the previous steps first.

## Process

### 1. Read the Plan
Read `docs/TIMELINE.md` Phase 1 tasks and `docs/TECH_STACK.md` for the full stack.

### 2. Create Project Structure
Based on `docs/TECH_STACK.md` and `docs/CONSTRAINTS.md`:
- Create the folder structure defined in constraints
- Add config files defined by the offical docs of this tech stack
- Ask the user for missing elements ( clarifications, environnement variables, external accounts ...)

If the stack has a CLI initializer (e.g., `create-next-app`, `cargo init`, `django-admin startproject`), use it. Then adjust the output to match the constraints.

### 3. Install Dependencies
Install all dependencies defined in the tech stack:
- Runtime dependencies
- Dev dependencies (linter, formatter, testing)

### 4. Verify It Works
Get the project to a "hello world" state:
- Dev server starts without errors, OR
- Project builds successfully, OR
- Main script runs without errors

Report the result to the user.

### 5. Initialize Git (if not already)
If Git is available and not initialized:
- `git init`
- Create a `.gitignore` appropriate for the stack
- Do NOT commit yet — that's for `/setup-4-finalize`

If Git is not available, skip this step and note it.

## Critical Rules

- **Follow the constraints** — file structure, naming, and patterns must match `docs/CONSTRAINTS.md`
- **Install only what's in the tech stack** — no extra libraries
- **Do not build features** — only the skeleton and hello world
- **Do not modify docs** — project init does not change documentation
- **Report any issues** — if something doesn't install or build, tell the user
- After completion, tell the user to run `/setup-4-finalize` next
