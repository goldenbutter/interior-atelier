import Image from "next/image";
import { InstagramLogo, PinterestLogo } from "@phosphor-icons/react/dist/ssr";
import { brand } from "@shared/brand";
import { copyNo } from "@shared/copy/no";

export default function Footer() {
  const year = new Date().getFullYear();
  const columns = [
    { title: copyNo.footer.studioCol, links: copyNo.footer.studioLinks },
    { title: copyNo.footer.workCol, links: copyNo.footer.workLinks },
    { title: copyNo.footer.practiceCol, links: copyNo.footer.practiceLinks },
  ];

  return (
    <footer className="relative bg-bone pt-20 pb-10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 border-t border-line pt-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full">
                <Image
                  src="/assets/img/lysning-logo.png"
                  alt={`${brand.name} monogram`}
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-display text-2xl tracking-tight text-charcoal">
                {brand.name}
              </span>
            </div>
            <p className="mt-8 max-w-md font-display text-xl italic leading-snug text-stone">
              «{brand.tagline}»
            </p>
            <p className="mt-8 text-sm leading-relaxed text-graphite">
              {brand.address.street}
              <br />
              {brand.address.postalCode} {brand.address.city} ·{" "}
              {brand.address.country}
            </p>

            <div className="mt-10 flex items-center gap-3">
              <a
                href={brand.social.instagram}
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/30 text-charcoal transition-colors hover:bg-charcoal hover:text-bone"
              >
                <InstagramLogo size={18} weight="thin" />
              </a>
              <a
                href={brand.social.pinterest}
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

        {/* Closing editorial line — sits between the columns and the giant wordmark
            so the lower half doesn't read as void. */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line pt-10 sm:flex-row sm:items-end">
          <p className="max-w-md font-display text-2xl italic leading-snug text-stone">
            «Vi tegner sakte. Hvert oppdrag begynner med en samtale.»
          </p>
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal"
          >
            Begynn en samtale
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/70 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-charcoal group-hover:text-bone group-hover:translate-x-[3px] group-hover:-translate-y-[2px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

        <div className="relative mt-12 select-none font-display text-[clamp(4rem,18vw,18rem)] font-light leading-[0.85] tracking-[-0.035em] text-charcoal/90">
          <span className="italic text-clay-deep/95">{brand.name.charAt(0)}</span>
          {brand.name.slice(1).toLowerCase()}
          <span className="text-clay">.</span>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-stone sm:flex-row sm:items-center">
          <p>
            © {year} · {brand.name}. {copyNo.footer.rightsReserved}
          </p>
          <p>
            {copyNo.footer.devBy} <span className="text-charcoal">Bithun</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
