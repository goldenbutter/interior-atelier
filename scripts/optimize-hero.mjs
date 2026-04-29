/**
 * Compress the curated Whisk/Flow hero candidates and write them into the
 * prototypes' public/assets/img/ folders with the brand-prefixed naming
 * convention. Idempotent — re-run any time a new variant lands in
 * prototypes/whisk-image/.
 *
 * Usage: node scripts/optimize-hero.mjs
 */

import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");

// Each entry: { source: scratch file in prototypes/whisk-image, dest: where it
// lands in the prototype, maxWidth: cap, quality: JPEG quality }.
const jobs = [
  // Premium hero — Whisk-generated 16:9 angled-sofa scene with extra still life.
  // Source PNG is only 1344×768, so quality 92 + mozjpeg keeps every detail
  // crisp without bloating file size beyond ~250 KB.
  {
    source: "prototypes/whisk-image/Whisk_lysning-hero-final-v2.png",
    dest: "prototypes/premium/public/assets/img/lysning-hero.jpg",
    maxWidth: 2400,
    quality: 92,
  },
  // Premium hero — square alternate, same scene at 1:1.
  {
    source: "prototypes/whisk-image/Whisk_lysning-hero-final-v1.png",
    dest: "prototypes/premium/public/assets/img/lysning-hero-square.jpg",
    maxWidth: 2000,
    quality: 92,
  },
  // Premium projects — the previously-live wide hero (Flow v2) shifts down to
  // the projects section as a 5th wide solo card after the four square tiles.
  {
    source: "prototypes/whisk-image/Flow-lysning-hero-v2.jpeg",
    dest: "prototypes/premium/public/assets/img/lysning-solhogda.jpg",
    maxWidth: 2400,
    quality: 82,
  },
];

for (const job of jobs) {
  const source = resolve(repoRoot, job.source);
  const dest = resolve(repoRoot, job.dest);
  mkdirSync(dirname(dest), { recursive: true });

  const out = await sharp(source)
    .resize({ width: job.maxWidth, withoutEnlargement: true })
    .jpeg({ quality: job.quality, mozjpeg: true })
    .toBuffer();

  await sharp(out).toFile(dest);
  console.log(
    `[optimize-hero] ${job.source} → ${job.dest} (${(out.length / 1024).toFixed(0)} KB)`,
  );
}
