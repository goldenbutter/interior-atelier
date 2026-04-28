# Classic — NOK 9,999

The lower-tier Lysning Studio template. Editorial, fast, deliberately quieter than premium.

## Local dev

```bash
npm install         # one-time
npm run dev         # http://localhost:3001
```

(Premium runs on `:3000`, classic on `:3001`, so you can run both in parallel.)

## What's in this tier

- Editorial Norwegian (Bokmål) hero with split layout
- Philosophy section with quote + masonry photo grid (monochrome → colour on hover)
- Five-discipline services list on dark canvas
- **Elvebooking-style accordion gallery** — click an image strip to expand
- Four-step process timeline
- Full contact form (name / email / message)
- Cookie banner (GDPR-friendly)
- Lysning Studio identity from `@shared/brand`, all copy from `@shared/copy/no`

## What's NOT in this tier (intentionally — see premium)

- No `framer-motion` (CSS + IntersectionObserver only, smaller JS bundle)
- No scroll-driven hero explode
- No Whisk-generated 360° hero video
- No language toggle
- No press marquee / material library / testimonials wall / service-area map
- No Stripe / paid consultation flow
- No magnetic CTAs / button-in-button physics

## Vercel deploy

Recommended project settings (see `vercel.json`):

| | |
|---|---|
| Framework Preset | Next.js |
| **Root Directory** | `prototypes/classic` |
| Build Command | (default) |
| Output Directory | (default) |
| Install Command | `npm install` |
| Domain | `demo-lysning-classic.ibithun.com` |

```bash
# After linking via `vercel link`:
vercel --cwd prototypes/classic
vercel --cwd prototypes/classic --prod
```

## Adapting for a real customer

See [scripts/customer-fork.md](../../scripts/customer-fork.md) at repo root.

## Stack

- Next.js 16 · React 19 · Tailwind v4 · Phosphor icons (no `framer-motion` here)
- Cormorant Garamond · Geist · Geist Mono
- Brand identity in [`shared/brand.ts`](../../shared/brand.ts), copy in [`shared/copy/no.ts`](../../shared/copy/no.ts)
