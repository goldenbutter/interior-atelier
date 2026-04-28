import {
  House,
  Buildings,
  PaintBrushHousehold,
  Armchair,
  Compass,
} from "@phosphor-icons/react/dist/ssr";
import { copyNo } from "@shared/copy/no";

const icons = [House, Buildings, PaintBrushHousehold, Armchair, Compass] as const;

export default function Services() {
  return (
    <section
      id="tjenester"
      className="relative bg-charcoal py-24 text-bone lg:py-36"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14 bg-bone/40" />
              <span className="eyebrow text-ash">{copyNo.services.eyebrow}</span>
            </div>
            <h2 className="mt-10 font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.04] tracking-tight">
              {copyNo.services.heading}
              <br />
              <em className="italic text-clay">{copyNo.services.headingEm}</em>
            </h2>
            <p className="mt-10 max-w-md text-sm leading-relaxed text-ash">
              {copyNo.services.body}
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-bone/10 border-y border-bone/10">
              {copyNo.services.list.map((service, i) => {
                const Icon = icons[i] ?? House;
                return (
                  <li
                    key={service.no}
                    className="reveal group relative py-9 transition-colors hover:bg-bone/[0.03]"
                    style={
                      {
                        ["--reveal-delay"]: `${i * 80}ms`,
                      } as React.CSSProperties
                    }
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
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
