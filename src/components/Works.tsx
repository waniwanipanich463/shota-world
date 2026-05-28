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
    <section id="works" className="retro-section relative overflow-hidden pb-20 pt-0 md:pb-28 md:pt-0">
      <div className="mist-band top-0" />

      <div className="section-shell relative z-10">
        <div className="mb-10 grid gap-7 md:mb-14 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker mb-4">SELECTED AI WORKS</p>
            <h2 className="section-title mb-6">
              Signals from <span className="text-gradient">another city.</span>
            </h2>
            <p className="text-base leading-8 text-mist-gray md:text-lg">
              AIで生成した一枚をそのまま並べるのではなく、色・構図・用途まで編集したビジュアルログとして見せています。
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`filter-button focus-ring border ${
                  activeFilter === filter
                    ? "filter-button-active"
                    : "filter-button-idle"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work, index }: { work: Work; index: number }) {
  return (
    <article className="work-card reveal-on-scroll group transition-all duration-300 hover:-translate-y-1 hover:border-synth-cyan/[0.45] hover:shadow-[0_30px_95px_rgba(0,229,255,0.16)]">
      <div className="work-card-media">
        <Image
          src={work.image}
          alt={`${work.title} visual`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover saturate-[1.08] transition-transform duration-700 group-hover:scale-[1.055]"
        />
        <div className="absolute left-4 top-4 z-10 retro-index text-sm font-bold">
          {String(index).padStart(2, "0")}
        </div>
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <p className="mb-2 text-xs font-bold text-synth-cyan">{work.category}</p>
          <h3 className="font-display text-2xl font-bold leading-tight text-white">{work.title}</h3>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="mb-1 text-xs font-bold text-synth-pink">SIGNAL USE</p>
          <p className="text-sm leading-6 text-white/[0.82]">{work.useCase}</p>
        </div>
        <div>
          <p className="mb-1 text-xs font-bold text-retro-amber">MOOD NOTE</p>
          <p className="text-sm leading-6 text-white/[0.82]">{work.theme}</p>
        </div>
        <p className="text-sm leading-7 text-mist-gray">{work.description}</p>
        <div className="soft-divider" />
        <div className="flex flex-wrap gap-2">
          {work.tools.map((tool) => (
            <span
              key={tool}
              className="neon-chip"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
