@../../AGENTS.md

# Prototype Conventions — Classic (NOK 9,999)

The **classic-tier** demo template for Lysning Studio. Aesthetic: editorial Nordic, deliberately quieter than premium. Brand identity in [shared/brand.ts](../../shared/brand.ts), Norwegian copy in [shared/copy/no.ts](../../shared/copy/no.ts).

## Imagery

```tsx
<Image src="/assets/img/lysning-bjorkely.jpg" alt="…" fill />
```

- Curated stills committed under [public/assets/img/](public/assets/img/) (semantic kebab-case, brand-prefixed: `lysning-*.jpg`).
- AI-generated assets land in `public/generated/` (gitignored, regenerated via `npm run gen:images:classic` from repo root).
- The current `public/assets/img/lysning-*.jpg` files are placeholder fallbacks. Replace with `gen:images` output once happy with prompt iteration.
- No remote URLs. No `images.remotePatterns` entries.

## Folder layout

```
public/
  assets/img/         ← committed brand imagery (lysning-* fallbacks)
  generated/          ← AI-generated (gitignored)
src/
  app/                ← App Router entry (layout, page, globals.css)
  components/         ← Section components (PascalCase.tsx)
  lib/                ← Reveal hook, small client helpers
```

## Stack constraints (deliberate for the price tier)

- **No `framer-motion`.** Animations use CSS transitions + a single IntersectionObserver-driven reveal hook ([src/lib/useReveal.ts](src/lib/useReveal.ts)). Keeps JS bundle small and load fast.
- Same fonts as premium (Cormorant Garamond + Geist + Geist Mono via `next/font/google`).
- Tailwind v4 with brand tokens defined in [src/app/globals.css](src/app/globals.css). Add new tokens there, not as inline hex.

## Signature components

- **[Gallery.tsx](src/components/Gallery.tsx)** — Elvebooking-style accordion image-strip selector. The defining feature of the classic tier. Click to expand, staggered IntersectionObserver entrance.
- **[Philosophy.tsx](src/components/Philosophy.tsx)** — masonry photo grid with monochrome-to-colour hover (about-page pattern from Elvebooking).
- **[CookieBanner.tsx](src/components/CookieBanner.tsx)** — GDPR/Norway-friendly consent bar.

## Not in classic (deferred to premium)

- Scroll-driven hero explode
- Whisk-generated 360° hero video
- Magnetic CTAs / button-in-button physics
- Press marquee, material library, testimonials wall, service-area map
- Language toggle (no EN button — classic is single-language only)
- Stripe / paid-consultation flow

## Local dev

```bash
cd prototypes/classic
npm install      # one-time
npm run dev      # http://localhost:3001  (note: port 3001 to coexist with premium on 3000)
```

## Attribution

Footer shows **«Utviklet av Bithun»**. Never introduce AI-tool attribution.
