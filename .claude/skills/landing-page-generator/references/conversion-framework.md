# Conversion Framework — Section Rules

Each section spec leads with the **visual**, not the copy. Copy supports the visual. If a section has nothing to show, it doesn't earn its place.

## Legend
- 🔵 Hook · 🟢 Trust · 🟣 Educate · 🟠 Convert

---

## 1. HERO 🔵 (required)

**Visual carries:** product screenshot, looped GIF, short muted video, or animated mock. The visual *is* the hero — copy supports it.

**Copy is minimal:**
- Headline: **one sentence**, ≤12 words
- Subhead: **optional**. Skip unless the headline can't carry both *what it is* and *the outcome* without becoming awkward.
- One primary CTA, outcome-labeled, thumb-reachable

**Layout (mobile, 375×667px):**
- Logo top-left (small)
- Headline below
- Subhead if present (one line)
- CTA — visible above fold without scroll
- Visual — appears above fold or immediately on first scroll
- One micro trust cue (logo strip, rating, or single metric)

**Rules:**
- Headline echoes the ad/email/referral promise (message match).
- Single primary CTA. Secondary link acceptable but visually subordinate.
- Visual shows the product or end state, not abstract art.
- Visual must not push the CTA below the fold.

---

## 2. SOCIAL PROOF STRIP 🟢 (required, even if minimal)

**Visual carries:** logos, star ratings, or a metric in large numerals.

**Copy is minimal:** one line of context maximum. Often zero.

**Acceptable forms:**
- Logo row (4–8 recognizable customers/partners)
- Headline metric ("Cut response time by 37% — average across 300 teams")
- Star rating + one-sentence testimonial (named + role)

**Rules:**
- Place directly under the hero — at least one cue visible without scrolling.
- Specifics > vague claims.
- Logos: 4–8 max.
- If proof is thin, substitute per SKILL.md Step 4 thin-proof handling. Never fabricate.

---

## 3. PROBLEM SNAPSHOT 🟣 (skip for already-aware audiences)

**Visual carries:** before/after contrast, broken UI mock, illustration showing the pain. Without a visual, this section becomes a paragraph — cut it.

**Copy is minimal:** 2 sentences OR 3 bullets. Not both.

**Rules:**
- Direct second person ("you"), specific pains.
- Concrete > abstract.
- Skip if audience is already aware (e.g., devs viewing dev tools).

---

## 4. HOW IT WORKS 🟣 (required if mechanism is non-obvious)

**Visual carries:** **3 distinct visuals**, one per step. Screenshots, GIFs, diagrams — not generic icons.

**Copy is minimal:** verb-led title + one sentence per step.

**Rules:**
- Vertical 3-step stack on mobile.
- If a step has only an icon and no real visual, the section is underdeveloped — either find a visual or use Features-as-benefits instead.
- Optional supporting demo video (30–120s, muted, user-controlled, never autoplay with sound).
- Lazy-load video below the fold.

---

## 5. FEATURES AS BENEFITS 🟠 (required if mechanism obvious but value-per-feature varies)

**Visual carries:** micro-screenshot, custom icon, or distinct illustration per card. Not the same generic gradient icon repeated 6 times.

**Copy is minimal:** outcome headline + 1 line per card.

**Rules:**
- 3–6 cards. More dilutes.
- Lead with the outcome ("Ship campaigns 3× faster"), then the mechanism.
- Single-column stacked cards on mobile.
- Consistent card structure.

---

## 6. TESTIMONIALS 🟢 (optional)

**Visual carries:** avatar + company logo per testimonial.

**Copy:** 2–3 testimonials, each with real name + role + company + specific outcome quote.

**Rules:**
- Specific wins beat generic praise.
- Testimonials whose author profile matches the visitor.
- Stack vertically on mobile.
- Skip if quotes are generic.

---

## 7. PRICING SNAPSHOT 🟠 (optional — for self-serve products)

**Visual carries:** tier hierarchy — recommended plan visually elevated.

**Copy:** 2–3 tiers, vertically stacked on mobile. Each: price + 3–5 outcome bullets + tier label.

**Rules:**
- Lead with the plan most visitors will pick, marked "Most popular."
- Bullets describe outcomes, not feature counts.
- Each tier has its own CTA.
- Risk reversal nearby ("14-day free trial," "No credit card").
- Enterprise: replace with "Talk to sales."

---

## 8. FAQ 🟠 (optional)

**Visual:** none — but accordion behavior matters. Compact and scannable.

**Copy:** 4–6 real Q/As. See `copy-rules.md` for FAQ writing pattern. See `objection-library.md` for category-by-category dismantling.

**Order:** setup early (momentum), trust mid, **price last** (the final wall).

---

## 9. FINAL CTA STRIP 🟠 (required)

**Visual carries:** subtle background treatment, accent visual, or product moment that reinforces the outcome.

**Copy:** restated outcome (one line) + CTA button + optional supporting metric.

**Rules:**
- Same CTA label and destination as hero.
- Sticky bottom CTA bar on mobile is acceptable.
- This area's only job is to convert. Minimize surrounding content.

---

## Mobile-first specs

- Design at **375px** width first; scale up.
- **Above fold (375×667px) on hero:** logo, headline, subhead (if any), CTA, one trust cue all visible.
- Single column. Section spacing **64–96px between, 32–48px within.**
- Hamburger nav or no nav.
- **Body ≥16px**, headline mobile **≥28–48px**.
- **Tap targets ≥44×44px**, primary CTA 60–72px ideal.
- LCP < 2.5s. Compress images. No heavy scripts above fold. Lazy-load below.
- **Verify every grid collapses to single column at <640px.** Multi-column grids on mobile are the #1 layout failure.

## Accessibility specs

- Contrast: ≥4.5:1 for body, ≥3:1 for large text and UI.
- Visible focus states on all interactive elements.
- FAQ: `<details>`/`<summary>` or `aria-expanded` + keyboard support.
- Form labels (visible or `aria-label`), correct input types, autocomplete attributes.
- Alt text on all meaningful images.
- Respect `prefers-reduced-motion`.

## Cut-priority (when section count is high)

Cut first → never cut last:

1. Logo bar (cut if logos aren't recognizable)
2. Pricing (cut for high-touch sales)
3. FAQ (cut if no real objections)
4. Testimonials (cut if quotes are generic)
5. Features OR How it works (keep one, not both, unless mechanism is non-obvious)
6. Problem snapshot (cut for already-aware audiences)
7. Final CTA — never cut
8. Social proof — never cut (substitute if no real proof)
9. Hero — never cut

**Default 5-section page**: Hero → Social proof → Problem → How it works (or Features) → Final CTA.