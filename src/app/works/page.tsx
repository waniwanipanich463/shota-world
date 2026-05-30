import type { Metadata } from "next";
import Footer from "@/components/Footer";
import WorksCollection from "@/components/WorksCollection";

export const metadata: Metadata = {
  title: "WORKS COLLECTION | SHOTA WORLD",
  description: "SHOTA WORLDの作品集。作品とタイトルだけで構成したビジュアルアーカイブです。",
};

export default function WorksPage() {
  return (
    <main className="relative min-h-screen bg-background text-white selection:bg-synth-cyan selection:text-background">
      <WorksCollection />
      <Footer />
    </main>
  );
}
