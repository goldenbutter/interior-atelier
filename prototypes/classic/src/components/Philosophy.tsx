import Image from "next/image";
import { copyNo } from "@shared/copy/no";

export default function Philosophy() {
  return (
    <section id="filosofi" className="relative bg-bone py-24 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-4">
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14" />
              <span className="eyebrow">{copyNo.philosophy.eyebrow}</span>
            </div>
            <p className="mt-10 font-display text-sm italic leading-relaxed text-stone whitespace-pre-line">
              {copyNo.philosophy.pullQuote}
            </p>

            <div className="mt-14 space-y-6 text-sm leading-relaxed text-graphite">
              <p>{copyNo.philosophy.bodyP1}</p>
              <p>{copyNo.philosophy.bodyP2}</p>
            </div>
          </div>

          <div
            className="reveal lg:col-span-8"
            style={{ ["--reveal-delay" as string]: "100ms" }}
          >
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.75rem)] font-light leading-[1.04] tracking-tight text-charcoal">
              {copyNo.philosophy.headline}
              <em className="italic text-clay-deep">
                {copyNo.philosophy.headlineEm}
              </em>
              {copyNo.philosophy.headlineRest}
            </h2>

            <div className="photo-grid mt-14">
              <div className="photo-item photo-item--tall">
                <Image
                  src="/assets/img/lysning-bjorkely.jpg"
                  alt="Stuen i Bjørkely-villaen"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="photo-item">
                <Image
                  src="/assets/img/lysning-fjordstuen.jpg"
                  alt="Fjordstuen — peisstuen"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="photo-item">
                <Image
                  src="/assets/img/lysning-atelier.jpg"
                  alt="Atelieret — materialprøver"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="photo-item photo-item--wide">
                <Image
                  src="/assets/img/lysning-bryggehuset.jpg"
                  alt="Bryggehuset — fellesrommet"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            </div>

            <p className="mt-8 max-w-md text-sm italic leading-relaxed text-stone">
              {copyNo.philosophy.materialsCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
