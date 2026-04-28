"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Star } from "@phosphor-icons/react";
import { brand } from "@shared/brand";
import { copyNo } from "@shared/copy/no";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Premium-tier signature: scroll-driven hero "explode".
 *
 * Headline words scatter outward as the user scrolls, while the Whisk-generated
 * 360° pan video continues underneath. Reassembles on scroll-up.
 *
 * Video source: /generated/videos/lysning-hero-360.mp4 (gitignored, generated
 * manually via Whisk per scripts/whisk-prompts.md). Falls back to the static
 * hero image when the video is missing — the <video> poster handles that.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.06]);
  const bodyY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const headlineWords = copyNo.hero.headlineLine1.split(" "); // "Stille rom"
  const accentWord = copyNo.hero.headlineAccent; // "som husker"

  return (
    <section
      id="top"
      ref={sectionRef}
      // Inline `position: relative` — framer-motion's useScroll measures the target
      // before Tailwind's `relative` class applies, so we set it both ways defensively.
      style={{ position: "relative" }}
      className="min-h-[100dvh] w-full overflow-hidden bg-bone pt-20"
    >
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
        <div className="relative z-10 flex flex-col justify-between lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="flex items-center gap-4"
          >
            <span className="hairline max-w-14" />
            <span className="eyebrow">
              {copyNo.hero.eyebrow} {brand.founded}
            </span>
          </motion.div>

          <div className="mt-12 lg:mt-0">
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.92] tracking-[-0.02em] text-charcoal">
              <span className="block">
                {headlineWords.map((w, i) => (
                  <ExplodingWord
                    key={`l1-${i}`}
                    word={w}
                    progress={scrollYProgress}
                    seed={i + 1}
                    delay={0.4 + i * 0.05}
                  />
                ))}
              </span>
              <ExplodingWord
                word={accentWord}
                progress={scrollYProgress}
                seed={4}
                delay={0.7}
                italic
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.0, ease }}
              style={{ y: bodyY }}
              className="mt-10 max-w-lg text-base leading-relaxed text-graphite sm:text-lg"
            >
              {copyNo.hero.body}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease }}
            style={{ opacity: ctaOpacity }}
            className="mt-16 flex flex-wrap items-center gap-6 lg:mt-0"
          >
            <a
              href="#prosjekter"
              className="group relative inline-flex items-center gap-4 rounded-full bg-charcoal py-2 pl-7 pr-2 text-[11px] font-medium uppercase tracking-[0.22em] text-bone transition-[transform,background] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-graphite active:scale-[0.985]"
            >
              {copyNo.hero.primaryCta}
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-bone/10 ring-1 ring-bone/15 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[2px] group-hover:bg-clay group-hover:ring-clay">
                <ArrowDown
                  size={13}
                  weight="thin"
                  className="-rotate-45 transition-transform duration-500 group-hover:scale-110"
                />
              </span>
            </a>
            <a
              href="#kontakt"
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal underline decoration-charcoal/30 underline-offset-[6px] transition-colors hover:decoration-charcoal"
            >
              {copyNo.hero.secondaryCta}
            </a>
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease }}
            className="relative aspect-[4/5] w-full rounded-[2rem] bg-charcoal/[0.04] p-1.5 ring-1 ring-charcoal/10 lg:aspect-auto lg:h-full"
          >
            <div className="bezel-inner relative h-full w-full overflow-hidden rounded-[calc(2rem-0.375rem)] bg-cream">
              <motion.div
                style={{ y: videoY, scale: videoScale }}
                className="absolute inset-0"
              >
                <video
                  className="absolute inset-0 z-10 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/img/lysning-hero.jpg"
                  preload="none"
                >
                  <source
                    src="/generated/videos/lysning-hero-360.mp4"
                    type="video/mp4"
                  />
                </video>
                <Image
                  src="/assets/img/lysning-hero.jpg"
                  alt={`${brand.name} — utvalgt prosjekt`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full bg-bone/85 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-charcoal backdrop-blur-md ring-1 ring-charcoal/5">
                <span className="h-1 w-1 rounded-full bg-clay" />
                Utvalgt · 2025
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-charcoal/55 via-charcoal/15 to-transparent p-8">
                <p className="font-display text-3xl leading-tight text-bone">
                  Bjørkely
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-bone/75 font-mono">
                  Funkis-villa · Bygdøy, Oslo
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease }}
            style={{ opacity: cardOpacity }}
            className="absolute -left-6 bottom-24 hidden w-56 rounded-[1.25rem] bg-charcoal/[0.04] p-1.5 ring-1 ring-charcoal/10 shadow-[0_30px_80px_-30px_rgba(26,24,21,0.45)] lg:block"
          >
            <div className="bezel-inner rounded-[calc(1.25rem-0.375rem)] bg-bone px-5 py-5">
              <div className="flex items-center gap-1 text-clay">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} weight="fill" />
                ))}
              </div>
              <p className="mt-3 font-display text-base italic leading-snug text-charcoal">
                «De mest intuitive interiørarkitektene vi har jobbet med.»
              </p>
              <p className="eyebrow mt-4 text-[9px]">Bo Bedre · 2025</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={{ opacity: scrollHintOpacity }}
        className="absolute inset-x-0 bottom-8 z-20 flex justify-center"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="eyebrow text-[9px]">{copyNo.hero.scroll}</span>
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

interface ExplodingWordProps {
  word: string;
  progress: MotionValue<number>;
  seed: number;
  delay: number;
  italic?: boolean;
}

function ExplodingWord({
  word,
  progress,
  seed,
  delay,
  italic,
}: ExplodingWordProps) {
  const dx = ((seed * 73) % 7) - 3;
  const dy = ((seed * 47) % 5) - 2;
  const dr = ((seed * 11) % 9) - 4;

  const x = useTransform(progress, [0, 0.6], [0, dx * 60]);
  const y = useTransform(progress, [0, 0.6], [0, dy * 90]);
  const rotate = useTransform(progress, [0, 0.6], [0, dr]);
  const opacity = useTransform(progress, [0, 0.5], [1, 0]);
  const blur = useTransform(progress, [0, 0.6], ["blur(0px)", "blur(6px)"]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ x, y, rotate, opacity, filter: blur }}
      className={`mr-[0.25em] inline-block ${italic ? "italic text-clay-deep" : ""}`}
    >
      {word}
    </motion.span>
  );
}
