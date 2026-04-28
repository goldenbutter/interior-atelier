"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { copyNo } from "@shared/copy/no";

export default function Gallery() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const projects = copyNo.projects.list;

  // Staggered entrance animation when section enters viewport (Elvebooking pattern)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.classList.add("has-animation");
    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          obs.unobserve(entry.target);
          const opts = container.querySelectorAll<HTMLElement>(".gallery-option");
          opts.forEach((opt, i) => {
            setTimeout(() => opt.classList.add("animated"), 150 * i);
          });
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(container);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="prosjekter" className="relative bg-bone py-24 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14" />
              <span className="eyebrow">{copyNo.projects.eyebrow}</span>
            </div>
            <h2 className="mt-10 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.04] tracking-tight text-charcoal">
              {copyNo.projects.heading}
              <em className="italic text-clay-deep">
                {copyNo.projects.headingEm}
              </em>
              {copyNo.projects.headingRest}
            </h2>
          </div>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal/70">
            {copyNo.projects.archive}
          </p>
        </div>

        <div
          ref={containerRef}
          className="gallery-selector mt-16"
          style={
            {
              ["--gallery-count"]: projects.length,
            } as React.CSSProperties
          }
          role="tablist"
          aria-label="Prosjektgalleri"
        >
          {projects.map((p, i) => {
            const isActive = active === i;
            return (
              <div
                key={p.slug}
                className={`gallery-option ${isActive ? "active" : ""}`}
                role="tab"
                tabIndex={0}
                aria-selected={isActive}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes={isActive ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 100vw, 18vw"}
                  className="gallery-option-img"
                />
                <div className="gallery-option-cap">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em]">
                    {p.no} <span className="opacity-60">/ {String(projects.length).padStart(2, "0")}</span>
                  </p>
                  <p className="font-display text-2xl leading-tight">{p.title}</p>
                  <p className="text-[12px] text-bone/85">
                    {p.location} · {p.year}
                  </p>
                  <p className="text-[11px] text-bone/70">{p.type}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
