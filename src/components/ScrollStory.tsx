"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const scenes = [
  {
    title: "都市の光が、画面を起こす。",
    body: "映像の奥からネオンが立ち上がり、スクロールに合わせてSHOTA WORLDの空気がゆっくり開いていきます。",
    image: "/images/gallery/highrise-01.png",
  },
  {
    title: "色が重なり、視線が止まる。",
    body: "ただ派手に動かすのではなく、霧、反射、余白のリズムで、見る人の目を次の場面へ誘導します。",
    image: "/images/gallery/tokyo-tower.png",
  },
  {
    title: "丸い表示体が、世界を切り取る。",
    body: "均一なカード感を抑え、未来のディスプレイのような丸いフレームでビジュアルを浮かび上がらせます。",
    image: "/images/gallery/room-night.png",
  },
  {
    title: "作品は、専用アーカイブへ。",
    body: "ホームでは世界観の流れを優先し、作品は別ページでゆっくり見られる構成に整理します。",
    image: "/images/gallery/open-sea.png",
  },
];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function ScrollStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const scrollable = Math.max(root.offsetHeight - window.innerHeight, 1);
      const progress = clamp(-rect.top / scrollable, 0, 1);
      const wave = (progress - 0.5) * 2;
      const rawIndex = Math.round(progress * (scenes.length - 1));
      const nextIndex = clamp(rawIndex, 0, scenes.length - 1);

      root.style.setProperty("--story-progress", progress.toFixed(4));
      root.style.setProperty("--story-wave", wave.toFixed(4));
      root.style.setProperty("--story-video-scale", (1.04 + progress * 0.06).toFixed(4));
      root.style.setProperty("--story-scan-opacity", (0.18 + progress * 0.24).toFixed(4));
      root.style.setProperty("--story-grid-y", `${(wave * 18).toFixed(2)}px`);
      root.style.setProperty("--story-display-x", `${(wave * 14).toFixed(2)}px`);
      root.style.setProperty("--story-display-y", `${(wave * -12).toFixed(2)}px`);
      root.style.setProperty("--story-float-x", `${(wave * -20).toFixed(2)}px`);
      root.style.setProperty("--story-float-y", `${(wave * 16).toFixed(2)}px`);
      setActiveIndex(nextIndex);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const jumpToScene = (index: number) => {
    const root = sectionRef.current;
    if (!root) return;

    const travel = root.offsetHeight - window.innerHeight;
    const target = root.offsetTop + travel * (index / Math.max(scenes.length - 1, 1));
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const activeScene = scenes[activeIndex];

  return (
    <section ref={sectionRef} className="scroll-story" aria-label="スクロールで変化するSHOTA WORLDの世界観">
      <div className="scroll-story-sticky">
        <video
          className="scroll-story-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/cyber-city.mp4" type="video/mp4" />
        </video>

        <div className="scroll-story-scan" aria-hidden="true" />
        <div className="scroll-story-grid" aria-hidden="true" />

        <div className="section-shell scroll-story-layout">
          <div className="scroll-story-copy" key={activeScene.title}>
            <p className="scroll-story-count">{String(activeIndex + 1).padStart(2, "0")}</p>
            <h2>{activeScene.title}</h2>
            <p>{activeScene.body}</p>
            {activeIndex === scenes.length - 1 ? (
              <Link href="/works" className="scroll-story-link focus-ring">
                作品集を見る
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ) : null}
          </div>

          <div className="scroll-story-display" aria-hidden="true">
            <div className="scroll-story-halo" />
            <div className="scroll-story-main-screen">
              {scenes.map((scene, index) => (
                <Image
                  key={scene.title}
                  src={scene.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 92vw, 48vw"
                  className={`scroll-story-main-image ${index === activeIndex ? "scroll-story-main-image-active" : ""}`}
                />
              ))}
            </div>

            <div className="scroll-story-float scroll-story-float-a">
              <Image src="/images/gallery/highrise-04.png" alt="" fill sizes="180px" className="object-cover" />
            </div>
            <div className="scroll-story-float scroll-story-float-b">
              <Image src="/images/gallery/self-portrait-art.png" alt="" fill sizes="160px" className="object-cover" />
            </div>
            <div className="scroll-story-pulse" />
          </div>

          <div className="scroll-story-rail" aria-label="場面を移動">
            {scenes.map((scene, index) => (
              <button
                key={scene.title}
                type="button"
                className={`scroll-story-dot focus-ring ${index === activeIndex ? "scroll-story-dot-active" : ""}`}
                aria-label={`${index + 1}つ目の場面へ`}
                onClick={() => jumpToScene(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
