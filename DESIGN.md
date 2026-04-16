# Design System: Sunflower Institute for Autism (SIA) — Warm Structuralism

## 1. Visual Theme & Atmosphere
**Vibe: Warm Structuralism.** A fusion of clinical precision and compassionate warmth. It prioritizes clarity and architectural structure but softens the edges with a subtle, organic warmth. The atmosphere feels like a high-end, sun-drenched research institute—trustworthy, premium, and human-centric.

- **Density**: 4 (Balanced, airy but informative)
- **Variance**: 6 (Asymmetric grid refinements, structured but fluid)
- **Motion**: 5 (Fluid CSS transitions, hardware-accelerated blurs)

## 2. Color Palette & Roles
- **Warm Canvas** (#FCFAF7) — Primary background. A soft, off-white cream that reduces eye strain and implies human warmth.
- **Deep Charcoal** (#1A1A1A) — Primary text and heading depth. Softer than pure black.
- **Sunflower Gold** (#EBC351) — Muted brand accent. Used sparingly for highlights, icons, and primary CTAs.
- **Glass Surface** (rgba(255, 255, 255, 0.4)) — Translucent layers for cards and navigation.
- **Muted Edge** (rgba(26, 26, 26, 0.05)) — Soft dividers and subtle borders.

## 3. Typography Rules
- **Display (Headings):** **Lora** — Formal, academic serif. Used for primary headlines and section titles.
- **Body & Functional:** **Inter** — High-legibility sans-serif for content and clarity.
- **Clinical/Metadata:** **JetBrains Mono** — For stats, categorizations, and technical labels.

## 4. Layout Principles: The Fluid Grid
- **Glassmorphism:** Use `backdrop-filter: blur(20px)` on floating elements to create depth.
- **Double-Bezel Architecture:** Major cards use a nested structure (outer ring + inner core) to simulate physical mass.
- **Soft Radii:** Transition from hard 0px to a refined 8px - 14px radius where appropriate for a "human" feel.
- **Asymmetric Balance:** Use whitespace and offset grids to break the "template" feel.

## 5. Hero Philosophy
- **Atmospheric Depth:** Backgrounds should feature subtle mesh gradients or cinematic slow-motion loops with warm overlays.
- **Typographic Tension:** Massive headines paired with wide tracking and brand-yellow accents.

## 6. Motion & Interaction
- **Cubic Bezier:** All transitions use `cubic-bezier(0.32, 0.72, 0, 1)`.
- **Haptic Feedback:** Buttons scale slightly (0.98) on click.
- **Staggered Reveals:** Content elements cascade into view on scroll.

## 7. Anti-Patterns (Banned)
- **No Pure Black (#000000)**
- **No Generic Blue/Purple AI Glows**
- **No 3-Column Equal Card Grids** (Use asymmetric or horizontal scroll)
- **No "Elevate" or "Next-Gen" Clichés.**


