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

        const revealRectsShota = svgLogoRef.current?.querySelectorAll(".reveal-rect-shota");
        const revealRectsWorld = svgLogoRef.current?.querySelectorAll(".reveal-rect-world");

        if (revealRectsShota && revealRectsShota.length > 0) {
            tl.fromTo(
                revealRectsShota,
                { attr: { width: 0 } },
                { attr: { width: 200 }, duration: 0.8, ease: "power2.inOut", stagger: 0.15 },
                "-=0.5"
            );
        }

        if (revealRectsWorld && revealRectsWorld.length > 0) {
            tl.fromTo(
                revealRectsWorld,
                { attr: { width: 0 } },
                { attr: { width: 250 }, duration: 0.8, ease: "power2.inOut", stagger: 0.15 },
                "-=0.5"
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
                            {/* Individual reveal clip paths for each character */}
                            {"SHOTA".split("").map((char, i) => (
                                <clipPath key={`cp-shota-${i}`} id={`reveal-shota-${i}`}>
                                    <rect className="reveal-rect-shota" x={150 + i * 140} y="0" width="0" height="200" />
                                </clipPath>
                            ))}
                            {"WORLD".split("").map((char, i) => (
                                <clipPath key={`cp-world-${i}`} id={`reveal-world-${i}`}>
                                    <rect className="reveal-rect-world" x={80 + i * 170} y="200" width="0" height="200" />
                                </clipPath>
                            ))}
                        </defs>

                        {/* SHOTA - Line 1 */}
                        <g className="font-sans text-[120px] md:text-[150px] font-black tracking-widest fill-white">
                            {"SHOTA".split("").map((char, i) => (
                                <text
                                    key={`shota-${i}`}
                                    x={150 + i * 140}
                                    y="25%"
                                    textAnchor="start"
                                    dominantBaseline="central"
                                    clipPath={`url(#reveal-shota-${i})`}
                                >
                                    {char}
                                </text>
                            ))}
                        </g>

                        {/* WORLD - Line 2 */}
                        <g className="font-sans text-[120px] md:text-[150px] font-black tracking-widest fill-white">
                            {"WORLD".split("").map((char, i) => (
                                <text
                                    key={`world-${i}`}
                                    x={80 + i * 170}
                                    y="75%"
                                    textAnchor="start"
                                    dominantBaseline="central"
                                    clipPath={`url(#reveal-world-${i})`}
                                >
                                    {char}
                                </text>
                            ))}
                        </g>
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
