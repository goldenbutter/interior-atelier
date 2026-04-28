# Whisk Prompts — Premium-Tier Video Assets

Manual workflow. Whisk has no public API yet, so:

1. Open [labs.google/fx](https://labs.google/fx) → Whisk.
2. For each prompt below, paste the seed image (generated via `npm run gen:images:premium`) plus the prompt text into Whisk's image-to-video input.
3. Save the resulting MP4 to **`prototypes/premium/public/generated/videos/<id>.mp4`** with the exact filename listed.
4. Don't commit these files — they're gitignored under `public/generated/`.

Whisk current limit: ~8s per clip. Each prompt below targets that.

---

## V1 — Hero ambient pan (required)

- **Seed image:** `prototypes/premium/public/generated/img/lysning-hero.jpg`
- **Filename:** `lysning-hero-360.mp4`
- **Aspect:** 16:9
- **Length:** 8s (loopable)
- **Whisk prompt:**
  > Slow steady horizontal camera pan across a Nordic editorial living room interior. The camera glides smoothly from left to right, keeping subjects centered. Late afternoon north light spills through tall windows. Soft, painterly motion — no shake, no zoom. The pan should loop seamlessly: end frame should match start frame as closely as possible. No people, no rapid movement, no glitches. Cinematic, editorial, slow.

## V2 — Workshop close-up (optional but premium-feel)

- **Seed image:** `prototypes/premium/public/generated/img/lysning-atelier.jpg`
- **Filename:** `lysning-atelier-detail.mp4`
- **Aspect:** 1:1
- **Length:** 6s
- **Whisk prompt:**
  > Slow top-down dolly forward over a Norwegian interior designer's working table covered in linen swatches, pencils, and oak samples. The camera descends gently, like leaning forward to inspect. Late afternoon warm light slowly shifts across the surface. Editorial, slow, magazine-grade. No people, no fast motion.

## V3 — Material detail breathing (optional, for material library section)

- **Seed image:** `prototypes/premium/public/generated/img/lysning-detail-textile.jpg`
- **Filename:** `lysning-textile-loop.mp4`
- **Aspect:** 1:1
- **Length:** 4s (looped)
- **Whisk prompt:**
  > Extremely subtle motion on a hand-loomed wool textile macro. The light source slowly drifts across the weave, revealing texture detail. The fabric itself does not move. Loopable. No camera movement.

---

## Naming convention

- `<brand-slug>-<scene-id>.mp4` (matches the seed image's id where possible)
- Always lowercase, kebab-case
- Place ALL videos under `prototypes/premium/public/generated/videos/` — never inside `assets/`

## Quality bar

- Upload to Whisk, run the prompt, evaluate. If output has glitches (limb morphing, text artifacts, lens-flare hallucination), regenerate with the same prompt — Whisk variance is high.
- **No people** in any clip — interior-design portfolios feel cleaner without occupants. If a generated clip has people, regenerate.
- 30 fps, h.264, ≤6 MB per clip. Re-encode with ffmpeg if Whisk export is heavier:
  ```bash
  ffmpeg -i raw.mp4 -vcodec libx264 -crf 26 -preset slow -an lysning-hero-360.mp4
  ```

## When upgrading to a paid pipeline (real client)

Swap this manual flow for one of:
- **Veo 3** via Google AI Studio API (`models/veo-3.0-generate-001`, async polling)
- **Higgsfield** for higher-end exploded / camera-orbit cinematic motion
- **RunwayML Gen-4** for image-to-video with stronger character consistency

Keep the seed images + prompts in this repo so the upgrade is just a script swap.
