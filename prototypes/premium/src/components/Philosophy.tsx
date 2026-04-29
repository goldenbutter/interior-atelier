"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { copyNo } from "@shared/copy/no";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

// Photo tile that desaturates by default and colourises on hover (desktop)
// or on tap (touch). Touch activation auto-reverts after 2s so the editorial
// monochrome composition reasserts itself.
function PhotoTile({
  src,
  alt,
  sizes,
  aspectClass,
  ringClass,
  innerRingClass,
}: {
  src: string;
  alt: string;
  sizes: string;
  aspectClass: string;
  ringClass: string;
  innerRingClass: string;
}) {
  const [active, setActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTap = () => {
    setActive(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setActive(false), 2000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      onClick={handleTap}
      className={`group relative ${aspectClass} overflow-hidden bg-charcoal/[0.04] p-1.5 ring-1 ring-charcoal/10 cursor-pointer ${ringClass}`}
    >
      <div
        className={`bezel-inner relative h-full w-full overflow-hidden bg-cream ${innerRingClass}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={
            active
              ? "object-cover grayscale-0 saturate-100 scale-[1.03] transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              : "object-cover grayscale-[0.85] saturate-[0.7] transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grayscale-0 group-hover:saturate-100 group-hover:scale-[1.03]"
          }
        />
      </div>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section id="filosofi" className="relative bg-bone py-28 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease }}
            variants={reveal}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14" />
              <span className="eyebrow">{copyNo.philosophy.eyebrow}</span>
            </div>
            <p className="mt-10 font-display text-sm italic leading-relaxed text-stone whitespace-pre-line">
              {copyNo.philosophy.pullQuote}
            </p>

            <div className="mt-16 space-y-6 text-sm leading-relaxed text-graphite">
              <p>{copyNo.philosophy.bodyP1}</p>
              <p>{copyNo.philosophy.bodyP2}</p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
            variants={reveal}
            className="lg:col-span-8"
          >
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,5rem)] font-light leading-[1.02] tracking-tight text-charcoal">
              {copyNo.philosophy.headline}
              <em className="italic text-clay-deep">
                {copyNo.philosophy.headlineEm}
              </em>
              {copyNo.philosophy.headlineRest}
            </h2>

            <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
              <PhotoTile
                src="/assets/img/lysning-bjorkely.jpg"
                alt="Stuen i Bjørkely-villaen"
                sizes="(max-width: 640px) 100vw, 40vw"
                aspectClass="aspect-[4/5]"
                ringClass="rounded-[1.75rem]"
                innerRingClass="rounded-[calc(1.75rem-0.375rem)]"
              />
              <div className="flex flex-col justify-end">
                <PhotoTile
                  src="/assets/img/lysning-detail-textile.jpg"
                  alt="Hand-vevd ull fra Røros Tweed"
                  sizes="(max-width: 640px) 100vw, 40vw"
                  aspectClass="aspect-square"
                  ringClass="rounded-[1.5rem]"
                  innerRingClass="rounded-[calc(1.5rem-0.375rem)]"
                />
                <p className="mt-8 text-sm italic leading-relaxed text-stone">
                  {copyNo.philosophy.materialsCaption}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
