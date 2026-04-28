@AGENTS.md

# Project Conventions — Interior Atelier

## Imagery

All project imagery lives in [public/assets/img/](public/assets/img/). Reference it from components as an absolute URL:

```tsx
<Image src="/assets/img/maison-riviere.jpg" alt="…" fill />
```

- **Do not** use remote image URLs (Unsplash, CDNs, etc.) in components. If you need a new photo, drop the file in `public/assets/img/` and link it locally.
- **Do not** add entries to `next.config.ts` `images.remotePatterns` — the config is intentionally empty. Keeping imagery local means no hotlink surprises, deterministic builds, and full offline dev.
- Filenames should be **semantic and kebab-case** — matching the project or section they belong to (`maison-riviere.jpg`, `charlwood-house.jpg`), not the source ID.
- Prefer `<Image fill />` inside an explicitly sized parent; provide a meaningful `sizes` prop for responsive loading.
- Place any SVGs/icons that aren't covered by `@phosphor-icons/react` under `public/assets/img/` as well.

## Folder layout

```
public/
  assets/
    img/            ← all raster + bespoke SVG imagery
  *.svg             ← Next.js starter glyphs (safe to remove when unused)
src/
  app/              ← App Router entry, layout.tsx, globals.css
  components/       ← Section components (PascalCase.tsx)
```

## Fonts & design tokens

- Fonts are loaded via `next/font/google` in [src/app/layout.tsx](src/app/layout.tsx) — `Cormorant_Garamond` for display, `Inter` for body. Do not inline `<link>` tags for Google Fonts.
- All colour, spacing, and typographic tokens live in [src/app/globals.css](src/app/globals.css) under `:root` and `@theme inline` (Tailwind v4). Add new tokens there rather than hard-coding hex values in components.

## Motion

- `framer-motion` is the only animation library. Any component using it **must** start with `"use client"`.
- Reuse the shared easing tuple `const ease = [0.22, 1, 0.36, 1] as const;` for consistency across sections.

## Attribution

Footer and any "built by" surface must credit **Bithun** ("Developed by Bithun" / "Utviklet av Bithun"). Do not introduce AI-tool attribution anywhere in the codebase.
