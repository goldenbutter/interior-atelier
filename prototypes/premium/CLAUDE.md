@../../AGENTS.md

# Prototype Conventions — Premium (NOK 19,999)

This is the **premium-tier** demo template for Lysning Studio. Brand identity is in [shared/brand.ts](../../shared/brand.ts) — never hard-code studio name, address, or founder details inline. Norwegian copy lives in [shared/copy/no.ts](../../shared/copy/no.ts).

## Imagery

All imagery lives in [public/assets/img/](public/assets/img/) plus AI-generated assets in [public/generated/](public/generated/) (gitignored, regenerated via `scripts/generate-images.ts` at the repo root).

```tsx
<Image src="/assets/img/lysning-hero.jpg" alt="…" fill />
```

- **Do not** use remote image URLs (Unsplash, CDNs). Drop new files in `public/assets/img/` (committed) or generate into `public/generated/` (ignored).
- **Do not** add entries to `next.config.ts` `images.remotePatterns` — kept intentionally empty.
- Filenames: kebab-case, brand-prefixed (`lysning-hero.jpg`, `lysning-bjorkely.jpg`).
- Prefer `<Image fill />` inside an explicitly sized parent; provide a meaningful `sizes` prop.

## Folder layout

```
public/
  assets/img/         ← committed brand imagery + fallbacks
  generated/          ← AI-generated (gitignored, populated by scripts/generate-images.ts)
src/
  app/                ← App Router entry, layout.tsx, globals.css
  components/         ← Section components (PascalCase.tsx)
```

## Fonts & design tokens

- Fonts via `next/font/google` in [src/app/layout.tsx](src/app/layout.tsx) — `Cormorant_Garamond` for display, `Geist` for body, `Geist_Mono` for editorial mono. No `<link>` tags.
- Colour, spacing, type tokens in [src/app/globals.css](src/app/globals.css) under `:root` and `@theme inline` (Tailwind v4). Never hard-code hex values in components.

## Motion

- `framer-motion` only. Components using it must start with `"use client"`.
- Reuse the easing tuple `const ease = [0.22, 1, 0.36, 1] as const;` everywhere.
- Premium-tier signature animations: scroll-driven hero explode, magnetic CTAs, perpetual ambient blob, double-bezel containers. Don't strip these — they justify the price tier.

## Premium-only features

- **Language toggle button** in nav (NO/EN visible, no actual i18n in v1 — copy structure ready for future expansion via `shared/copy/en.ts`).
- **Scroll-driven 360° hero with explode-on-scroll** of furniture and headline text.
- **Material library**, **press marquee**, **testimonials wall**, **service-area Trøndelag map**.
- **Stripe hook** in `shared/brand.ts` (currently `null` — wired in per real client).

## Attribution

Footer credits **"Utviklet av Bithun"** (Norwegian default). Never introduce AI-tool attribution.
