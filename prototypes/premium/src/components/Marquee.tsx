import { copyNo } from "@shared/copy/no";

export default function Marquee() {
  const items = [...copyNo.marquee.sources, ...copyNo.marquee.sources];
  return (
    <section
      aria-label="Presse & utvalgte omtaler"
      className="relative border-y border-line bg-bone py-9 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bone to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bone to-transparent" />
      <div className="flex items-center gap-8">
        <span className="eyebrow shrink-0 pl-6 lg:pl-12">
          {copyNo.marquee.intro}
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-14 whitespace-nowrap">
            {items.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center font-display text-2xl italic text-stone"
              >
                {item}
                <span className="mx-7 inline-block h-1 w-1 rounded-full bg-clay/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
