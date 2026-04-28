"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

// Six dedicated material macros — each tile shows the labelled material at
// macro range. Generated via the prompts in scripts/whisk-prompts.md sections
// A and C. For per-client builds, regenerate with the studio's actual palette.
const samples = [
  {
    label: "Røros Tweed · Oat",
    sub: "Hand-vevd ull · 480 g/m²",
    image: "/assets/img/lysning-detail-textile.jpg",
  },
  {
    label: "Hedmark Eik",
    sub: "Børstet · oljebehandlet",
    image: "/assets/img/lysning-detail-oak.jpg",
  },
  {
    label: "Travertin · Romersk",
    sub: "Slipt · 20 mm plate",
    image: "/assets/img/lysning-detail-travertin.jpg",
  },
  {
    label: "Lin · Beauvais",
    sub: "Tett vev · ubleket",
    image: "/assets/img/lysning-detail-lin.jpg",
  },
  {
    label: "Messing · Patinert",
    sub: "Spesialarbeid · atelier",
    image: "/assets/img/lysning-detail-messing.jpg",
  },
  {
    label: "Skinn · Vegetabilsk",
    sub: "Italiensk · cognac",
    image: "/assets/img/lysning-detail-skinn.jpg",
  },
];

export default function MaterialLibrary() {
  return (
    <section
      id="materialer"
      aria-label="Materialbibliotek"
      className="relative bg-bone py-28 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14" />
              <span className="eyebrow">Materialer — 06</span>
            </div>
            <h2 className="mt-10 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.04] tracking-tight text-charcoal">
              Et bibliotek av <em className="italic text-clay-deep">prøver</em>.
            </h2>
            <p className="mt-10 max-w-sm text-sm leading-relaxed text-graphite">
              Hvert prosjekt begynner med materialer i hånden. Vi har samlet et
              stille bibliotek av tekstiler, treverk, stein og messing fra
              produsenter vi kjenner — det meste fra Norden og Italia.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-8 lg:gap-4">
            {samples.map((s, i) => (
              <motion.figure
                key={`${s.label}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease }}
                className="group rounded-[1.25rem] bg-charcoal/[0.04] p-1.5 ring-1 ring-charcoal/10 transition-shadow duration-700 hover:shadow-[0_25px_60px_-30px_rgba(26,24,21,0.35)]"
              >
                <div className="bezel-inner relative aspect-square overflow-hidden rounded-[calc(1.25rem-0.375rem)] bg-cream">
                  <Image
                    src={s.image}
                    alt={s.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 24vw"
                    className="object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-3 px-1 pb-1">
                  <p className="font-display text-base text-charcoal">
                    {s.label}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                    {s.sub}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
