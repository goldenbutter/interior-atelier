# Whisk Prompts — Lysning Studio Asset Generation

Manual workflow at [labs.google/fx](https://labs.google/fx) → Whisk. Use this when:

- **Free tier**: Whisk does both stills and short videos for free, so it's the no-cost alternative to the paid Gemini 2.5 Flash Image API
- **Premium video**: Whisk is the only path for Lysning's hero video (no public Veo API in v1)

## Output destinations

| Asset type | Save to |
|---|---|
| Stills | `prototypes/<tier>/public/generated/img/<id>.jpg` |
| Videos | `prototypes/premium/public/generated/videos/<id>.mp4` |

All files are gitignored (`public/generated/` is never committed).

## A — Stills (use only if `npm run gen:images` is paid-blocked)

Common style prefix to append to every still prompt below:

> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Lived-in feel. Hand-loomed wool, oak parquet, linen, brass fixtures. Composition: balanced, asymmetric, magazine-grade (Wallpaper / AD). Avoid HDR, oversaturation, harsh shadows, modern tech aesthetics, lens flare, digital noise. **No people in any image.**

### A1 — `lysning-bjorkely.jpg` (3:4) · used by both classic + premium

> Editorial interior photograph of a 1930s Norwegian Funkis villa living room in Bygdøy, Oslo. Oak parquet floor, cream linen sofa with rounded back, low travertine coffee table holding a single ceramic vase. Tall windows with linen curtains, late afternoon north light spilling across the floor. Walls in warm bone with subtle texture. One mid-century armchair upholstered in oat wool. A jute rug. View of birch trees through the window.

### A2 — `lysning-fjordstuen.jpg` (4:5) · both tiers

> Interior of a traditional Norwegian log cabin (laftet tømmerhus) in Hardanger. Exposed dark-stained timber walls, low ceiling, hand-knotted woolen throw on a built-in bench seat. Slate floor. Cast-iron wood stove glowing softly. A small window framing a sliver of fjord and mountain. Brass oil lamp on a side table. Late winter morning light, slightly overexposed highlights for filmic warmth.

### A3 — `lysning-bryggehuset.jpg` (4:5) · both tiers

> Interior of a heritage building on Bryggen in Bergen, repurposed as an 8-room boutique residence. Exposed dark red brick on one wall, lime-washed plaster on the others. Vintage tan leather banquette running along the brick wall, beneath a row of antique brass wall sconces. Wide-plank pine floor, weathered. A long communal oak table with three handcrafted Windsor chairs. Tall industrial windows with thin black mullions, grey morning light from the harbour.

### A4 — `lysning-holmenkollen.jpg` (3:4) · both tiers

> Master bedroom of a contemporary Norwegian family home in Holmenkollen, Oslo. North light through floor-to-ceiling windows. Cream linen bedding on a low oak platform bed, hand-loomed grey wool blanket folded at the foot. A single Nordic sheepskin draped over a vintage oak chair. Hand-loomed wool rug in undyed natural tones. Simple matte black reading lamp. View of pine forest in soft focus through the window.

### A5 — `lysning-hero.jpg` (16:9) · premium only

> Wide editorial interior photograph of a Norwegian boutique design studio's signature living space. Asymmetric composition: a low travertine plinth on the left holding a single ceramic vessel, an oak-framed linen sofa centered, a tall industrial window on the right framing soft north light over a birch grove. Bone-coloured walls, cream undertones, warm clay accents. Hand-loomed wool rug. Late afternoon. Magazine cover-grade, depth of field, soft shadows. Composition leaves negative space on the right third for overlay text.

### A6 — `lysning-atelier.jpg` (1:1) · premium only

> Top-down photograph of an interior designer's working table in a Norwegian atelier. Linen swatches in oat, bone, and clay tones spread across pale oak. A graphite hand-drawing of a floor plan. A small ceramic mug holding pencils. Three cylindrical wood samples (oak, ash, birch). A single sprig of cotton grass. Warm afternoon light from an unseen window. Composition centered but balanced, magazine flat-lay aesthetic, soft natural shadows.

### A7 — `lysning-detail-textile.jpg` (1:1) · premium only

> Macro photograph of hand-loomed Norwegian wool textile from Røros Tweed in a warm oat tone. Visible weave texture, slight irregularities, pulled threads at the edge. A single shaft of late afternoon light raking across the surface. Editorial detail shot for a luxury interior design portfolio. Slightly desaturated, warm undertones. Shallow depth of field.

### A8 — `lysning-detail-oak.jpg` (1:1) · premium only

> Macro photograph of a hand-finished Norwegian oak surface, brushed and oiled to a soft satin sheen. Subtle ray flecks visible, fine grain pattern, one small knot near the bottom edge. Warm directional light from upper left. Editorial detail shot for an interior design portfolio. Restrained natural tone palette, soft contrast.

---

## B — Videos (premium tier only — Whisk's image-to-video mode)

Take the matching seed image generated in section A, paste it into Whisk's image-to-video input, then add the prompt text below.

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
