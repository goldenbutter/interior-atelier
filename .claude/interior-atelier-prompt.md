# Interior Atelier — Master Briefing & Session Recovery Prompt

> **How to use this file:** Paste the contents of this file as the *first* message of a new Claude Code session if context is lost or if you want to restart a fresh agent on this project. It encodes every locked-in decision and where work currently stands. Edit it as decisions evolve.

---

## 1. Business intent

Bithun is building a **product line of website templates** to cold-pitch to **Norwegian interior designers in/near Orkanger** (Trøndelag) who don't yet own a website.

Three price tiers, each a separate template:

| Tier | Price | Status | Folder |
|---|---|---|---|
| Classic | NOK 9,999 | v1 build in progress | [`prototypes/classic/`](../prototypes/classic/) |
| **Premium** | **NOK 19,999** | **Primary sales focus — v1 build pending** | [`prototypes/premium/`](../prototypes/premium/) |
| Ultra Premium | NOK 34,999 | Deferred (admin dashboard / SaaS bookings) | — |

All three tiers showcase the **same fictional brand** (Lysning Studio) styled differently per tier, so a prospect sees "this is what your business could look like at price A vs price B."

When a real customer signs, an agent will fork the matching tier into `customers/<studio-slug>/` and customise per [scripts/customer-fork.md](../scripts/customer-fork.md).

## 2. Brand identity (single source of truth: [shared/brand.ts](../shared/brand.ts))

- **Name:** Lysning Studio · Norwegian for "clearing in the forest" · monogram = `L`
- **Tagline:** *"Stille rom som husker."* — Quiet rooms that remember.
- **Founder:** Ingvild Lysne, Grunnlegger & kreativ leder
- **Address:** Orkdalsveien 47, 7300 Orkanger, Trøndelag, Norge
- **Founded:** 2018
- **Email:** studio@lysning.no · **Press:** presse@lysning.no · **Phone:** +47 412 80 947
- **Domains:** `demo-lysning-classic.ibithun.com`, `demo-lysning-premium.ibithun.com`

## 3. Locked decisions

