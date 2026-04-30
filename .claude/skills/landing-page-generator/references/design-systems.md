# Design Systems

Sole owner of: theme adoption procedure, palette construction, typography selection logic, anti-slop rules, animation guidance, design tokens output format.

Two paths: **adopt** an existing theme, or **generate** a new one. Decide first, then execute.

---

## Path A — Adopt existing theme

When the user provides any of: logo, brand colors, existing site URL, design tokens, screenshots, Figma file, component library.

### Extract these tokens

| Token | What to capture |
|---|---|
| **Primary color** | The dominant brand color (logo, main CTA color on existing assets) |
| **Accent color** | Secondary brand color or call-out color |
| **Neutrals** | Background, surface, border, text — at least 3 steps of gray |
| **Typography** | Display font, body font, weights used, fallback stack |
| **Border radius** | Standard radius (cards, buttons, inputs) — sharp / soft / pill |
| **Shadow style** | None / soft-low / dramatic / hard-offset — pick the established style |
| **Button style** | Filled / outlined / ghost — match what they already use |
| **Spacing scale** | Detect base unit (4 or 8px) from existing layouts |
| **Voice cues** | Their copy tone — terse, friendly, technical, premium |

### Adoption rules

- **Match exactly.** Don't "improve" their brand. The visitor expects continuity with whatever ad / email / referrer brought them here.
- If you only have the logo and primary color, build the rest of the system *consistent with* their aesthetic (sharp logo → sharp radii; soft logo → soft radii).
- If they have a component library (shadcn, Material, Chakra, Radix, etc.) — use those components. Don't custom-build what already exists.
- If they're using a utility framework (Tailwind, Open Props, etc.) — use its tokens, don't introduce raw hex codes outside the system.

If the user gives an existing URL: use `web_fetch` to inspect CSS variables, font imports, and component patterns. Extract the system rather than guessing.

---

## Path B — Generate new theme

The hardest part is *not* defaulting to slop. **Pick an aesthetic direction first, then derive everything from it.** Do not pull from a fixed list of "favorite" fonts or palettes — that produces convergence.

### Step 1 — Pick an aesthetic direction

Match direction to audience and product type. Some examples of valid directions (not exhaustive — invent the right one for the context):

- Editorial / magazine
- Refined-minimal
- Brutalist / raw
- Industrial / utilitarian
- Retro-futuristic
- Organic / soft
- Maximalist / playful
- Luxury / refined
- Technical / monospace-driven
- Documentary / serious

Commit to one. Mixing directions = no direction. The aesthetic should feel inevitable for the audience — a security tool and a wellness app cannot share a direction.

### Step 2 — Build the palette

**Structure:** dominant + accent + neutral ramp.

- **Dominant** (1 color): used for primary CTAs, key brand moments, ~5–10% of the page.
- **Accent** (1 color, optional): for highlights, secondary moments. Should clearly differ from dominant in hue or saturation.
- **Neutrals** (4–6 steps): background, surface, border, muted text, body text, headline text.

**Heuristics:**
- A dark-mode page with one bright accent often outperforms a generic light "friendly" palette for SaaS.
- If unsure between two palettes, pick the more confident one. Timid palettes read as cheap.
- **One** dominant. Two competing colors = visual chaos.
- Derive palette mood from the aesthetic direction — don't reach for the same colors across projects. A brutalist tool and an organic wellness product do not share a palette.

### Step 3 — Pair fonts

**Anti-slop rule:** the headline font must NOT be Inter, Roboto, Arial, or system-ui. These read as "developer didn't care about design."

**Selection logic:**
- Pick fonts that fit the **specific aesthetic direction** chosen in Step 1.
- **Vary across projects.** If a previous project used a particular display font, pick a different one for this project unless the aesthetic explicitly demands the same family.
- A distinctive display font + a refined body font is the standard pattern. Mono fonts work as accents or for technical aesthetics.
- The body font can be a quality system stack (San Francisco, Segoe UI fallbacks) when the display font carries the personality — this is fine if intentional, not a default.

