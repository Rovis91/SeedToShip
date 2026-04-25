---
description: "Configure Claude Code tooling for the project. Reads the tech stack and PRD, then recommends and installs MCPs, skills, hooks, and settings. Use after /setup-1-scope is complete."
allowed-tools: Read Write Bash(*)
---

# Setup Step 2 — Configure Tooling

You are configuring Claude Code for an already-scoped project. The docs in `/docs` have been written and approved. Your job is to recommend and install the right tooling.

## Pre-Check

Before starting, verify:
1. `docs/PRD.md` exists and is filled (not placeholder)
2. `docs/TECH_STACK.md` exists and is filled
3. `docs/CONSTRAINTS.md` exists and is filled
4. `docs/TIMELINE.md` exists and is filled

If any are missing or still placeholders, tell the user to run `/setup-1-scope` first.

## Core Principle: Less Is More

**Default to recommending nothing.** Only suggest a tool when it provides concrete, specific value for THIS project that cannot be achieved without it. A project with zero extra MCPs is better than one with five mediocre ones. Complexity has a cost — every addition makes the environment harder to reason about and maintain.

Before proposing anything, ask yourself: "Would a skilled developer working on this project be meaningfully blocked without this tool?" If the answer is not a clear yes, skip it.

## Tooling Categories

### 1. MCP Servers

Read `docs/TECH_STACK.md` and `docs/PRD.md`. For each candidate MCP, apply this filter before mentioning it:

**Only suggest an MCP if ALL of the following are true:**
1. It directly supports a core service in the confirmed tech stack (not a hypothetical future need)
2. The alternative (doing it manually or via CLI) would meaningfully slow down development
3. You are confident you can use it correctly — do not suggest MCPs you are unfamiliar with

**Known useful MCPs (suggest only when the condition is met):**
- **Supabase MCP** — only if using Supabase
- **GitHub MCP** — only if GitHub integration (issues, PRs) is a real workflow need
- **Playwright MCP** — only if the project has a frontend requiring browser-level testing
- **Postgres MCP** — only if direct SQL inspection of a Postgres database is needed during development
- **Fetch MCP** — only if implementation requires regularly pulling external docs or APIs

**If no MCP clears the filter, say so explicitly:** "No MCP adds clear value for this project. I recommend skipping this category."

For each suggestion that passes the filter:
- State the single reason it's useful for THIS project (one sentence)
- Ask the user if they want to install it
- Install only after confirmation using `claude mcp add`
- Verify the connection works

### 2. Skills

Review the available skills list. Apply the same filter: only suggest a skill if it directly supports a task the user will perform repeatedly in this project.

**If no skill adds clear value, say so and move on.**

For each that passes:
- One sentence explaining the concrete benefit for this project
- Ask before activating
- Verify it's loaded

### 3. Hooks

Check `.claude/hooks/` for any user-provided hooks. If hooks exist, verify they work.

Suggest an additional hook only if the tech stack has a standard, zero-configuration formatter or linter that the project already depends on (e.g., Prettier if it's in `package.json`, Black if it's in `pyproject.toml`). Do not suggest installing new tooling just to have a hook.

**If no hook makes sense, skip this category entirely.**

### 4. Settings

Review `.claude/settings.json` and suggest only:
- Tool permissions for commands the project will actually run (e.g., `Bash(npm *)` for a Node project)
- Deny rules for sensitive files that exist in this project (e.g., `.env`)

Do not add permissions speculatively. Show proposed changes and ask for confirmation.

## Process

1. Read all docs
2. Present a summary of recommended tooling (all categories)
3. Go through each recommendation one by one
4. Install/configure only after user confirms each
5. Verify each installation works
6. Summarize what was installed

## Critical Rules

- **Never install without asking** — every MCP, skill, hook, and setting change requires confirmation
- **Do not modify docs** — tooling setup does not change documentation
- **Do not install project dependencies** — that's for `/setup-3-init`
- **Do not generate application code**
- After completion, tell the user to run `/setup-3-init` next
