---
name: setup-tooling
description: "Configure Claude Code tooling for the project. Reads the tech stack and PRD, then recommends and installs MCPs, skills, hooks, and settings. Use after /project-setup is complete."
disable-model-invocation: true
allowed-tools: Read Write Bash(*)
---

# Setup Tooling — MCPs, Skills, Hooks, Settings

You are configuring Claude Code for an already-scoped project. The docs in `/docs` have been written and approved. Your job is to recommend and install the right tooling.

## Pre-Check

Before starting, verify:
1. `docs/PRD.md` exists and is filled (not placeholder)
2. `docs/TECH_STACK.md` exists and is filled
3. `docs/CONSTRAINTS.md` exists and is filled
4. `docs/TIMELINE.md` exists and is filled

If any are missing or still placeholders, tell the user to run `/project-setup` first.

## Tooling Categories

### 1. MCP Servers

Read `docs/TECH_STACK.md` and `docs/PRD.md`. Based on the chosen stack and integrations, suggest relevant MCP servers. Examples:

- **Supabase MCP** — if using Supabase
- **Sentry MCP** — if error tracking is planned
- **Database MCPs** — based on chosen database
- **Filesystem MCP** (`@modelcontextprotocol/server-filesystem`) — safe local file operations
- **GitHub MCP** — issues/PR/repo workflows
- **Playwright MCP** — frontend/browser automation and UI verification
- **Fetch MCP** — retrieve web docs/pages for implementation context
- **Brave Search MCP** (`@anthropic-ai/mcp-server-brave-search`) — web search for up-to-date info
- **Postgres MCP** — direct SQL/database inspection when relevant

Use reputable sources for examples:
- Official MCP docs and examples: https://modelcontextprotocol.io/examples
- MCP org repos: https://github.com/modelcontextprotocol
- Curated community list (discovery only): https://github.com/punkpeye/awesome-mcp-servers

For each suggestion:
- Explain why it's useful for THIS project
- Ask the user if they want to install it
- Install only after confirmation using `claude mcp add`
- Verify the connection works

### 2. Skills

Check what skills are available and recommend useful ones. Consider:
- Language/framework-specific skills
- Testing skills
- Deployment skills
- Code review skills

For each:
- Explain what it does
- Ask before installing
- Verify it's loaded

### 3. Hooks

Check `.claude/hooks/` for any user-provided hooks. If hooks exist, verify they work.

Suggest additional hooks based on the tech stack:
- Pre-commit formatting (Prettier, Black, etc.)
- Type checking on file save
- Lint on file write
- Test runner hooks

Ask before configuring each one.

### 4. Settings

Review `.claude/settings.json` and suggest updates based on the project:
- Add tool permissions relevant to the stack (e.g., `Bash(npm *)`, `Bash(python *)`)
- Add deny rules for sensitive files (e.g., `.env`, production configs)

Show the proposed settings changes and ask for confirmation.

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
- **Do not install project dependencies** — that's for `/init-project`
- **Do not generate application code**
- After completion, tell the user to run `/init-project` next
