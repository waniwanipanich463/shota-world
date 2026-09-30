import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorksPreview from "@/components/WorksPreview";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="studio-site">
      <Hero />
      <Services />
      <WorksPreview />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
