"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
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
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500 ${
          scrolled
            ? "bg-bone/85 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
              <Image
                src="/assets/img/lysning-logo.png"
                alt={`${brand.name} monogram`}
                width={40}
                height={40}
                priority
                className="h-full w-full object-contain"
              />
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

          <nav className="hidden items-center gap-10 lg:flex">
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

          <div className="hidden items-center gap-4 lg:flex">
            {/* Language toggle — placeholder. v1 is Bokmål only; EN translations land in shared/copy/en.ts per real-client engagement. */}
            <div
              role="group"
              aria-label="Velg språk"
              className="flex items-center gap-1 rounded-full border border-charcoal/15 bg-bone/60 p-1 backdrop-blur-sm"
            >
              <span
                aria-current="true"
                className="rounded-full bg-charcoal px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-bone"
              >
                NO
              </span>
              <button
                type="button"
                disabled
                aria-label="English (kommer snart)"
                className="cursor-not-allowed rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-stone/60 transition-colors"
              >
                EN
              </button>
            </div>

            <a
              href="#kontakt"
              className="group relative inline-flex items-center gap-3 rounded-full bg-charcoal py-1.5 pl-5 pr-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-bone transition-[transform,background] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-graphite active:scale-[0.98]"
            >
              {copyNo.nav.bookCta}
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-bone/10 text-bone ring-1 ring-bone/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[1px] group-hover:bg-bone/20">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
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
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Lukk meny"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-charcoal/25 backdrop-blur-[2px] lg:hidden"
            />
            <motion.aside
              initial={{ y: -16, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -16, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-label="Hovedmeny"
              className="fixed right-4 top-[5.5rem] z-[61] w-72 origin-top-right overflow-hidden rounded-2xl border border-charcoal/10 bg-bone/55 text-charcoal shadow-[0_30px_80px_-20px_rgba(26,24,21,0.35)] backdrop-blur-2xl backdrop-saturate-150 lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-3">
                <span className="font-display text-base tracking-tight">
                  {brand.name}
                </span>
                <button
                  type="button"
                  aria-label="Lukk meny"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-charcoal/20 bg-bone/40 text-charcoal transition-colors hover:bg-bone/70"
                >
                  <X size={14} weight="thin" />
                </button>
              </div>
              <nav className="flex flex-col py-2">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.08 + i * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="px-5 py-3 font-display text-lg tracking-tight transition-colors hover:bg-charcoal/[0.04] hover:text-clay-deep"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
