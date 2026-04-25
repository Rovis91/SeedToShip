# Project Starter for Claude Code

This template helps you go from idea to a ready-to-build project, with structured docs and Claude Code setup before writing app code.

## Install (Git Clone)

1. Clone the repository:
```bash
git clone <your-repo-url>
cd SeedToShip
```
2. Open this folder in your IDE
3. Start Claude Code in this project.

If you do not use Git, you can still download and extract the repository ZIP.

## Before You Start

- Use `/desktop` for a better UI during setup and review.
- Use `/clear` between each major step to keep context clean.
- Run steps in order. Do not skip.

## Workflow (Required Order)

### 1) Scope the Project
```
/setup-1-scope
```
Checks your prerequisites (Git, Node.js, npm), then asks you to explain your project until Claude has a complete understanding of your needs. Generates all docs for your review.

Review and approve the generated docs before continuing.

### 1.5) Review (optional but recommended)
If the generated docs feel too complicated, over-engineered, or unclear, stay in the same session and ask Claude for a focused review.

Run:
```
/compact
```

Then prompt ( in plan mode by doing `/plan` or pressing Shift+Tab ):
```text
We finalized the docs. Please review for edge cases, over-engineering, and unnecessary complexity.
Suggest simplifications for MVP and call out any risky assumptions.
```

You can append any specific issue you noticed.


### 2) Configure Tooling
```
/clear
/setup-2-tooling
```
Installs/configures recommended MCPs, skills, hooks, and settings based on your docs.


### 3) Initialize the Project
```
/clear
/setup-3-init
```
Creates project structure and installs dependencies for your chosen stack.


### 4) Verify and Finalize v0
```
/clear
/setup-4-finalize
```
Validates docs and setup, replaces all `{{project_name}}` placeholders, removes setup commands, and commits v0. Everything is handled automatically — no scripts to run.

Then run:
```
/clear
```

### 5) Confirm Setup is Clean

Before moving on, manually verify that setup completed correctly:

- [ ] Setup commands are gone — `.claude/commands/` should only contain `phase-start.md` and `phase-review.md`
- [ ] `readme_protection.py` hook is gone — `.claude/hooks/` should only contain `docs_protection.py`
- [ ] `docs/README.md` is fully populated — no placeholder text, all doc files listed
- [ ] `CLAUDE.md` reflects your actual project — name, stack, and constraints are correct

If anything is missing or still templated, fix it before continuing.

### 6) Build by Phases
Use these permanent commands:

```
/phase-start
```
Plans and builds the next phase.

```
/phase-review
```
Reviews and finalizes a completed phase.
