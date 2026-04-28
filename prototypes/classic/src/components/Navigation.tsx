"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { brand } from "@shared/brand";
import { copyNo } from "@shared/copy/no";

const links = [
  { label: copyNo.nav.philosophy, href: "#filosofi" },
  { label: copyNo.nav.services, href: "#tjenester" },
  { label: copyNo.nav.projects, href: "#prosjekter" },
  { label: copyNo.nav.process, href: "#prosess" },
  { label: copyNo.nav.contact, href: "#kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
          scrolled
            ? "bg-bone/85 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">
          <a href="#top" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/70 text-charcoal transition-colors group-hover:bg-charcoal group-hover:text-bone">
              <span className="font-display text-lg leading-none italic">
                {brand.monogram.toLowerCase()}
              </span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-tight text-charcoal">
                {brand.name}
              </span>
              <span className="eyebrow mt-1 text-[9px]">
                Est. {brand.founded} · {brand.address.city}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[13px] font-medium tracking-wide text-graphite transition-colors hover:text-charcoal"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-charcoal transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 rounded-full border border-charcoal px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-charcoal hover:text-bone"
            >
              {copyNo.nav.bookCta}
            </a>
          </div>

          <button
            type="button"
            aria-label="Åpne meny"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/40 text-charcoal lg:hidden"
          >
            <List size={20} weight="thin" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-charcoal text-bone lg:hidden">
          <div className="flex h-20 items-center justify-between px-6">
            <span className="font-display text-xl tracking-tight">
              {brand.name}
            </span>
            <button
              type="button"
              aria-label="Lukk meny"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bone/30"
            >
              <X size={20} weight="thin" />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6 pt-12">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-bone/10 py-5 font-display text-4xl tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="absolute bottom-10 left-6 right-6">
            <p className="eyebrow text-bone/60">{copyNo.contact.studioLabel}</p>
            <p className="mt-3 text-sm text-bone/80">
              {brand.address.street}
              <br />
              {brand.address.postalCode} {brand.address.city}, {brand.address.region}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
