"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { galleryWorks } from "@/data/gallery";

const featuredWorks = galleryWorks.slice(0, 9);

export default function WorksCollection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWork = featuredWorks[activeIndex];

  const move = (amount: number) => {
    setActiveIndex((current) => {
      const next = current + amount;
      if (next < 0) return featuredWorks.length - 1;
      if (next >= featuredWorks.length) return 0;
      return next;
    });
  };

  return (
    <section className="collection-page relative overflow-hidden pb-20 pt-32 text-white md:pb-28 md:pt-36">
      <div className="hero-scan opacity-25" />
      <div className="mist-band top-0" />
      <div className="hero-grid-floor opacity-45" />

      <div className="section-shell relative z-10">
        <div className="mb-10 grid gap-6 md:mb-12 md:grid-cols-[1fr_auto] md:items-end">
          <div className="reveal-on-scroll max-w-4xl">
            <p className="section-kicker mb-4">WORKS COLLECTION</p>
            <h1 className="section-title mb-6">
              Visual <span className="text-gradient">Archive.</span>
            </h1>
            <p className="max-w-2xl text-base leading-8 text-mist-gray md:text-lg">
              夜景、人物、海、部屋。光の記憶を一枚ずつ辿る、SHOTA WORLDの作品集です。
            </p>
          </div>

          <Link
            href="/#works"
            className="cta-link focus-ring border border-synth-cyan/45 bg-white/[0.055] text-white hover:border-retro-amber hover:bg-synth-cyan/[0.12]"
          >
            Back Home
          </Link>
        </div>

        <div className="collection-stage reveal-on-scroll mb-14">
          <div className="collection-feature">
            <Image
              src={activeWork.image}
              alt={`${activeWork.title} visual`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 72vw"
              className="object-cover"
            />
            <div className="collection-feature-shade" />
            <div className="collection-feature-title">
              <p>{activeWork.title}</p>
            </div>

            <div className="collection-controls" aria-label="作品ビューア操作">
              <button
                type="button"
                aria-label="前の作品"
                className="collection-control focus-ring"
                onClick={() => move(-1)}
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="次の作品"
                className="collection-control focus-ring"
                onClick={() => move(1)}
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="collection-thumbs" aria-label="作品一覧">
            {featuredWorks.map((work, index) => (
              <button
                key={work.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`collection-thumb focus-ring ${
                  index === activeIndex ? "collection-thumb-active" : ""
                }`}
              >
                <span className="collection-thumb-image">
                  <Image
                    src={work.image}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </span>
                <span className="collection-thumb-title">{work.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="collection-grid">
          {galleryWorks.map((work) => (
            <article
              key={work.id}
              className={`collection-card collection-card-${work.shape} reveal-on-scroll`}
            >
              <div className="collection-card-media">
                <Image
                  src={work.image}
                  alt={`${work.title} visual`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700"
                />
              </div>
              <div className="collection-card-title">
                <h2>{work.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
