import { InstagramLogo, PinterestLogo } from "@phosphor-icons/react/dist/ssr";

const columns = [
  {
    title: "Studio",
    links: ["Philosophy", "The atelier", "Careers", "Press"],
  },
  {
    title: "Work",
    links: ["Residences", "Heritage", "Hospitality", "Archive"],
  },
  {
    title: "Practice",
    links: ["Process", "Fees", "Consultation", "FAQ"],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-bone pt-24 pb-10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 border-t border-line pt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/70">
                <span className="font-display text-xl italic leading-none">a</span>
              </span>
              <span className="font-display text-2xl tracking-tight text-charcoal">
                Interior Atelier
              </span>
            </div>
            <p className="mt-8 max-w-md font-display text-xl italic leading-snug text-stone">
              &ldquo;A room should never shout. It should unfold.&rdquo;
            </p>
            <p className="mt-8 text-sm leading-relaxed text-graphite">
              14 Mount Street, Mayfair<br />
              London W1K 2RH · United Kingdom
            </p>

            <div className="mt-10 flex items-center gap-3">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/30 text-charcoal transition-colors hover:bg-charcoal hover:text-bone"
              >
                <InstagramLogo size={18} weight="thin" />
              </a>
              <a
                href="https://pinterest.com"
                aria-label="Pinterest"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/30 text-charcoal transition-colors hover:bg-charcoal hover:text-bone"
              >
                <PinterestLogo size={18} weight="thin" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:col-span-6 lg:col-start-7 lg:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow">{col.title}</p>
                <ul className="mt-6 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-graphite transition-colors hover:text-charcoal"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-20 select-none font-display text-[clamp(4rem,18vw,18rem)] font-light leading-[0.85] tracking-[-0.035em] text-charcoal/90">
          <span className="italic text-clay-deep/95">A</span>telier
          <span className="text-clay">.</span>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-stone sm:flex-row sm:items-center">
          <p>
            &copy; {year} · Interior Atelier Ltd. All rights reserved.
            Registered in England &amp; Wales.
          </p>
          <p>Developed by Bithun</p>
        </div>
      </div>
    </footer>
  );
}
