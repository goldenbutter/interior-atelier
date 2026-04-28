# Premium — NOK 19,999

The flagship Lysning Studio template — primary sales focus. Editorial Norwegian boutique studio with full taste-skill design pass and the scroll-driven hero explode.

## Local dev

```bash
npm install         # one-time
npm run dev         # http://localhost:3000
```

(Classic runs on `:3001`, premium on `:3000` — run both in parallel from separate terminals.)

## What's in this tier

- Editorial Norwegian (Bokmål) hero with **scroll-driven explode**: headline words scatter outward as the user scrolls, while a Whisk-generated 360° pan video plays underneath. Reassembles on scroll-up
- **Doppelrand "double-bezel"** card framing throughout (signature taste-skill pattern)
- **Magnetic CTA buttons** with button-in-button trailing-icon physics
- Press marquee — Norwegian + international (Bo Bedre, Bonytt, Plaza Interiør, Boligpluss, Elle Decoration, World of Interiors, Wallpaper\*, AD)
- Philosophy + masonry photo grid
- Five-discipline services list on dark canvas
- Asymmetric projects grid with Doppelrand frames
- Four-step process timeline
- **Material library** — bento grid of Røros Tweed wool, Hedmark eik, travertin, lin, messing, skinn samples
- **Testimonials wall** — three editorial-format quotes with star ratings
- **Service area** — stylised SVG map of Trøndelag with Orkanger pinpointed (working radius circle, surrounding settlements)
- Full contact form with Norwegian privacy note
- Cookie banner (GDPR-friendly)
- **Language toggle placeholder** in nav (NO active, EN visible-but-disabled — reserves space for `shared/copy/en.ts` per real-client engagement)
- Lysning Studio identity from `@shared/brand`, all copy from `@shared/copy/no`

## Whisk video integration

The hero `<video>` element references `/generated/videos/lysning-hero-360.mp4`. This file is **gitignored** and generated manually:

1. Run `npm run gen:images:premium` from repo root (needs `GEMINI_API_KEY` in `.env`) — generates the seed image at `public/generated/img/lysning-hero.jpg`
2. Open [labs.google/fx](https://labs.google/fx) → Whisk → image-to-video
3. Use the prompt in [scripts/whisk-prompts.md](../../scripts/whisk-prompts.md)
4. Save MP4 to `public/generated/videos/lysning-hero-360.mp4`

Until the MP4 exists, the hero falls back to the static image (handled by `<video poster=...>` + `<source>`).

## Stripe hook (deferred to per-client)

`shared/brand.ts` exposes `payments: { stripeProductId: null, consultationFeeNok: null }`. When a real client wants paid consultations, set those fields and uncomment the Stripe Checkout block in `<Contact />`'s form handler.

## Vercel deploy

| | |
|---|---|
| Framework Preset | Next.js |
| **Root Directory** | `prototypes/premium` |
| Build Command | (default) |
| Output Directory | (default) |
| Install Command | `npm install` |
| Domain | `demo-lysning-premium.ibithun.com` |

```bash
vercel --cwd prototypes/premium
vercel --cwd prototypes/premium --prod
```

## Adapting for a real customer

See [scripts/customer-fork.md](../../scripts/customer-fork.md) at repo root.

## Stack

- Next.js 16 · React 19 · framer-motion 12 · Tailwind v4 · Phosphor icons
- Cormorant Garamond · Geist · Geist Mono
- Brand identity in [`shared/brand.ts`](../../shared/brand.ts), copy in [`shared/copy/no.ts`](../../shared/copy/no.ts)
