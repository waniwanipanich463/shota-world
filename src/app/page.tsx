import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Services from "@/components/Services";
import WorkCategories from "@/components/WorkCategories";
import Process from "@/components/Process";
import Tools from "@/components/Tools";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-white selection:bg-synth-cyan selection:text-background">
      <Hero />
      <Works />
      <About />
      <Services />
      <WorkCategories />
      <Process />
      <Tools />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
