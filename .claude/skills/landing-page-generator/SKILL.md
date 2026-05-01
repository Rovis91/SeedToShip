---
name: landing-page-generator
description: Generates high-conversion, visual-first landing pages.
---

# Landing Page Generator

Builds landing pages that **convert** by putting the visitor — not the product — at the center.

## The six rules

1. **Show, don't tell.** People don't read, they scan. Every section earns its space with something that *shows*: a screenshot, a short video, a diagram, an animated demo, a chart, a comparison, a live interaction. Words are the caption, not the content. If a section is mostly text, it's not done.
2. **Speak their language.** Use the vocabulary of the visitor's niche, not your product's internal jargon. The page should sound like it was written by someone in their world — competitor names, daily frustrations, specific tools they use, the words they'd actually say.
3. **Frustration → Result → Value.** Every page tells the same story across its sections: name the visitor's frustration, show the result they want, then prove your value can deliver it. This narrative spine is non-negotiable.
4. **Lean is the default.** Hero ≤10 words. Subhead ≤1 sentence. Body copy: every word costs attention — spend it on the visitor, not on your product. If you're explaining how it works internally, you're losing them.
5. **Adapt to the project's stack and tokens.** Use what the project already has — components, design tokens, fonts. Custom code is for what the system can't express. Never hardcode hex when semantic tokens exist.
6. **Mobile-first.** Design for 375px first. The visitor opens this on a phone, gets 2 seconds, and decides whether to scroll. The value must land in those 2 seconds.

The two failure modes to prevent: **text-block slop** (paragraphs where visuals belong) and **theme override** (hardcoding values when the project has tokens).

---

## Workflow (5 steps)

```
1. Detect stack & tokens   → use what exists
2. Sharpen offer + ICP     → 4 non-negotiables, infer their vocabulary
3. Outline + gate          → narrative spine, visual budget per section
4. Write copy lean         → in their words, not yours
5. Brief & build           → handoff to frontend-design, deliver
```

---

## Step 1 — Detect stack & tokens

Inspect the project (file tree, configs, existing pages). Identify in order:

1. **Component library** (shadcn/ui, Material, Chakra, Mantine, Radix) → use its primitives.
2. **Utility framework** (Tailwind config, Open Props) → use its semantic classes.
3. **Existing CSS variables** (`globals.css`, `theme.css`) → reference them in the project's pattern.
4. **None** → a new system will be designed in Step 3 per `references/design-principles.md`.

Extra CSS for landing-specific elements goes in a separate `landing.css`. Never pollute the shared theme.

If unsure, ask once: *"Component library or design tokens in use?"* — one question, then proceed.

Theme detection decides which *tokens and components* to use. Hierarchy, atmosphere, motion, and signature element are page-level decisions made in Step 3, regardless of whether a theme exists.

## Step 2 — Sharpen the offer and the ICP

**The offer must answer four questions, sharply:**

- **What** is being sold or given (product, trial, lead magnet, waitlist spot)
- **To whom** — ICP in one sentence: role + stage/size + relevant context. "Founders" is not enough; "solo technical founders preparing their first paid launch" is.
- **For what outcome** — the specific change in their work or life, in *their* words
- **In exchange for what** — one conversion goal (trial / demo / waitlist / purchase / contact)

If any of the four is blurry, ask. A vague offer cannot be saved by good copy.

### Infer the visitor's vocabulary

From the ICP, infer how this audience actually talks: the tools they compare against, the daily frustrations they name out loud, the words they'd use for the outcome (not the words *you'd* use). Capture 5–10 specific phrases or terms — verbs, pain words, tool names, outcome metrics — that come from *their* world.

Use these phrases in the copy. If the ICP is "Series A B2B founders," they say "PMF," "ARR," "burn," not "scale your business." If it's "indie hackers," they say "ship," "launch," "first dollar," not "go-to-market." If it's "ops leads at 200-person SaaS," they say specific tool names (Notion, Linear, Slack) and specific frictions ("3 tools to find one answer"). The skill *must* surface and apply this vocabulary — generic SaaS-speak is the failure.

If the ICP's vocabulary is genuinely unclear and inferring would be guesswork, ask the user: *"Give me 3 sentences your ICP would say about this problem in their own words."*

### Batch what's still missing (one message)

Tone, real proof available (named testimonials, metrics, logos, founder credentials), what visuals exist for the product (screenshots, video, demo URL, none yet). Cap: ~5 questions total.

If the user said "just ship," still confirm the four offer elements and the ICP, then proceed with confident inferred vocabulary, labeling assumptions inline.

## Step 3 — Outline + gate

Build the page **as a structural outline**, not draft copy. Then run the gate. Failures here mean restructure, not patch.

### The narrative spine: Frustration → Result → Value

