# Project Starter for Claude Code

This template helps you go from idea to a ready-to-build project, with structured docs and Claude Code setup before writing app code.

## Imported Skills Attribution

This repository includes imported skills from:
- Matt Pocock: [mattpocock/skills](https://github.com/mattpocock/skills)
- Julius Brussee (caveman): [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)

Imported skills currently present:
- `caveman` (from `JuliusBrussee/caveman`)
- `diagnose`
- `improve-codebase-architecture`
- `to-prd`

### When to use each skill

- `caveman`: Use when you want ultra-brief, low-token responses while keeping technical accuracy.
- `diagnose`: Use when a bug or performance issue is hard to understand and needs a structured debugging loop.
- `improve-codebase-architecture`: Use when you want to find and prioritize deeper refactors that improve maintainability and modular design.
- `to-prd`: Use when you want to turn the current conversation into a clear PRD that can be tracked and executed ( after the original PRD )
- `landing-page-generator`: Use when you need to create or iterate a conversion-focused landing page quickly.

## Install (Git Clone)

1. Clone the repository:
```bash
git clone https://github.com/Rovis91/seedtoship
cd SeedToShip
```
2. Open this folder in your IDE
3. Start Claude Code in this project.

If you do not use Git, you can still download and extract the repository ZIP.

## Before You Start

- Use `/desktop` for a better UI during setup and review.
- Use `/clear` between each major step to keep context clean.
- If you feel like trusting claude use `claude --dangerously-skip-permissions`
- I recommend to use `/effort` => max for the all setup (don't forget to turn it back to medium after)
- Run steps in order.

## Workflow (Required Order)

### 0) Rename the Project Folder
Before running setup commands, rename the root folder to your actual project name if it is still a template name (for example `SeedToShip`, `project`, or similar).

### 1) Scope the Project
```
/setup-1-scope
```
Asks you to explain your project until Claude has a complete understanding of your needs. Generates all docs for your review.

Review and approve the generated docs before continuing.

**Most part of software programming problems with AI or humans come from misalignement**

### 1.5) Review (optional but recommended)
If the generated docs feel too complicated, over-engineered, or unclear, stay in the same session and ask Claude for a focused review.

Run:
```
/compact
```

Then prompt (in plan mode by doing `/plan` or pressing Shift+Tab ):
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

### 5) Confirm Setup is Clean

Before moving on, manually verify that setup completed correctly:

- [ ] Setup commands are gone — `.claude/commands/` should only contain `phase-start.md` and `phase-review.md`
- [ ] `readme_protection.py` hook is gone — `.claude/hooks/` should only contain `docs_protection.py`
- [ ] `docs/README.md` is fully populated — no placeholder text, all doc files listed
- [ ] `CLAUDE.md` reflects your actual project — name, stack, and constraints are correct ( you can rerun `/init` to be sure it's up to date)

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
