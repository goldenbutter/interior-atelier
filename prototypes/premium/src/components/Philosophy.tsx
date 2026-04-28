"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { copyNo } from "@shared/copy/no";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

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
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-charcoal/[0.04] p-1.5 ring-1 ring-charcoal/10">
                <div className="bezel-inner relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)] bg-cream">
                  <Image
                    src="/assets/img/lysning-bjorkely.jpg"
                    alt="Stuen i Bjørkely-villaen"
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-charcoal/[0.04] p-1.5 ring-1 ring-charcoal/10">
                  <div className="bezel-inner relative h-full w-full overflow-hidden rounded-[calc(1.5rem-0.375rem)] bg-cream">
                    <Image
                      src="/assets/img/lysning-detail-textile.jpg"
                      alt="Hand-vevd ull fra Røros Tweed"
                      fill
                      sizes="(max-width: 640px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
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
