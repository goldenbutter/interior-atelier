# Premium

Editorial Norwegian interior-design prototype with the heavier motion vocabulary, larger section set, and richer component library compared to the classic tier.

## Local dev

```bash
npm install         # one-time
npm run dev         # http://localhost:3000
```

(Classic runs on `:3001`, premium on `:3000` — run both in parallel from separate terminals.)

## What's in this tier

- Editorial Norwegian (Bokmål) hero with **scroll-driven explode**: headline words scatter outward as the user scrolls and reassemble on scroll-up. Behind the headline, a static Whisk-generated still life sits with a slow ambient "breathing" motion (gentle scale + drift, ~22s loop) so the hero never reads as fully frozen
- **Doppelrand "double-bezel"** card framing throughout (signature taste-skill pattern)
- **Magnetic CTA buttons** with button-in-button trailing-icon physics
- **Press marquee** — Norwegian + international (Bo Bedre, Bonytt, Plaza Interiør, Boligpluss, Elle Decoration, World of Interiors, Wallpaper\*, AD)
- **Philosophy** — pull-quote, founding story, masonry photo grid (full colour)
- Five-discipline services list on dark canvas
- **Asymmetric projects grid** with Doppelrand frames — five projects total, the fifth (`Solhøgda · Frogner, Oslo`) spans both columns at 16:9 as a wide solo card. All cards desaturate to monochrome by default; hover (desktop) or tap (mobile) brings the colour back. Mobile tap auto-reverts to monochrome after 2 seconds
- Four-step process timeline
- **Material library** — 6 macro material samples (Røros Tweed wool, Hedmark eik, travertin, lin, messing, skinn) plus a 7th wide context tile showing the same materials assembled in a real interior
- **Testimonials wall** — three editorial-format quotes with star ratings
- **Service area** — stylised SVG map of Trøndelag with Orkanger pinpointed (working radius circle, surrounding settlements)
- Full contact form with Norwegian privacy note
- Cookie banner (GDPR-friendly)
- **Language toggle placeholder** in nav (NO active, EN visible-but-disabled — reserves space for `src/lib/copy/en.ts` per real-client engagement)
- **Floating glass mobile menu** — small edge-rounded card anchored top-right, semi-transparent with backdrop blur, tap-outside-to-close. Compact list of nav links
- **Open Graph + Twitter card metadata** wired in `app/layout.tsx` so LinkedIn / WhatsApp / Twitter previews show the hero image rather than a bare favicon
- **Vercel Web Analytics** wired via `<Analytics />`
- Identity from `src/lib/brand.ts` (`@shared/brand`), all copy from `src/lib/copy/no.ts` (`@shared/copy/no`)

## Hero imagery

The hero `<Image>` references `/assets/img/lysning-hero.jpg`. The committed version is a Whisk-generated still (16:9 horizontal, angled mid-century sofa with travertine coffee table, brass lamp, paper standing lamp, terracotta urn, framed architectural print). Source prompts live in [scripts/whisk-prompts.md](../../scripts/whisk-prompts.md) (Run 9). Replace with a per-customer hero by regenerating from the same prompt with the studio's actual room references.

## Stripe hook (deferred to per-client)

`src/lib/brand.ts` exposes `payments: { stripeProductId: null, consultationFeeNok: null }`. When a real client wants paid consultations, set those fields and uncomment the Stripe Checkout block in `<Contact />`'s form handler.

## Vercel deploy

| | |
|---|---|
| Framework Preset | Next.js |
| **Root Directory** | `prototypes/premium` |
| Build Command | (default) |
| Output Directory | (default) |
| Install Command | `npm install` |
| Ignored Build Step | `git diff HEAD^ HEAD --quiet ./` |
| Domain | `demo-lysning-premium.ibithun.com` |

```bash
vercel --cwd prototypes/premium
vercel --cwd prototypes/premium --prod
```

## Stack

- Next.js 16 · React 19 · framer-motion 12 · Tailwind v4 · Phosphor icons
- Cormorant Garamond · Geist · Geist Mono
- Brand identity in `src/lib/brand.ts`, copy in `src/lib/copy/no.ts`
- `@vercel/analytics` for traffic + Web Vitals
- `sharp` + `png-to-ico` for the brand badge logo + multi-resolution favicon (run `node scripts/remove-bg.mjs` from repo root to regenerate)
