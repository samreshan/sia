# Design System: Sunflower Institute for Autism (SIA) — Awwwards Edition

## 1. Visual Theme & Atmosphere
**Vibe: Soft Structuralism.** A high-end agency aesthetic characterized by massive whitespace, bold typographic control, and tactile "machined" components. The atmosphere is unhurried and professional—a digital sanctuary built with silver-grey neutrals and vibrant sunflower accents. 

- **Density**: 4 (Airy, gallery-like)
- **Variance**: 8 (High asymmetry, bento masonry)
- **Motion**: 7 (Cinematic choreography, spring-based mass)

## 2. Color Palette & Roles
- **Silver Grey** (#F5F5F5) — Primary canvas background. Neutral, modern, industrial.
- **Pure Surface** (#FFFFFF) — Inner core fills for the Double-Bezel architecture.
- **Sunflower Gold** (#F7B42C) — Primary CTA and emotional highlight color. Used for vibrant focal points.
- **Olive Stem** (#768E1F) — Secondary brand color. Used for professional authority and clinical metadata.
- **Matte Charcoal** (#323030) — Primary text and heading depth.
- **Surface Hairline** (rgba(50, 48, 48, 0.05)) — Microscopic borders and subtle dividers.

## 3. Typography Rules
- **Display (Headings):** **Lora** — Track-tight (-0.03em), weight-driven hierarchy. Used for massive editorial headlines and emotional hooks.
- **Body:** **Nunito** — Relaxed leading (1.7), max 65ch width. Neutral gray color for readability.
- **Mono:** **JetBrains Mono** — For timestamps, metadata, and high-density stats.

## 4. Component Stylings — The Double-Bezel (Doppelrand)
Every major container must look like machined hardware using nested enclosures:
- **Outer Shell:** Subtle background (bg-black/5), large radius (rounded-3xl), minimal padding.
- **Inner Core:** Pure white background, high-depth ambient shadow, smaller concentric radius.

## 5. Layout Principles
- **Asymmetrical Editorial Split:** Headlines on one side, floating layered imagery on the other.
- **Bento Masonry:** A CSS Grid of varying card sizes to communicate hierarchy and ecosystem complexity.
- **Macro-Whitespace:** py-40 (10rem) section gaps to allow the design to breathe heavily.
- **Inline Image Typography:** Small, rounded images embedded directly within headlines acting as visual punctuation.

## 6. Motion & Interaction
- **Spring Physics:** Stiffness: 100, Damping: 20 for a premium, weighted feel.
- **Staggered Mask Reveal:** Sections do not simply fade; they slide up and blur-resolve in a cascade.
- **Magnetic CTAs:** Buttons scale physically on hover and active states (-1px translate).

## 7. Anti-Patterns (Banned)
- **No Inter:** Exclusively use Lora/Nunito.
- **No Centered Heros:** Force asymmetric split-screen balance.
- **No 3-column equal grids:** Use Bento or Z-axis staggered layouts.
- **No Pure Black (#000000):** Use Matte Charcoal.
- **No emojis or generic icons.**
