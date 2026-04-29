# Interior Atelier — Demo websites for a fictional Norwegian interior design studio

**A self-directed UX/UI study** exploring how the same brand reads across different design intensities. Two distinct tiers built around one fictional studio (Lysning Studio · Orkanger), each with its own visual language, motion vocabulary, and component set. All copy is in Norwegian Bokmål.

## Purpose

I wanted to see how far the same content stretches across different design temperaments — a quiet, deliberately restrained editorial site versus a more flagship, scroll-driven, motion-heavy one — and how that affects everything downstream: typography weight, colour palette restraint, image cadence, even what "press marquee" or "material library" feels appropriate where. Lysning Studio is a fictional Trøndelag-based interior architect, used as a believable canvas to host both versions.

## Live demos

| Tier | Folder | URL |
|---|---|---|
| Classic | [prototypes/classic/](prototypes/classic/) | **[demo-lysning-classic.ibithun.com](https://demo-lysning-classic.ibithun.com)** |
| Premium | [prototypes/premium/](prototypes/premium/) | **[demo-lysning-premium.ibithun.com](https://demo-lysning-premium.ibithun.com)** |

Each tier is a self-contained Next.js 16 app deployed to its own Vercel project, auto-deploying from `master` on push.

## Preview

> Drop GIFs / screenshots into `docs/media/` to fill these in.

### Classic

![Classic preview](docs/media/classic-preview.gif)

### Premium

![Premium preview](docs/media/premium-preview.gif)

<details>
<summary>Static screenshots</summary>

| Classic | Premium |
|---|---|
| ![Classic homepage](docs/media/classic-home.png) | ![Premium homepage](docs/media/premium-home.png) |
| ![Classic gallery](docs/media/classic-gallery.png) | ![Premium material library](docs/media/premium-materials.png) |

</details>

## What's different between the two

**Classic** leans editorial-quiet: no `framer-motion`, a single IntersectionObserver-driven reveal hook, an Elvebooking-style accordion gallery, monochrome-to-colour philosophy hover, a small set of sections (hero, philosophy, services, projects, process, contact), simple fully-static cards.

**Premium** leans flagship: scroll-driven hero "explode" effect over a static editorial still that breathes with a slow ambient scale-and-drift, "Doppelrand" double-bezel framing, magnetic CTA buttons, press marquee, seven-tile material library (six material macros + one wide context shot), monochrome-to-colour project cards (hover desktop, tap-with-2s-revert mobile), testimonials wall, stylised SVG service-area map of Trøndelag, language-toggle placeholder in the nav, floating glass mobile menu. Uses `framer-motion` throughout.

Both share the same fictional brand identity, Norwegian copy, fonts (Cormorant Garamond + Geist + Geist Mono), and the same Doppelrand colour palette (bone, cream, clay, charcoal, graphite, stone).

## Tech stack

- **Framework:** Next.js 16 (Turbopack) · React 19 · Tailwind v4
- **Motion:** `framer-motion` 12 (premium only) · IntersectionObserver-driven CSS reveal (classic)
- **Icons:** `@phosphor-icons/react`
- **Typography:** Cormorant Garamond (display) · Geist (body) · Geist Mono (editorial), all via `next/font/google`
- **Imagery:** curated stills generated via Whisk (labs.google) and Nano Banana (Gemini 2.5 Flash Image); chroma-keyed badge logo via Sharp + flood-fill. A premium hero video via Whisk image-to-video is documented in `scripts/whisk-prompts.md` for future iterations but is not wired into v1 — the v1 hero uses a static still with a CSS ambient-breathing animation
- **Hosting:** two Vercel projects, both connected to this GitHub repo with Root Directory pinned per prototype and "Skip deployments when no changes to root" enabled — pushing classic-only changes never rebuilds premium

## Local dev

Each prototype is its own self-contained Next.js app:

```bash
# Premium — http://localhost:3000
cd prototypes/premium
npm install
npm run dev

# Classic — http://localhost:3001  (separate terminal)
cd prototypes/classic
npm install
npm run dev
```

## Repo layout

```
prototypes/
  classic/                    # Classic tier — Next.js app
    src/
      app/                    # App Router entry, layout, globals.css, icon.png (favicon)
      components/             # Section components (PascalCase.tsx)
      lib/
        brand.ts              # Studio identity (imported as @shared/brand)
        copy/no.ts            # Norwegian Bokmål copy (imported as @shared/copy/no)
        useReveal.ts          # IntersectionObserver-driven reveal hook
    public/assets/img/        # Brand stills (lysning-*.{jpg,png})
  premium/                    # Premium tier — same shape, framer-motion, more sections

scripts/
  generate-images.ts          # Nano Banana / Gemini Flash image generation (paid path)
  whisk-prompts.md            # Whisk prompt library (free fallback for stills + video)
  remove-bg.mjs               # Sharp-based flood-fill chroma key for the badge logo
  prompts/                    # Versioned image-generation prompts

docs/
  media/                      # README screenshots & GIFs (drop targets)
```

## Notes on the build process

- **Per-prototype source of truth** for brand identity. Each prototype carries its own `src/lib/brand.ts` and `src/lib/copy/no.ts`, imported via the `@shared/*` path alias. The earlier monorepo-shared `shared/` folder at the repo root was inlined into each prototype because Vercel's per-project Root Directory setting only uploads files inside the specified subfolder during build.
- **Skip-deployments isolation** so each prototype builds independently. With the GitHub integration connected, a push that only touches `prototypes/classic/**` redeploys only classic; same for premium. Root-only doc changes (this README) redeploy neither.
- **Brand badge logo** is a flood-fill chroma-key derivative of a single source PNG — cream interior preserved inside the circle outline, transparent halo outside, so the same asset reads on both light and dark surfaces without needing per-context variants. See [scripts/remove-bg.mjs](scripts/remove-bg.mjs).

Developed by **Bithun**.
