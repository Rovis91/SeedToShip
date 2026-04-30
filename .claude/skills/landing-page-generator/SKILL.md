---
name: landing-page-generator
description: Generate high-conversion, visually refined landing pages with minimal text and strong hierarchy. Use this skill whenever the user asks to build, design, draft, or rewrite a landing page, marketing page, product page, hero section, "above the fold," sales page, waitlist page, app launch page, SaaS homepage, or any standalone conversion-focused web page — even if they say "site," "single page," "promo page," or just hand over a product description and ask for a page. Works tech-agnostic (HTML, React, Next.js, Astro, Vue, plain CSS, Tailwind, existing component libraries) and adapts to existing themes/design systems or generates a new one when none is provided. Produces both copy and design, calls the frontend-design skill for implementation.
---

# Landing Page Generator

Produces landing pages that **convert** — not pages that look nice and say nothing. The skill extracts signal, makes decisive choices, runs hard quality gates before any code is generated, and hands frontend-design a brief tight enough that the page ships.

The two failure modes to prevent are:

- **Slop** — generic purple-on-white, "Empower your workflow," generic feature cards, AI-generated visual signature.
- **Soup** — every possible section included, no hierarchy, three competing CTAs, copy that explains everything and sells nothing.

The cure: fewer sections, sharper copy, decisive aesthetic, and **gated quality checks the model cannot skip**.

---

## Workflow (8 steps, gates are hard)

```
1. Intake          → extract signal from inputs
2. Clarify         → block on 2 non-negotiables, batch the rest
3. Decide structure → ordered section list, default = 5
4. Write copy      → hero pitch first, against formula
5. Decide design   → adopt or generate, anti-slop checklist
6. Critique pass   → external-reviewer self-grading (HARD GATE)
7. Brief & build   → handoff to frontend-design
8. Deliver         → code + rationale + proof gap callout if needed
```

Hard gates fail loudly. If a gate fails, **do not proceed** — fix the failure first.

---

## Step 1 — Intake

Read everything provided (PDF, doc, URL, paste, repo). Extract this signal map:

| Signal | What to find |
|---|---|
| **Offer** | Product, service, lead magnet, waitlist? |
| **ICP** | Role, company size, sophistication level, jargon they use |
| **Outcome** | What changes in the buyer's life/work after using it? |
| **Proof** | Logos, metrics, testimonials, case studies, press, founder credentials |
| **Differentiator** | Why this vs alternatives — specifics, not "faster" |
| **Stack** | React/Next/Astro/Vue/HTML, Tailwind/CSS-in-JS, existing component lib |
| **Theme** | Existing brand colors, fonts, logo, design tokens, component library, screenshots |
| **Goal** | One conversion goal — trial, demo, waitlist, purchase, contact |
| **Assets reality** | Real screenshots / video / GIFs available? Or all placeholder? |

If the user attached a structure or framework doc, treat it as the **structural source of truth** — don't override their preferred section order without reason.

## Step 2 — Clarify

**Two non-negotiables. The skill does not proceed without these:**

1. **Single conversion goal** — one CTA only. Trial, demo, waitlist, purchase, or contact.
2. **ICP in one sentence** — role + company stage/size + relevant context. "Founders" is not enough. "Solo founders shipping their first SaaS" is.

If either is missing or vague, ask before going further. No defaulting on these — they are the page's foundation.

