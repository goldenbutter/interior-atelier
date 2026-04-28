/**
 * Nano Banana (Gemini 2.5 Flash Image) image generator for both prototypes.
 *
 * Reads prompts from scripts/prompts/*.json and writes generated images to
 *   prototypes/<tier>/public/generated/img/<id>.<ext>
 *
 * Usage:
 *   npm run gen:images            # generates all tiers (default = "both")
 *   npm run gen:images:premium    # only premium-tier prompts
 *   npm run gen:images:classic    # only classic-tier prompts
 *   npm run gen:images -- --force # overwrite existing files
 *   npm run gen:images -- --ids lysning-hero,lysning-bjorkely
 *   npm run gen:images -- --dry-run
 *
 * Env: GEMINI_API_KEY (required) — get one at https://aistudio.google.com/apikey
 */

import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PROMPTS_DIR = join(REPO_ROOT, "scripts", "prompts");
const MODEL = "gemini-2.5-flash-image";
const ENDPOINT = (key: string) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${key}`;

type Tier = "classic" | "premium" | "both";

type Still = {
  id: string;
  tier: Tier;
  filename: string;
  aspect: string;
  prompt: string;
};

type PromptFile = {
  brand: string;
  styleGuide: string;
  stills: Still[];
};

type CliArgs = {
  tier: Tier;
  force: boolean;
  dryRun: boolean;
  ids: Set<string> | null;
};

function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = { tier: "both", force: false, dryRun: false, ids: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--tier") {
      const v = argv[++i];
      if (v !== "classic" && v !== "premium" && v !== "both") {
        throw new Error(`--tier must be classic|premium|both, got "${v}"`);
      }
      args.tier = v;
    } else if (a === "--force") {
      args.force = true;
    } else if (a === "--dry-run") {
      args.dryRun = true;
    } else if (a === "--ids") {
      const v = argv[++i];
      args.ids = new Set(v.split(",").map((s) => s.trim()).filter(Boolean));
    }
  }
  return args;
}

function tiersToWrite(promptTier: Tier, requested: Tier): ("classic" | "premium")[] {
  if (requested === "classic" || requested === "premium") {
    if (promptTier === "both" || promptTier === requested) return [requested];
    return [];
  }
  // requested === "both": write everywhere the prompt says it belongs
  if (promptTier === "both") return ["classic", "premium"];
  return [promptTier];
}

async function fileExists(path: string): Promise<boolean> {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function loadPromptFiles(): Promise<{ file: string; data: PromptFile }[]> {
  const entries = await readdir(PROMPTS_DIR);
  const out: { file: string; data: PromptFile }[] = [];
  for (const e of entries) {
    if (!e.endsWith(".json")) continue;
    const path = join(PROMPTS_DIR, e);
    const raw = await readFile(path, "utf8");
    out.push({ file: e, data: JSON.parse(raw) as PromptFile });
  }
  return out;
}

function extFromMime(mime: string): string {
  if (mime.includes("jpeg") || mime.includes("jpg")) return "jpg";
  if (mime.includes("png")) return "png";
  if (mime.includes("webp")) return "webp";
  return "bin";
}

async function generateOne(
  apiKey: string,
  still: Still,
  styleGuide: string
): Promise<{ mime: string; bytes: Buffer }> {
  const fullPrompt = `${still.prompt}\n\nStyle guide: ${styleGuide}\nAspect ratio: ${still.aspect}.`;
  const res = await fetch(ENDPOINT(apiKey), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: fullPrompt }] }],
    }),
  });
  if (!res.ok) {
    const errBody = await res.text().catch(() => "");
    throw new Error(`Gemini API ${res.status}: ${errBody.slice(0, 500)}`);
  }
  const json = (await res.json()) as {
    candidates?: Array<{
      content?: {
        parts?: Array<{
          inlineData?: { mimeType?: string; data?: string };
          text?: string;
        }>;
      };
    }>;
  };
  const parts = json.candidates?.[0]?.content?.parts ?? [];
  const inline = parts.find((p) => p.inlineData?.data);
  if (!inline?.inlineData?.data) {
    const texts = parts
      .map((p) => p.text)
      .filter(Boolean)
      .join("\n");
    throw new Error(
      `Gemini returned no image. Text response (if any):\n${texts.slice(0, 500)}`
    );
  }
  const mime = inline.inlineData.mimeType ?? "image/png";
  const bytes = Buffer.from(inline.inlineData.data, "base64");
  return { mime, bytes };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey && !args.dryRun) {
    console.error(
      "Error: GEMINI_API_KEY not set. Copy .env.example to .env and paste your key from https://aistudio.google.com/apikey"
    );
    process.exit(1);
  }

  const promptFiles = await loadPromptFiles();
  if (promptFiles.length === 0) {
    console.error(`No prompt files found in ${PROMPTS_DIR}`);
    process.exit(1);
  }

  let attempted = 0;
  let written = 0;
  let skipped = 0;
  let failed = 0;

  for (const { file, data } of promptFiles) {
    console.log(`\n→ ${file} · ${data.brand} (${data.stills.length} stills)`);
    for (const still of data.stills) {
      if (args.ids && !args.ids.has(still.id)) continue;
      const targets = tiersToWrite(still.tier, args.tier);
      if (targets.length === 0) continue;

      for (const tier of targets) {
        attempted++;
        const outDir = join(REPO_ROOT, "prototypes", tier, "public", "generated", "img");
        const baseName = still.filename.replace(/\.[^.]+$/, "");
        const tag = `[${tier}/${still.id}]`;

        // Existence check (any extension)
        const existing = (await fileExists(outDir))
          ? (await readdir(outDir)).find((f) => f.startsWith(baseName + "."))
          : undefined;
        if (existing && !args.force) {
          console.log(`  ${tag} skip — exists (${existing}). Use --force to regenerate.`);
          skipped++;
          continue;
        }

        if (args.dryRun) {
          console.log(`  ${tag} dry-run — would generate (${still.aspect})`);
          continue;
        }

        try {
          const { mime, bytes } = await generateOne(apiKey!, still, data.styleGuide);
          const ext = extFromMime(mime);
          const outPath = join(outDir, `${baseName}.${ext}`);
          await mkdir(outDir, { recursive: true });
          await writeFile(outPath, bytes);
          console.log(`  ${tag} wrote ${bytes.length.toLocaleString()} bytes → ${outPath.replace(REPO_ROOT, ".")}`);
          written++;
        } catch (err) {
          console.error(`  ${tag} FAILED: ${(err as Error).message}`);
          failed++;
        }
      }
    }
  }

  console.log(
    `\nDone. attempted=${attempted} written=${written} skipped=${skipped} failed=${failed}`
  );
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
