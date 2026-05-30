"use client";

import { useEffect } from "react";

export default function CursorParticles() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (reduceMotion || !finePointer) {
      return;
    }

    const layer = document.createElement("div");
    layer.className = "cursor-particle-layer";
    document.body.appendChild(layer);

    let lastEmit = 0;
    const emitParticle = (event: PointerEvent) => {
      const now = window.performance.now();
      if (now - lastEmit < 18) {
        return;
      }
      lastEmit = now;

      const particle = document.createElement("span");
      const size = 4 + Math.random() * 7;
      const driftX = (Math.random() - 0.5) * 72;
      const driftY = -24 - Math.random() * 64;

      particle.className = "cursor-particle";
      particle.style.left = `${event.clientX}px`;
      particle.style.top = `${event.clientY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.setProperty("--particle-x", `${driftX}px`);
      particle.style.setProperty("--particle-y", `${driftY}px`);
      particle.style.setProperty("--particle-hue", `${Math.random() * 120 + 170}deg`);

      layer.appendChild(particle);
      particle.addEventListener("animationend", () => particle.remove(), { once: true });
    };

    window.addEventListener("pointermove", emitParticle, { passive: true });

    return () => {
      window.removeEventListener("pointermove", emitParticle);
      layer.remove();
    };
  }, []);

  return null;
}
