---
name: project-setup
description: "Start the project scoping conversation. Asks iterative questions to understand the user's idea, then generates all project documentation (PRD, tech stack, constraints, timeline). Use this as the first step when setting up a new project."
disable-model-invocation: true
allowed-tools: Read Write Bash(git *)
---

# Project Setup — Scoping Conversation

You are helping a user define their project from scratch. They may have a vague idea or a clear vision. Your job is to ask the right questions until you have enough information to generate complete project documentation.

## How This Works

1. Start a conversation to understand the user's project idea
2. Ask iterative questions until all key areas are covered
3. Generate all documentation in the correct order
4. Request human review of every document

## Conversation Flow

### Opening
Greet the user and ask them to describe their project idea in their own words. Keep it casual — they might not know technical terms. Ask something like:
- "What are you trying to build?"
- "What problem does this solve?"
- "Who would use this?"
- "Is this project for local use only, or do you plan to deploy it for other users?"
- "What is your technical level with this stack (beginner, intermediate, advanced)?"

Use the technical level answer to adapt all follow-up questions:
- Beginner: simpler wording, fewer options, more concrete examples
- Intermediate: balanced depth and trade-offs
- Advanced: concise questions, deeper architectural trade-offs

### Iterative Questioning
Ask questions one or two at a time. Do NOT dump a list of 10 questions. Cover these areas naturally through conversation:

**Problem & Vision**
- What problem does this solve?
- Why does this need to exist? What's the alternative today?
- What does success look like?

**Users**
- Who is the primary user?
- What's their technical level?
- How will they discover and access this?

**Core Features**
- What are the 3-5 must-have features for a first version?
- What's explicitly NOT in v1?
- What's the simplest version that would be useful?
- What can be postponed to v2+ to avoid over-engineering?

**User Flows**
- Walk me through the main thing a user does
- Are there different user roles?
- What happens on first use vs. returning use?

**Data & Integrations**
- What data does this need to store?
- Does it integrate with any external services?
- Are there auth requirements?

**Monetization** (if relevant)
- Is this a paid product? How?
- Are there free/paid tiers?

**Constraints**
- Any hard requirements? (platform, language, hosting)
- Any budget constraints?
- Timeline expectations?
- Local-only or deployment target (Vercel, Docker, on-prem, etc.)?

### When to Stop Asking
Stop when:
- The user says "that's enough" or "let's move on"
- All key areas above are covered
- You have enough to write a complete PRD
- You can clearly define an MVP without speculative systems

Tell the user: "I think I have enough to generate your project docs. Let me write them up for your review."

## Document Generation Order

Generate documents in this exact order. Each document builds on the previous one.

### 1. docs/PRD.md
Write the full Product Requirements Document based on the conversation. Include:
- Problem statement
- Target users
- Core features (MVP)
- User stories
- Success criteria
- Out of scope
- Monetization (if applicable)
- Open questions

### 2. docs/TECH_STACK.md
Based on the PRD requirements, **propose** a tech stack. Explain your reasoning. Consider:
- User's technical level and preferences (if mentioned)
- Project requirements (real-time? heavy data? mobile?)
- Simplicity — prefer established, well-documented tools
- Deployment simplicity

Present your recommendation and **ask the user to confirm or adjust** before proceeding.

### 3. docs/CONSTRAINTS.md
Based on the confirmed tech stack, generate specific coding constraints:
- File structure conventions for the chosen framework
- Naming conventions
- Architecture patterns
- Testing requirements
- Code style rules
- Security guidelines
- Git conventions

### 4. docs/TIMELINE.md
Based on the PRD and tech stack, create a phased timeline:
- Phase 0: Documentation & planning (already done)
- Phase 1: Project setup & dependency installation
- Phase 2+: Feature development (one phase per logical feature group)

Each phase should include: scope, milestones, dependencies, acceptance criteria.
Phases should be ordered by dependency and sized for one work session.

### 5. docs/README.md
Generate a table of contents linking all docs with one-line summaries.

### 6. CLAUDE.md
Update CLAUDE.md to reflect the actual project:
- Project name and description
- Links to all docs
- Key constraints and rules
- Current state (ready for `/setup-tooling`)

### 7. Optional Additional Docs (only if clearly needed)
Claude can generate extra, project-specific docs when they provide clear value. Examples:
- `docs/API.md` for API-heavy backends
- `docs/DEPLOYMENT.md` for deployment/infrastructure-specific projects
- `docs/SECURITY.md` for auth/compliance-heavy apps
- `docs/DATA_MODEL.md` for data-intensive products
- `docs/JOBS.md` for queue/worker/job-based systems

Rules for optional docs:
- Do NOT create them by default.
- Propose them briefly with a clear reason tied to project needs.
- Ask for explicit user approval before generating each extra doc.

## Critical Rules

- **Ask questions iteratively**, not all at once
- **Never assume a tech stack** — derive it from requirements
- **Start by scoping user technical level and local vs deploy intent**
- **Prioritize MVP clarity** — avoid speculative architecture
- **Show each document to the user** and ask for confirmation before moving to the next
- **Do not skip review** — every document requires explicit user approval
- **Do not generate application code** — this is documentation only
- **Do not install anything** — that happens in later steps
- After all docs are approved, tell the user to run `/setup-tooling` next
