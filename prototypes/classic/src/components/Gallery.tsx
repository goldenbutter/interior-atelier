import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { copyNo } from "@shared/copy/no";

export default function Gallery() {
  const projects = copyNo.projects.list;

  return (
    <section id="prosjekter" className="relative bg-bone py-24 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14" />
              <span className="eyebrow">{copyNo.projects.eyebrow}</span>
            </div>
            <h2 className="mt-10 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.04] tracking-tight text-charcoal">
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
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/70 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-charcoal group-hover:text-bone group-hover:translate-x-[3px] group-hover:-translate-y-[2px]">
              <ArrowUpRight size={14} weight="thin" />
            </span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 lg:gap-x-10 lg:gap-y-20">
          {projects.map((p, i) => {
            const isTall = "tall" in p && p.tall === true;
            return (
              <a
                key={p.no}
                href={`#prosjekt-${p.slug}`}
                className={`reveal block ${i % 2 === 1 ? "md:mt-12" : ""}`}
                style={
                  {
                    ["--reveal-delay"]: `${(i % 2) * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <div
                  className={`relative overflow-hidden rounded-lg bg-cream ${
                    isTall ? "aspect-[3/4]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute left-5 top-5">
                    <span className="inline-flex h-9 items-center rounded-full bg-bone/85 px-4 font-mono text-[10px] uppercase tracking-[0.22em] text-charcoal backdrop-blur-md ring-1 ring-charcoal/5">
                      {p.no} <span className="mx-1.5 text-stone/60">/</span>{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-charcoal lg:text-3xl">
                      {p.title}
                    </h3>
                    <p className="eyebrow mt-2">{p.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg italic text-stone">
                      {p.year}
                    </p>
                    <p className="eyebrow mt-1 max-w-[11rem] text-[9px] normal-case tracking-wide">
                      {p.type}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
