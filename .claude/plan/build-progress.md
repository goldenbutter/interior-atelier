# Build Progress

> Live status. Update at the bottom under **Recent activity** every time you finish a chunk of work or hand off to another agent. Reference [build-plan.md](build-plan.md) for the full plan and [../interior-atelier-prompt.md](../interior-atelier-prompt.md) for the full session-recovery briefing.

## Current state (last edited 2026-04-28)

| Area | Status |
|---|---|
| Repo monorepo structure | ✅ done |
| `shared/brand.ts` + `shared/copy/no.ts` | ✅ done |
| Image-gen script (`scripts/generate-images.ts`) | ✅ wired · ⚠ blocked on paid Gemini API |
| Whisk prompt library | ✅ done — covers stills + videos |
| Classic prototype | ✅ all components built · `tsc` passes · 🟡 dev-server visual sign-off pending |
| Premium prototype | ✅ all components built · `tsc` passes · 🔴 dev-server fails at runtime — Turbopack can't resolve `@shared/*` |
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

**Status: NOT YET VERIFIED** — handed off to PC2 agent due to local memory exhaustion. See [../turbo-task-prompt.md](../turbo-task-prompt.md) for the scoped handoff prompt.

## Recent activity

### 2026-04-28 · Session 1 (PC1, Bithun)
- Built classic + premium prototypes end-to-end
- Wired Nano Banana script + Whisk prompt library
- Image gen via Gemini API failed (free tier output not allowed) — user chose manual Whisk for stills
- Premium dev server failed at runtime with `Module not found: @shared/*` — Turbopack root issue
- Wrote turbo-task-prompt.md for PC2 handoff

### 2026-04-28 · Session 2 (PC2 agent — pending)
- _Will fix Turbopack root, verify both prototypes boot cleanly, push back._

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
