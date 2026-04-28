"use client";

import { useEffect } from "react";

/**
 * One observer for every `.reveal` element on the page.
 * Adds `is-visible` when an element enters the viewport (with generous
 * rootMargin so the trigger fires *before* the user actually sees it).
 *
 * Safety nets:
 *  - rootMargin pulls the trigger zone 25% below the viewport (fires early)
 *  - 1500ms hard timeout forces every still-hidden `.reveal` to show
 *    (covers Playwright fullPage screenshots, screen readers, prefers-reduced-motion,
 *    or any UA that doesn't fire IntersectionObserver as expected).
 *
 * Mounted once at layout level (RevealMount). Stagger via inline `--reveal-delay`:
 *   <div className="reveal" style={{ "--reveal-delay": "120ms" } as CSSProperties} />.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reveal = (el: Element) => el.classList.add("is-visible");
    const queryEls = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));

    const els = queryEls();
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px 25% 0px" }
    );
    for (const el of els) obs.observe(el);

    // Safety: force everything visible after 1.5s no matter what.
    const safetyTimer = window.setTimeout(() => {
      queryEls().forEach(reveal);
    }, 1500);

    return () => {
      obs.disconnect();
      window.clearTimeout(safetyTimer);
    };
  }, []);
}

export function RevealMount() {
  useReveal();
  return null;
}
