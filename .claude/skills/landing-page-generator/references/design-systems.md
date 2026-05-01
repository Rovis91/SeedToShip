# Design Principles

**Load this for every landing page**, regardless of whether the project has an existing theme. A component library gives you primitives; design judgment gives you a page that converts. Both are needed.

The job: design a page that **converts** as well as it looks. A landing page is not a portfolio piece. Aesthetic decisions are evaluated against one question: *does this make the visitor more likely to act?*

## Two contexts, same principles

- **Theme-respectful project (shadcn, Material, Tailwind config, existing CSS variables)** — the principles below shape *how you compose, customize, and extend* the existing primitives. Use the project's tokens for color, type, spacing. But the page's hierarchy, atmosphere, motion posture, and signature element are not in the design system — those are decisions you make per page. Don't ship a stock-component page; the components are the vocabulary, the page is the sentence.
- **No existing theme** — the principles shape both the system *and* its application. Generate the system per the procedure at the end of this file, then compose the page with the same principles.

The constraint is actually *tighter* on theme-respectful projects: you have to make a memorable, conversion-driving page using primitives the visitor has seen elsewhere. That's a design problem, not a token problem.

---

## Principles (always apply)

### 1. Commit to one aesthetic direction

A single, clearly chosen direction beats any combination of "tasteful" defaults. The direction should feel inevitable for the audience — a security tool and a wellness app cannot share a direction. The direction is derived from the audience, the offer, and the emotional posture the visitor needs to land in to act.

Some directions to think across (not a checklist — invent the right one for the context): editorial, refined-minimal, brutalist, industrial, retro-futuristic, organic, maximalist-playful, luxury, technical/monospace, documentary, hand-crafted, post-digital, magazine, terminal-ish, cinematic.

**On theme-respectful projects:** the direction is what you bring on top of the design system. shadcn doesn't have a direction; your page does. Pick one and let it govern your composition, atmosphere, and motion choices even when the components are stock.

Mixing two directions = no direction. Pick one and execute it with conviction.

### 2. Hierarchy is the conversion mechanism

Design serves a single goal: get the visitor's eye to the CTA. Every typographic, spatial, and color choice either supports that path or competes with it. Hierarchy is built through:

- **Scale contrast** — the headline should feel meaningfully larger than everything else on the page, not just one step up.
- **Color weight** — one color carries the conversion moments. Everything else is neutral, atmospheric, or accent.
- **Whitespace as emphasis** — the most important thing on the page has the most room around it.
- **Density modulation** — sections shift between dense and airy on purpose; flat density throughout reads as a wall.

A page where every section feels equally important is a page where nothing is.

### 3. Typography carries personality

Typography is the single highest-leverage aesthetic decision. A distinctive display face paired with a refined body face does more for a page's character than any color choice.

Avoid converging on generic system fonts as the headline face — they read as "developer didn't care." Pick fonts that fit the *specific* aesthetic direction, and **vary across projects**. Reaching for the same display font you used last time is a slop signal; resist familiar comfort.

The body face has a different job: legibility and rhythm. It can be quiet. It should never compete with the display.

Consider one typographic moment that's specifically yours: a mixed-face headline, a color split, an oversized number, a ligature, a deliberately rough or precise letterspacing decision. Type can be the signature element on its own.

**On theme-respectful projects:** the project usually defines a body font, sometimes a display font. If only a body font exists, you can introduce a display face for headlines — that's a page-level decision, not a system override. If both exist and they're generic, that's a problem worth raising before shipping.

### 4. Color: dominant, not democratic

Three roles, in this order of importance:

- **Dominant** (one color) — carries the conversion moments: primary CTA, key brand accents. Roughly 5–10% of the page surface. This is the color the visitor remembers.
- **Accent** (optional, one color) — for highlights, hovers, secondary callouts. Must be clearly distinct from the dominant in hue or saturation, otherwise it adds noise without information.
- **Neutrals** (a controlled ramp) — background, surface, border, muted text, body, headline. The neutrals do most of the work; they should be *good* neutrals, not whatever the framework defaults to.

