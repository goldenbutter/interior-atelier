# Interior Atelier — Norway Interior Designer Website Templates

A monorepo of demo websites for cold-pitching to interior designers in Norway who don't yet own a website. Two tiers, one fictional brand (Lysning Studio · Orkanger), Bokmål default — both shipped to production on Vercel.

| Tier | Price | Folder | Live URL |
|---|---|---|---|
| Classic | 9,999 kr | [prototypes/classic/](prototypes/classic/) | **[demo-lysning-classic.ibithun.com](https://demo-lysning-classic.ibithun.com)** |
| Premium | 19,999 kr | [prototypes/premium/](prototypes/premium/) | **[demo-lysning-premium.ibithun.com](https://demo-lysning-premium.ibithun.com)** |
| Ultra Premium | 34,999 kr | *(deferred)* | — |

Each site is a self-contained Next.js 16 app deployed to its own Vercel project, auto-deploying from `master` via GitHub. Only the prototype that actually changed in a push redeploys (Vercel "Skip deployments" toggle on each project's Root Directory).

## Preview

> Drop GIFs / screenshots into `docs/media/` to fill these in.

### Classic — `demo-lysning-classic.ibithun.com`

![Classic preview](docs/media/classic-preview.gif)

### Premium — `demo-lysning-premium.ibithun.com`

![Premium preview](docs/media/premium-preview.gif)

<details>
<summary>Static screenshots</summary>

| Classic | Premium |
|---|---|
| ![Classic homepage](docs/media/classic-home.png) | ![Premium homepage](docs/media/premium-home.png) |
| ![Classic gallery](docs/media/classic-gallery.png) | ![Premium material library](docs/media/premium-materials.png) |

</details>

## Local dev

Each prototype is its own self-contained Next.js app. Run them independently:

```bash
# Premium
cd prototypes/premium
npm install      # only needed once
npm run dev      # http://localhost:3000

# Classic (separate terminal, different port)
cd prototypes/classic
npm install
npm run dev      # http://localhost:3001
```

## Brand & content

- Studio identity (per prototype): `prototypes/<tier>/src/lib/brand.ts`, imported as `@shared/brand`. Each tier carries its own copy so deploys are self-contained — no cross-folder imports during build.
- Norwegian copy (per prototype): `prototypes/<tier>/src/lib/copy/no.ts`, imported as `@shared/copy/no`. Bokmål default; English variant deferred to v2 of premium.
- Brand assets (committed): `prototypes/<tier>/public/assets/img/lysning-*.{jpg,png}`.
- AI image prompts: [scripts/prompts/](scripts/prompts/), generation via [scripts/generate-images.ts](scripts/generate-images.ts) (paid Gemini path; needs `GEMINI_API_KEY`).
- Whisk prompt library (free fallback for stills + video): [scripts/whisk-prompts.md](scripts/whisk-prompts.md).
- Background-removal pipeline for the brand badge logo: [scripts/remove-bg.mjs](scripts/remove-bg.mjs).

## Deploy

- Each prototype is a separate Vercel project (`demo-lysning-classic`, `demo-lysning-premium`) under the `goldenbutters-projects` team, both connected to `goldenbutter/interior-atelier`.
- **Root Directory** on each Vercel project = `prototypes/<tier>`, with **Skip deployments when no changes to root directory** enabled — pushing a change to one prototype only redeploys that prototype.
- Custom domains live on `ibithun.com` (DNS at dns-parking.com, CNAMEd to Vercel's per-project edge endpoint).
- Manual deploys via CLI from inside a prototype: `npx vercel --prod --yes`.

## Adapting for a real customer

When you sign a real interior designer, fork the matching tier:

```bash
cp -r prototypes/premium customers/<studio-slug>
# Edit src/lib/brand.ts (and src/lib/copy/no.ts) for the new studio
# Replace public/assets/img/lysning-*.* with the studio's actual assets
# Create a new Vercel project pointing at customers/<studio-slug>/
```

Long-term, this workflow is packaged as the `norway-interior-designer` Claude Code skill so future agents can do the fork in one prompt.

## Stack

- Next.js 16 (Turbopack) · React 19 · Tailwind v4 · framer-motion · @phosphor-icons/react
- Cormorant Garamond (display) · Geist (body) · Geist Mono (editorial)
- Nano Banana (Gemini 2.5 Flash Image) for stills · Whisk / Google Labs Flow for video (manual generation)
- Sharp for the badge-logo background-removal pipeline (`scripts/remove-bg.mjs`)

Developed by **Bithun**.
