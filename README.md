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

## One-Time Scripts

Run these once at project start:

```bash
node scripts/preflight-check.mjs
```
- Verifies required tools (`git`, `node`, `npm`).
- Marks completion in `.setup-state/preflight.done`.

## Workflow (Required Order)

### 1) Scope the Project
```bash
/project-setup
```
This step will ask you to explain your project, the users and scope the project until claude have a complete understanding of your needs.

Review and approve the generated docs before continuing.

### 1.5) Review (optionnal but recommended)
If the generated docs feel too complicated, over-engineered, or unclear, stay in the same session and ask Claude for a focused review.

Run:
```bash
/compact
```

Then prompt:
```text
We finalized the docs. Please review for edge cases, over-engineering, and unnecessary complexity.
Suggest simplifications for MVP and call out any risky assumptions.
```

You can append any specific issue you noticed.


### 2) Configure Tooling
```bash
/clear
/setup-tooling
```
Installs/configures recommended MCPs, skills, hooks, and settings based on your docs.


### 3) Initialize the Project
```bash
/clear
/init-project
```
Creates project structure and installs dependencies for your chosen stack.


### 4) Verify and Finalize v0
```bash
/clear
/verify-and-finalize
```
Validates docs/setup, finalizes context, and prepares your v0 baseline.

Then run the final cleanup script:
```bash
node scripts/setup-cleanup.mjs
```
- Removes template setup skills only (`project-setup`, `setup-tooling`, `init-project`, `verify-and-finalize`).
- Keeps permanent phase skills and any custom user skills.
- Replaces `{{project_name}}` placeholders with the project folder name.
- Warns if docs still look template-like and reminds you to review all docs before commit.
- Self-cleans by deleting `scripts/` and `.setup-state/` at the end.

Before committing, do a manual check that cleanup is complete:
- Confirm setup skills were removed (`project-setup`, `setup-tooling`, `init-project`, `verify-and-finalize`).
- Confirm temporary setup hooks were removed (especially `readme_protection.py`).
- Confirm only permanent phase skills remain.

Then run:
```bash
/clear
```

### 5) Build by Phases
Use these permanent commands:

```bash
/phase-start
```
Plans and build the next phase.

```bash
/phase-review
```
Reviews and finalizes a completed phase.
