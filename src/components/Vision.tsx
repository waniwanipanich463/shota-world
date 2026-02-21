"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Vision() {
    const containerRef = useRef(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const texts = textRef.current?.querySelectorAll("span");

        if (texts) {
            gsap.fromTo(texts,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }, []);

    return (
        <section ref={containerRef} className="h-screen relative flex items-center justify-center bg-black overflow-hidden">
            {/* Background Parallax */}
            <div className="absolute inset-0 opacity-40">
                <Image
                    src="/assets/hero-bg.png"
                    alt="Vision Background"
                    fill
                    className="object-cover blur-sm"
                />
            </div>

            <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center space-y-4 md:space-y-8 w-full px-2">
                <span className="text-6xl sm:text-7xl md:text-9xl font-display font-black text-white italic tracking-tighter mix-blend-overlay">
                    CREATE.
                </span>
                <span className="text-6xl sm:text-7xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic tracking-tighter">
                    BREAK.
                </span>
                <span className="text-6xl sm:text-7xl md:text-9xl font-display font-black text-[var(--neon-lime)] italic tracking-tighter drop-shadow-[0_0_20px_rgba(204,255,0,0.5)]">
                    REBUILD.
                </span>
            </div>
        </section>
    );
}
