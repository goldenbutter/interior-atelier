import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { RevealMount } from "@/lib/useReveal";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Services />
        <Gallery />
        <Process />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
      <RevealMount />
    </>
  );
}
