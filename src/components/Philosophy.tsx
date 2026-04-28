"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative bg-bone py-28 lg:py-40"
    >
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
              <span className="eyebrow">Philosophy — 01</span>
            </div>
            <p className="mt-10 font-display text-sm italic leading-relaxed text-stone">
              &ldquo;A room should never shout.
              <br />
              It should unfold.&rdquo;
            </p>

            <div className="mt-16 space-y-6 text-sm leading-relaxed text-graphite">
              <p>
                Founded in 2012 in a Mayfair townhouse, Interior Atelier is a
                boutique studio of nine — architects, decorators, textile
                specialists, and an in-house atelier of joiners and
                upholsterers.
              </p>
              <p>
                We design slowly. Each commission begins with a survey, a
                season of listening, and a sketchbook. We do not work in
                trends. We work in patina, in provenance, in proportion.
              </p>
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
              We shape rooms that <em className="italic text-clay-deep">remember</em>{" "}
              — rooms that soften with years, rather than age against them.
            </h2>

            <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                <Image
                  src="/assets/img/charlwood-house.jpg"
                  alt="A study with oak panelling and a velvet armchair"
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-end">
                <div className="relative aspect-square overflow-hidden bg-cream">
                  <Image
                    src="/assets/img/orchard-rooms.jpg"
                    alt="A hand holding a linen fabric swatch over a timber surface"
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-8 text-sm italic leading-relaxed text-stone">
                  Hand-loomed linen from a mill in Beauvais, Oise — specified
                  for the drawing room drapery at Maison Rivière.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
