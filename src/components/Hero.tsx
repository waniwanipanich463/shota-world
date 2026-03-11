"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
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

        const svgElements = svgLogoRef.current?.querySelectorAll("text");
        if (svgElements && svgElements.length > 0) {
            tl.fromTo(
                svgElements,
                { strokeDasharray: 500, strokeDashoffset: 500, fillOpacity: 0 },
                { strokeDashoffset: 0, fillOpacity: 1, duration: 2.5, ease: "power2.inOut", stagger: 0.2 },
                "-=1.0"
            );
        }

        tl.fromTo(
            textRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
            "-=0.8"
        );

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
            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
                <div className="mb-12 relative w-full max-w-[600px]">
                    <svg
                        ref={svgLogoRef}
                        viewBox="0 0 500 80"
                        className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
                    >
                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="central"
                            className="font-display text-5xl font-medium tracking-[0.2em]"
                            style={{
                                fill: "var(--foreground)",
                                stroke: "var(--foreground)",
                                strokeWidth: "0.5px",
                                paintOrder: "stroke fill"
                            }}
                        >
                            SHOTA WORLD
                        </text>
                    </svg>
                </div>

                <div className="overflow-hidden">
                    <h1 ref={textRef} className="text-3xl md:text-6xl font-display font-medium tracking-wider text-foreground">
                        TROPICAL ESCAPE.
                    </h1>
                </div>
                
                <p className="mt-4 text-sm md:text-base font-sans tracking-[0.3em] text-foreground/70 uppercase">
                    Design & Creative Studio
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
                <span className="text-[10px] tracking-[0.4em] text-foreground/40 uppercase rotate-90 origin-left translate-x-1">Scroll</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-foreground/40 to-transparent"></div>
            </div>
        </section>
    );
}