### Step 4 — Define spacing, radius, shadow

| Token | Options | Use when |
|---|---|---|
| **Spacing base** | 4px or 8px | 4px for dense info products; 8px for most others |
| **Radius** | 0 / 4 / 8 / 12 / 16 / 999 (pill) | Sharp (0–4px) for serious/technical; soft (12–16px) for consumer; pill for playful |
| **Shadow** | None / soft / dramatic / hard-offset | None for brutalist/minimal; soft for refined; dramatic for premium; hard-offset for retro/playful |

### Step 5 — Add ONE signature visual element

This is the thing someone will remember. Pick one — not three:

- Custom cursor
- Subtle grain / noise texture overlay
- Animated gradient mesh in a single hero corner
- Distinctive border treatment
- An accent shape that recurs (a specific arrow, sticker, frame)
- A micro-interaction on the CTA (magnetic hover, color sweep)
- A type treatment in the headline (mixed serif + sans, ligature, color split)
- A scroll-triggered reveal pattern that's specifically yours
- A distinctive empty-state for visuals (e.g., dotted grid background)

Without a signature element, the page is competent but forgettable. With three, it's chaos. **One.**

---

## Anti-slop rules (sole reference, scanned at critique pass)

**Auto-fail visual patterns:**
- Purple → pink gradient on white background
- Indigo (#6366F1-ish) on slate (#0F172A-ish) — the default "AI tool" combo
- Inter / Roboto / Arial as the headline font
- Six identical feature cards with abstract gradient icons
- Generic stock photo of diverse people in an office
- Glassmorphism applied to everything
- Centered everything with no asymmetry
- Equally-weighted color palette (5 colors all at the same saturation)
- Default Tailwind colors used straight (`bg-blue-500` etc.)

**Quality signals that lift a page:**
- One unexpected typographic moment (oversized headline, mixed fonts, color split)
- Real product visual that earns its space
- A confident dominant color
- Whitespace that feels intentional, not empty
- Micro-interactions on the CTA only — not everywhere
- A grid or layout choice that isn't a centered column

---

## Animation guidance

**Purposeful, not decorative.** Animation serves clarity or delight, not distraction.

**Where motion earns its place:**
- **Page load**: one well-orchestrated entrance — staggered fade-up of hero elements (50–100ms delay between elements). Order: logo → headline → subhead → CTA → visual.
- **Scroll reveal**: subtle fade-up as sections enter viewport, threshold ~15% visible. Don't animate every element.
- **CTA hover**: color shift, slight scale (1.02–1.04), or a custom transition that fits the aesthetic. Never on body text or non-interactive elements.
- **Demo/video poster**: a subtle pulse or play indicator.

**Constraints:**
- Respect `prefers-reduced-motion` — disable non-essential motion.
- No autoplay video with sound. Ever.
- Animation duration: 200–400ms feels right for most UI motion. Longer feels slow.
- Don't animate during scroll if it stutters — performance > polish.

---

## Output: design tokens block

After deciding the system, produce a tokens block to hand to frontend-design verbatim:

```css
:root {
  /* Color */
  --color-bg: #...;
  --color-surface: #...;
  --color-border: #...;
  --color-text-muted: #...;
  --color-text-body: #...;
  --color-text-heading: #...;
  --color-primary: #...;
  --color-primary-hover: #...;
  --color-accent: #...;

  /* Type */
  --font-display: '...', serif;
  --font-body: '...', sans-serif;
  --font-mono: '...', monospace;

  /* Space (base unit declared) */
  --space-1: ...; --space-2: ...; --space-3: ...; --space-4: ...;
  --space-6: ...; --space-8: ...; --space-12: ...; --space-16: ...;

  /* Radius */
  --radius-sm: ...; --radius-md: ...; --radius-lg: ...; --radius-pill: 999px;

  /* Shadow */
  --shadow-sm: ...;
  --shadow-md: ...;
  --shadow-lg: ...;
}
```