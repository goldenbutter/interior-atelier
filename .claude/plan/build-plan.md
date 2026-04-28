# Interior Atelier — Build Plan

> Source-of-truth roadmap for the entire build. Read this together with [build-progress.md](build-progress.md) (current state) and [../interior-atelier-prompt.md](../interior-atelier-prompt.md) (full session-recovery briefing). The plan stays mostly stable; progress changes per session.

## Goal

Ship two production-ready demo websites for cold-pitching to interior designers in Norway who don't yet own a website. Two tiers, one fictional brand (Lysning Studio · Orkanger), Bokmål default. Then package the workflow as a Claude Code skill so future agents can fork either prototype for a real customer in a single prompt.

| Tier | Price | Folder | Status |
|---|---|---|---|
| Classic | NOK 9,999 | `prototypes/classic/` | Components built · pending visual sign-off |
| **Premium** | **NOK 19,999** | `prototypes/premium/` | Components built · pending Turbopack fix verification + visual sign-off |
| Ultra Premium | NOK 34,999 | *(deferred)* | Not in v1 |

## Phases

### Phase 0 — Repo bootstrapping (DONE)

- [x] Reorg into `prototypes/{classic,premium}` + `shared/` + `scripts/` monorepo
- [x] `shared/brand.ts` (single source of truth: Lysning Studio identity)
- [x] `shared/copy/no.ts` (Norwegian Bokmål copy library — all sections)
- [x] `.env.example` + `.gitignore` for `_local/`, `public/generated/`, `node_modules/`
- [x] Project-shared `.claude/settings.json` (Playwright MCP allow-list)
- [x] Personal `.claude/settings.local.json` (PowerShell allow — gitignored)
- [x] `.claude/interior-atelier-prompt.md` master briefing (loads on session restart)
- [x] Root `package.json` with `tsx` and image-gen scripts

### Phase 1 — Asset pipeline (DONE)

- [x] `scripts/generate-images.ts` — Nano Banana / Gemini 2.5 Flash Image (REST, base64 → PNG/JPG)
- [x] `scripts/prompts/lysning-stills.json` — 8 versioned still prompts
- [x] `scripts/whisk-prompts.md` — manual Whisk prompts for video AND fallback stills (free tier)
- [x] `scripts/customer-fork.md` — recipe for cloning per real customer
- [x] `npm run gen:images:dry` validates pipeline end-to-end
- [ ] **BLOCKED:** automated image gen requires paid Gemini billing — user chose Whisk-manual fallback

### Phase 2 — Classic prototype (NOK 9,999) (DONE except sign-off)

- [x] Self-contained Next.js 16 app at `prototypes/classic/`
- [x] **No `framer-motion`** — CSS transitions + IntersectionObserver `useReveal` hook
- [x] All sections in Bokmål via `@shared/copy/no`
- [x] **Elvebooking-style accordion gallery** (signature feature)
- [x] **Masonry photo grid** with monochrome → colour on hover (Philosophy section)
- [x] Cookie banner (GDPR-friendly)
- [x] Contact form (no Stripe, no Cal.com — per spec)
- [x] `vercel.json` + per-prototype `README.md` + `CLAUDE.md`
- [x] `tsc --noEmit` passes clean
- [ ] **PENDING:** dev-server runtime verification + screenshot sign-off
- [ ] **PENDING:** drop Whisk-generated stills into `public/assets/img/`

### Phase 3 — Premium prototype (NOK 19,999) (DONE except verification)

- [x] Self-contained Next.js 16 app at `prototypes/premium/`
- [x] All Lysning Studio branding via `@shared/brand`
- [x] All Bokmål copy via `@shared/copy/no`
- [x] **Scroll-driven hero explode** — headline words scatter as scrollYProgress advances; reassembles on scroll-up
- [x] **Whisk video integration** — `<video>` with `<source src="/generated/videos/lysning-hero-360.mp4">` + static image poster fallback
- [x] **Doppelrand "double-bezel"** card framing throughout
- [x] **Magnetic CTA buttons** with button-in-button trailing-icon physics
- [x] **NO/EN language toggle** placeholder (visible button, EN disabled)
- [x] **Press marquee** — Norwegian + international sources
- [x] **Material library** — bento grid (Røros Tweed, Hedmark eik, travertin, lin, messing, skinn)
- [x] **Testimonials wall** — three editorial-format quotes
- [x] **Service area map** — stylised SVG of Trøndelag with Orkanger pinpointed
- [x] **Cookie banner**
- [x] **Stripe hook** — null in v1, type-safe placeholder for per-client wiring
- [x] `vercel.json` + per-prototype `README.md` + `CLAUDE.md`
- [x] `tsc --noEmit` passes clean
- [ ] **BLOCKED on Turbopack root issue** — `@shared/*` doesn't resolve at runtime (works at type-check time only). See [build-progress.md](build-progress.md) → "Active blocker"
- [ ] **PENDING:** dev-server runtime verification + screenshot sign-off
- [ ] **PENDING:** drop Whisk-generated stills + drop Whisk-generated `lysning-hero-360.mp4`

### Phase 4 — Sign-off + iteration

- [ ] User reviews both prototypes in browser
- [ ] Address any visual/copy issues found
- [ ] Final screenshot pass — both tiers, mobile + desktop
- [ ] Commit final state

### Phase 5 — Skill packaging (LAST)

- [ ] `C:\Project\skills\norway-interior-designer\.claude-plugin\plugin.json` — already drafted on disk, NOT registered
- [ ] `C:\Project\skills\norway-interior-designer\skills\norway-interior-designer\SKILL.md` — already drafted on disk, NOT registered
- [ ] **Register** in `C:\Users\bithu\.claude\plugins\installed_plugins.json` under `"norway-interior-designer@local-skills"`
- [ ] **Add row** to `C:\Project\skills\SKILLS.md`

> Skill registration is intentionally deferred until both prototypes pass user sign-off. Don't register a workflow that ships a broken site.

## Design system constraints (must honour)

- **Norwegian Bokmål** for all default copy. EN deferred to v2 of premium tier
- **No AI-tool attribution** anywhere — code, comments, commits, footer credits. Default credit: **Bithun** ("Utviklet av Bithun")
- **Banned fonts**: Inter, Roboto, Helvetica, Arial. Use Cormorant Garamond (display), Geist (body), Geist Mono (editorial / numbers)
- **No `framer-motion` in classic tier** — keeps JS bundle small, justifies price tier
- **No remote image URLs** — `next.config.ts` `images.remotePatterns` is intentionally empty
- **Secrets in `.env` only**. `.env*` always gitignored
- **Commit style**: one-line imperative subject, no body paragraphs, no Co-Authored-By trailers

## Branding (locked)

- **Studio name:** Lysning Studio · monogram `L`
- **Tagline:** *"Stille rom som husker."*
- **Founder:** Ingvild Lysne
- **Address:** Orkdalsveien 47, 7300 Orkanger, Trøndelag
- **Founded:** 2018
- **Domains:** `demo-lysning-classic.ibithun.com`, `demo-lysning-premium.ibithun.com`
