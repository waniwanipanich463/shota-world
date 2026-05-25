"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { works, type Work } from "@/data/works";

const filters = ["ALL", "AI ART", "POSTER", "SNS", "CONCEPT"] as const;
type Filter = (typeof filters)[number];

export default function Works() {
  const [activeFilter, setActiveFilter] = useState<Filter>("ALL");

  const filteredWorks = useMemo(() => {
    if (activeFilter === "ALL") return works;
    return works.filter((work) => work.filter === activeFilter);
  }, [activeFilter]);

  return (
    <section id="works" className="relative overflow-hidden py-20 md:py-28">
      <div className="mist-band top-0" />

      <div className="section-shell relative z-10">
        <div className="mb-10 grid gap-7 md:mb-14 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker mb-4">SELECTED AI WORKS</p>
            <h2 className="section-title mb-6">
              Visuals for <span className="text-gradient">world design.</span>
            </h2>
            <p className="text-base leading-8 text-mist-gray md:text-lg">
              AIアート、広告ビジュアル、ポスター、SNSクリエイティブなど、世界観と目的に合わせて制作したビジュアル作品です。
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`focus-ring min-h-10 rounded-full border px-4 text-sm font-bold transition-all ${
                  activeFilter === filter
                    ? "border-synth-cyan/70 bg-synth-cyan/[0.14] text-white shadow-[0_0_24px_rgba(155,231,245,0.22)]"
                    : "border-white/[0.15] bg-white/[0.05] text-white/70 hover:border-synth-pink/[0.55] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work }: { work: Work }) {
  return (
    <article className="glass-panel group overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-synth-cyan/[0.45] hover:shadow-[0_26px_90px_rgba(0,229,255,0.14)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-mist-navy">
        <Image
          src={work.image}
          alt={`${work.title} visual`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(5,7,21,0.9)_100%)]" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="mb-2 text-xs font-bold text-synth-cyan">{work.category}</p>
          <h3 className="font-display text-2xl font-bold leading-tight text-white">{work.title}</h3>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="mb-1 text-xs font-bold text-synth-pink">想定用途</p>
          <p className="text-sm leading-6 text-white/[0.82]">{work.useCase}</p>
        </div>
        <p className="text-sm leading-7 text-mist-gray">{work.description}</p>
        <div className="soft-divider" />
        <div className="flex flex-wrap gap-2">
          {work.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-synth-cyan/25 bg-white/[0.06] px-3 py-1 text-xs text-white/[0.78]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
