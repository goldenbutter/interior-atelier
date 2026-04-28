"use client";

import { motion } from "framer-motion";
import { Star } from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    quote:
      "De mest intuitive interiørarkitektene vi har jobbet med. Hver detalj føles uvilkårlig riktig.",
    author: "Anneli & Henrik Berg",
    project: "Bjørkely · Bygdøy",
    source: "Bo Bedre · 2025",
  },
  {
    quote:
      "Ingvild leser et hus som andre leser bøker. Vi fikk hjem tilbake — ikke bare en oppussing.",
    author: "Familien Rødseth",
    project: "Holmenkollen Hus",
    source: "Privat referanse · 2024",
  },
  {
    quote:
      "Lysning brakte tradisjonen tilbake til Bryggen uten at det føltes museum. Det er kunst.",
    author: "Sondre Halvorsen",
    project: "Bryggehuset · Bergen",
    source: "Plaza Interiør · 2024",
  },
];

export default function Testimonials() {
  return (
    <section
      id="omtaler"
      aria-label="Omtaler fra oppdragsgivere"
      className="relative bg-cream py-28 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14" />
              <span className="eyebrow">Omtaler — 07</span>
            </div>
            <h2 className="mt-10 max-w-3xl font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.04] tracking-tight text-charcoal">
              Det <em className="italic text-clay-deep">oppdragsgiverne</em> sier.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease }}
              className="rounded-[1.5rem] bg-charcoal/[0.04] p-1.5 ring-1 ring-charcoal/10"
            >
              <div className="bezel-inner flex h-full flex-col rounded-[calc(1.5rem-0.375rem)] bg-bone p-8">
                <div className="flex items-center gap-1 text-clay">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={11} weight="fill" />
                  ))}
                </div>
                <blockquote className="mt-5 grow font-display text-xl italic leading-snug text-charcoal">
                  «{t.quote}»
                </blockquote>
                <figcaption className="mt-8 border-t border-line pt-5">
                  <p className="font-display text-base text-charcoal">
                    {t.author}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                    {t.project}
                  </p>
                  <p className="mt-2 text-[11px] italic text-stone">
                    {t.source}
                  </p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
