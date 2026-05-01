---
name: landing-page-generator
description: Generates high-conversion, visual-first landing pages.
---

# Landing Page Generator

Produces landing pages that **convert** — visual-first, lean copy, theme-respectful.

## The six rules (the whole skill in one place)

1. **Show, don't tell.** People don't read. Every section earns its space with a visual or interaction. Copy supports the visual, not the other way around.
2. **Lean is the default.** Hero is one sentence + one CTA. Subhead is optional. If a section needs a paragraph to justify itself, cut it.
3. **Adapt to the project's stack and tokens.** Use what the project already has — components, design tokens, fonts, spacing. Custom code is for what the system can't express. Never hardcode hex when semantic tokens exist.
4. **A clear offer is the money-maker.** What is sold, to whom, for what outcome, in exchange for what action. If any of those four are blurry, the page can't convert. Sharpen the offer before writing anything.
5. **Conversion is the only goal.** Every section, visual, word, and animation either moves the visitor toward the CTA or competes with it. There is no third option.
6. **Mobile-first.** Design for 375px first. Most visitors arrive on a phone; the page is judged there.

The two failure modes to prevent: **text-block slop** (hero with three lines of copy, every section padded with explanation) and **theme override** (hardcoding values when the project has tokens).

---

## Workflow (5 steps)

```
1. Detect stack & tokens   → use what exists
2. Sharpen offer + intake  → 4 non-negotiables, batched questions
3. Outline + gate          → sections, visual plan, ONE critique pass
4. Write copy lean         → hero first, then the rest
5. Brief & build           → handoff to frontend-design, deliver
```

---

## Step 1 — Detect stack & tokens

Before asking about content, determine the design system context. Inspect the project (file tree, configs, existing pages) and identify, in order:

1. **Component library** (shadcn/ui, Material, Chakra, Mantine, Radix, etc.) → use its primitives.
2. **Utility framework** (Tailwind config, Open Props, etc.) → use its semantic classes and tokens.
3. **Existing CSS variables** in files like `globals.css`, `theme.css`, `app.css` → reference them in the project's pattern (`hsl(var(--primary))`, `var(--color-bg)`, etc.).
4. **None of the above** → a new system will be generated in Step 3 per `references/design-principles.md`.

If extra CSS is unavoidable for landing-specific elements, put it in a separate `landing.css` rather than polluting the shared theme.

If unsure whether a theme exists, ask once: *"Are you using a component library or design tokens? (shadcn / Tailwind config / Material / custom CSS vars / none)"* — one question, then proceed.

**Important:** detecting an existing theme decides which *tokens and components* to use — it does not skip design judgment. Hierarchy, atmosphere, signature element, motion posture, and the custom-vs-stock split are page-level decisions made in Step 3 regardless of whether a theme exists.

## Step 2 — Sharpen the offer + intake

A clear offer is the money-maker. Before any structure or copy, the offer must answer **all four**:

