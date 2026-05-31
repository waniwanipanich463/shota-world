"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const scenes = [
  {
    titleLines: ["霧の都市を、", "記憶に残す。"],
    body: "淡いネオン、水面の反射、静かな余白を重ね、広告やポスターの第一印象に残るビジュアルを設計します。",
    image: "/images/gallery/highrise-01.png",
  },
  {
    titleLines: ["AIの偶然を、", "デザインで整える。"],
    body: "生成されたイメージを選び、構図、色、質感を調整し、目的に合うビジュアルへ仕上げます。",
    image: "/images/gallery/tokyo-tower.png",
  },
  {
    titleLines: ["一枚の絵に、", "物語を宿す。"],
    body: "ブランドやサービスの背景にある感情を読み取り、SNS、LP、キービジュアルで使える世界観へまとめます。",
    image: "/images/gallery/room-night.png",
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
  const activeTitle = activeScene.titleLines.join("");

  return (
    <section ref={sectionRef} className="scroll-story" aria-label="SHOTA WORLDのビジュアル制作コンセプト">
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
          <div className="scroll-story-copy" key={activeTitle}>
            <p className="scroll-story-count">{String(activeIndex + 1).padStart(2, "0")}</p>
            <h2 className="natural-title">
              {activeScene.titleLines.map((line) => (
                <span key={line} className="title-line">
                  {line}
                </span>
              ))}
            </h2>
            <p>{activeScene.body}</p>
          </div>

          <div className="scroll-story-display" aria-hidden="true">
            <div className="scroll-story-halo" />
            <div className="scroll-story-main-screen">
              {scenes.map((scene, index) => (
                <Image
                  key={scene.titleLines.join("")}
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

          <div className="scroll-story-rail" aria-label="コンセプトを移動">
            {scenes.map((scene, index) => (
              <button
                key={scene.titleLines.join("")}
                type="button"
                className={`scroll-story-dot focus-ring ${index === activeIndex ? "scroll-story-dot-active" : ""}`}
                aria-label={`${index + 1}つ目のコンセプトへ`}
                onClick={() => jumpToScene(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
