"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    no: "i",
    title: "Listening",
    duration: "Weeks 1 – 3",
    body:
      "We begin with a long conversation and a slow walk of the space. We study the light, the neighbours, and the way your household actually lives.",
  },
  {
    no: "ii",
    title: "Sketching",
    duration: "Weeks 4 – 10",
    body:
      "Hand drawings first. Plans, elevations, and mood references assembled in a single leather-bound book, presented in the studio.",
  },
  {
    no: "iii",
    title: "Specifying",
    duration: "Weeks 11 – 22",
    body:
      "Every surface, joint, pull, and stitch is specified. Samples arrive by courier. We prototype upholstery, joinery, and lighting in our workshop.",
  },
  {
    no: "iv",
    title: "Making",
    duration: "Months 6 – 14",
    body:
      "Works on site, in dialogue with contractors and the atelier. A principal is always in the room. Photography is only permitted at the very end.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-cream py-28 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14" />
              <span className="eyebrow">Process — 04</span>
            </div>
            <h2 className="mt-10 font-display text-[clamp(2.25rem,5.5vw,5rem)] font-light leading-[1.02] tracking-tight text-charcoal">
              Four movements,<br />
              <em className="italic text-clay-deep">unhurried.</em>
            </h2>
            <p className="mt-10 max-w-sm text-sm leading-relaxed text-graphite">
              A full residential commission typically spans eighteen to
              twenty-four months. We will not compress this. Fine rooms are
              not made in a hurry.
            </p>
          </div>

          <div className="relative lg:col-span-8">
            <div className="absolute left-[1.1rem] top-2 bottom-2 w-px bg-charcoal/15" />
            <ul className="space-y-14">
              {steps.map((step, i) => (
                <motion.li
                  key={step.no}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease }}
                  className="relative grid grid-cols-12 items-start gap-4 pl-0"
                >
                  <div className="col-span-12 flex items-center gap-6 sm:col-span-3">
                    <span className="bezel-inner relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/25 bg-cream font-display text-base italic text-charcoal">
                      {step.no}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone">
                      {step.duration}
                    </span>
                  </div>
                  <div className="col-span-12 sm:col-span-9 sm:pl-4">
                    <h3 className="font-display text-3xl leading-tight text-charcoal lg:text-4xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-graphite">
                      {step.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