- **What** is being sold or given (product, trial, lead magnet, waitlist spot)
- **To whom** (ICP in one sentence — role + stage + relevant context, not "founders")
- **For what outcome** (the specific change in the buyer's life or work)
- **In exchange for what** (one conversion goal — trial / demo / waitlist / purchase / contact)

If any of the four is blurry, ask. If proof exists (testimonials, metrics, logos, founder credentials), surface it now. If proof is thin, note it for Step 5.

Batch the rest in one message, only what's missing: tone, asset reality (which visuals are real vs. placeholder), tech-stack confirmation if unclear from Step 1.

Cap: ~5 questions total. If the user said "just ship," still confirm the four offer elements, then proceed with confident defaults and label assumptions inline.

## Step 3 — Outline + critique gate

Build the page **as a structural outline**, not draft copy. Then run the gate. **Failures here mean restructure, not patch.**

Load `references/design-principles.md` at the start of this step. It applies to every project — theme-respectful or from-scratch. The principles shape the page's hierarchy, atmosphere, motion posture, signature element, and custom-vs-stock split. The detected theme (Step 1) decides which tokens and components to use; the principles decide how to compose them into a page that converts.

### Section selection

Default to **5 sections**. Each addition taxes attention.

**Required:** Hero · Social proof (real or substituted) · One of {How it works, Features-as-benefits} · Final CTA

**Conditional:** Problem snapshot (cold traffic only) · Testimonials block (≥2 named, specific quotes) · Pricing (self-serve, transparent) · FAQ (real objections only)

**How-it-works vs. Features:** mechanism non-obvious → How it works; mechanism obvious but value-per-feature varies → Features. If both apply, pick one and default leaner.

For full section specs, mobile-first specs, and cut-priority order: `references/conversion-framework.md`.

### Visual-first plan

For every section, decide what the visual carries before writing any copy:

| Section | Visual carries | Copy supports |
|---|---|---|
| Hero | Product screenshot / video / animated mock | One sentence + CTA |
| Social proof | Logos, ratings, metrics | Optional one-line context |
| Problem | Visual contrast (before/after, broken UI mock, illustration) | 2 sentences max |
| How it works | 3 distinct visuals, one per step | Verb-led title + 1 sentence per step |
| Features | Icon or micro-screenshot per card | Outcome headline + 1 line |
| Testimonials | Avatar + logo | Quote with metric |
| Pricing | Tier hierarchy (recommended elevated) | 3–5 outcome bullets |
| FAQ | None — accordion behavior + whitespace | Tight Q/A |
| Final CTA | Subtle background or accent | Restate outcome + button |

If a section has no visual plan beyond "icon," it's underdeveloped. Add a real visual or cut.

### The gate (one pass, all checks pass/fail)

- [ ] **Offer is sharp** — all four elements (what / whom / outcome / exchange) clear in one sentence each.
- [ ] **Hero is one sentence.** Subhead is opt-in, not a default field.
- [ ] **Every section has a real visual plan**, not a placeholder icon.
- [ ] **Show > tell ratio** — at least 4 of the chosen sections lead with a visual, not text.
- [ ] **Section count justified** — each one earns its slot.
- [ ] **Theme decision made** — using existing tokens or explicitly generating new.
- [ ] **Asset reality checked** — every visual is real or marked as a placeholder spec.
- [ ] **Single CTA throughout** — same label and destination, hero → final.
- [ ] **Mobile layout specified per section** — not "responsive" as a vague goal. Every grid collapses to single column at <640px.

If any fail, fix the outline. Don't proceed with a broken foundation.

## Step 4 — Write copy (lean pass)

Load `references/copy-rules.md` for banned words, body patterns, length budgets.

### Hero — the one sentence

**Formula:** [Outcome verb] [specific result] for [specific audience], [unique mechanism / without-tradeoff].

**Tests before keeping a hero:**
- Swap the company name for a competitor's. Does it still describe theirs? → Too generic, rewrite.
- Read it out loud. Does it snag? → Rewrite.
- Two sentences? → Cut one.

**Examples:**

| ❌ Bad | ✅ Good |
|---|---|
| "Empower your team with AI-driven workflow automation that revolutionizes how modern businesses operate." | "Close support tickets 3× faster." |
| "The future of project management. Beautifully designed for high-performance teams that want to ship faster." | "Ship product specs in a day, not a week." |
| "Transform how your business operates with our cutting-edge platform." | "Cut your monthly close from 10 days to 2." |

### Body, CTA, FAQ

Body copy: second person, one idea per sentence, ≤3 lines per paragraph, replace adjectives with specifics. CTA: outcome label, same hero → final. FAQ (if included): load `references/objection-library.md`, pick 4–6, order setup early → trust mid → **price last**.

### Thin proof

If proof is thin, never fabricate. Substitute in priority order: founder credentials → press/community signals (GitHub stars, HN, Product Hunt) → beta numbers → honest under-promising. Note it for Step 5 — the deliverable will end with a proof-gap callout.

## Step 5 — Brief, build, deliver

Before invoking frontend-design, `view` `/mnt/skills/public/frontend-design/SKILL.md` for environment-specific constraints.

### Brief content (not template)

The brief hands frontend-design these fields, in this order. Format flexibly; the *content* is what matters.

- **Product context** — offer, audience, conversion goal (exact CTA label).
- **Theme handoff** — name the system in use (shadcn / Tailwind config / Material / custom CSS vars / new). If existing: list the tokens and components to use, forbid hex hardcoding and CSS variable regeneration. If new: the system was designed in Step 3 per the principles file; describe its tokens. Never output framework-specific code blocks here — frontend-design owns the implementation choice.
- **Design intent** — aesthetic direction, typographic posture, color posture, spatial posture, atmospheric posture, motion posture, signature element, custom-vs-stock split. Per `references/design-principles.md`. **These fields apply equally whether the project has a theme or not** — the theme gives you primitives, the design intent shapes the page.
- **Sections in order** — for each: visual (real path or specific placeholder spec, not "screenshot"), exact copy, layout posture, per-section animation if any.
- **Mobile layout** — per `references/conversion-framework.md` mobile specs. Verify each grid collapses to single column at <640px.
- **Global animation** — page-load orchestration order, scroll-reveal threshold, CTA reward. Respect `prefers-reduced-motion`. No autoplay with sound.
- **Tech constraints** — stack, component library, performance target (LCP <2.5s on mobile), accessibility (contrast ≥4.5:1 body, focus states, alt text, semantic HTML).
- **Meta** — page title (≤60 chars), description (≤155 chars), OG image spec or placeholder.
- **Placeholders to fill** — explicit list.

### Pre-handoff scan

One last scan, focused only on what could still slip past:

- **Banned words** — per `copy-rules.md`. No instance unless followed by specifics that earn it.
- **Word count within budget** for the page type — count, don't estimate.
- **Anti-slop** — no convergent AI defaults (purple→pink on white, generic system fonts as headline unless the existing theme uses them, six identical gradient-icon feature cards).

If any fail, fix before invoking frontend-design.

### Deliver

1. The page code (from frontend-design), using project components and tokens.
2. Short rationale (≤8 bullets): theme decision, section choices, hero angle, key assumptions.
3. Placeholders to fill — explicit list.
4. Proof-gap callout if proof was thin: 1–3 concrete moves to develop proof in the next 7 days.
5. 2–3 iteration prompts for common next moves.

No apologies, no "let me know if you'd like changes."

---

## Adaptation patterns

| Page type | Adjustment |
|---|---|
| **Pre-launch / waitlist** | 3 sections only (hero + email capture, problem, social proof). Word budget 60–120. |
| **Lead magnet** | Hero + what's inside (3 bullets) + author credibility + form. |
| **Enterprise / high-touch B2B** | Replace pricing with "Talk to sales." Security/compliance line near CTA. Testimonials only if from named decision-makers. |
| **Consumer** | Visual hero, shorter copy, emotional outcome, prominent pricing, reviews/ratings as proof. |
| **Developer tool** | Code snippet near hero, GitHub stars as proof, technical specifics in features, docs/install as secondary CTA. Skip problem snapshot if audience is already aware. |
| **Existing-site redesign** | Run Step 1 harder — `web_fetch` the site, extract tokens, respect identity unless a rebrand was requested. |

Out of scope: multi-page sites, backend/forms wiring, analytics, full brand identity from scratch.