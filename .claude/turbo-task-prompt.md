# PC2 Agent Task — Verify Turbopack `@shared/*` Resolution

> **You are the PC2 agent.** Bithun ran out of memory on his main machine mid-build. Your job is **one specific task** described below. Do not touch anything else. Do not generate images. Do not register skills. Do not iterate on copy. Do not start premium feature work. Read [interior-atelier-prompt.md](interior-atelier-prompt.md) and [plan/build-progress.md](plan/build-progress.md) once for context, then execute this task only.

## The bug

Premium dev server fails at runtime with:

```
Module not found: Can't resolve '@shared/brand'
Import map: aliased to relative '../../shared/brand' inside of [project]/
```

…repeated for every component that imports from `@shared/brand` or `@shared/copy/no`. Same bug affects classic prototype (not yet observed at runtime, but the config has the same defect).

**Root cause:** both `next.config.ts` files set `turbopack.root` to the prototype folder itself, which locks Turbopack's resolution scope. The `@shared/*` tsconfig path alias resolves to `../../shared/*` — **outside** the configured root — so Turbopack refuses to bundle it. `tsc --noEmit` does NOT catch this because TypeScript respects path aliases independently of bundler.

## The proposed fix (already applied to working tree, NOT yet verified)

Both `prototypes/classic/next.config.ts` and `prototypes/premium/next.config.ts` already have this change in the working tree:

```ts
turbopack: {
  root: resolve(here, "..", ".."),  // monorepo root
}
```

…instead of the previous `resolve(here)` (prototype root). Verify this fix actually works at runtime.

## Your steps (do these and only these)

1. **Pull latest:**
   ```bash
   cd <wherever you cloned the repo>
   git status                     # confirm clean (or working-tree fix from last session)
   git log --oneline -5           # confirm latest SHA matches build-progress.md
   ```

2. **Read context (2 minutes):**
   - `.claude/interior-atelier-prompt.md` (full project briefing)
   - `.claude/plan/build-progress.md` (current state and active blocker)
   - `prototypes/classic/next.config.ts` and `prototypes/premium/next.config.ts` (the suspected fix)

3. **Install dependencies for both prototypes:**
   ```bash
   cd prototypes/premium && npm install
   cd ../classic && npm install
   cd ../..
   ```

4. **Verify type-check still passes** (sanity check — should pass instantly):
   ```bash
   cd prototypes/premium && npx tsc --noEmit
   cd ../classic && npx tsc --noEmit
   cd ../..
   ```

5. **Boot premium dev server and check for module-resolution errors:**
   ```bash
   cd prototypes/premium
   npm run dev
   ```
   Open `http://localhost:3000`. **Look for:**
   - ✅ Page loads with hero, navigation, all sections rendered
   - ✅ No "Module not found: Can't resolve '@shared/...'" in the terminal output or browser console
   - ❌ If module-resolution errors persist → the fix didn't work. See "If the fix doesn't work" below.

6. **Boot classic dev server in a separate terminal:**
   ```bash
   cd prototypes/classic
   npm run dev
   ```
   Open `http://localhost:3001`. Same checks as step 5.

7. **Capture screenshots for the human to review later:**
   - Save both prototypes' homepage screenshots to `_local/screenshots/pc2-premium-homepage.png` and `_local/screenshots/pc2-classic-homepage.png` (`_local/` is gitignored, so use a different folder for screenshots if you want them committed; pick `docs/screenshots/` if so)
   - Use Playwright MCP if available, or take a manual screenshot

8. **Commit and push** if the fix worked:
   ```bash
   git add prototypes/classic/next.config.ts prototypes/premium/next.config.ts
   git commit -m "Fix Turbopack root to monorepo so @shared imports resolve at runtime"
   git push origin master
   ```

   If you also wrote screenshots to a tracked folder, commit those in a second commit:
   ```bash
   git add docs/screenshots/
   git commit -m "Add PC2 verification screenshots"
   git push origin master
   ```

9. **Update progress log.** Append a new section to `.claude/plan/build-progress.md` under "Recent activity":
   ```markdown
   ### 2026-04-XX · Session 2 (PC2 agent)
   - Pulled at SHA <previous-sha>
   - Verified Turbopack root fix: <worked / didn't work>
   - Premium boots cleanly at http://localhost:3000: <yes / no>
   - Classic boots cleanly at http://localhost:3001: <yes / no>
   - Screenshots saved to: <path>
   - Pushed at SHA <new-sha>
   - Anything unexpected: <notes>
   ```

   Commit and push this update too:
   ```bash
   git add .claude/plan/build-progress.md
   git commit -m "Log PC2 verification result"
   git push origin master
   ```

10. **Stop.** Do NOT continue with image generation, skill registration, or any other phase. Hand back to Bithun.

## If the fix doesn't work

Investigate:

1. **Does `next.config.ts` even load?** Look for ESM errors in the dev-server output. We had a `__dirname` issue earlier that was solved with `fileURLToPath(import.meta.url)`.

2. **Try alternative fix A — drop `turbopack.root` entirely:**
   ```ts
   const nextConfig: NextConfig = {
     // Let Next infer the workspace root automatically.
     // The "multiple lockfiles" warning is acceptable in dev.
   };
   ```
   This trades a console warning for working imports.

3. **Try alternative fix B — `transpilePackages` with a workspace package name.** This requires turning `shared/` into a real workspace package (`shared/package.json` with a name like `"@interior-atelier/shared"`). More invasive — only attempt if A fails.

4. **Try alternative fix C — copy `shared/` into each prototype's `src/` at install time** via a `prebuild`/`predev` script. Loses the single-source-of-truth benefit but guarantees Turbopack can find the files. Last resort.

Whichever you do, **document it clearly** in build-progress.md so Bithun knows what state the repo is in when he pulls.

## Hard constraints (Bithun's project rules — do NOT violate)

- **Never** mention Claude / AI / Anthropic in any code, comment, commit message, or visible UI text
- **Default credit:** "Bithun" / "Utviklet av Bithun" — never AI attribution
- **Commit style:** one-line imperative subject only, no body paragraphs, no Co-Authored-By trailers
- **Never** commit `.env` or anything that looks like a secret
- **Never** install new npm dependencies unless absolutely required for the fix (and explain why in the commit message)
- **Never** re-format the entire codebase or apply Prettier sweeps as a side-effect

## When in doubt

Read the active blocker section of [plan/build-progress.md](plan/build-progress.md). If you can't make progress and need Bithun's input, append a question to the progress log and stop. Don't guess.

## What success looks like

- Both prototypes boot via `npm run dev` with **zero** module-resolution errors
- Both pages render their hero/nav/sections in the browser
- Two new commits on `master`: the fix + the progress-log update
- A line in build-progress.md that lets Bithun see what changed without asking

That's it. ~15 minutes of work if the proposed fix holds.
