# Whisk Prompts — Lysning Studio Asset Generation

Manual workflow at [labs.google/fx](https://labs.google/fx) → Whisk. Use this when:

- **Free tier**: Whisk does both stills and short videos for free, so it's the no-cost alternative to the paid Gemini 2.5 Flash Image API
- **Premium video**: Whisk is the only path for Lysning's hero video (no public Veo API in v1)

## Output destinations

| Asset type | Save to | Tracked? |
|---|---|---|
| **Brand stills** (replace placeholders, ship with the demo) | `prototypes/<tier>/public/assets/img/<id>.jpg` | **Committed** — these are the canonical brand assets |
| **Iteration / experiments** | `prototypes/<tier>/public/generated/img/<id>.jpg` | Gitignored |
| **Videos** (premium hero etc.) | `prototypes/premium/public/generated/videos/<id>.mp4` | Gitignored |

> **For Lysning Studio brand replacement (this round):** save each Whisk JPG to `public/assets/img/` (committed). Stills marked "both" tiers go to **two folders** — `prototypes/classic/public/assets/img/` AND `prototypes/premium/public/assets/img/` — same filename. Premium-only stills go only to premium.

### Quick reference — where each still belongs

| Still ID | Classic? | Premium? |
|---|---|---|
| lysning-bjorkely | ✓ | ✓ |
| lysning-fjordstuen | ✓ | ✓ |
| lysning-bryggehuset | ✓ | ✓ |
| lysning-holmenkollen | ✓ | ✓ |
| lysning-hero | — | ✓ |
| lysning-atelier | — | ✓ |
| lysning-detail-textile | — | ✓ |
| lysning-detail-oak | — | ✓ |

## A — Stills · 8 Whisk runs total

> **Quick recipe — do this 8 times, once per A1–A8 below:**
>
> 1. Open Whisk → image mode (image icon, top-left tab)
> 2. Click the **Aspect ratio** button → pick the noted button (SQUARE / PORTRAIT / LANDSCAPE)
> 3. Copy the entire prompt block (everything between the `>` lines) for the run
> 4. Paste into "Describe your idea…"
> 5. Hit the arrow (→)
> 6. Right-click the result → Save image as… → save to the path(s) listed for that run, with the exact filename
> 7. Repeat for the next run
>
> The aspect ratio is **also embedded in the prompt text** so Whisk's Imagen biases the composition correctly even though Whisk's UI only offers 1:1, 9:16, and 16:9. Don't tweak the prompt text.

---

### Run 1 of 8 — `lysning-bjorkely.jpg`

- **Whisk aspect button:** **PORTRAIT (9:16)**
- **Save to:**
  - `prototypes/classic/public/assets/img/lysning-bjorkely.jpg`
  - `prototypes/premium/public/assets/img/lysning-bjorkely.jpg`

> Vertical 3:4 aspect ratio editorial interior photograph of a 1930s Norwegian Funkis villa living room in Bygdøy, Oslo. Oak parquet floor, cream linen sofa with rounded back, low travertine coffee table holding a single ceramic vase. Tall windows with linen curtains, late afternoon north light spilling across the floor. Walls in warm bone with subtle texture. One mid-century armchair upholstered in oat wool. A jute rug. View of birch trees through the window.
>
> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Lived-in feel. Hand-loomed wool, oak parquet, linen, brass fixtures. Composition: balanced, asymmetric, magazine-grade (Wallpaper / AD). Avoid HDR, oversaturation, harsh shadows, modern tech aesthetics, lens flare, digital noise. No people in the image.

---

### Run 2 of 8 — `lysning-fjordstuen.jpg`

- **Whisk aspect button:** **PORTRAIT (9:16)**
- **Save to:**
  - `prototypes/classic/public/assets/img/lysning-fjordstuen.jpg`
  - `prototypes/premium/public/assets/img/lysning-fjordstuen.jpg`

> Vertical 4:5 aspect ratio interior of a traditional Norwegian log cabin (laftet tømmerhus) in Hardanger. Exposed dark-stained timber walls, low ceiling, hand-knotted woolen throw on a built-in bench seat. Slate floor. Cast-iron wood stove glowing softly. A small window framing a sliver of fjord and mountain. Brass oil lamp on a side table. Late winter morning light, slightly overexposed highlights for filmic warmth.
>
> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Lived-in feel. Hand-loomed wool, oak parquet, linen, brass fixtures. Composition: balanced, asymmetric, magazine-grade (Wallpaper / AD). Avoid HDR, oversaturation, harsh shadows, modern tech aesthetics, lens flare, digital noise. No people in the image.

---

### Run 3 of 8 — `lysning-bryggehuset.jpg`

- **Whisk aspect button:** **PORTRAIT (9:16)**
- **Save to:**
  - `prototypes/classic/public/assets/img/lysning-bryggehuset.jpg`
  - `prototypes/premium/public/assets/img/lysning-bryggehuset.jpg`

> Vertical 4:5 aspect ratio interior of a heritage building on Bryggen in Bergen, repurposed as an 8-room boutique residence. Exposed dark red brick on one wall, lime-washed plaster on the others. Vintage tan leather banquette running along the brick wall, beneath a row of antique brass wall sconces. Wide-plank pine floor, weathered. A long communal oak table with three handcrafted Windsor chairs. Tall industrial windows with thin black mullions, grey morning light from the harbour.
>
> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Lived-in feel. Hand-loomed wool, oak parquet, linen, brass fixtures. Composition: balanced, asymmetric, magazine-grade (Wallpaper / AD). Avoid HDR, oversaturation, harsh shadows, modern tech aesthetics, lens flare, digital noise. No people in the image.

---

### Run 4 of 8 — `lysning-holmenkollen.jpg`

- **Whisk aspect button:** **PORTRAIT (9:16)**
- **Save to:**
  - `prototypes/classic/public/assets/img/lysning-holmenkollen.jpg`
  - `prototypes/premium/public/assets/img/lysning-holmenkollen.jpg`

> Vertical 3:4 aspect ratio master bedroom of a contemporary Norwegian family home in Holmenkollen, Oslo. North light through floor-to-ceiling windows. Cream linen bedding on a low oak platform bed, hand-loomed grey wool blanket folded at the foot. A single Nordic sheepskin draped over a vintage oak chair. Hand-loomed wool rug in undyed natural tones. Simple matte black reading lamp. View of pine forest in soft focus through the window.
>
> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Lived-in feel. Hand-loomed wool, oak parquet, linen, brass fixtures. Composition: balanced, asymmetric, magazine-grade (Wallpaper / AD). Avoid HDR, oversaturation, harsh shadows, modern tech aesthetics, lens flare, digital noise. No people in the image.

---

### Run 5 of 8 — `lysning-hero.jpg` *(premium only)*

- **Whisk aspect button:** **LANDSCAPE (16:9)**
- **Save to:**
  - `prototypes/premium/public/assets/img/lysning-hero.jpg`

> Horizontal 16:9 aspect ratio wide editorial interior photograph of a Norwegian boutique design studio's signature living space. Asymmetric composition: a low travertine plinth on the left holding a single ceramic vessel, an oak-framed linen sofa centered, a tall industrial window on the right framing soft north light over a birch grove. Bone-coloured walls, cream undertones, warm clay accents. Hand-loomed wool rug. Late afternoon. Magazine cover-grade, depth of field, soft shadows. Composition leaves negative space on the right third for overlay text.
>
> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Lived-in feel. Hand-loomed wool, oak parquet, linen, brass fixtures. Composition: balanced, asymmetric, magazine-grade (Wallpaper / AD). Avoid HDR, oversaturation, harsh shadows, modern tech aesthetics, lens flare, digital noise. No people in the image.

---

### Run 6 of 8 — `lysning-atelier.jpg` *(premium only)*

- **Whisk aspect button:** **SQUARE (1:1)**
- **Save to:**
  - `prototypes/premium/public/assets/img/lysning-atelier.jpg`

> Square 1:1 aspect ratio top-down photograph of an interior designer's working table in a Norwegian atelier. Linen swatches in oat, bone, and clay tones spread across pale oak. A graphite hand-drawing of a floor plan. A small ceramic mug holding pencils. Three cylindrical wood samples (oak, ash, birch). A single sprig of cotton grass. Warm afternoon light from an unseen window. Composition centered but balanced, magazine flat-lay aesthetic, soft natural shadows.
>
> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Lived-in feel. Hand-loomed wool, oak parquet, linen, brass fixtures. Composition: balanced, asymmetric, magazine-grade (Wallpaper / AD). Avoid HDR, oversaturation, harsh shadows, modern tech aesthetics, lens flare, digital noise. No people in the image.

---

### Run 7 of 8 — `lysning-detail-textile.jpg` *(premium only)*

- **Whisk aspect button:** **SQUARE (1:1)**
- **Save to:**
  - `prototypes/premium/public/assets/img/lysning-detail-textile.jpg`

> Square 1:1 aspect ratio macro photograph of hand-loomed Norwegian wool textile from Røros Tweed in a warm oat tone. Visible weave texture, slight irregularities, pulled threads at the edge. A single shaft of late afternoon light raking across the surface. Editorial detail shot for a luxury interior design portfolio. Slightly desaturated, warm undertones. Shallow depth of field.
>
> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Avoid HDR, oversaturation, harsh shadows, lens flare, digital noise.

---

### Run 8 of 8 — `lysning-detail-oak.jpg` *(premium only)*

- **Whisk aspect button:** **SQUARE (1:1)**
- **Save to:**
  - `prototypes/premium/public/assets/img/lysning-detail-oak.jpg`

> Square 1:1 aspect ratio macro photograph of a hand-finished Norwegian oak surface, brushed and oiled to a soft satin sheen. Subtle ray flecks visible, fine grain pattern, one small knot near the bottom edge. Warm directional light from upper left. Editorial detail shot for an interior design portfolio. Restrained natural tone palette, soft contrast.
>
> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Avoid HDR, oversaturation, harsh shadows, lens flare, digital noise.

---

## B — Videos (premium tier only · 3 Whisk runs)

> **Quick recipe — image-to-video mode:**
>
> 1. Switch Whisk to **video** mode (camera icon, top-right of the prompt area)
> 2. Click the SCENE slot → upload the seed image listed for the run
> 3. Click the **Aspect ratio** button → pick the noted button
> 4. Paste the prompt block into the text field
> 5. Hit the arrow (→). Whisk caps clips at ~8s
> 6. Right-click the result → Save video as… → save to the path listed
>
> Run 1 (hero) is **required for the premium tier**. Runs 2 and 3 are optional polish.

---

### Run 1 of 3 — `lysning-hero-360.mp4` *(required)*

- **Whisk aspect button:** **LANDSCAPE (16:9)**
- **Seed image:** `prototypes/premium/public/assets/img/lysning-hero.jpg`
- **Save to:** `prototypes/premium/public/generated/videos/lysning-hero-360.mp4`
- **Target length:** 8s (loopable)

> Slow steady horizontal camera pan across a Nordic editorial living room interior. The camera glides smoothly from left to right, keeping subjects centered. Late afternoon north light spills through tall windows. Soft, painterly motion — no shake, no zoom. The pan should loop seamlessly: end frame should match start frame as closely as possible. No people, no rapid movement, no glitches. Cinematic, editorial, slow.

---

### Run 2 of 3 — `lysning-atelier-detail.mp4` *(optional)*

- **Whisk aspect button:** **SQUARE (1:1)**
- **Seed image:** `prototypes/premium/public/assets/img/lysning-atelier.jpg`
- **Save to:** `prototypes/premium/public/generated/videos/lysning-atelier-detail.mp4`
- **Target length:** 6s

> Slow top-down dolly forward over a Norwegian interior designer's working table covered in linen swatches, pencils, and oak samples. The camera descends gently, like leaning forward to inspect. Late afternoon warm light slowly shifts across the surface. Editorial, slow, magazine-grade. No people, no fast motion.

---

### Run 3 of 3 — `lysning-textile-loop.mp4` *(optional)*

- **Whisk aspect button:** **SQUARE (1:1)**
- **Seed image:** `prototypes/premium/public/assets/img/lysning-detail-textile.jpg`
- **Save to:** `prototypes/premium/public/generated/videos/lysning-textile-loop.mp4`
- **Target length:** 4s (looped)

> Extremely subtle motion on a hand-loomed wool textile macro. The light source slowly drifts across the weave, revealing texture detail. The fabric itself does not move. Loopable. No camera movement.

---

## C — Optional polish: 4 dedicated material macros (premium MaterialLibrary)

The premium MaterialLibrary section currently uses interior-shot fallbacks for 4 of its 6 tiles (Travertin, Lin · Beauvais, Messing · Patinert, Skinn · Vegetabilsk). Each tile shows the labelled material as the dominant feature, but they're not true macros. For per-client polish, replace them with these dedicated 1:1 close-ups.

> **All Section C runs use the SQUARE (1:1) Whisk aspect button.** Save each to `prototypes/premium/public/assets/img/<filename>` (committed brand asset, overwriting the current fallback).

---

### Run 9 — `lysning-detail-travertin.jpg`

> Square 1:1 aspect ratio macro photograph of a Roman travertine stone slab, polished surface with visible natural pitting and warm cream-and-honey tonal banding. Diagonal directional light raking across from upper left, casting subtle texture shadows in the porous holes. Editorial detail shot for a luxury interior design portfolio. Restrained natural tone palette. Shallow depth of field — the lower edge of the slab is in soft focus.
>
> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Avoid HDR, oversaturation, harsh shadows, lens flare, digital noise.

> Then update [premium MaterialLibrary.tsx](../prototypes/premium/src/components/MaterialLibrary.tsx) — change the Travertin entry's `image` to `/assets/img/lysning-detail-travertin.jpg`.

---

### Run 10 — `lysning-detail-lin.jpg`

> Square 1:1 aspect ratio macro photograph of unbleached French linen fabric from Beauvais, tightly woven, ivory-cream tone. Visible weave structure at extreme close range, slight slubs and natural irregularities, one fold creating a soft diagonal shadow across the frame. Late afternoon light raking from upper right. Editorial detail shot for a luxury interior design portfolio. Slightly desaturated, warm undertones, shallow depth of field.
>
> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Avoid HDR, oversaturation, harsh shadows, lens flare, digital noise.

> Then update MaterialLibrary's Lin · Beauvais entry → `/assets/img/lysning-detail-lin.jpg`.

---

### Run 11 — `lysning-detail-messing.jpg`

> Square 1:1 aspect ratio macro photograph of a hand-patinated brass surface, warm aged-gold tone with mottled darker patina spots, slight hammered or brushed texture. A single strong diagonal highlight rakes across from upper left, picking out the metal's subtle ridges. Editorial detail shot for a luxury interior design portfolio. Restrained natural tone palette, soft contrast, shallow depth of field.
>
> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Avoid HDR, oversaturation, harsh shadows, lens flare, digital noise.

> Then update MaterialLibrary's Messing · Patinert entry → `/assets/img/lysning-detail-messing.jpg`.

---

### Run 12 — `lysning-detail-skinn.jpg`

> Square 1:1 aspect ratio macro photograph of vegetable-tanned Italian leather in cognac brown tone, soft satin sheen, visible grain pattern with natural variations. The corner of a leather panel folds gently in the lower-third creating a sculptural shadow. Warm directional light from upper left. Editorial detail shot for a luxury interior design portfolio. Slightly desaturated, warm undertones, shallow depth of field.
>
> Editorial Nordic interior photography. Natural daylight, soft contrast, warm undertones (bone, cream, oak, clay, charcoal). Avoid HDR, oversaturation, harsh shadows, lens flare, digital noise.

> Then update MaterialLibrary's Skinn · Vegetabilsk entry → `/assets/img/lysning-detail-skinn.jpg`.

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
