@AGENTS.md

# Interior Atelier — Monorepo Conventions

This repo holds **two demo websites** for Lysning Studio (a fictional Norwegian interior-design studio in Orkanger). They are templates we pitch at three price points to real interior designers in Norway.

| Folder | Tier | Price | Live URL | Vercel project |
|---|---|---|---|---|
| [prototypes/classic/](prototypes/classic/) | Classic | NOK 9,999 | [demo-lysning-classic.ibithun.com](https://demo-lysning-classic.ibithun.com) | `demo-lysning-classic` |
| [prototypes/premium/](prototypes/premium/) | Premium | NOK 19,999 | [demo-lysning-premium.ibithun.com](https://demo-lysning-premium.ibithun.com) | `demo-lysning-premium` |
| *(future)* | Ultra Premium | NOK 34,999 | — | — |

Both Vercel projects are connected to `goldenbutter/interior-atelier` on the `master` branch with Root Directory = `prototypes/<tier>` and "Skip deployments when no changes to the root directory" **enabled**. Pushing a change to one prototype redeploys only that one.

When working **inside a prototype**, follow that prototype's [CLAUDE.md](prototypes/premium/CLAUDE.md). Conventions below apply across the whole monorepo.

## Brand identity

- **Single source of truth (per prototype):** `prototypes/<tier>/src/lib/brand.ts`, imported as `@shared/brand`. Each tier carries its own copy so deploys (Vercel Root Directory = the prototype folder) are self-contained — no cross-folder imports.
- **Norwegian copy (per prototype):** `prototypes/<tier>/src/lib/copy/no.ts`, imported as `@shared/copy/no`. Bokmål default. English variant (`en.ts`) deferred to v2 of the premium tier.
- **Demo brand:** Lysning Studio · Ingvild Lysne · Orkdalsveien 47, 7300 Orkanger · est. 2018.
- When forking a prototype for a real customer, the only file that should need editing for identity changes is the prototype's own `src/lib/brand.ts` (and asset filenames). Keep both prototypes' `brand.ts` in sync by hand if you change one — there is no shared parent file.

## Imagery & video

- Curated stills committed under `prototypes/<tier>/public/assets/img/` (per-prototype, semantic kebab-case filenames).
- AI-generated assets land in `prototypes/<tier>/public/generated/` — **gitignored** and reproducible from versioned prompts in [scripts/prompts/](scripts/prompts/).
- Image generation (Nano Banana / Gemini Flash Image) is automated via [scripts/generate-images.ts](scripts/generate-images.ts). Requires `GEMINI_API_KEY` in `.env`.
- Video generation is **manual** via Whisk (labs.google) — prompts collected in [scripts/whisk-prompts.md](scripts/whisk-prompts.md). User runs them, drops MP4s into `prototypes/<tier>/public/generated/videos/`.

## Language

- All copy in **Norwegian Bokmål**. No mixed Norwegian/English UI in v1.
- Premium tier reserves space for an EN toggle (visible button, non-functional in v1). Translations land in `shared/copy/en.ts` per real-client engagement.

## Attribution rule

Every footer / "built by" surface credits **Bithun** ("Utviklet av Bithun" / "Developed by Bithun"). Never introduce AI-tool attribution anywhere — code, comments, commits, or PR descriptions.

## Imagery pipeline notes

- The Lysning logo at `prototypes/<tier>/public/assets/img/lysning-logo.png` is a **circular badge** — cream interior preserved inside the circle, transparent halo outside — produced by [scripts/remove-bg.mjs](scripts/remove-bg.mjs) (sharp + flood-fill from the four corners). The pristine pre-processing source lives at `_local/logos/` (gitignored) and a committed copy at `scripts/assets/lysning-logo-source.png` for reproducibility.
- Logos must read on **both light and dark surfaces** without per-context variants. Default to badge-style designs; for line-art logos with no enclosing shape, recolour to a mid-tone (e.g. `clay-deep` `#8a6448` or `stone` `#7a736a`).

## Adding a new prototype variant

1. `cp -r prototypes/premium prototypes/<new-tier>` (or from `classic` if lower-end)
2. Update its `CLAUDE.md` and `package.json#name`
3. Override anything tier-specific in the new copy
4. Add a new Vercel project pointing at `prototypes/<new-tier>/` — connect to GitHub, set Root Directory, enable "Skip deployments"

## Adding a new real-customer site

Future agents: see [scripts/customer-fork.md](scripts/customer-fork.md) for the cloning workflow.
