import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const here = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /* All imagery is served locally from /public/assets/img — no remote patterns needed. */
  turbopack: {
    // Silence "multiple lockfiles" warning. The classic prototype is its own
    // self-contained app — workspace root is this folder, not the monorepo root.
    root: resolve(here),
  },
};

export default nextConfig;
