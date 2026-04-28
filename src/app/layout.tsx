import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
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
    default: "Interior Atelier — Considered Interiors for Residences of Distinction",
    template: "%s · Interior Atelier",
  },
  description:
    "A boutique interior design studio crafting timeless, tactile spaces for private residences, heritage homes, and intimate hospitality projects.",
  keywords: [
    "interior design",
    "interior atelier",
    "luxury interiors",
    "residential design",
    "bespoke interiors",
    "heritage renovation",
  ],
  authors: [{ name: "Bithun" }],
  creator: "Bithun",
  openGraph: {
    title: "Interior Atelier",
    description:
      "A boutique interior design studio crafting timeless, tactile spaces.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-bone text-charcoal selection:bg-charcoal selection:text-bone">
        {children}
        <div aria-hidden className="grain-overlay pointer-events-none fixed inset-0 z-[60]" />
      </body>
    </html>
  );
}
