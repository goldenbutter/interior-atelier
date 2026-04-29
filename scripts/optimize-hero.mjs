/**
 * Take the chosen Flow hero variant from prototypes/whisk-image/ and write
 * compressed JPEGs into both prototypes' public/assets/img/lysning-hero.jpg.
 *
 * Source PNGs out of Flow are typically 2752x1536 ~3 MB. We cap quality at 82
 * and the long edge at 2400 — that retains retina sharpness on 1440p screens
 * while landing under ~600 KB.
 *
 * Usage: node scripts/optimize-hero.mjs
 */

import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");

const source = resolve(
  repoRoot,
  "prototypes/whisk-image/Flow-lysning-hero-v2.jpeg",
);

const targets = [
  "prototypes/classic/public/assets/img/lysning-hero.jpg",
  "prototypes/premium/public/assets/img/lysning-hero.jpg",
].map((p) => resolve(repoRoot, p));

const optimised = await sharp(source)
  .resize({ width: 2400, withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true })
  .toBuffer();

console.log(
  `[optimize-hero] compressed source ${source} → ${(optimised.length / 1024).toFixed(0)} KB`,
);

for (const target of targets) {
  mkdirSync(dirname(target), { recursive: true });
  await sharp(optimised).toFile(target);
  console.log(`[optimize-hero] wrote ${target}`);
}