Every page tells this story across its sections. Map each section to which beat it serves:

- **Frustration** — the visitor recognizes their own pain. Hero (named outcome implies frustration), Problem snapshot, opening line of How-it-works.
- **Result** — what success looks like, shown not told. Hero visual, social proof metrics, testimonials, before/after.
- **Value** — why this solution delivers, specifically. How-it-works, Features-as-benefits, differentiation moments.

The hero alone often carries the full arc in compressed form: outcome (result) implies frustration, mechanism implies value. Verify the spine flows top to bottom — if a section breaks the arc, it doesn't belong.

### Section selection

Default to **5 sections**. Each addition taxes attention.

**Required:** Hero · Social proof · One of {How it works, Features-as-benefits} · Final CTA

**Conditional:** Problem snapshot (cold traffic) · Testimonials (≥2 named, specific quotes) · Pricing (self-serve, transparent) · FAQ (real objections only)

**How-it-works vs. Features:** mechanism non-obvious → How it works; mechanism obvious, value-per-feature varies → Features. If both apply, pick one and default leaner.

For full section specs: `references/conversion-framework.md`. Load `references/design-principles.md` here — it shapes hierarchy, atmosphere, motion, and the custom-vs-stock split for *every* page, theme or no theme.

### Visual budget — Show, don't tell

Every section must have a real *show*, not just decoration. "Show" means anything that delivers meaning faster than text:

| Section | What "show" means here |
|---|---|
| Hero | Product moment in motion: short looped video, animated mock, interactive demo preview, scrolling product screen — not a static screenshot |
| Social proof | Real logos, real numbers in large type, animated counter, video testimonial thumbnail |
| Problem | Before/after split, broken-UI mock, frustration moment in motion, comparison visual |
| How it works | 3 distinct visuals (one per step) — short GIFs, screen recordings, diagrams. Never icons alone. |
| Features | Micro-screenshot or specific UI fragment per card — never abstract gradient icons |
| Testimonials | Avatar + logo + ideally a short video clip |
| Pricing | Visual hierarchy with the recommended tier elevated, ideally with motion |
| FAQ | Accordion with smooth motion; the interaction *is* the show |
| Final CTA | Atmospheric background, signature visual, motion that confirms intent on hover |

If a section's only visual is a static icon, it's underdeveloped — replace with something that moves, demonstrates, or contrasts.

### Movement is mandatory, not decorative

The page should feel alive. Every section needs at least one motion moment that serves clarity or rewards attention — a subtle scroll-triggered reveal, a live demo loop, a hover that confirms intent, a number that counts up, a logo bar that drifts. The page should never feel static.

This is a hand-off to frontend-design's discretion for the implementation (Framer Motion, Lottie, CSS animations, video, GIF — frontend-design picks the right tool), but the *intent* is non-negotiable: each section has a moment of life.

### The gate

- [ ] **Offer is sharp** — what / whom / outcome / exchange clear in one sentence each.
- [ ] **ICP vocabulary captured** — 5–10 specific phrases from their world, ready to use in copy.
- [ ] **Narrative spine intact** — each section maps to Frustration, Result, or Value.
- [ ] **Hero is ≤10 words** + ≤1-sentence subhead. No exception.
- [ ] **Show > tell ratio** — every chosen section leads with a real visual, not text.
- [ ] **Movement specified per section** — not "responsive" or "subtle animation" as vague goals.
- [ ] **Theme decision made** — using existing tokens or generating new.
- [ ] **Asset reality** — every visual is real (with a path) or marked as a specific placeholder.
- [ ] **Single CTA throughout** — same label and destination, hero → final.
- [ ] **Mobile fold** — at 375px, the visitor sees a clear value and a CTA in 2 seconds.
- [ ] **Would I buy this?** — read the outline as the visitor. Does it earn the click?

If any fail, fix the outline.

## Step 4 — Write copy (lean pass)

Load `references/copy-rules.md` for banned words, body patterns, length budgets.

### Hero — the sales pitch in two lines

**Headline: ≤10 words.** A clear sales sentence that delivers the value alone — not a feature, not a category, not a vague promise.

**Subhead: ≤1 sentence.** Adds the mechanism, the audience specificity, or the social proof. Exists by default, not as an afterthought.

**Examples:**

| ❌ Bad | ✅ Good |
|---|---|
| "Empower your team with AI-driven workflow automation that revolutionizes how modern businesses operate." | **Close support tickets 3× faster.** *Built for fintech support teams who can't hire fast enough.* |
| "The future of project management. Beautifully designed for high-performance teams." | **Ship product specs in a day, not a week.** *For two-pizza engineering teams.* |
| "Transform how your business operates with our cutting-edge platform." | **Cut your monthly close from 10 days to 2.** *Trusted by 300+ finance teams at Series B SaaS companies.* |

