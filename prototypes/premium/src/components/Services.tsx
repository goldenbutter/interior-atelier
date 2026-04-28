"use client";

import { motion } from "framer-motion";
import {
  House,
  Buildings,
  PaintBrushHousehold,
  Armchair,
  Compass,
} from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    no: "I",
    icon: House,
    title: "Private residences",
    body:
      "Ground-up commissions, whole-home refurbishments, and considered single-room transformations for private clients.",
    tags: ["Full service", "From 12 months"],
  },
  {
    no: "II",
    icon: Buildings,
    title: "Heritage & listed homes",
    body:
      "Sympathetic restoration of listed buildings, country houses and historic townhouses — in dialogue with conservation officers and craftspeople.",
    tags: ["Grade II · Grade I", "Bespoke joinery"],
  },
  {
    no: "III",
    icon: PaintBrushHousehold,
    title: "Hospitality",
    body:
      "Intimate hotels, members' clubs, and restaurants where atmosphere is everything. Fewer projects, deeper involvement.",
    tags: ["Boutique only", "By invitation"],
  },
  {
    no: "IV",
    icon: Armchair,
    title: "Furniture & styling",
    body:
      "Hand-drawn pieces produced by our atelier of joiners and upholsterers, alongside sourcing from European makers and antiquaries.",
    tags: ["Made to order", "Atelier"],
  },
  {
    no: "V",
    icon: Compass,
    title: "Consultation",
    body:
      "A concentrated day in your home with the principal — an architect's eye, a decorator's hand, a candid report.",
    tags: ["One day", "From £2,400"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-charcoal py-28 text-bone lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14 bg-bone/40" />
              <span className="eyebrow text-ash">Services — 02</span>
            </div>
            <h2 className="mt-10 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[1.02] tracking-tight">
              Five disciplines,<br />
              <em className="italic text-clay">one atelier.</em>
            </h2>
            <p className="mt-10 max-w-md text-sm leading-relaxed text-ash">
              We take on a small number of commissions each year. Every project
              is led by a principal and supported by the full atelier — from
              architectural drawings to the last cushion on the bed.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-bone/10 border-y border-bone/10">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.li
                    key={service.no}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.08,
                      ease,
                    }}
                    className="group relative py-10 transition-colors hover:bg-bone/[0.03]"
                  >
                    <div className="grid grid-cols-12 items-start gap-4">
                      <div className="col-span-1 font-display text-xl italic text-ash">
                        {service.no}
                      </div>
                      <div className="col-span-1">
                        <Icon size={22} weight="thin" className="text-bone" />
                      </div>
                      <div className="col-span-10 lg:col-span-7">
                        <h3 className="font-display text-2xl leading-tight text-bone lg:text-3xl">
                          {service.title}
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-ash">
                          {service.body}
                        </p>
                      </div>
                      <div className="col-span-12 mt-4 flex flex-wrap gap-2 lg:col-span-3 lg:mt-0 lg:justify-end">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-bone/20 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-ash"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="absolute inset-x-0 bottom-0 h-px w-0 bg-clay transition-all duration-700 group-hover:w-full" />
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
