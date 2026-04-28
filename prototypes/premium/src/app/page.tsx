import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import MaterialLibrary from "@/components/MaterialLibrary";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Philosophy />
        <Services />
        <Projects />
        <Process />
        <MaterialLibrary />
        <Testimonials />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