A page with five colors at equal weight reads as chaos. A confident dominant against quiet neutrals reads as intent.

**On theme-respectful projects:** you're using the project's `--primary`, `--background`, `--muted`, etc. The decision is *how much of each* to use, *where*, and *with what restraint*. A common failure: using every color the system offers because it offers them. Discipline is using two of the available colors decisively rather than seven of them sparingly.

### 5. Spatial composition

Centered everything is the safest, slowest, most forgettable layout. Conversion pages don't need to be radical, but they should make at least one spatial choice that is intentional rather than default — an asymmetric hero, a grid-breaking visual, a diagonal flow, a deliberate offset, a section that bleeds to the edge while others are contained.

Whitespace is structural. Generous space around the hero CTA earns more clicks than tight space. Tight space on logo strips makes them readable. Knowing which sections want air and which want density is the work.

### 6. Atmosphere over flatness

Solid colors and flat surfaces are the AI default. Real designed pages have atmosphere — subtle gradients, grain, noise, layered depth, patterned backgrounds, considered shadows, atmospheric lighting in product visuals.

Atmosphere doesn't mean decoration. It means the page feels like a place, not a wireframe. One atmospheric choice executed with precision beats five sprinkled in for variety.

**On theme-respectful projects:** atmosphere is almost always something you add on top of the system. shadcn cards are flat by design; the page can sit them on a textured background, frame the hero with a gradient mesh, add grain, layer depth. The components stay stock; the canvas around them does the atmospheric work.

### 7. Components are vocabulary, not the page

A page made entirely of stock components feels stock. A page made entirely of custom components feels untethered. The job is to use stock components for what they're good at (consistency, accessibility, predictable behavior) and to add custom moments where the page needs character — the hero composition, the signature element, the CTA reward, atmospheric backgrounds, illustration, motion choreography.

Custom code earns its place when:
- The system can't express the moment (stock card components for a product gallery; custom layout for a cinematic hero).
- The page needs a memorable detail that no design system provides (the signature element).
- A specific interaction or animation is part of the conversion logic (an animated demo, a CTA hover that confirms intent).

Custom code does *not* earn its place by reinventing primitives the system already has. Don't rebuild the button. Compose with it.

### 8. Motion serves clarity, not decoration

Animation has two jobs on a landing page:

- **Orchestrate the first impression** — a single, well-timed page-load entrance that reveals the hero's hierarchy in the order the visitor should read it. Staggered reveals, not everything-at-once.
- **Reward the action** — the CTA hover, the demo play, the form-submit feedback. These earn the visitor's attention because they confirm intent.

Everything else is friction wearing the costume of polish. Avoid: fade-up on every element on every scroll, parallax for its own sake, looping ambient animations that pull the eye from the CTA, autoplay video with sound (ever).

Motion respects `prefers-reduced-motion`. Performance beats polish — if scroll stutters, cut the animation.

### 9. One signature element

The thing someone remembers about the page. Not three. One. Without it, the page is competent but forgettable. With three, it's chaos.

The signature element is whatever fits the direction — a custom cursor, a recurring accent shape, a type treatment in the headline, a specific kind of visual depth, a micro-interaction unique to the CTA, a scroll-triggered moment that's specifically yours, a distinctive empty-state for visuals. Identify what it is before building, not after.

**On theme-respectful projects:** the signature element is *usually* what makes the page not feel like a stock-component page. The system gives you the primitives; the signature element gives you the page.

---

## What "AI slop" looks like (and why it kills conversion)

Generic visual defaults make the visitor's eye glaze over before reaching the CTA. The patterns below should be actively avoided — not because they're "ugly," but because they signal *unconsidered* and the visitor reads that as *not for me*.

