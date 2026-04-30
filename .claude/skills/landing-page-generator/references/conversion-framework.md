# Conversion Framework — Section Rules

Sole owner of: section structure, mobile-first layout specs, cut-priority order. Other reference files do not restate these rules — they point here.

## Legend
- 🔵 Hook · 🟢 Trust · 🟣 Educate · 🟠 Convert

---

## 1. HERO 🔵 (required)

**Job**: in the first mobile viewport (375×667px), the visitor knows *what it is, who it's for, the outcome, and what to do next.*

**Must contain:**
- Logo (small, top-left)
- Headline (outcome-focused, ≤10 words)
- Subheadline (one line, names the mechanism)
- One primary CTA, thumb-reachable
- Compact product visual (screenshot / mock / short looped GIF, ≤2MB)
- One micro trust cue (logo strip OR metric OR rating)

**Rules:**
- Headline echoes the ad/email/referral promise (message match).
- Subhead clarifies what it literally is in customer language.
- Single primary CTA. A secondary link (e.g., "See how it works") is acceptable but visually subordinate.
- Visual shows the product or end state, not abstract art.
- Image must not push the CTA below the fold.

---

## 2. SOCIAL PROOF STRIP 🟢 (required, even if minimal)

**Job**: kill the "is this legit?" reflex within the first scroll.

**Must contain at least one of:**
- Logo row (4–8 recognizable customers/partners)
- Headline metric tied to the core promise ("Cut response time by 37% — average across 300 teams")
- Star rating + one-sentence testimonial (named + role)

**Rules:**
- Place directly under the hero — at least one cue should be visible without scrolling.
- Specifics > vague claims. "3,200+ active teams" beats "trusted by thousands."
- Logos: 4–8 max. More becomes wallpaper.
- If proof is thin, see SKILL.md Step 4 thin-proof handling — substitute with founder credentials, GitHub stars, beta numbers, or an honest "New — be one of the first 100." Never fabricate.

---

## 3. PROBLEM / PAIN SNAPSHOT 🟣 (required for cold traffic)

**Job**: visitor thinks "yes, that's exactly my situation" within 5 seconds.

**Must contain:**
- Heading
- Either 2–3 sentences OR 3 bullets — not both
- Optional small illustration

**Rules:**
- Direct second person ("you"), specific pains harvested from interviews/reviews.
- Concrete > abstract. "You open 7 tools to answer one customer" beats "Disconnected workflows hurt productivity."
- Skip if the audience is already aware of the pain (e.g., devs viewing a dev tool).

---

## 4. HOW IT WORKS 🟣 (required if mechanism is non-obvious)

**Job**: visitor sees a clear path from pain → outcome in three steps they can imagine doing.

**Must contain:**
- Heading
- 3 steps, no more
- Each step: verb-led title + one sentence
- One supporting visual (single image, 3-step illustration, or 30–120s muted video)

**Rules:**
- Vertical 3-step stack on mobile.
- Step titles are verbs + outcomes ("Connect your tools," "Auto-route tickets," "Track impact").
- Video: muted by default, user-controlled, never autoplay with sound. Poster frame should sell the outcome.
- Lazy-load video below the fold.

---

## 5. FEATURES AS BENEFITS 🟠 (required if mechanism is obvious but value-per-feature varies)

**Job**: translate features into outcomes the buyer cares about.

**Must contain:**
- Heading ("What you get" / "Why teams switch to X")
- 3–6 cards. Each card: small icon → benefit headline → 1–2 supporting lines.

**Rules:**
- Lead with the outcome ("Ship campaigns 3× faster"), then explain the mechanism ("Auto-syncs your channels…").
- Single-column stacked cards on mobile.
- Limit to 3–6. More dilutes the message.
- Consistent card structure — don't mix long paragraphs with short bullets in the same grid.

---

## 6. TESTIMONIALS 🟢 (optional)

**Job**: kill specific objections with named, specific outcomes.

**Must contain:**
- 2–3 testimonials
- Each: real name + role + company + quote with a specific result + avatar/logo

**Rules:**
- Specific wins ("cut response time by 37%") beat generic praise ("Great product!").
- Pick testimonials whose author profile matches the visitor.
- Stack vertically on mobile. Compact cards.
- Skip this section entirely if you only have generic "love it!" quotes.

---

## 7. PRICING SNAPSHOT 🟠 (optional — for self-serve products)

**Job**: visitor gets a fast cost-and-value read without overwhelm.

**Must contain:**
- Heading
- 2–3 tiers, vertically stacked on mobile
- Each tier: price (or "Contact us") + 3–5 bullet benefits + tier label
- Recommended/popular tier visually highlighted
- Risk reversal nearby ("14-day free trial," "30-day money-back," "No credit card")

**Rules:**
- Lead with the plan most visitors will pick, marked "Most popular."
- Bullets describe outcomes, not feature counts.
- Each tier has its own CTA.
- Enterprise/high-touch B2B: replace this section with "Talk to sales."

---

## 8. FAQ 🟠 (optional — include if real objections exist)

**Job**: answer the last questions blocking the decision.

**Must contain:**
- 4–6 real questions (not made-up softballs)
- Each: short, plain-language answer
- Accordion format on mobile

**Rules:**
- Source from real sales/support objections, reviews, customer interviews.
- Use "even if" framing ("Yes, even if your team isn't technical…").
- Avoid legalese and vague reassurances. Specifics build trust.
- **Order: setup/onboarding early (momentum builder), trust mid, price last (the final wall).**
- See `objection-library.md` for category-by-category dismantling.

---

## 9. FINAL CTA STRIP 🟠 (required)

**Job**: one last frictionless conversion path after the visitor has scanned.

**Must contain:**
- Short headline restating the core outcome
- Subline reminding of risk reversal or key benefit
- Primary CTA — same label, same color, same destination as the hero
- Optional: small supporting metric

**Rules:**
- Visually consistent with hero CTA. Inconsistency reads as a different button → friction.
- Consider a sticky bottom CTA bar on mobile.
- Surrounding content is minimal. This area's only job is to convert.

---

## Mobile-first layout specs (sole reference)

- Design at **375px width first**; scale up.
- Above-the-fold (375×667px) must contain: logo, headline, subhead, primary CTA, one trust cue.
- Single column. Strong vertical rhythm. **64–96px between sections; 32–48px within.**
- Hamburger nav or no nav. Don't compete with the hero.
- **Body text ≥16px**, headline mobile **≥28–48px**.
- **Tap targets ≥44×44px**, primary CTA 60–72px is ideal.
- LCP < 2.5s on mobile. Compress images. No heavy scripts above fold. Lazy-load below.

## Accessibility specs

- Contrast: ≥4.5:1 for body, ≥3:1 for large text and UI elements.
- Visible focus states on all interactive elements.
- FAQ accordion: proper `<details>`/`<summary>` or `aria-expanded` + keyboard support.
- Form labels (visible or via `aria-label`), correct input types, autocomplete attributes.
- Alt text on all meaningful images.
- Respect `prefers-reduced-motion`.

## Cut-priority (when budget runs out)

Cut in this order — first → last:

1. Logo bar (cut if logos aren't recognizable)
2. Pricing (cut for high-touch sales)
3. FAQ (cut if no real objections)
4. Testimonials (cut if quotes are generic)
5. Features-as-benefits OR How-it-works (keep one, not both, unless mechanism is non-obvious)
6. Problem snapshot (cut for already-aware audiences)
7. Final CTA strip — never cut
8. Social proof — never cut (substitute if no real proof)
9. Hero — never cut

**Default 5-section page**: Hero → Social proof → Problem → How it works (or Features) → Final CTA.