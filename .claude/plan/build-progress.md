# Build Progress

> Live status. Update at the bottom under **Recent activity** every time you finish a chunk of work or hand off to another agent. Reference [build-plan.md](build-plan.md) for the full plan and [../interior-atelier-prompt.md](../interior-atelier-prompt.md) for the full session-recovery briefing.

## Current state (last edited 2026-04-28)

| Area | Status |
|---|---|
| Repo monorepo structure | ✅ done |
| `shared/brand.ts` + `shared/copy/no.ts` | ✅ done |
| Image-gen script (`scripts/generate-images.ts`) | ✅ wired · ⚠ blocked on paid Gemini API |
| Whisk prompt library | ✅ done — covers stills + videos |
| Classic prototype | ✅ all components built · `tsc` passes · ✅ dev-server boots clean (PC2 verified) |
| Premium prototype | ✅ all components built · `tsc` passes · ✅ dev-server boots clean (PC2 verified, Turbopack `@shared/*` fix confirmed) |
| Cookie banner (both tiers) | ✅ done |
| Premium-only sections (MaterialLibrary, Testimonials, ServiceArea, language toggle, scroll-explode hero) | ✅ done |
| Per-prototype README + vercel.json | ✅ done |
| Skill packaging (`norway-interior-designer`) | 🟡 files drafted at `C:\Project\skills\norway-interior-designer\` but NOT registered yet |

## Active blocker

**Turbopack `root` setting breaks `@shared/*` cross-folder imports at runtime.**

- Both prototypes' `next.config.ts` set `turbopack.root = resolve(here)` (the prototype's own folder) to silence the "multiple lockfiles" warning
- This locks Turbopack's resolution scope to that folder
- `@shared/brand` resolves via tsconfig `paths` to `../../shared/brand` — **outside** the Turbopack root
- Result: type-check passes (tsc respects path aliases independently), but `next dev` fails with `Module not found: Can't resolve '@shared/brand'` for every component that imports from shared

**Attempted fix (uncommitted in working tree at last hand-off):**

Both `prototypes/classic/next.config.ts` and `prototypes/premium/next.config.ts` updated to `turbopack.root = resolve(here, "..", "..")` (the monorepo root). This SHOULD work because:
- The monorepo root contains `shared/` so cross-folder imports stay in scope
- The "multiple lockfiles" warning is satisfied because the explicit root matches where the workspace actually lives

**Status: VERIFIED & RESOLVED (PC2, 2026-04-28).** Both prototypes boot and render `@shared/*` content at runtime. The fix was already committed at `1b19077`; PC2 only had to install, type-check, boot, screenshot, and log. See "Recent activity → Session 2" below for the full evidence trail.

## Recent activity

### 2026-04-28 · Session 1 (PC1, Bithun)
- Built classic + premium prototypes end-to-end
- Wired Nano Banana script + Whisk prompt library
- Image gen via Gemini API failed (free tier output not allowed) — user chose manual Whisk for stills
- Premium dev server failed at runtime with `Module not found: @shared/*` — Turbopack root issue
- Wrote turbo-task-prompt.md for PC2 handoff

### 2026-04-28 · Session 2 (PC2 agent)
- Pulled at SHA `1b19077` (clean working tree — fix already committed in that SHA, not uncommitted as the prior log claimed)
- `npm install` ran cleanly in both prototypes (no new deps; `package-lock.json` peer-annotation drift reverted to keep diff scoped)
- `npx tsc --noEmit` passed for both prototypes
- **Verified Turbopack root fix: WORKED.** Both dev servers boot and serve homepages without `Module not found: Can't resolve '@shared/*'` errors
- Premium boots cleanly at http://localhost:3000: ✅ `GET / 200 in 4.2s` (initial compile), ~150ms warm. Norwegian copy (`Stille rom som husker.`, `Lysning Studio`, `Orkanger`, `Ingvild`) all render — confirms `@shared/brand` and `@shared/copy/no` resolve at runtime
- Classic boots cleanly at http://localhost:3001: ✅ `GET / 200 in 3.6s` (initial compile), ~100–180ms warm. Same shared content renders
- Screenshots saved to: [`docs/screenshots/pc2-premium-homepage.png`](../../docs/screenshots/pc2-premium-homepage.png) and [`docs/screenshots/pc2-classic-homepage.png`](../../docs/screenshots/pc2-classic-homepage.png) (committed in `542728c`)
- Screenshot tooling: no Playwright MCP available in this harness, so used **Microsoft Edge headless** (`msedge.exe --headless=new --screenshot=...`) as a manual fallback. Note for future PC2-style handoffs: the second concurrent Edge invocation needs an isolated `--user-data-dir` or it silently fails to write its output. Use a per-run temp profile dir.
- Pushed at SHAs: `542728c` (screenshots) → `ca51054` (this log entry, pre-fill) → tip after fill commit (see `git log --oneline -5` after pull)
- Anything unexpected:
  - Premium dev log shows a 404 for `/generated/videos/lysning-hero-360.mp4` on every page load — expected, the Whisk hero video is generated manually by Bithun and dropped in later. Hero falls back gracefully (no runtime crash, layout still renders).
  - Premium dev log emits a framer-motion advisory: `[browser] Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.` Cosmetic; the scroll-explode hero in `Hero.tsx` may want an explicit `position` on whichever element it tracks. Not blocking. Worth a 2-line follow-up later.
  - The previous "uncommitted modified files" note in this log was stale — `1b19077` already contained the Turbopack fix, so PC2 only had to verify, not re-commit.

## Repo state at hand-off

| | |
|---|---|
| Branch | `master` |
| Latest committed SHA | `5e97e16` (Clarify Whisk output paths and per-tier image destinations) |
| Uncommitted modified files | `prototypes/classic/next.config.ts`, `prototypes/premium/next.config.ts` (Turbopack root fix attempt) |
| Untracked | `.claude/plan/` (this folder), `.claude/turbo-task-prompt.md` |
| GitHub remote | `https://github.com/goldenbutter/interior-atelier` |

## When PC2 agent finishes

Append a new section to "Recent activity" with:
- What was changed
- Final commit SHA
- Whether the fix worked + screenshot evidence (saved to `_local/screenshots/`)
- Anything unexpected discovered

Then PC1 (Bithun) pulls and continues with screenshot sign-off + skill registration.
