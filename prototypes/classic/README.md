# Classic

The lower-intensity Lysning Studio prototype. Editorial Nordic, deliberately quieter than premium — fewer sections, no JS animation framework, smaller bundle.

## Local dev

```bash
npm install         # one-time
npm run dev         # http://localhost:3001
```

(Premium runs on `:3000`, classic on `:3001`, so you can run both in parallel.)

## What's in this tier

- Editorial Norwegian (Bokmål) hero with split layout — headline + body on the left, full-bleed Bjørkely interior shot on the right
- **Philosophy** section with quote + masonry photo grid
- Five-discipline services list on dark canvas
- **Elvebooking-style accordion gallery** — click an image strip to expand
- Four-step process timeline
- Full contact form (name / email / message)
- Cookie banner (GDPR-friendly)
- **Open Graph + Twitter card metadata** wired in `app/layout.tsx` so LinkedIn / WhatsApp / Twitter previews show the hero image rather than a bare favicon
- **Vercel Web Analytics** wired via `<Analytics />`
- Identity from `src/lib/brand.ts` (`@shared/brand`), all copy from `src/lib/copy/no.ts` (`@shared/copy/no`)

## What's NOT in this tier (intentionally — see premium)

- No `framer-motion` (CSS + IntersectionObserver only, smaller JS bundle)
- No scroll-driven hero explode
- No language toggle
- No press marquee / material library / testimonials wall / service-area map
- No Stripe / paid consultation flow
- No magnetic CTAs / button-in-button physics
- No floating glass mobile menu (classic uses a full-screen mobile nav drawer)

## Vercel deploy

| | |
|---|---|
| Framework Preset | Next.js |
| **Root Directory** | `prototypes/classic` |
| Build Command | (default) |
| Output Directory | (default) |
| Install Command | `npm install` |
| Ignored Build Step | `git diff HEAD^ HEAD --quiet ./` |
| Domain | `demo-lysning-classic.ibithun.com` |

```bash
vercel --cwd prototypes/classic
vercel --cwd prototypes/classic --prod
```

## Stack

- Next.js 16 · React 19 · Tailwind v4 · Phosphor icons (no `framer-motion` here)
- Cormorant Garamond · Geist · Geist Mono
- Brand identity in `src/lib/brand.ts`, copy in `src/lib/copy/no.ts`
- `@vercel/analytics` for traffic + Web Vitals
