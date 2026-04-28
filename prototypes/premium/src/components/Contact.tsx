"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative bg-charcoal py-28 text-bone lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14 bg-bone/40" />
              <span className="eyebrow text-ash">Enquiries — 05</span>
            </div>
            <h2 className="mt-10 font-display text-[clamp(2.75rem,7vw,6.5rem)] font-light leading-[0.98] tracking-[-0.015em]">
              Begin a<br />
              <em className="italic text-clay">conversation.</em>
            </h2>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-ash">
              We take on eight to ten commissions each year. Please tell us a
              little about your home, your timeline, and what is drawing you
              to the studio. We reply personally, within a week.
            </p>

            <a
              href="mailto:studio@interior-atelier.com"
              className="group mt-14 inline-flex items-center gap-5 border-b border-bone/40 pb-4 font-display text-2xl italic text-bone transition-[border-color,color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-clay hover:text-clay lg:text-4xl"
            >
              studio@interior-atelier.com
              <span className="bezel-inner inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bone/[0.06] ring-1 ring-bone/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[2px] group-hover:bg-clay group-hover:ring-clay">
                <ArrowUpRight size={16} weight="thin" />
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="space-y-12 lg:col-span-5 lg:pt-20"
          >
            <div>
              <p className="eyebrow text-ash">The studio</p>
              <div className="mt-4 flex items-start gap-4 text-sm text-bone/90">
                <MapPin size={18} weight="thin" className="mt-0.5 shrink-0" />
                <p className="leading-relaxed">
                  14 Mount Street<br />
                  Mayfair, London W1K 2RH<br />
                  By appointment only
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow text-ash">Direct</p>
              <div className="mt-4 space-y-3 text-sm text-bone/90">
                <div className="flex items-center gap-4">
                  <Phone size={18} weight="thin" className="shrink-0" />
                  <span>+44 (0)20 7946 0920</span>
                </div>
                <div className="flex items-center gap-4">
                  <EnvelopeSimple size={18} weight="thin" className="shrink-0" />
                  <span>press@interior-atelier.com</span>
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow text-ash">Hours</p>
              <p className="mt-4 text-sm leading-relaxed text-bone/90">
                Monday — Friday, 10h — 18h<br />
                Closed throughout August
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