| Topic | Decision |
|---|---|
| Language | **Bokmål only** for v1. Premium nav has a placeholder NO/EN toggle (visible button, non-functional) — copy structured for future `shared/copy/en.ts` |
| Norwegian dialect | Bokmål (Trøndelag is mostly Bokmål in commerce) |
| Booking | **Plain contact form** in v1. No Cal.com. No Stripe UI. Stripe hook left as `null` in `shared/brand.ts` for per-client wiring |
| Mood-board PDF lead magnet | **Cut from v1.** Per-client decision later |
| GDPR / cookies | Cookie banner shipped on both tiers |
| Vipps | Replaced by Stripe-hook in `shared/brand.ts` (also currently null) |
| Image generation | **Automated** via Gemini 2.5 Flash Image (Nano Banana). User pastes `GEMINI_API_KEY` into `.env`. Free tier covers everything |
| Video generation | **Manual** via Whisk ([labs.google/fx](https://labs.google/fx)) — no API yet. Prompts in [scripts/whisk-prompts.md](../scripts/whisk-prompts.md), user generates and drops MP4s into `prototypes/premium/public/generated/videos/` |
| Veo 3 paid API | Skipped for v1 (no spend without a real client) |
| Higgsfield (paid premium animation) | Deferred to post-real-client phase |
| Build order | **Classic first** (less work) → screenshot → **Premium** (rebrand from current Interior Atelier code + add scroll-explode, language toggle, premium-only sections) |
| Attribution | Footer says **«Utviklet av Bithun»**. Never AI-tool credit anywhere |

## 4. Premium-tier signature features (NOK 19,999 justification)

- **Scroll-driven hero explode**: Whisk-generated 360° pan video as background; on scroll, furniture and headline text explode/separate via framer-motion + scroll-linked transforms. Rebuilds on scroll-up
- **Language toggle button** (NO/EN, EN inactive in v1)
- **Press marquee** (Bo Bedre, Bonytt, Plaza Interiør, AD, Wallpaper\*, etc.)
- **Material library** grid (textures from Nano Banana)
- **Testimonials wall**
- **Service-area Trøndelag map**
- **Magnetic CTAs** with button-in-button trailing-icon physics
- **Doppelrand "double-bezel" card framing** throughout
- **Perpetual ambient blob** + grain overlay
- **All sections from classic, but with framer-motion stagger entrances**

## 5. Classic-tier constraints (NOK 9,999 justification)

- **No `framer-motion`** — uses CSS transitions + a single IntersectionObserver-driven `useReveal` hook
- Smaller JS bundle target (<100kb)
- Simpler hero (split layout, single still — no video)
- **Elvebooking-style accordion gallery** (the signature classic feature; reference: `C:\Project\orklaElveFiskeBooking\demo-premium-lodge\js\gallery.js`)
- **Photo grid with monochrome → colour on hover** (Elvebooking about-page pattern) used in Philosophy section
- No language toggle, no press marquee, no material library, no testimonials wall, no service-area map
- Cookie banner ✓, GDPR-friendly contact form ✓

## 6. Design system (locked via [taste-skill](https://github.com/Leonxlnx/taste-skill))

The repo's design language follows the **soft-skill / taste-skill Editorial Luxury archetype**. Hard rules:

- **Banned fonts:** Inter, Roboto, Helvetica, Arial. Use **Cormorant Garamond** (display), **Geist** (body), **Geist Mono** (editorial / numbers).
- **Banned:** pure black (`#000000`), neon glows, oversaturated accents, generic 3-column card grids, AI copywriting clichés ("Elevate", "Unleash", "Seamless"), generic placeholder names, Unsplash, `<custom cursor>`.
- **Layout:** asymmetric grids, double-bezel "Doppelrand" card containers (outer shell `rounded-[2rem] p-1.5 ring-1 ring-charcoal/10`, inner core `rounded-[calc(2rem-0.375rem)] bezel-inner`)
- **Motion:** custom cubic-bezier (`cubic-bezier(0.32,0.72,0,1)` or `(0.16,1,0.3,1)`), `active:scale-[0.98]`, magnetic translate on hover, `min-h-[100dvh]` not `h-screen`
- **Colour palette** (CSS variables in `globals.css`): bone `#f4efe6`, cream `#ebe3d3`, sand `#d8cdb8`, clay `#b08666`, clay-deep `#8a6448`, charcoal `#1a1815`, graphite `#2c2824`, stone `#7a736a`, ash `#b4aca0`
- **Eyebrow tags:** `font-mono uppercase tracking-[0.22em] text-stone text-[11px]`
- Reference Elvebooking: `C:\Project\orklaElveFiskeBooking\demo-premium-lodge\` (read-only).

## 7. Repo architecture

```
interior-atelier/
  prototypes/
    classic/                 ← NOK 9,999 — Next.js 16, no framer-motion
      src/{app,components,lib}/
      public/{assets/img,generated}/
    premium/                 ← NOK 19,999 — Next.js 16, framer-motion, taste-skill upgrades
      src/{app,components}/
      public/{assets/img,generated}/
  shared/
    brand.ts                 ← single source of truth (Lysning Studio identity)
    copy/no.ts               ← Bokmål copy library
  scripts/
    generate-images.ts       ← Nano Banana / Gemini 2.5 Flash Image (auto)
    whisk-prompts.md         ← manual Whisk video prompts
    prompts/lysning-stills.json
    customer-fork.md         ← clone-for-real-customer recipe
    README.md
  .claude/
    settings.json            ← project-shared (Playwright MCP allow rules)
    settings.local.json      ← personal (PowerShell allow) — gitignored
    prompt.md                ← THIS FILE
  .env / .env.example        ← GEMINI_API_KEY lives here
  CLAUDE.md / AGENTS.md      ← root conventions
  package.json               ← root scripts (gen:images:*, dev:*)
  README.md                  ← monorepo intro
```

Each prototype is **self-contained** with its own package.json/lockfile/node_modules. `@shared/*` path alias in each tsconfig points at `../../shared/*`.

## 8. Stack

- **Next.js 16.2.3** (Turbopack, App Router, Server Components default, React 19.2.4)
- **Tailwind v4** (`@tailwindcss/postcss`, no `tailwind.config.ts`, tokens in `globals.css` `@theme inline`)
- **TypeScript 5** strict
- **framer-motion 12** (premium only)
- **@phosphor-icons/react 2** (both tiers)
- **tsx** (root, for `scripts/generate-images.ts`)

## 9. Vercel deploy plan

- **Classic Vercel project**: `lysning-classic`, root directory = `prototypes/classic`, domain = `demo-lysning-classic.ibithun.com`
- **Premium Vercel project**: `lysning-premium`, root directory = `prototypes/premium`, domain = `demo-lysning-premium.ibithun.com`
- Both static/SSR-only. No DB, no API routes (yet).
- A `vercel.json` per prototype documents the project settings.

## 10. Asset pipeline

Run from repo root:

```bash
cp .env.example .env       # paste GEMINI_API_KEY from https://aistudio.google.com/apikey
npm install                # one-time, root only (installs tsx)
npm run gen:images         # generates all 12 stills (4 shared + 4 premium-only) into public/generated/img/
npm run gen:images:premium # premium-only
npm run gen:images:classic # classic-only
```

For Whisk videos: see [scripts/whisk-prompts.md](../scripts/whisk-prompts.md). User runs prompts manually, saves MP4s into `prototypes/premium/public/generated/videos/`.

## 11. Local dev

```bash
# premium (port 3000)
cd prototypes/premium && npm install && npm run dev

# classic (port 3001) — separate terminal
cd prototypes/classic && npm install && npm run dev
```

`http://localhost:3000` → premium · `http://localhost:3001` → classic.

## 12. Final phase: skill packaging

After both prototypes ship, package the workflow as the **`norway-interior-designer`** Claude Code skill at `C:\Project\skills\norway-interior-designer\` per Bithun's standard 5-step skill-install workflow:

1. `C:\Project\skills\norway-interior-designer/` folder
2. `.claude-plugin/plugin.json` with name + version + description
3. `skills/norway-interior-designer/SKILL.md` — triggers on prompts like *"build a website for [studio] interior designer in Norway, classic/premium tier"*
4. Register in `C:\Users\bithu\.claude\plugins\installed_plugins.json`
5. Add row to `C:\Project\skills\SKILLS.md`

Skill bundles: prototype templates, Norwegian copy library, brand schema, image-prompt library, Whisk prompt library, customer-fork recipe.

## 13. Implementation gotchas (lessons learned)

- **VSCode Claude Code permission cache** only refreshes on a full window restart, not Reload Window
- **Port 3001/3000 zombies**: Next 16 dev server doesn't always shut down cleanly. Use `Stop-Process -Id <pid> -Force` (not `taskkill`) to kill stragglers. Find via `netstat -ano | findstr :3001`
- **ESM `next.config.ts`**: `__dirname` is **not defined**. Use `import { fileURLToPath } from "node:url"; const here = dirname(fileURLToPath(import.meta.url));`
- **`@phosphor-icons/react/dist/ssr`** does **not** export an `Icon` type — use `as const` arrays
- **IntersectionObserver reveal hooks** need a safety timeout fallback (1.5s) to handle Playwright `fullPage` screenshots and prefers-reduced-motion users
- **Lockfile warnings**: set `turbopack.root: resolve(here)` in each prototype's `next.config.ts` so each is treated as its own workspace root
- **VSCode permission rules** for Playwright are tool-name specific; both `mcp__plugin_playwright_playwright__*` and `mcp__playwright__*` patterns may need to be allowlisted depending on extension version

## 14. Current progress (as of last session)

Commits on `master`:
- `a2869a4` — Initial scaffold + taste-skill design pass
- `4c8ab29` — Reorg into `prototypes/{classic,premium}` monorepo with shared brand + Norwegian copy
- `679717b` — Wire Nano Banana image-generation script + Whisk video prompt library
- `1dbf8e6` — Update root docs and gitignore for monorepo structure

**Done:**
- Reorg, shared/brand.ts, shared/copy/no.ts, scripts/ pipeline
- Classic prototype: all components built (Navigation, Hero, Philosophy, Services, Gallery [Elvebooking accordion], Process, Contact, Footer, CookieBanner)
- Reveal hook hardened, next.config.ts ESM-fixed in both prototypes
- Classic typechecks clean, dev server boots clean

**Next (uncommitted):**
- Verify classic with screenshot after reveal-hook fix
- Commit classic prototype
- Rebrand premium from "Interior Atelier / Mayfair / Maison Rivière" → Lysning Studio
- Build premium-only sections (press marquee, material library, testimonials, service-area map, language toggle)
- Build scroll-driven hero explode (the premium signature)
- Wire Stripe hook
- Per-prototype README + vercel.json
- Package the norway-interior-designer skill

## 15. Bithun's preferences

- **Commit style:** one-line imperative subject only, no body, no Co-Authored-By, no AI attribution
- **Skill installs:** full 5-step workflow always (folder + plugin.json + nested SKILL.md + registry + SKILLS.md)
- **Never** mention Claude/AI/Anthropic in code, comments, commits, or visible UI
- **Default credit:** Bithun ("Utviklet av Bithun" / "Developed by Bithun")
- **Secrets:** always in `.env`, never hard-coded; `.env*` always gitignored
- **Trust the user's authorization scope:** don't add features beyond what was asked

---

*Last updated: 2026-04-28. Update this file when major decisions change.*
