"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-[55] mx-auto max-w-md rounded-[1.25rem] bg-charcoal/[0.04] p-1.5 ring-1 ring-charcoal/10 shadow-[0_30px_80px_-30px_rgba(26,24,21,0.4)] sm:left-auto sm:right-6 sm:bottom-6"
        >
          <div className="bezel-inner rounded-[calc(1.25rem-0.375rem)] bg-bone/95 p-5 backdrop-blur-md">
            <p className="font-display text-base text-charcoal">
              {copyNo.cookie.title}
            </p>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
