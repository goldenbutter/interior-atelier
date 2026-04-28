"use client";

import { motion } from "framer-motion";
import { brand } from "@shared/brand";

const ease = [0.22, 1, 0.36, 1] as const;

// Stylised Trøndelag region — not a literal map, an editorial abstraction.
// Centred on Orkanger, with surrounding settlements indicated by small dots.
const settlements = [
  { x: 48, y: 52, label: "Orkanger", primary: true },
  { x: 62, y: 38, label: "Trondheim" },
  { x: 28, y: 68, label: "Hitra" },
  { x: 36, y: 78, label: "Frøya" },
  { x: 70, y: 64, label: "Røros" },
  { x: 58, y: 76, label: "Selbu" },
  { x: 42, y: 32, label: "Levanger" },
  { x: 32, y: 24, label: "Steinkjer" },
];

export default function ServiceArea() {
  return (
    <section
      id="omrade"
      aria-label="Vårt virksomhetsområde"
      className="relative bg-bone py-28 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14" />
              <span className="eyebrow">Virksomhetsområde — 08</span>
            </div>
            <h2 className="mt-10 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.04] tracking-tight text-charcoal">
              Vi tegner <em className="italic text-clay-deep">der vi bor</em>.
            </h2>
            <p className="mt-10 max-w-md text-sm leading-relaxed text-graphite">
              Atelieret holder til i {brand.address.street}, midt i {brand.address.city}.
              De fleste oppdragene våre ligger innen et par timers reise — fra
              Hitra i vest til Røros i øst. Vi tar imidlertid imot enkelte
              oppdrag i Oslo og på Vestlandet hvert år.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="font-display text-3xl text-charcoal">8 — 10</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                  Oppdrag pr. år
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-charcoal">~150 km</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                  Primærradius
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease }}
            className="relative lg:col-span-7"
          >
            <div className="rounded-[1.75rem] bg-charcoal/[0.04] p-2 ring-1 ring-charcoal/10">
              <div className="bezel-inner relative aspect-[4/3] overflow-hidden rounded-[calc(1.75rem-0.5rem)] bg-cream/60">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  {/* Stylised coastline / region outline (not literal cartography) */}
                  <path
                    d="M 8,40 Q 14,20 28,18 T 50,14 Q 68,12 78,22 T 92,40 Q 96,58 88,72 T 70,86 Q 50,92 32,88 T 14,72 Q 4,56 8,40 Z"
                    fill="rgba(176,134,102,0.05)"
                    stroke="rgba(26,24,21,0.18)"
                    strokeWidth="0.18"
                    strokeDasharray="0.4 0.6"
                  />
                  {/* Working radius around Orkanger */}
                  <circle
                    cx="48"
                    cy="52"
                    r="22"
                    fill="rgba(176,134,102,0.07)"
                    stroke="rgba(176,134,102,0.4)"
                    strokeWidth="0.2"
                    strokeDasharray="0.4 0.6"
                  />
                  {/* Hairline crosshair grid for editorial feel */}
                  <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(26,24,21,0.06)" strokeWidth="0.1" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(26,24,21,0.06)" strokeWidth="0.1" />

                  {/* Settlement pins */}
                  {settlements.map((s, i) => (
                    <motion.g
                      key={s.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + i * 0.08,
                        ease,
                      }}
                    >
                      {s.primary ? (
                        <>
                          <circle
                            cx={s.x}
                            cy={s.y}
                            r="0.9"
                            fill="var(--clay-deep)"
                          />
                          <circle
                            cx={s.x}
                            cy={s.y}
                            r="2.4"
                            fill="none"
                            stroke="var(--clay-deep)"
                            strokeWidth="0.2"
                          />
                        </>
                      ) : (
                        <circle
                          cx={s.x}
                          cy={s.y}
                          r="0.45"
                          fill="rgba(26,24,21,0.55)"
                        />
                      )}
                      <text
                        x={s.x + 1.8}
                        y={s.y + 0.6}
                        fontSize="2"
                        fill={s.primary ? "var(--clay-deep)" : "rgba(26,24,21,0.6)"}
                        fontFamily="var(--font-geist-mono), monospace"
                        letterSpacing="0.1"
                      >
                        {s.label.toUpperCase()}
                      </text>
                    </motion.g>
                  ))}
                </svg>

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-bone/85 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-charcoal backdrop-blur-md ring-1 ring-charcoal/5">
                  <span className="h-1 w-1 rounded-full bg-clay" />
                  Trøndelag
                </div>
                <div className="absolute right-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-charcoal/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-bone backdrop-blur-md">
                  Atelier · {brand.address.city}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
