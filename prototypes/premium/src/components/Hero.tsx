"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Star } from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-bone pt-20"
    >
      {/* Editorial ambient warmth — fixed layer, GPU-cheap */}
      <div
        aria-hidden
        className="ambient-blob h-[40rem] w-[40rem]"
        style={{
          top: "10%",
          right: "-10%",
          background:
            "radial-gradient(closest-side, rgba(176,134,102,0.18), rgba(176,134,102,0))",
        }}
      />
      <div className="relative mx-auto grid min-h-[calc(100dvh-5rem)] max-w-[1440px] grid-cols-1 gap-12 px-6 pb-16 pt-16 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:pb-24 lg:pt-24">
        <motion.div
          style={{ y: textY }}
          className="relative z-10 flex flex-col justify-between lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="flex items-center gap-4"
          >
            <span className="hairline max-w-14" />
            <span className="eyebrow">Interior Design · Est. 2012</span>
          </motion.div>

          <div className="mt-12 lg:mt-0">
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.92] tracking-[-0.02em] text-charcoal">
              {"Considered".split("").map((c, i) => (
                <motion.span
                  key={`c-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4 + i * 0.03,
                    ease,
                  }}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease }}
                className="inline-block italic text-clay-deep"
              >
                interiors,
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.0, ease }}
                className="inline-block"
              >
                quietly made.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2, ease }}
              className="mt-10 max-w-lg text-base leading-relaxed text-graphite sm:text-lg"
            >
              A boutique studio shaping private residences, heritage homes and
              intimate hospitality — one room, one provenance, one hand-drawn
              detail at a time.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease }}
            className="mt-16 flex flex-wrap items-center gap-6 lg:mt-0"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-4 rounded-full bg-charcoal py-2 pl-7 pr-2 text-[11px] font-medium uppercase tracking-[0.22em] text-bone transition-[transform,background] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-graphite active:scale-[0.985]"
            >
              View selected work
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-bone/10 ring-1 ring-bone/15 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[2px] group-hover:bg-clay group-hover:ring-clay">
                <ArrowDown size={13} weight="thin" className="-rotate-45 transition-transform duration-500 group-hover:scale-110" />
              </span>
            </a>
            <a
              href="#contact"
              className="text-[12px] font-medium uppercase tracking-[0.2em] text-charcoal underline decoration-charcoal/30 underline-offset-[6px] transition-colors hover:decoration-charcoal"
            >
              Enquire about your project
            </a>
          </motion.div>
        </motion.div>

        <div className="relative lg:col-span-5">
          {/* Doppelrand: outer shell */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease }}
            className="relative aspect-[4/5] w-full rounded-[2rem] bg-charcoal/[0.04] p-1.5 ring-1 ring-charcoal/10 lg:aspect-auto lg:h-full"
          >
            {/* Inner core with concentric radius */}
            <div className="bezel-inner relative h-full w-full overflow-hidden rounded-[calc(2rem-0.375rem)] bg-cream">
              <motion.div
                style={{ y: imageY }}
                className="absolute inset-0 scale-110"
              >
                <Image
                  src="/assets/img/maison-riviere.jpg"
                  alt="A sunlit living room with linen sofa and travertine coffee table"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-bone/85 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-charcoal backdrop-blur-md ring-1 ring-charcoal/5">
                <span className="h-1 w-1 rounded-full bg-clay" />
                Featured · 2025
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/55 via-charcoal/15 to-transparent p-8">
                <p className="font-display text-3xl leading-tight text-bone">
                  Maison Rivière
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-bone/75 font-mono">
                  Bastide · Provence, FR
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease }}
            className="absolute -left-6 bottom-24 hidden w-56 rounded-[1.25rem] bg-charcoal/[0.04] p-1.5 ring-1 ring-charcoal/10 shadow-[0_30px_80px_-30px_rgba(26,24,21,0.45)] lg:block"
          >
            <div className="bezel-inner rounded-[calc(1.25rem-0.375rem)] bg-bone px-5 py-5">
              <div className="flex items-center gap-1 text-clay">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} weight="fill" />
                ))}
              </div>
              <p className="mt-3 font-display text-base italic leading-snug text-charcoal">
                &ldquo;The most intuitive designers we have ever worked with.&rdquo;
              </p>
              <p className="eyebrow mt-4 text-[9px]">
                House & Garden · 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute inset-x-0 bottom-8 z-20 flex justify-center"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="eyebrow text-[9px]">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-charcoal/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
