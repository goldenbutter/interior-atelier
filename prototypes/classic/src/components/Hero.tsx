import Image from "next/image";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { brand } from "@shared/brand";
import { copyNo } from "@shared/copy/no";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100dvh] w-full overflow-hidden bg-bone pt-20"
    >
      <div className="relative mx-auto grid min-h-[calc(100dvh-5rem)] max-w-[1280px] grid-cols-1 gap-10 px-6 pb-16 pt-12 lg:grid-cols-12 lg:gap-10 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="relative z-10 flex flex-col justify-between lg:col-span-7">
          <div className="reveal flex items-center gap-4">
            <span className="hairline max-w-14" />
            <span className="eyebrow">
              {copyNo.hero.eyebrow} {brand.founded}
            </span>
          </div>

          <div className="mt-12 lg:mt-0">
            <h1 className="reveal font-display text-[clamp(3rem,8vw,7rem)] font-light leading-[0.94] tracking-[-0.02em] text-charcoal">
              {copyNo.hero.headlineLine1}
              <br />
              <em className="italic text-clay-deep">
                {copyNo.hero.headlineAccent}
              </em>
              {copyNo.hero.headlineLine2 ? (
                <>
                  <br />
                  <span>{copyNo.hero.headlineLine2}</span>
                </>
              ) : null}
            </h1>

            <p
              className="reveal mt-10 max-w-lg text-base leading-relaxed text-graphite sm:text-lg"
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              {copyNo.hero.body}
            </p>
          </div>

          <div
            className="reveal mt-16 flex flex-wrap items-center gap-6 lg:mt-0"
            style={{ ["--reveal-delay" as string]: "240ms" }}
          >
            <a
              href="#prosjekter"
              className="group inline-flex items-center gap-3 rounded-full bg-charcoal px-7 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-bone transition-colors hover:bg-graphite"
            >
              {copyNo.hero.primaryCta}
              <ArrowDown
                size={12}
                weight="thin"
                className="-rotate-45 transition-transform duration-500 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#kontakt"
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal underline decoration-charcoal/30 underline-offset-[6px] transition-colors hover:decoration-charcoal"
            >
              {copyNo.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div
          className="reveal relative lg:col-span-5"
          style={{ ["--reveal-delay" as string]: "180ms" }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-cream lg:aspect-auto lg:h-full">
            <Image
              src="/assets/img/lysning-bjorkely.jpg"
              alt={`${brand.name} — utvalgt prosjekt`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/55 via-charcoal/15 to-transparent p-6">
              <p className="eyebrow text-bone/85">Utvalgt · 2025</p>
              <p className="mt-1 font-display text-2xl text-bone">
                Bjørkely, Bygdøy
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center">
        <div className="flex flex-col items-center gap-3">
          <span className="eyebrow text-[9px]">{copyNo.hero.scroll}</span>
          <div className="h-8 w-px bg-charcoal/40" />
        </div>
      </div>
    </section>
  );
}
