import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — Interiørarkitektur i Trøndelag`,
    template: `%s · ${brand.name}`,
  },
  description: `Et lite atelier som former private hjem og vernede bygg ved Orkdalsfjorden. ${brand.tagline}`,
  authors: [{ name: "Bithun" }],
  creator: "Bithun",
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    type: "website",
    locale: "nb_NO",
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
      </body>
    </html>
  );
}
