---
name: setup-1-scope
description: Scope a new project through iterative questioning, then generate core docs in sequence with mandatory user review gates.
allowed-tools: Read Write Bash(git *) Bash(node *) Bash(npm *) Bash(which *)
---

Start by checking prerequisites silently:

```bash
git --version
node --version
npm --version
```

If a check fails:
- Missing `git`: ask user to install from https://git-scm.com and stop.
- Missing `node` or version < 18: ask user to install Node.js 18+ from https://nodejs.org and stop.
- Missing `npm`: ask user to reinstall Node.js and stop.

If checks pass, interview the user to define an MVP. Ask questions one-by-one (max two at a time).

Opening questions:
- What are you building?
- What problem does it solve?
- Who is it for?
- Local-only or deployed for others?
- What is your level with this stack (beginner/intermediate/advanced)?

Adapt question depth to user level:
- Beginner: simple language, concrete options.
- Intermediate: balanced detail and trade-offs.
- Advanced: concise, architecture-level decisions.

Cover these areas before drafting docs:
- Problem, goals, and success criteria
- Users and key user flows
- MVP features (3-5), out-of-scope items, v2 deferrals
- Data model needs, integrations, auth
- Constraints: platform, budget, timeline, deployment target
- Monetization (only if relevant)

Stop questioning when:
- User says to move on, or
- You can clearly write a complete MVP PRD.

Then say: "I have enough to generate your docs. I'll draft them for your review."

Generate docs in this exact order, and require explicit approval after each:

1) `docs/PRD.md`
- Problem statement, users, MVP features, user stories, success criteria, out-of-scope, monetization (if any), open questions.

2) `docs/TECH_STACK.md`
- Recommend a minimal stack based on PRD and user level.
- Prefer stable, well-documented tools and minimal dependencies.
- Ask user to confirm/adjust before continuing.

3) `docs/CONSTRAINTS.md`
- Conventions for structure, naming, architecture, testing, style, security, git workflow.

4) `docs/TIMELINE.md`
- Phase 0 docs/planning, Phase 1 setup, Phase 2+ feature phases.
- Each phase: scope, milestones, dependencies, acceptance criteria.

5) `docs/README.md`
- Table of contents with one-line summaries for all docs.

6) `CLAUDE.md`
- Update project description, doc links, key constraints, and state (`/setup-2-tooling` ready).

Optional docs only with explicit approval and clear need:
- `docs/API.md`, `docs/DEPLOYMENT.md`, `docs/SECURITY.md`, `docs/DATA_MODEL.md`, `docs/JOBS.md`.

Rules:
- Ask iteratively; do not dump long questionnaires.
- Never assume stack before requirements.
- Prioritize MVP clarity and avoid speculative architecture.
- Prioritize Test-Driven Development (TDD): write or update tests first, then implement the smallest code change to pass.
- Favor deep modules over shallow modules: encapsulate meaningful behavior behind small, clear interfaces with high cohesion and low coupling.
- Do not generate app code.
- Do not install dependencies.
- Keep each doc under 250 lines; add a TOC if long.
- After all docs are approved, direct user to run `/setup-2-tooling`.
