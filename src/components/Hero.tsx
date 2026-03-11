"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const svgLogoRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Initial Animation
        tl.fromTo(
            bgRef.current,
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 0.8, duration: 2.5, ease: "power2.out" }
        )
            .fromTo(
                svgLogoRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
                "-=1.8"
            );

        const revealRects = svgLogoRef.current?.querySelectorAll(".reveal-rect");

        if (revealRects && revealRects.length > 0) {
            tl.fromTo(
                revealRects,
                { attr: { x: -1000 } },
                { attr: { x: 0 }, duration: 1.5, ease: "power3.inOut", stagger: 0.3 },
                "-=1.0"
            );
        }

        // Floating Animation for Logo
        gsap.to(svgLogoRef.current, {
            y: -15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Scroll Animation
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            opacity: 0,
            y: -20,
        });
    }, []);

    return (
        <section ref={containerRef} className="relative h-[110vh] w-full overflow-hidden flex flex-col items-center justify-center bg-background">
            {/* Background */}
            <div ref={bgRef} className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[1200px]">
                <div className="mb-12 relative w-full">
                    <svg
                        ref={svgLogoRef}
                        viewBox="0 0 1000 400"
                        className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)] overflow-visible"
                    >
                        <defs>
                            {/* Brush-reveal clip paths for each line */}
                            <clipPath id="reveal-shota">
                                <rect className="reveal-rect" x="-500" y="0" width="1000" height="200" />
                            </clipPath>
                            <clipPath id="reveal-world">
                                <rect className="reveal-rect" x="-500" y="200" width="1000" height="200" />
                            </clipPath>
                        </defs>

                        {/* SHOTA - Line 1 */}
                        <text
                            x="50%"
                            y="25%"
                            textAnchor="middle"
                            dominantBaseline="central"
                            className="font-sans text-[120px] md:text-[160px] font-black tracking-widest fill-white"
                            clipPath="url(#reveal-shota)"
                        >
                            SHOTA
                        </text>

                        {/* WORLD - Line 2 */}
                        <text
                            x="50%"
                            y="75%"
                            textAnchor="middle"
                            dominantBaseline="central"
                            className="font-sans text-[120px] md:text-[160px] font-black tracking-widest fill-white"
                            clipPath="url(#reveal-world)"
                        >
                            WORLD
                        </text>
                    </svg>
                </div>
                
                <p className="text-xs md:text-sm font-sans tracking-[0.5em] text-foreground/50 uppercase ml-[0.5em] mb-32">
                    Design & Creative Studio
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
                <span className="text-[10px] tracking-[0.4em] text-foreground/40 uppercase rotate-90 origin-left translate-x-1">Scroll</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-foreground/40 to-transparent"></div>
            </div>
        </section>
    );
}
