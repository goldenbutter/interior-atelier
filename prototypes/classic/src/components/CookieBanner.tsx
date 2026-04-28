"use client";

import { useEffect, useState } from "react";
import { copyNo } from "@shared/copy/no";

const KEY = "lysning.cookie-consent.v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (mode: "all" | "necessary") => {
    window.localStorage.setItem(KEY, mode);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 z-[55] mx-auto max-w-md rounded-lg border border-charcoal/15 bg-bone/95 p-5 shadow-[0_30px_80px_-30px_rgba(26,24,21,0.4)] backdrop-blur-md sm:left-auto sm:right-6 sm:bottom-6"
    >
      <p className="font-display text-base text-charcoal">{copyNo.cookie.title}</p>
      <p className="mt-2 text-[13px] leading-relaxed text-graphite">
        {copyNo.cookie.body}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => dismiss("all")}
          className="inline-flex items-center rounded-full bg-charcoal px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-bone transition-colors hover:bg-graphite"
        >
          {copyNo.cookie.accept}
        </button>
        <button
          type="button"
          onClick={() => dismiss("necessary")}
          className="inline-flex items-center rounded-full border border-charcoal/30 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-charcoal/5"
        >
          {copyNo.cookie.reject}
        </button>
      </div>
    </div>
  );
}
