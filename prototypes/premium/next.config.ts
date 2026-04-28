import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const here = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /* All imagery is served locally from /public/assets/img — no remote patterns needed. */
  turbopack: {
    // The monorepo root is two levels up (interior-atelier/). We set it
    // explicitly so Turbopack doesn't infer the wrong workspace from sibling
    // lockfiles AND so path aliases like `@shared/*` (which live at the
    // monorepo root, outside this prototype folder) can resolve correctly.
    root: resolve(here, "..", ".."),
  },
};

export default nextConfig;
