import { copyNo } from "@shared/copy/no";

export default function Process() {
  return (
    <section id="prosess" className="relative bg-cream py-24 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-4">
            <div className="flex items-center gap-4">
              <span className="hairline max-w-14" />
              <span className="eyebrow">{copyNo.process.eyebrow}</span>
            </div>
            <h2 className="mt-10 font-display text-[clamp(2.25rem,5.5vw,4.75rem)] font-light leading-[1.04] tracking-tight text-charcoal">
              {copyNo.process.heading}
              <br />
              <em className="italic text-clay-deep">
                {copyNo.process.headingEm}
              </em>
            </h2>
            <p className="mt-10 max-w-sm text-sm leading-relaxed text-graphite">
              {copyNo.process.body}
            </p>
          </div>

          <div className="relative lg:col-span-8">
            <div className="absolute left-[1.25rem] top-2 bottom-2 w-px bg-charcoal/15" />
            <ul className="space-y-12">
              {copyNo.process.steps.map((step, i) => (
                <li
                  key={step.no}
                  className="reveal relative grid grid-cols-12 items-start gap-4 pl-0"
                  style={
                    {
                      ["--reveal-delay"]: `${i * 90}ms`,
                    } as React.CSSProperties
                  }
                >
                  <div className="col-span-12 flex items-center gap-6 sm:col-span-3">
                    <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/25 bg-cream font-display text-base italic text-charcoal">
                      {step.no}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone">
                      {step.duration}
                    </span>
                  </div>
                  <div className="col-span-12 sm:col-span-9 sm:pl-4">
                    <h3 className="font-display text-3xl leading-tight text-charcoal lg:text-4xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-graphite">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
