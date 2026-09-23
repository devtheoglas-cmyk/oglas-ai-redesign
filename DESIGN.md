# Oglas AI — Design System

The site's visual language comes from the 2026 Oglas AI company profile. Content (copy, links, SEO, structured data) is identical to the live oglasai.com; only the design differs. This file supersedes the colour, logo, and typography sections of `BRAND_GUIDELINES.md`.

## World

Electric-blue light fields where the story is told (heroes, feature bands, CTAs, footer) alternate with calm ice-white reading rooms where detail lives (long service copy, FAQs, testimonials). Frosted glass sits on the blue; gradient pill labels mark sections; headings speak in two voices.

## Colour

Tokens keep their original names so every page inherits the palette. They are real CSS variables (`@theme`, not `@theme inline`), and `.bg-mesh` re-scopes the accent tokens to light tints for dark fields.

| Token | Value | Role |
| --- | --- | --- |
| `brand` / `emerald` | `#0C29DF` | Profile blue: links, icons, primary actions |
| `brand-bright` | `#2F4CF6` | Gradient highlight, focus ring |
| `brand-deep` | `#00009E` | Deep corner of the light field |
| `onyx` | `#070B3D` | Ink navy for text on light |
| `steel` | `#4A5285` | Body text on light (6.7:1 on pearl) |
| `champagne` | `#3D52F5` | Secondary accent on light; `#C9D2FF` inside `.bg-mesh` |
| `pearl` | `#F1F3FF` | Page ground |
| `lilac` | `#8E9BF0` | Light blooms |

## Surfaces

- `.bg-mesh` — the light field: layered radial blooms (white/lilac top-left and bottom-left, deep navy top-right) over a 118° blue gradient. Text on it is white; keep blooms away from body copy.
- `.bg-mesh-deep` — quieter variant for the footer.
- `.bg-bloom` — ice ground with faint blue light at two corners.
- `.field-orb` — the profile's large soft circle behind robot imagery.
- `HeroBackdrop` — drifting blur lights plus the woven brandmark as a slowly turning 7% watermark.

## Glass

- `.glass` — white frosted panel with navy text on blue fields (re-scopes text tokens back to light-theme values).
- `.glass-dim` — tinted glass that keeps white text.
- `.glass-light` — card on light rooms: near-white, hairline blue border, soft blue shadow.

## Type

- **Aspekta** (variable, self-hosted in `src/app/fonts`, SIL OFL) for everything. Headings use weight ~290, body 400, medium labels 500; `semibold` is remapped to 540.
- **EB Garamond Italic** for lead lines, closers, testimonials, and article excerpts.
- `SplitTitle` renders every major heading in the profile's two voices: first half serif italic, second half light sans. It prefers natural pauses (full stops, commas, em dashes) and never changes the words; pass `at` to override the break.
- `.title-caps` sets the sans half in light uppercase (homepage hero only, as on the profile cover).

## Components

- Pills: `.pill` (gradient blue, on light), `.pill-glass` (on blue), `.pill-soft` (tags). Section eyebrows render as pills; feature cards carry their title in a pill that overlaps the card's top edge.
- Buttons: `.btn` + `.btn-primary` (blue gradient), `.btn-light` (white on blue), `.btn-outline`, `.btn-outline-light`, `.btn-sm`. All are pills.
- `ArrowRule` — the thin line-and-arrow under hero headings.
- `.glass-numeral` — the cover's giant glass "O1", homepage hero only.
- FAQ: `.faq-item` + `.faq-toggle` (gradient circle that rotates to ×).

## Imagery

Transparent chrome cut-outs from the profile live in `public/images/brand/`. Several were cropped flat in the PDF (chrome brain: left/bottom/top-left; thinker: bottom; hand: bottom-left), so they are anchored to a section edge or softened with `.fade-top` / `.fade-bottom` (or `HeroArt fade=`). Never show a flat cut edge mid-field.

## Motion

One entrance (`.rise`: 1.1s expo ease-out from blur) on hero content, slow drifting light, and the 120s brandmark rotation. All disabled under `prefers-reduced-motion`.

## Layout

1160px content width, 16px gutters. The sticky header floats transparent over each page's blue hero (heroes pull up with `-mt-20`) and turns to blue glass once scrolled. The header CTA appears from `lg` up to avoid tablet overflow.
