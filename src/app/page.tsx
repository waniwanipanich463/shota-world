import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import Works from "@/components/Works";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-white selection:bg-synth-cyan selection:text-background">
      <Hero />
      <ScrollStory />
      <Works />
      <About />
      <Services />
      <Process />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
