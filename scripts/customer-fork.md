# Customer fork recipe

How to clone a prototype tier into a real-customer project.

## 1. Pick a tier and copy

```bash
# from repo root
mkdir -p customers
cp -r prototypes/premium customers/<studio-slug>
# or: cp -r prototypes/classic customers/<studio-slug>
```

## 2. Edit the brand identity

Open `shared/brand.ts` and either:

- **Override globally** by editing the file directly (only works if this customer is the only live deployment from this repo)
- **Override per-customer** by creating `customers/<studio-slug>/src/brand.ts` that imports the base and spreads with overrides:

```ts
import { brand as base } from "@shared/brand";
export const brand = {
  ...base,
  name: "Hansen Interiør",
  monogram: "H",
  founder: { name: "Astrid Hansen", role: "Innehaver & interiørarkitekt" },
  address: { street: "Storgata 18", postalCode: "7300", city: "Orkanger", region: "Trøndelag", country: "Norge" },
  contact: { ...base.contact, email: "post@hansen-interior.no", phone: "+47 ..." },
} as const;
```

Then update `customers/<studio-slug>/src/app/page.tsx` (and any imports) to point at the local override.

## 3. Edit Norwegian copy where the studio voice is specific

`shared/copy/no.ts` is generic Lysning-voice. For a real client, copy the file to `customers/<studio-slug>/src/copy.ts` and rewrite the founding story (`philosophy.bodyP1`, `bodyP2`), pull-quote, and any project descriptions to match the actual studio.

## 4. Regenerate imagery for the new brand

Edit `scripts/prompts/lysning-stills.json` (or copy it to `scripts/prompts/<studio-slug>-stills.json` with new IDs) and rewrite each prompt around the real studio's:

- Geographic region (replace "Bygdøy / Hardanger / Bergen" with their actual project locations)
- Material palette (oak / linen / oat wool → whatever they specify)
- Project names (real ones the client gives you)

Then:

```bash
cp .env.example .env  # if not already
# paste your GEMINI_API_KEY into .env
npx tsx scripts/generate-images.ts --tier premium
```

Generated images land in `customers/<studio-slug>/public/generated/img/` (gitignored — regenerate per environment).

## 5. Generate videos (premium tier only) via Whisk

Per `scripts/whisk-prompts.md`, but rewrite the seed image references and prompts around the new brand. Save MP4s into `customers/<studio-slug>/public/generated/videos/`.

## 6. Wire booking, payments, analytics

- **Cal.com:** create a per-client account → paste the `data-cal-link` into the new override of `brand.ts` (add a `booking: { calLink: "..." }` field).
- **Stripe (if paid consultation):** set `payments.stripeProductId` and `payments.consultationFeeNok` in the override. Uncomment the Stripe Checkout block in `<BookingForm />`.
- **Vercel Web Analytics:** add `<Analytics />` to `app/layout.tsx`.

## 7. Deploy

Create a new Vercel project. Settings:

- **Root Directory:** `customers/<studio-slug>` (or repo root + custom build cmd — see per-prototype README)
- **Domain:** `<studio-slug>.no` or whatever the client owns
- **Env vars:** none for static-only; `STRIPE_*` if payments are enabled

## 8. Hand-over

- Add a row to `customers/README.md` mapping `<studio-slug>` → contact, deploy URL, status
- Commit `customers/<studio-slug>/` to the same monorepo (private repo recommended once real customers land)

---

## Future: skill-driven flow

This recipe will be packaged as the `norway-interior-designer` Claude Code skill. After installation, a single prompt like *"Build a website for Astrid Hansen Interiør in Orkanger, premium tier"* will execute steps 1-6 automatically, leaving steps 7-8 for the human.