**Batch the rest** (ask in one message, only what's missing):

- Tone (authoritative / playful / technical / premium / scrappy)
- Existing brand colors, logo, fonts, component library — or "no theme, propose one"
- Tech stack target
- Real proof available (named testimonials? metrics? logos?)
- Asset reality check: which visuals are real, which need placeholders?

Use `ask_user_input_v0` when answers fit small option sets; plain text otherwise.

**Cap: ~5 questions total.** If the user answered "just ship something," still confirm the two non-negotiables, then proceed with confident defaults for everything else, labeling assumptions inline.

## Step 3 — Decide structure

Load `references/conversion-framework.md` for full section rules.

**Required (every page):**
- Hero (one CTA)
- Social proof strip (substitute if thin — see below)
- Problem/pain snapshot (skip only for already-aware audiences like devs viewing dev tools)
- How it works **OR** Features-as-benefits (decision rule below)
- Final CTA strip

**How-it-works vs. Features decision rule:**
- If the **mechanism** is non-obvious (the buyer can't picture how it works in 2 seconds) → **How it works.**
- If the mechanism is obvious but **value-per-feature varies** (different buyers care about different features) → **Features-as-benefits.**
- If both are true → include both, but only when the product genuinely needs it. Default to one.

**Conditional additions:**
| Section | Include only when |
|---|---|
| Testimonials block | ≥2 named, specific, outcome-driven quotes available |
| Pricing snapshot | Self-serve, transparent pricing, B2C or low-touch B2B |
| FAQ | Real objections exist (security, integration, fit, contract length) |
| Logo bar | ≥4 recognizable customer logos |

**Default = 5 sections.** Adding sections taxes attention. Each addition needs a reason. If unsure, cut.

**Output of this step:** ordered section list with one-line rationale per section. If the page deviates from a standard 5-section flow, surface this list to the user before writing copy.

## Step 4 — Write copy

Load `references/copy-rules.md` for full ruleset (banned words, tone-by-audience, length budgets, FAQ patterns).

### Hero pitch — write this first, before anything else

**Formula:**
> [Outcome verb] [specific result] for [specific audience], [unique mechanism / without-tradeoff].

**Examples (study these — they are the highest-leverage copy in the page):**

| ❌ Bad | Why it fails | ✅ Good |
|---|---|---|
| "Empower your team with AI-driven workflow automation." | Generic, feature-led, no audience, swappable for any tool | "Close support tickets 3× faster — for fintech support teams who can't hire more agents." |
| "The future of project management." | Empty claim, no outcome, no audience | "Ship product specs in a day, not a week — built for two-pizza engineering teams." |
| "Transform how your business operates." | Vague, business-generic | "Cut your monthly close from 10 days to 2 — for finance teams at 50–500 person SaaS companies." |
| "The all-in-one platform for modern marketers." | "All-in-one" is a confession, not a benefit | "Run a full campaign — email, ads, landing pages — without switching tools, for solo founders." |

**Sub-headline formula:**
> [What it literally is], [for whom], [the mechanism in one phrase].

The headline sells the *outcome*. The subhead names the *thing* and the *how*.

### CTA copy

- Describes the outcome of clicking, never the action.
- Hero CTA and final CTA say the **same thing**, same color, same destination.
- Library: "Start free 14-day trial" / "Book a 20-min demo" / "Get early access" / "Get the playbook" / "Talk to sales."

### Body copy — execution rules

- Second person ("you")
- Cut every adjective that isn't doing real work
- Replace generic claims with metrics, names, or concrete examples
- One idea per sentence, max 3 lines per paragraph
- Total word count: **300–500 words** for standard SaaS, **80–150** for waitlist, **500–700** for enterprise

### Thin-proof handling

If after intake the proof is thin (no testimonials, no logos, no metrics), still build the best page possible. Substitute social proof in this priority order:

1. Founder credentials ("Built by ex-Stripe engineers")
2. Press / community signals (GitHub stars, Hacker News, Product Hunt)
3. Beta numbers ("In private beta with 40 teams")
4. Honest under-promising ("New — be one of the first 100")

**Never fabricate testimonials, customer names, or metrics.**

If proof is thin, make a note for Step 8 — the deliverable will end with a recommendation to develop concrete proof.

### FAQ

If FAQ section is included, load `references/objection-library.md` and pick 4–6 real objections. Order them: setup/onboarding early (momentum builder), trust mid, **price last** (the final wall).

## Step 5 — Decide design system

Load `references/design-systems.md` for theme adoption rules, palette construction, anti-slop list, and tokens output format.

**Decision:**
- **Existing theme provided** → adopt exactly. Don't "improve" the brand.
- **No theme** → generate. Pick one aesthetic direction tied to audience + tone, then derive palette / fonts / radius / shadow / signature element from that direction.

**Variation rule:** do not converge on the same fonts and palette across projects. Each generation should derive its choices from the specific aesthetic direction picked for *this* product. If a previous project used Editorial New + Söhne, a different one should not — pick fonts that fit the new aesthetic, not the comfortable ones.

**Output of this step:** a complete design tokens block (CSS variables) ready to hand to frontend-design.

## Step 6 — Critique pass (HARD GATE)

Before any code is generated, run this critique pass. **Frame: imagine you are an external conversion consultant reviewing a junior designer's draft. Be merciless.**

Run every check below. Each one is pass/fail. **If any fails, fix it before proceeding to Step 7.** Do not negotiate with yourself.

### Copy gates

- [ ] **Hero swap test**: Replace the company name with a generic competitor's. Does the sentence still make sense as theirs? → If yes, FAIL. The hero is too generic.
- [ ] **Banned-word scan**: Page contains no instance of *empower, unlock, leverage, seamlessly, cutting-edge, state-of-the-art, best-in-class, world-class, revolutionize, transform, all-in-one, one-stop-shop, solutions (alone), powerful, easy, simple* — unless followed by specifics that earn the word.
- [ ] **Specificity check**: Every claim has a number, a name, or a concrete example. No floating adjectives.
- [ ] **CTA consistency**: Hero CTA label matches final CTA label exactly.
- [ ] **Word count**: Count all visible page copy. Within budget for the page type? (300–500 SaaS, 80–150 waitlist, 500–700 enterprise.)
- [ ] **One conversion goal**: Page has exactly one primary CTA repeated. No competing primary CTAs.

### Design gates

- [ ] **No purple→pink gradient on white background.**
- [ ] **No indigo-on-slate "default AI tool" palette.**
- [ ] **Headline font is not** Inter, Roboto, Arial, or system-ui.
- [ ] **One dominant color**, not 5 colors at equal weight.
- [ ] **Signature element present** — one specific memorable visual move (texture, accent shape, type treatment, asymmetric layout, micro-interaction, custom cursor, etc.).
- [ ] **Mobile fold check**: hero, subhead, CTA, and one trust cue all fit a 375×667px viewport.
- [ ] **Tap targets ≥44×44px**, body text ≥16px.

### Asset gates

- [ ] **Every visual is either real or marked as a placeholder** with a clear spec for what should replace it. No phantom screenshots.

### Structural gates

- [ ] **Section count justified**: every section earns its slot per Step 3 rules.
- [ ] **Cut-priority verified**: if any section is borderline, cut it.

**If all gates pass → proceed to Step 7.**
**If any gate fails → fix the specific failure, re-run only the affected gates, then proceed.**

This pass is not optional. It is what separates this skill's output from the slop baseline.

## Step 7 — Brief & build

Before invoking frontend-design, `view` `/mnt/skills/public/frontend-design/SKILL.md` to apply environment-specific constraints.

Hand off this exact brief structure (do not paraphrase — the brief *is* the contract):

```markdown
# Landing page implementation brief

## Product context
- Offer: [one line]
- Audience: [one line]
- Conversion goal: [one CTA — exact label]

## Design direction
- Aesthetic: [e.g. "editorial-minimal with industrial accents"]
- Palette: [hex codes with role: dominant / accent / neutrals]
- Typography: [display font + body font + sizes]
- Spacing scale: [base unit]
- Radius / shadow / border style: [tokens]
- Signature element: [the one memorable thing]

## Sections in order
1. Hero
   - Headline: "[exact copy]"
   - Subhead: "[exact copy]"
   - CTA: "[label]" → [destination]
   - Visual: [real screenshot at PATH] OR [placeholder: spec for what it should show]
2. [next section...]

## Animations
- Page load: [what animates, when, in what order]
- Scroll: [reveal pattern, threshold]
- Hover: [CTA behavior, card behavior]
- Constraints: respect prefers-reduced-motion, no autoplay sound

## Tech constraints
- Stack: [React/HTML/Astro/etc.]
- Component library: [if any — use it, don't recreate]
- Mobile-first, 375px → scale up
- Performance: lazy-load below fold, compress images, sub-2.5s LCP target
- Accessibility: contrast ≥4.5:1 body / ≥3:1 large text, focus states, tap targets ≥44×44px

## Meta
- Page title: [≤60 chars]
- Meta description: [≤155 chars, repeats value prop]
- OG image: [spec or placeholder]

## Placeholders to fill
- [explicit list of every asset the user must provide]
```

## Step 8 — Deliver

Final response, in this order:

1. **The page code** (from frontend-design output) — single file when feasible.
2. **A short rationale** (≤10 bullets) — section choices, copy angle, design direction, key assumptions.
3. **Placeholders to fill** — list every asset, real testimonial, real metric the user needs to substitute.
4. **Proof gap callout** (if proof was thin at intake): a short, direct recommendation on what proof to develop next — typically 1–3 concrete moves (e.g., "Get 3 named testimonials from beta users this week," "Add a metric to the hero once you've measured it," "Replace the founder-credential line with a customer logo bar once you have 4 logos").
5. **Two or three iteration prompts** — common next moves the user might want.

No apologies, no "let me know if you'd like changes." The user knows.

---

## Adaptation patterns

**Existing site / redesign**: ask for the URL or screenshots; extract their tokens (or have user paste them); respect their identity. If they want a rebrand, they'll say so.

**Pre-launch / waitlist**: 3 sections only — hero with email capture, problem snapshot, social proof (or substitute). No pricing, no FAQ, no testimonials block. Word budget 80–150.

**Lead magnet / ebook**: hero + what's inside (3 bullets) + author credibility + form. Skip the rest.

**Enterprise / high-touch B2B**: replace pricing with "Talk to sales." Add security/compliance line near CTA. Testimonials must be from named decision-makers at recognizable companies, or skip the section.

**Consumer product**: visual hero (product shot or video), shorter copy, emotional outcome language, prominent pricing, reviews/ratings as social proof.

**Developer tool**: code snippet in or near hero, GitHub stars as proof, technical specifics in features (not vague benefits), docs/install as a secondary CTA, no problem snapshot if audience is already aware.

---

## What this skill explicitly does NOT do

- Multi-page sites (single-page only)
- Backend / forms wiring (the page captures email or links to checkout — integration is the user's call)
- A/B test setup or analytics instrumentation
- Full brand identity from scratch — only what's needed for *this* page

---

## Reference files

Load only when the workflow reaches the relevant step. Do not load all upfront.

- `references/conversion-framework.md` — section structure, mobile-first specs, what each section must contain (Step 3)
- `references/copy-rules.md` — banned words, tone-by-audience, length budgets, body copy patterns (Step 4)
- `references/design-systems.md` — theme adoption, palette construction, anti-slop, tokens output format (Step 5)
- `references/objection-library.md` — universal objections by category, how to dismantle each (Step 4 if FAQ included)