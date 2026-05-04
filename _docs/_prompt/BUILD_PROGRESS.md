# BUILD_PROGRESS — interiørdesigner (Lysning Studio / Interior Atelier)

> **Append-only build log.** Family-wide convention as of 2026-05-02 — lives at `_docs/_prompt/BUILD_PROGRESS.md` (relocated from `_docs/BUILD_PROGRESS.md` on 2026-05-04), tracked in git, recoverable from any clone.
>
> **Provenance:** content below was migrated from `.claude/plan/build-progress.md` (gitignored, local-only) on 2026-05-02 so the change history is GitHub-visible and survives laptop death. The two cross-references inside the original (`build-plan.md`, `skill-brief.md`) are sibling planning docs that stayed gitignored under `.claude/plan/` and are not migrated. The original location was deleted after migration to keep a single source of truth.
>
> **Brand history:** project was first delivered as **"Lysning Studio"** (URLs `demo-lysning-{classic,premium}.ibithun.com`) and later renamed. Older entries reference the Lysning naming; current paths and project names follow the renamed brand.

---

## Current state (last edited 2026-04-29)

| Area | Status |
|---|---|
| Repo monorepo structure | ✅ done |
| Brand identity per prototype (`src/lib/brand.ts` + `src/lib/copy/no.ts`) | ✅ inlined into each prototype (deploy fix) |
| Image-gen script (`scripts/generate-images.ts`) | ✅ wired · ⚠ blocked on paid Gemini API |
| Whisk prompt library | ✅ done — covers stills + videos · added run 9 (16:9 hero replacement) |
| Classic prototype | ✅ live at https://demo-lysning-classic.ibithun.com |
| Premium prototype | ✅ live at https://demo-lysning-premium.ibithun.com |
| Vercel projects renamed (`demo-lysning-{classic,premium}`) | ✅ done |
| GitHub auto-deploy via webhook | ✅ wired on both projects |
| Per-project Root Directory + Ignored Build Step | ✅ `git diff HEAD^ HEAD --quiet ./` on each — isolation now works |
| Custom domains + CNAMEs at dns-parking.com | ✅ live, both serve `Server: Vercel` over HTTPS |
| Brand badge logo (cream interior, transparent halo) | ✅ via `scripts/remove-bg.mjs` (sharp + flood-fill) |
| `favicon.ico` (multi-res 16/32/48) for Vercel dashboard / link-preview crawlers | ✅ via `png-to-ico` |
| OG metadata (`metadataBase`, `images`, `twitter`) in both layouts | ✅ |
| Vercel Web Analytics (`@vercel/analytics`) wired in both layouts | ✅ |
| Hero image | ✅ Whisk-final-v2 angled scene (premium) · Flow v2 wide (classic) |
| Premium MaterialLibrary 7th wide tile (Bjørkely · Sammensatt) | ✅ |
| Premium 5th project Solhøgda · Frogner, Oslo (wide layout) | ✅ |
| Premium mobile menu — floating glass card (288px, edge-rounded) | ✅ |
| Premium Projects monochrome→colour with tap-to-colour + 2s revert | ✅ |
| `.claude/`, `CLAUDE.md`, `AGENTS.md` gitignored | ✅ untracked from git, files stay local |
| Skill packaging (`norway-interior-designer`) | ✅ shipped as `interiørdesigner-skill` at `C:\Project\skills\interiørdesigner-skill\` |

## Active blocker

None. Both sites are live, deploys are properly isolated, all visual work is shipped, skill is packaged.

## Recent activity

### 2026-04-28 · Session 1 (PC1, Bithun)
- Built classic + premium prototypes end-to-end
- Wired Nano Banana script + Whisk prompt library
- Image gen via Gemini API failed (free tier output not allowed) — user chose manual Whisk for stills
- Premium dev server failed at runtime with `Module not found: @shared/*` — Turbopack root issue
- Wrote turbo-task-prompt.md for PC2 handoff

### 2026-04-28 · Session 2 (PC2 agent)
- Pulled at SHA `1b19077` (Turbopack root fix already committed)
- `npm install` + `npx tsc --noEmit` clean for both prototypes
- Verified Turbopack root fix worked — both dev servers boot, `@shared/*` resolves at runtime
- Premium ✅ at :3000, classic ✅ at :3001, screenshots saved to `docs/screenshots/`

### 2026-04-29 · Session 3 (PC1, Bithun + agent — deploy + ship)
- Discovered Vercel deploy failed: `Module not found: @shared/brand`. Vercel only uploads files inside Root Directory, so `shared/` at repo root was excluded.
- **Fix:** inlined `shared/brand.ts` and `shared/copy/no.ts` into each prototype as `src/lib/brand.ts` and `src/lib/copy/no.ts`; repointed `@shared/*` in tsconfig from `../../shared/*` to `./src/lib/*`; dropped `turbopack.root` override; deleted `shared/` at repo root. Commit `f4ee0f1`
- Gitignored entire `.claude/` folder and `git rm --cached`d the previously tracked planning docs
- Deployed both prototypes via Vercel CLI (`npx vercel deploy --prod --yes`)
- Renamed Vercel projects via dashboard: `classic` → `demo-lysning-classic`, created `demo-lysning-premium`
- Connected both Vercel projects to GitHub `goldenbutter/interior-atelier` (Settings → Git → Connect)
- Set Root Directory = `prototypes/<tier>` on each project
- Added `app/icon.png` (Next.js favicon convention) wired to the Lysning logo
- Brand badge logo: written `scripts/remove-bg.mjs` with flood-fill from corners — keeps cream INSIDE the circle, transparent OUTSIDE. Pristine source extracted from `f56a737` and committed at `scripts/assets/lysning-logo-source.png`
- Custom domains attached: `demo-lysning-{classic,premium}.ibithun.com`. Both resolve to per-project Vercel CNAMEs with valid TLS

### 2026-04-29 · Session 4 (PC1, Bithun + agent — polish + skill prep)
- **README reframed** as a UX/UI study (no prices, no business pitch, no Ultra Premium row, no customer-fork section). Removed "cold-pitching" framing per user's preference for the public repo
- **Untracked Claude/AI files from git** — `CLAUDE.md`, `AGENTS.md`, `prototypes/<tier>/CLAUDE.md` all gitignored and removed from tracking. Files stay local. Rule memorized in global memory `feedback_no_ai_files_in_git.md`
- **Vercel Ignored Build Step** wired on both projects — `git diff HEAD^ HEAD --quiet ./`. Now classic-only pushes don't rebuild premium, and root-only pushes don't rebuild either. Memory: `reference_monorepo_vercel_setup.md` (global)
- **Hero image swap** — moved through three iterations:
  1. First wave: Flow v2 (parallel-sofa wide). User flagged it lacked the angular composition of original bjorkely
  2. User generated Whisk-final-v1 (1:1) and Whisk-final-v2 (16:9) from the angled bjorkely with extra flowers/fruits
  3. Premium hero now Whisk-final-v2; classic hero stays as Flow v2 (works in classic's portrait container with right viewport)
  4. Compressed via `scripts/optimize-hero.mjs` at quality 92. Premium hero ~181 KB, classic hero ~353 KB
- **OG/Twitter card metadata** wired in both `app/layout.tsx` files — `metadataBase`, `openGraph.images` pointing at each prototype's own `lysning-hero.jpg`, `twitter.card: summary_large_image`
- **`favicon.ico`** restored alongside `icon.png` so Vercel dashboard scraper picks up the badge. Multi-resolution (16/32/48) generated via `png-to-ico` from the same flood-fill source
- **Vercel Analytics** wired in both prototypes — `@vercel/analytics` package + `<Analytics />` component in body
- **Premium 5th project** (`Solhøgda · Frogner, Oslo`) added with `wide: true` flag in `src/lib/copy/no.ts`. Projects.tsx renders `wide: true` items spanning both columns at 16:9
- **Premium MaterialLibrary 7th wide tile** (`Bjørkely · Sammensatt`) — wide tile reusing the hero image, sits solo at the bottom of the 6-square grid
- **Premium mobile menu** — replaced full-screen overlay with a small floating edge-rounded glass card. Anchored top-right, 288px wide, `bg-bone/55 backdrop-blur-2xl backdrop-saturate-150`, slide+scale-in from the corner. Tap-outside-to-close via dim scrim. Brand name links to `#top`. Classic mobile menu kept as-is
- **Monochrome → colour effect** moved from Philosophy (Filosofi · 01) to Projects (Utvalgte arbeider · 03). Tap on mobile colourises for 2s then reverts. Hover on desktop unchanged. Refactored Projects map into `ProjectCard` subcomponent with own `useState` + `setTimeout`

### 2026-05-02 · Session 5 (family-wide build-log convention)
- Migrated this file from `.claude/plan/build-progress.md` (gitignored, local-only) to `_docs/BUILD_PROGRESS.md` (TRACKED, GitHub-visible)
- Added `_docs/* + !_docs/BUILD_PROGRESS.md` to `.gitignore` so the rest of `_docs/` (lead research, prospect PDFs, search prompts, decisions) stays agent-internal while the build log itself ships with the repo
- Deleted the original `.claude/plan/build-progress.md` to enforce single source of truth — there is now exactly one `BUILD_PROGRESS.md` per prototype across the family, always at `_docs/BUILD_PROGRESS.md`
- Reason: bakery commit `a233cc8` established `_docs/BUILD_PROGRESS.md` as the family-wide convention; backfill brings interiørdesigner into line with bakery + begravelsesbyrå + fiskeier so future agents look in the same place every time

## Repo state at hand-off

| | |
|---|---|
| Branch | `master` |
| Latest committed SHA at original handoff | `bb9668e` (monochrome moved from Philosophy to Projects) |
| Live URLs | https://demo-lysning-classic.ibithun.com · https://demo-lysning-premium.ibithun.com |
| GitHub remote | https://github.com/goldenbutter/interior-atelier |
| Vercel team | `goldenbutters-projects` |
| Productised skill | `C:\Project\skills\interiørdesigner-skill\` |

## Next work

1. ~~Register `norway-interior-designer` Claude Code skill~~ ✅ shipped as `interiørdesigner-skill`
2. Consider adopting bakery's 4-round customer-style review process for any future material change to either tier — bakery surfaced 4 anti-patterns per round that the original build missed

---

### Customer-fork finish checklist — completed 2026-05-03

- [x] **Section A** — OG variants generated (`lysning-og-preview.jpg` per tier under `public/assets/img/`), 1200×630 at 82 KB (classic) / 70 KB (premium). Both tiers' `app/layout.tsx` updated: `metadata.openGraph.images[0]` and `metadata.twitter.images[0]` now point at the dedicated variant. `metadataBase` resolves the relative path to absolute URLs in rendered HTML, satisfying WhatsApp's crawler.
- [x] **Section B** — Single bundled commit `9921cbf` (4 files: 2× layout.tsx + 2× lysning-og-preview.jpg) deliberately touched both project roots in one push to defeat the `git diff HEAD^ HEAD` ignored-build-step gotcha. Both Vercel projects reached `state: READY` for SHA `9921cbf` on production:
  - classic = `dpl_ACVQKRkpMspebMhwmBjZU5rYuCHU` (built 22 sec, aliased to `demo-lysning-classic.ibithun.com`)
  - premium = `dpl_Fz9oy7MwsTRE1Mq5WBbqg84xETai` (built 26 sec, aliased to `demo-lysning-premium.ibithun.com`)
  - Note: the two preceding `docs:` commits (`d596909`, `32bf66f`) were CANCELED on both projects — confirms the gotcha is real for this repo. Bundling layout.tsx + new image into one commit was the prevention.
- [x] **Section C** — Live HTML verified via `curl`: `og:image`/`twitter:image` resolve to absolute `https://` URLs, declared dimensions match (1200×630), `og:url` matches the page, `twitter:card=summary_large_image` present. Live image bytes confirmed via `HEAD` request: classic = 82,015 bytes, premium = 70,645 bytes (both well below WhatsApp's 600 KB ceiling). Both prototypes are single-route apps (one shareable page each), so per-page coverage is complete.
- Reference: `C:\Project\prototypes\_docs\_skill\CUSTOMER-FORK-FINISH-CHECKLIST.md`.
