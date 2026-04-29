import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { brand } from "@shared/brand";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const siteUrl = `https://${brand.domains.premium}`;
const siteDescription = `Et lite atelier som former private hjem og vernede bygg ved Orkdalsfjorden. ${brand.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — Interiørarkitektur i Trøndelag`,
    template: `%s · ${brand.name}`,
  },
  description: siteDescription,
  keywords: [
    "interiørarkitekt",
    "interiørdesign",
    "Orkanger",
    "Trøndelag",
    "boligdesign",
    "vernede bygg",
    "Lysning Studio",
  ],
  authors: [{ name: "Bithun" }],
  creator: "Bithun",
  openGraph: {
    title: `${brand.name} — Interiørarkitektur i Trøndelag`,
    description: siteDescription,
    url: siteUrl,
    siteName: brand.name,
    type: "website",
    locale: "nb_NO",
    images: [
      {
        url: "/assets/img/lysning-hero.jpg",
        width: 2400,
        height: 1340,
        alt: `${brand.name} — Bjørkely-villaen, Bygdøy`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Interiørarkitektur i Trøndelag`,
    description: siteDescription,
    images: ["/assets/img/lysning-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${geist.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-bone text-charcoal selection:bg-charcoal selection:text-bone">
        {children}
        <div aria-hidden className="grain-overlay pointer-events-none fixed inset-0 z-[60]" />
        <Analytics />
      </body>
    </html>
  );
}
