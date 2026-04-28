/**
 * Make the area OUTSIDE the circle transparent and leave the cream inside the
 * circle intact. The result: a self-contained circular badge that reads on any
 * background colour without losing the LS calligraphy.
 *
 * Flood-fills from the four corners through "background-coloured" pixels and
 * stops at the dark circle outline — pixels reached from the corners become
 * transparent, the rest is preserved as-is.
 *
 * Usage: node scripts/remove-bg.mjs
 */

import sharp from "sharp";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");
const sourceLogo = resolve(repoRoot, "scripts/assets/lysning-logo-source.png");

const targets = [
  "prototypes/classic/src/app/icon.png",
  "prototypes/classic/public/assets/img/lysning-logo.png",
  "prototypes/premium/src/app/icon.png",
  "prototypes/premium/public/assets/img/lysning-logo.png",
].map((p) => resolve(repoRoot, p));

// Colour distance threshold. A pixel within TOLERANCE of the sampled corner
// colour is considered "outside cream" and may be flood-filled. Higher values
// make the fill more aggressive (risk of leaking through line gaps); lower
// values risk leaving a halo.
const TOLERANCE = 70;

const { data, info } = await sharp(sourceLogo)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const pixels = Buffer.from(data);

// Average the four corners as the background colour.
const samples = [
  [0, 0],
  [width - 1, 0],
  [0, height - 1],
  [width - 1, height - 1],
];
let r = 0, g = 0, b = 0;
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

const isBackground = (i) => {
  const dr = pixels[i] - bg.r;
  const dg = pixels[i + 1] - bg.g;
  const db = pixels[i + 2] - bg.b;
  return dr * dr + dg * dg + db * db < TOLERANCE * TOLERANCE;
};

// Flood-fill (BFS) from each corner through connected background pixels.
// Mark each visited pixel by setting its alpha to 0 and reusing the green
// channel as a "visited" sentinel — but reset it to bg.g after, so we don't
// leak the marker into the output. Actually simplest: use a separate boolean
// array.
const visited = new Uint8Array(width * height);
const queue = [];
const enqueue = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const idx = y * width + x;
  if (visited[idx]) return;
  if (!isBackground(idx * channels)) return;
  visited[idx] = 1;
  queue.push(idx);
};

for (const [x, y] of samples) enqueue(x, y);

while (queue.length > 0) {
  const idx = queue.shift();
  const x = idx % width;
  const y = (idx / width) | 0;
  enqueue(x + 1, y);
  enqueue(x - 1, y);
  enqueue(x, y + 1);
  enqueue(x, y - 1);
}

// Apply: visited pixels become transparent. Everything else (cream inside
// the circle + the dark calligraphy + the circle outline) stays.
let cleared = 0;
for (let i = 0; i < visited.length; i++) {
  if (visited[i]) {
    pixels[i * channels + 3] = 0;
    cleared++;
  }
}
console.log(
  `[remove-bg] cleared ${cleared} of ${visited.length} pixels (${(
    (cleared / visited.length) *
    100
  ).toFixed(1)}%)`
);

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
