---
name: setup-2-tooling
description: Configure only essential Claude tooling with clear, critical impact. Use after /setup-1-scope.
allowed-tools: Read Write Bash(*)
---

# Setup Step 2 — Minimal Tooling

You are configuring tooling for an already-scoped project.

Pre-check required docs: `docs/PRD.md`, `docs/TECH_STACK.md`, `docs/CONSTRAINTS.md`, `docs/TIMELINE.md`.
If any are missing or placeholders, stop and ask user to complete `/setup-1-scope`.

Default stance: install nothing unless the value is critical.

A tool is allowed only if ALL are true:
1) Directly supports the confirmed stack or core workflow
2) You can confidently operate and debug it
3) User explicitly approves installation

## MCP policy (basic only)

Recommend at most ONE primary MCP, chosen by stack:
- Supabase project -> Supabase MCP
- Frontend with repeated browser E2E/debug -> Playwright MCP
- Heavy GitHub issue/PR workflow -> GitHub MCP

Do not suggest extra MCPs "just in case".
If none are clearly critical, say: "No MCP is necessary for this project."

## Skills policy (basic only)

Recommend only key skills that fit project needs.
Don't install several similar productivity skill set.
Skip if no clear recurring usage.
Do not install skill bundles by default.

Popular starter examples (only if relevant):
- `frontend-design`
- `webapp-testing`
- `simplify`
- `super-powers`

## Process

1) Read docs and summarize minimal recommendations
2) Ask approval tool-by-tool
3) Install/configure only approved items
4) Summarize installed tooling

Rules:
- Never install without explicit approval
- Do not modify docs
- Do not install app dependencies
- Do not generate application code
- When done, direct user to `/setup-3-init`