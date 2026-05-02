# BUILD_PROGRESS — interiørdesigner (Lysning Studio / Interior Atelier)

> **Append-only build log.** Family-wide convention as of 2026-05-02.

## Pre-convention notice

This prototype was built **before** the family-wide build-log convention was established (set in bakery commit `a233cc8` on 2026-05-02). No append-only log was kept during the build itself.

For change history, the authoritative source is the git log:

```bash
git log --oneline --all
git log --oneline -- prototypes/classic/
git log --oneline -- prototypes/premium/
```

Notable historical context:
- This is the family's **only Next.js + React + TypeScript + Tailwind v4** prototype. Every other prototype in the family is vanilla HTML/CSS/JS.
- Editorial motion-heavy aesthetic (scroll-driven parallax, framer-motion stagger, monochrome→colour transitions, ambient breathing loops, magnetic CTAs) is what justifies the Next.js choice — the four "force Next.js" triggers from the Architecture Decision Guide §"4-question decision tree" don't all apply here, but the editorial-cinema design genuinely needed a framework.
- Productised as `interiørdesigner-skill` at `C:\Project\skills\interiørdesigner-skill\` — see that skill's SKILL.md for the locked patterns extracted from this prototype.

## Going forward

Any new commits that materially change a tier's contract (motion design, page topology, framework version bump, deploy-time rule) should append a dated entry below per the family-wide template:

```
## <commit short hash> — <one-line title>
- **Date:** YYYY-MM-DD
- **Type:** feat | fix | chore | refactor | revert
- **Files touched:** <list>
- **What:** <factual description>
- **Why:** <link to review feedback / spec / customer ask>
- **How to revert:** `git revert <sha>` (or specific lines if hand-revert is preferred)
```

## Change log (newest at bottom — append, do not reorder)

### Commit `<this stub>` — Backfill _docs/BUILD_PROGRESS.md per family-wide convention
- **Date:** 2026-05-02
- **Type:** chore
- **Files touched:** `_docs/BUILD_PROGRESS.md` (new file), `.gitignore`
- **What:** Created the build-log file at the family-wide standard location so future agents looking for the change history know where to find it. Also added `_docs/* + !_docs/BUILD_PROGRESS.md` to `.gitignore` so any future lead-research files dropped into `_docs/` stay agent-internal while the build log itself remains tracked + GitHub-visible. No retroactive log entries written for prior commits — git log is the authoritative source for everything before this stub.
- **Why:** Bakery commit `a233cc8` established `_docs/BUILD_PROGRESS.md` as the family-wide convention for build logs (replacing the older `.claude/build-progress.md` lowercase rule that was never actually used here). Backfill keeps every prototype's `_docs/` folder layout uniform so the next agent looks in the same place every time.
- **How to revert:** `git rm _docs/BUILD_PROGRESS.md` and remove the `_docs/*` + `!_docs/BUILD_PROGRESS.md` lines from `.gitignore`.
