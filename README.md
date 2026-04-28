# Interior Atelier — Norway Interior Designer Website Templates

A monorepo of demo websites for cold-pitching to interior designers in Norway who don't yet own a website. Two tiers, one fictional brand (Lysning Studio · Orkanger), Bokmål default.

| Tier | Price | Folder | Domain |
|---|---|---|---|
| Classic | 9,999 kr | [prototypes/classic/](prototypes/classic/) | demo-lysning-classic.ibithun.com |
| Premium | 19,999 kr | [prototypes/premium/](prototypes/premium/) | demo-lysning-premium.ibithun.com |
| Ultra Premium | 34,999 kr | *(deferred)* | — |

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
npm run dev -- --port 3001
```

## Brand & content

- Studio identity: [shared/brand.ts](shared/brand.ts) — single source of truth for both prototypes.
- Norwegian copy: [shared/copy/no.ts](shared/copy/no.ts).
- AI image prompts: [scripts/prompts/](scripts/prompts/), generation via [scripts/generate-images.ts](scripts/generate-images.ts).
- Video prompts (manual via Whisk): [scripts/whisk-prompts.md](scripts/whisk-prompts.md).

## Deploy

Each prototype deploys to its own Vercel project. See per-prototype `vercel.json` and `prototypes/<tier>/README.md` for project settings.

## Adapting for a real customer

When you sign a real interior designer, fork the matching tier:

```bash
cp -r prototypes/premium customers/<studio-slug>
# Edit shared/brand.ts (or create customers/<studio-slug>/brand.ts override)
# Regenerate imagery via scripts/generate-images.ts with new prompts
# Deploy to a new Vercel project
```

Long-term, this workflow is packaged as the `norway-interior-designer` Claude Code skill so future agents can do the fork in one prompt.

## Stack

- Next.js 16 · React 19 · Tailwind v4 · framer-motion · @phosphor-icons/react
- Cormorant Garamond (display) · Geist (body) · Geist Mono (editorial)
- Nano Banana (Gemini 2.5 Flash Image) for stills
- Whisk / Google Labs Flow for video (manual generation)