- Default sans-serif system fonts as the headline face on a brand page
- "Friendly" purple-to-pink gradient hero on white background
- Indigo-on-slate "default AI tool" combo
- Six identical feature cards with abstract gradient icons
- Stock photography of generic diverse teams in offices
- Glassmorphism applied indiscriminately to every surface
- Centered everything with no asymmetry, no grid-breaking
- Five colors at equal saturation with no clear dominant
- A page composed entirely of stock components, in the order the documentation lists them
- Default framework primary colors used straight with no customization

The fix is never to add more. The fix is to commit to a direction with conviction and execute it with restraint.

---

## Conversion-aware aesthetic decisions

Beauty and conversion are not in tension when the design is hierarchical. They are in tension when the design is decorative.

- **The CTA must be the most visually committed element on the page.** It carries the dominant color. It has the most generous whitespace around it. Its hover state is the most rewarding micro-interaction. If a section visual or animation pulls the eye harder than the CTA, that section is fighting the page's job.
- **The hero visual sells the product, not the brand.** A beautifully art-directed abstract hero converts worse than a tight, atmospheric product moment. The visual should make the visitor think "I want that" about the product, not "I want to work here" about the design.
- **Restraint reads as confidence.** Pages with one strong typographic moment, one dominant color, and one signature element convert better than pages stacked with effects. Maximalism works *only* when the direction calls for it and the audience reads it as character rather than chaos.
- **Density signals expertise; air signals premium.** Developer tools and prosumer products reward density (more information visible per scroll). Premium consumer and high-ticket B2B reward air. Match density to the buying posture.
- **Playful conversion components are not contradictions.** A delightful CTA hover, a satisfying form interaction, a celebratory moment after submission — these convert better than sober, austere ones, *if* they fit the direction. Playful does not mean decorative; it means rewarding.

---

## What to hand to the implementation step

Do not output framework-specific code, hex tables, or CSS variable blocks. The implementation step (frontend-design) handles code in whatever stack the project uses.

Hand off the *design intent* in the brief — these fields apply equally to theme-respectful and from-scratch projects:

- **Aesthetic direction** — one named direction with a one-line description of what makes it inevitable for this audience.
- **Typographic posture** — display character (e.g., "high-contrast serif with editorial confidence" or "geometric mono with technical authority"), body posture, and any signature typographic moment. On theme-respectful projects: which existing fonts are used and how, plus any added display face for the page.
- **Color posture** — what the dominant color *does* (energy, role, mood), how the accent (if any) relates to it, and the neutrals' character. On theme-respectful projects: which of the existing tokens carry the page's hierarchy, and which are deliberately not used.
- **Spatial posture** — composition decision per section: centered or asymmetric, contained or bleeding, dense or airy, plus the one grid-breaking moment if any.
- **Atmospheric posture** — what gives the page its place-quality (texture, depth, lighting, pattern) and where it appears.
- **Motion posture** — the page-load orchestration sequence and the CTA reward. No more.
- **Signature element** — the one memorable thing, named.
- **Custom-vs-stock split** — which components are stock from the design system and which are custom for the page (and why each custom one earns its place).

Frontend-design will translate the posture into the right code for the right stack. The principles file's job is to make the *intent* unambiguous.

---

## Procedure: generating a new theme (only when none exists)

Run this only when Step 1 detection found no existing system. Otherwise skip — the principles above are enough on top of the project's tokens.

1. **Pick the aesthetic direction** (Principle 1). Derive from audience, offer, posture.
2. **Build the palette.** Dominant + optional accent + neutral ramp. Derive mood from the direction; do not reach for a default palette.
3. **Pair fonts.** Display fits the direction; body is quiet. Vary across projects — no comfort defaults.
4. **Define spacing, radius, shadow.** Match the direction (sharp for serious/technical, soft for consumer, hard-offset for retro, none for brutalist, etc.). The values themselves are framework-agnostic — frontend-design will translate to the chosen stack.
5. **Identify the signature element** before building.

When the system is decided, hand off the design intent (the field list above), not framework-specific code blocks. Frontend-design produces the implementation.