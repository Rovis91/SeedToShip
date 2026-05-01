# Conversion Framework — Section Rules

Each section spec leads with **what to show** and **the motion moment**. Copy is the caption, not the content. Every section also names which beat of the narrative spine (Frustration / Result / Value) it serves.

## Legend
- 🔵 Hook · 🟢 Trust · 🟣 Educate · 🟠 Convert

---

## 1. HERO 🔵 (required) — *Frustration + Result compressed*

**Show:** a real product moment in motion. A short looped video, animated mock, scrolling product screen, interactive demo preview, or a static screenshot animated in (parallax tilt, slow zoom, layered reveal). Static-only is the failure mode.

**Copy:**
- Headline: ≤10 words. A sales pitch, not a feature. Outcome-led.
- Subhead: ≤1 sentence. Adds the audience, the mechanism, or the proof.
- One primary CTA, outcome-labeled, thumb-reachable.

**Motion moment:** the page-load orchestration. Staggered reveal: logo → headline → CTA → product visual. The product visual itself loops or animates subtly, never frozen.

**Above the fold (375×667px):** logo, headline, subhead, CTA, one trust cue, the product visual all visible.

---

## 2. SOCIAL PROOF STRIP 🟢 (required) — *Result*

**Show:** real logos, real numbers in large type, star rating, video testimonial thumbnail, or a counter that animates up as it enters viewport. Numbers in large numerals beat sentences.

**Copy:** one line of context, often zero.

**Motion moment:** logos drift gently in a continuous marquee, OR the metric counts up on scroll. One of the two — pick what fits the aesthetic.

**Rules:**
- Place directly under the hero — at least one cue visible without scrolling.
- Logos: 4–8 max.
- If proof is thin, substitute per SKILL.md Step 4 thin-proof handling. Never fabricate.

---

## 3. FRUSTRATION SNAPSHOT 🟣 (required for cold traffic) — *Frustration*

**Show:** a before/after split, a broken-UI mock the visitor recognizes, a frustration moment shown in motion (bouncing back-and-forth between tabs, the same task taking forever), or a comparison visual against the status quo. Without a *show*, this section becomes a paragraph — cut it.

**Copy:** 2 sentences max OR 3 short bullets. Not both. Direct second person, in *their* vocabulary.

**Motion moment:** the contrast visual animates the pain — a tab-switching loop, a clock spinning, a counter going up on the wrong metric. The visitor feels it.

**Rules:**
- Concrete > abstract. "You open 7 tools to answer one customer" beats "fragmented workflows."
- Skip if audience is already aware (e.g., devs viewing dev tools).

---

## 4. HOW IT WORKS 🟣 (required if mechanism is non-obvious) — *Value*

**Show:** **3 distinct visuals**, one per step. Short GIFs, screen recordings, animated diagrams. Never icons alone — icons are decoration.

**Copy:** verb-led title + one sentence per step.

**Motion moment:** each step's visual loops independently OR a single 30–120s muted product walkthrough, user-controlled, never autoplay with sound.

**Rules:**
- Vertical 3-step stack on mobile.
- Step titles are verbs + outcomes.
- If a step has only an icon, the section is underdeveloped — find a real visual or use Features-as-benefits instead.

---

## 5. FEATURES AS BENEFITS 🟠 (required if mechanism is obvious but value-per-feature varies) — *Value*

**Show:** micro-screenshot, specific UI fragment, or a custom illustration per card. Not the same generic gradient icon repeated 6 times.

**Copy:** outcome headline + 1 line per card.

**Motion moment:** cards reveal on scroll with stagger, OR each card has a small hover state that reveals more detail (a screenshot expanding, a metric counting). One pattern across all cards, not five.

**Rules:**
- 3–6 cards. More dilutes.
- Lead with the outcome ("Ship campaigns 3× faster"), then the mechanism.
- Single-column stacked cards on mobile.

---

## 6. TESTIMONIALS 🟢 (optional) — *Result*

**Show:** avatar + company logo per testimonial, ideally a short video clip on at least one. A face beats a quote alone.

**Copy:** 2–3 testimonials, each: real name + role + company + specific outcome quote.

**Motion moment:** a carousel that drifts gently, OR cards that fade in on scroll. Static walls of quotes feel dead.

**Rules:**
- Specific wins beat generic praise.
- Match testimonial author profiles to the visitor.
- Skip the section if quotes are generic.

---

## 7. PRICING SNAPSHOT 🟠 (optional, for self-serve) — *Value*

**Show:** tier hierarchy — recommended plan visually elevated, ideally with a subtle accent or motion that draws the eye.

**Copy:** 2–3 tiers, vertically stacked on mobile. Each: price + 3–5 outcome bullets + tier label.

**Motion moment:** the recommended tier subtly pulses or has an animated badge. Hover states on each tier reveal additional detail.

**Rules:**
- Lead with the plan most visitors will pick, marked "Most popular."
- Outcomes, not feature counts, in bullets.
- Risk reversal nearby ("14-day free trial," "no credit card").
- Enterprise: replace with "Talk to sales."

---

## 8. FAQ 🟠 (optional) — *Value*

**Show:** the accordion interaction itself is the show. Smooth motion, satisfying open/close.

**Copy:** 4–6 real Q/As, in the visitor's vocabulary. See `copy-rules.md` for FAQ pattern. See `objection-library.md` for category-by-category dismantling.

**Motion moment:** smooth accordion expansion (200–300ms ease), with a subtle indicator rotation.

**Order:** setup early (momentum), trust mid, **price last** (the final wall).

---

## 9. FINAL CTA STRIP 🟠 (required) — *Value + close*

**Show:** an atmospheric background or accent visual that reinforces the outcome. The signature element of the page often appears here too.

**Copy:** restated outcome (one line) + CTA + optional supporting metric.

**Motion moment:** the CTA's hover reward — the most committed micro-interaction on the page. The visitor's last interaction should feel rewarding.

**Rules:**
- Same CTA label and destination as hero.
- Sticky bottom CTA bar on mobile is acceptable.
- Surrounding content is minimal. This area's only job is to convert.

---

## Mobile-first specs

- Design at **375px** width first. Scale up.
- **Above fold (375×667px) on hero:** in 2 seconds, the visitor sees logo, headline, subhead, CTA, one trust cue, the product visual.
- Single column. **64–96px between sections, 32–48px within.**
- Hamburger nav or no nav.
- **Body ≥16px**, headline mobile **≥28–48px**.
- **Tap targets ≥44×44px**, primary CTA 60–72px ideal.
- LCP <2.5s. Compress images. No heavy scripts above fold. Lazy-load below.
- **Every grid collapses to single column at <640px.** Multi-column grids on mobile are the #1 layout failure.

## Accessibility

- Contrast: ≥4.5:1 body, ≥3:1 large text and UI.
- Visible focus states on all interactive elements.
- FAQ: `<details>`/`<summary>` or `aria-expanded` + keyboard support.
- Form labels, correct input types, autocomplete attributes.
- Alt text on all meaningful images.
- Respect `prefers-reduced-motion`.

## Cut-priority (when section count is high)

Cut first → never cut last:

1. Logo bar (cut if logos aren't recognizable)
2. Pricing (cut for high-touch sales)
3. FAQ (cut if no real objections)
4. Testimonials (cut if quotes are generic)
5. Features OR How it works (keep one, not both, unless mechanism is non-obvious)
6. Frustration snapshot (cut for already-aware audiences)
7. Final CTA — never cut
8. Social proof — never cut (substitute if no real proof)
9. Hero — never cut

**Default 5-section page:** Hero → Social proof → Frustration → How it works (or Features) → Final CTA.