"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  EnvelopeSimple,
  Phone,
  MapPin,
} from "@phosphor-icons/react";
import { brand } from "@shared/brand";
import { copyNo } from "@shared/copy/no";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="kontakt"
      className="relative bg-charcoal py-28 text-bone lg:py-40"
    >
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
              <span className="eyebrow text-ash">{copyNo.contact.eyebrow}</span>
            </div>
            <h2 className="mt-10 font-display text-[clamp(2.75rem,7vw,6.5rem)] font-light leading-[0.98] tracking-[-0.015em]">
              {copyNo.contact.heading}
              <br />
              <em className="italic text-clay">{copyNo.contact.headingEm}</em>
            </h2>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-ash">
              {copyNo.contact.body}
            </p>

            <a
              href={`mailto:${brand.contact.email}`}
              className="group mt-14 inline-flex items-center gap-5 border-b border-bone/40 pb-4 font-display text-2xl italic text-bone transition-[border-color,color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-clay hover:text-clay lg:text-4xl"
            >
              {brand.contact.email}
              <span className="bezel-inner inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bone/[0.06] ring-1 ring-bone/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[2px] group-hover:bg-clay group-hover:ring-clay">
                <ArrowUpRight size={16} weight="thin" />
              </span>
            </a>

            <form
              className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <label className="flex flex-col gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ash">
                {copyNo.contact.nameLabel}
                <input
                  required
                  name="name"
                  type="text"
                  className="border-0 border-b border-bone/30 bg-transparent py-2 text-base text-bone outline-none transition-colors placeholder:text-bone/30 focus:border-clay"
                />
              </label>
              <label className="flex flex-col gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ash">
                {copyNo.contact.emailLabel}
                <input
                  required
                  name="email"
                  type="email"
                  className="border-0 border-b border-bone/30 bg-transparent py-2 text-base text-bone outline-none transition-colors placeholder:text-bone/30 focus:border-clay"
                />
              </label>
              <label className="sm:col-span-2 flex flex-col gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ash">
                {copyNo.contact.messageLabel}
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="resize-none border-0 border-b border-bone/30 bg-transparent py-2 text-base text-bone outline-none transition-colors placeholder:text-bone/30 focus:border-clay"
                />
              </label>
              <p className="sm:col-span-2 text-[11px] leading-relaxed text-ash">
                {copyNo.contact.privacyNote}
              </p>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitted}
                  className="inline-flex items-center gap-3 rounded-full bg-bone px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors hover:bg-clay hover:text-bone disabled:opacity-60"
                >
                  {submitted ? "Takk — vi tar kontakt." : copyNo.contact.submitCta}
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="space-y-12 lg:col-span-5 lg:pt-20"
          >
            <div>
              <p className="eyebrow text-ash">{copyNo.contact.studioLabel}</p>
              <div className="mt-4 flex items-start gap-4 text-sm text-bone/90">
                <MapPin size={18} weight="thin" className="mt-0.5 shrink-0" />
                <p className="leading-relaxed">
                  {brand.address.street}
                  <br />
                  {brand.address.postalCode} {brand.address.city},{" "}
                  {brand.address.region}
                  <br />
                  {copyNo.contact.byAppointment}
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow text-ash">{copyNo.contact.directLabel}</p>
              <div className="mt-4 space-y-3 text-sm text-bone/90">
                <div className="flex items-center gap-4">
                  <Phone size={18} weight="thin" className="shrink-0" />
                  <span>{brand.contact.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <EnvelopeSimple size={18} weight="thin" className="shrink-0" />
                  <span>{brand.contact.pressEmail}</span>
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow text-ash">{copyNo.contact.hoursLabel}</p>
              <p className="mt-4 text-sm leading-relaxed text-bone/90">
                {brand.contact.hoursLine1}
                <br />
                {brand.contact.hoursClosed}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
