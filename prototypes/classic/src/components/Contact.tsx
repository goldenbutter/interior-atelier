"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  EnvelopeSimple,
  Phone,
  MapPin,
} from "@phosphor-icons/react";
import { brand } from "@shared/brand";
import { copyNo } from "@shared/copy/no";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="kontakt" className="relative bg-charcoal py-24 text-bone lg:py-36">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14 bg-bone/40" />
              <span className="eyebrow text-ash">{copyNo.contact.eyebrow}</span>
            </div>
            <h2 className="mt-10 font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[1.0] tracking-[-0.015em]">
              {copyNo.contact.heading}
              <br />
              <em className="italic text-clay">
                {copyNo.contact.headingEm}
              </em>
            </h2>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-ash">
              {copyNo.contact.body}
            </p>

            <a
              href={`mailto:${brand.contact.email}`}
              className="group mt-12 inline-flex items-center gap-5 border-b border-bone/40 pb-4 font-display text-2xl italic text-bone transition-colors hover:border-clay hover:text-clay lg:text-4xl"
            >
              {brand.contact.email}
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone/40 transition-transform group-hover:translate-x-1">
                <ArrowUpRight size={16} weight="thin" />
              </span>
            </a>

            <form
              className="reveal mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
              style={{ ["--reveal-delay" as string]: "120ms" }}
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
                  className="border-0 border-b border-bone/30 bg-transparent py-2 font-sans text-base text-bone outline-none transition-colors placeholder:text-bone/30 focus:border-clay"
                />
              </label>
              <label className="flex flex-col gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ash">
                {copyNo.contact.emailLabel}
                <input
                  required
                  name="email"
                  type="email"
                  className="border-0 border-b border-bone/30 bg-transparent py-2 font-sans text-base text-bone outline-none transition-colors placeholder:text-bone/30 focus:border-clay"
                />
              </label>
              <label className="sm:col-span-2 flex flex-col gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ash">
                {copyNo.contact.messageLabel}
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="resize-none border-0 border-b border-bone/30 bg-transparent py-2 font-sans text-base text-bone outline-none transition-colors placeholder:text-bone/30 focus:border-clay"
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
          </div>

          <div
            className="reveal space-y-10 lg:col-span-5 lg:pt-20"
            style={{ ["--reveal-delay" as string]: "180ms" }}
          >
            <div>
              <p className="eyebrow text-ash">{copyNo.contact.studioLabel}</p>
              <div className="mt-4 flex items-start gap-4 text-sm text-bone/90">
                <MapPin size={18} weight="thin" className="mt-0.5 shrink-0" />
                <p className="leading-relaxed">
                  {brand.address.street}
                  <br />
                  {brand.address.postalCode} {brand.address.city}, {brand.address.region}
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
          </div>
        </div>
      </div>
    </section>
  );
}
