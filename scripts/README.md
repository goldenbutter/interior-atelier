# scripts/

Asset-generation pipelines used by both prototypes.

| File | Purpose | Auto / Manual |
|---|---|---|
| `generate-images.ts` | Calls **Nano Banana** (Gemini 2.5 Flash Image) to render brand stills based on prompts in `prompts/`. Outputs to `prototypes/<tier>/public/generated/`. | Auto (needs `GEMINI_API_KEY`) |
| `prompts/*.json` | Versioned prompt sets (hero, projects, materials, textures). Edit these per real customer. | Source-controlled |
| `whisk-prompts.md` | Whisk-ready prompts for premium tier video assets — user runs them in [labs.google/fx](https://labs.google/fx) and saves MP4s into `prototypes/premium/public/generated/videos/`. | Manual |
| `customer-fork.md` | Step-by-step for cloning a prototype to `customers/<slug>/` and customizing for a real engagement. | Manual recipe |

## Running image generation

From repo root:

```bash
# 1. Get a Gemini API key from https://aistudio.google.com/apikey
# 2. Copy the example .env and paste your key
cp .env.example .env
# 3. Run
npx tsx scripts/generate-images.ts --tier premium
```

Generated files land in `prototypes/premium/public/generated/` (gitignored). Re-run anytime — output is deterministic per prompt + seed.
