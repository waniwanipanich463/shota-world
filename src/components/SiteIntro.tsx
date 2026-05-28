"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTRO_KEY = "shota-world-intro-seen";

export default function SiteIntro() {
  const [phase, setPhase] = useState<"hidden" | "enter" | "exit">("hidden");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let alreadySeen = false;

    try {
      alreadySeen = sessionStorage.getItem(INTRO_KEY) === "true";
    } catch {
      alreadySeen = false;
    }

    if (reduceMotion || alreadySeen) {
      return;
    }

    try {
      sessionStorage.setItem(INTRO_KEY, "true");
    } catch {
      // The intro can still run if browser storage is unavailable.
    }

    const showTimer = window.setTimeout(() => setPhase("enter"), 0);
    const exitTimer = window.setTimeout(() => setPhase("exit"), 2300);
    const hideTimer = window.setTimeout(() => setPhase("hidden"), 3050);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div className={`site-intro ${phase === "exit" ? "site-intro-exit" : ""}`} role="status" aria-live="polite">
      <div className="site-intro-grid" aria-hidden="true" />
      <div className="site-intro-panel">
        <p className="site-intro-label">BOOTING VISUAL SIGNAL</p>
        <Image
          src="/images/logo/shota-world-logo.png"
          alt="SHOTA WORLD"
          width={724}
          height={241}
          priority
          className="site-intro-logo"
        />
        <div className="site-intro-loader" aria-hidden="true">
          <span />
        </div>
        <div className="site-intro-meta" aria-hidden="true">
          <span>SYNTH MODE</span>
          <span>RETRO FUTURE</span>
          <span>READY</span>
        </div>
      </div>
    </div>
  );
}
