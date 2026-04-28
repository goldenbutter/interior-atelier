/**
 * Chroma-key the cream background out of the Lysning logo and write the
 * result as transparent PNGs into each prototype's app folder + assets.
 *
 * Usage: node scripts/remove-bg.mjs
 */

import sharp from "sharp";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");
const sourceLogo = resolve(
  repoRoot,
  "prototypes/classic/public/assets/img/lysning-logo.png"
);

// Targets: each prototype's app/icon.png (favicon) and assets/img/lysning-logo.png
const targets = [
  "prototypes/classic/src/app/icon.png",
  "prototypes/classic/public/assets/img/lysning-logo.png",
  "prototypes/premium/src/app/icon.png",
  "prototypes/premium/public/assets/img/lysning-logo.png",
].map((p) => resolve(repoRoot, p));

// Tolerance: how close to the background color a pixel must be to become
// transparent. Higher = more aggressive removal but risks eating the artwork.
// 60 is a comfortable starting point for the cream → near-white background.
const TOLERANCE = 60;

const { data, info } = await sharp(sourceLogo)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = Buffer.from(data);

// Sample the four corners to estimate the background colour. Average them so
// a single noisy pixel doesn't skew the key.
const samples = [
  [0, 0],
  [width - 1, 0],
  [0, height - 1],
  [width - 1, height - 1],
];
let r = 0,
  g = 0,
  b = 0;
for (const [x, y] of samples) {
  const i = (y * width + x) * channels;
  r += pixels[i];
  g += pixels[i + 1];
  b += pixels[i + 2];
}
const bg = { r: r / 4, g: g / 4, b: b / 4 };
console.log(
  `[remove-bg] sampled background colour: rgb(${bg.r.toFixed(0)}, ${bg.g.toFixed(0)}, ${bg.b.toFixed(0)})`
);

// Walk every pixel; convert anything within TOLERANCE of the background colour
// to fully transparent. Pixels further away keep their original alpha.
for (let i = 0; i < pixels.length; i += channels) {
  const dr = pixels[i] - bg.r;
  const dg = pixels[i + 1] - bg.g;
  const db = pixels[i + 2] - bg.b;
  const dist = Math.sqrt(dr * dr + dg * dg + db * db);
  if (dist < TOLERANCE) {
    pixels[i + 3] = 0;
  }
}

const outBuffer = await sharp(pixels, {
  raw: { width, height, channels },
})
  .png({ compressionLevel: 9 })
  .toBuffer();

for (const target of targets) {
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, outBuffer);
  console.log(`[remove-bg] wrote ${target}`);
}
