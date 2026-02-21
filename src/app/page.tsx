"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden selection:bg-[var(--neon-lime)] selection:text-black">
      <Hero />
      <About />
      <Works />
      <Vision />
      <Contact />
      <Footer />
    </main>
  );
}
