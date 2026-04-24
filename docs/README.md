# {{PROJECT_NAME}} — Documentation Index

> This is the single source of truth for all project documentation.
> Before creating or modifying any `/docs/` file, read this index.

---

## Index

| File | Covers | Status |
|---|---|---|
| `CONSTRAINTS.md` | Code style, naming, error handling, file structure | Active |
| `TECH_STACK.md` | Approved technologies, versions, dependencies, tooling choices | Active |
| `PRD.md` | Product requirements, scope, UX goals, acceptance criteria | Active |
| `TIMELINE.md` | Development phases, milestones, task ordering | Active |

---

## Rules (enforced by hook)

Every time a file in `/docs/` is created or modified:

1. Is this topic already covered in an existing file? → Add there, don't create new
2. Is the new file listed in this README? → Add it before committing
3. Does this file exceed ~150 lines? → Add a table of contents at the top
4. Is this README still under 200 lines? → Keep it an index, not a content file
