import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { ServicesList } from "@/components/sections/ServicesList";
import { AmiableHighlight } from "@/components/sections/AmiableHighlight";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { MethodologyTeaser } from "@/components/sections/MethodologyTeaser";
import { Sectors } from "@/components/sections/Sectors";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutIntro />
        <ServicesList />
        <AmiableHighlight />
        <WhyChooseUs />
        <MethodologyTeaser />
        <Sectors />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
