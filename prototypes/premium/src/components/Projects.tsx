"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { copyNo } from "@shared/copy/no";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  const projects = copyNo.projects.list;

  return (
    <section id="prosjekter" className="relative bg-bone py-28 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14" />
              <span className="eyebrow">{copyNo.projects.eyebrow}</span>
            </div>
            <h2 className="mt-10 max-w-3xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.02] tracking-tight text-charcoal">
              {copyNo.projects.heading}
              <em className="italic text-clay-deep">
                {copyNo.projects.headingEm}
              </em>
              {copyNo.projects.headingRest}
            </h2>
          </div>
          <a
            href="#alle-prosjekter"
            className="group inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal"
          >
            {copyNo.projects.archive}
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/70 ring-1 ring-charcoal/[0.06] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-charcoal group-hover:text-bone group-hover:translate-x-[3px] group-hover:-translate-y-[2px]">
              <ArrowUpRight size={14} weight="thin" />
            </span>
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-24 md:grid-cols-2 lg:gap-x-12">
          {projects.map((p, i) => {
            const isTall = "tall" in p && p.tall === true;
            return (
            <motion.a
              key={p.no}
              href={`#prosjekt-${p.slug}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: (i % 2) * 0.12, ease }}
              className={`group block ${i % 2 === 1 ? "md:mt-20" : ""}`}
            >
              <div
                className={`relative rounded-[1.75rem] bg-charcoal/[0.04] p-1.5 ring-1 ring-charcoal/10 transition-shadow duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:shadow-[0_40px_90px_-40px_rgba(26,24,21,0.45)] ${
                  isTall ? "aspect-[3/4]" : "aspect-[4/5]"
                }`}
              >
                <div className="bezel-inner relative h-full w-full overflow-hidden rounded-[calc(1.75rem-0.375rem)] bg-cream">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.6, ease }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute left-5 top-5 flex items-center gap-3">
                    <span className="inline-flex h-9 items-center rounded-full bg-bone/85 px-4 font-mono text-[10px] uppercase tracking-[0.22em] text-charcoal backdrop-blur-md ring-1 ring-charcoal/5">
                      {p.no} <span className="mx-1.5 text-stone/60">/</span>{" "}
                      {projects.length.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-5 translate-y-3 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-bone text-charcoal ring-1 ring-charcoal/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                      <ArrowUpRight size={16} weight="thin" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-3xl leading-tight text-charcoal transition-colors group-hover:text-clay-deep lg:text-4xl">
                    {p.title}
                  </h3>
                  <p className="eyebrow mt-3">{p.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-xl italic text-stone">
                    {p.year}
                  </p>
                  <p className="eyebrow mt-2 max-w-[11rem] text-[9px] normal-case tracking-wide">
                    {p.type}
                  </p>
                </div>
              </div>
            </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