**Tests before keeping a hero:**
- Swap your company name for a competitor's — does the sentence still describe theirs? → Too generic.
- Read it on a phone — does the value land before they scroll? → If not, cut more.
- Is it a feature? → Rewrite as outcome.

### Body, CTA, FAQ

Body: second person, in their vocabulary, one idea per sentence, ≤3 lines per paragraph. Replace adjectives with specifics. Cut every word that doesn't earn its place.

CTA: outcome label, same hero → final. Friction-reducers earn their place ("free", "no credit card", "in 30 seconds") when true.

FAQ (if included): load `references/objection-library.md`, pick 4–6, order setup early → trust mid → **price last**.

### Thin proof

If proof is thin, never fabricate. Substitute in priority order: founder credentials → press/community signals (GitHub stars, HN, Product Hunt) → beta numbers → honest under-promising. Note for Step 5 — the deliverable ends with a proof-gap callout.

## Step 5 — Brief, build, deliver

Before invoking frontend-design, `view` `/mnt/skills/public/frontend-design/SKILL.md` for environment-specific constraints.

The brief hands frontend-design these fields. Format flexibly; content is what matters.

- **Visitor & offer** — ICP in one sentence, the offer (what / outcome / exchange), the conversion goal (exact CTA label), 5–10 niche-specific phrases captured from the visitor's vocabulary.
- **Theme** — existing system in use (name it, list tokens/components to use, forbid hex hardcoding) OR new system designed in Step 3. Never output framework-specific code blocks here — frontend-design owns the implementation.
- **Design intent** — aesthetic direction with a *verbal mood board* (e.g., "Stripe's restraint meets Linear's energy with Notion's playfulness"), typographic posture, color posture, spatial posture, atmospheric posture, motion posture, signature element, custom-vs-stock split. Per `references/design-principles.md`. Applies to themed and from-scratch projects equally.
- **Sections in order** — for each: the *show* (real path or specific placeholder spec — not "screenshot" but "looped 4s video of a ticket being resolved with a green checkmark"), exact copy in the visitor's vocabulary, layout posture, the specific motion moment.
- **Mobile layout** — per `references/conversion-framework.md`. At 375px, the value must land in 2 seconds. Every grid collapses to single column at <640px.
- **Animation direction** — page-load orchestration, scroll-reveal pattern, CTA reward, ambient motion that keeps the page alive. Implementation tools (Framer Motion, Lottie, CSS, video) at frontend-design's discretion. Respect `prefers-reduced-motion`. No autoplay with sound.
- **Tech constraints** — stack, component library, performance (LCP <2.5s on mobile), accessibility (contrast ≥4.5:1, focus states, alt text, semantic HTML).
- **Meta** — page title (≤60 chars), description (≤155 chars), OG image spec.
- **Placeholders to fill** — explicit list.

### Pre-handoff scan

- **Banned words** — per `copy-rules.md`. No instance unless followed by specifics that earn it.
- **Niche vocabulary present** — the copy uses the captured phrases, not generic SaaS-speak.
- **Word count within budget** — count, don't estimate.
- **Anti-slop** — no purple→pink on white, no generic system fonts as headline (unless the existing theme uses them), no six identical gradient-icon feature cards, no static-only sections.
- **Visitor test** — re-read as the visitor, on mobile. Would they scroll? Would they click?

If any fail, fix before invoking frontend-design.

### Deliver

1. **The page code** (from frontend-design), using project components and tokens.
2. **Short rationale** (≤8 bullets): theme decision, narrative angle, hero pitch, vocabulary choices, key assumptions.
3. **Placeholders to fill** — explicit list.
4. **Proof-gap callout** if proof was thin: 1–3 concrete moves to develop proof in 7 days.
5. **2–3 iteration prompts** for common next moves.

No apologies, no "let me know if you'd like changes."

---

## Adaptation patterns

| Page type | Adjustment |
|---|---|
| **Pre-launch / waitlist** | 3 sections (hero + email capture, frustration, social proof). Word budget 60–120. |
| **Lead magnet** | Hero + what's inside (3 bullets) + author credibility + form. |
| **Enterprise / high-touch B2B** | "Talk to sales" replaces pricing. Security/compliance line near CTA. Testimonials only if from named decision-makers. |
| **Consumer** | Visual-led hero, shorter copy, emotional outcome, prominent pricing, reviews/ratings as proof. |
| **Developer tool** | Code snippet near hero, GitHub stars as proof, technical specifics in features, docs/install as secondary CTA. Skip frustration snapshot if audience is already aware. |
| **Existing-site redesign** | Run Step 1 harder — `web_fetch` the site, extract tokens, respect identity unless rebrand requested. |

Out of scope: multi-page sites, backend/forms wiring, analytics, full brand identity from scratch.