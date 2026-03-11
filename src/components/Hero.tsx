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

        const svgElements = svgLogoRef.current?.querySelectorAll("text");
        if (svgElements && svgElements.length > 0) {
            tl.fromTo(
                svgElements,
                { strokeDasharray: 1000, strokeDashoffset: 1000, fillOpacity: 0 },
                { strokeDashoffset: 0, duration: 2, ease: "power2.inOut", stagger: 0.2 },
                "-=1.0"
            ).to(
                svgElements,
                { fillOpacity: 1, duration: 1, ease: "power2.out", stagger: 0.1 },
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
                        viewBox="0 0 800 320"
                        className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-visible"
                    >
                        <g
                            transform="translate(400, 80)"
                            className="font-sans font-black tracking-[0.1em]"
                            style={{
                                fill: "white",
                                stroke: "white",
                                strokeWidth: "1.5px",
                                paintOrder: "stroke fill",
                                fillOpacity: 0
                            }}
                        >
                            {/* SHOTA - Simplified Paths to avoid internal overlaps */}
                            <g transform="translate(-320, 0) scale(1.2)">
                                {/* S */}
                                <path d="M50,10 C20,10 10,25 10,40 C10,55 25,60 40,65 C55,70 65,75 65,95 C65,115 50,130 30,130 C10,130 0,115 0,100 L15,100 C15,110 20,118 30,118 C40,118 50,110 50,95 C50,80 40,75 25,70 C10,65 0,55 0,40 C0,20 15,0 45,0 C65,0 75,15 75,30 L60,30 C60,20 55,10 45,10" />
                                {/* H */}
                                <path d="M90,0 L110,0 L110,55 L145,55 L145,0 L165,0 L165,130 L145,130 L145,75 L110,75 L110,130 L90,130 Z" />
                                {/* O */}
                                <path d="M225,0 C260,0 285,30 285,65 C285,100 260,130 225,130 C190,130 165,100 165,65 C165,30 190,0 225,0 M225,15 C205,15 185,35 185,65 C185,95 205,115 225,115 C245,115 265,95 265,65 C265,35 245,15 225,15" />
                                {/* T */}
                                <path d="M295,0 L365,0 L365,20 L342,20 L342,130 L318,130 L318,20 L295,20 Z" />
                                {/* A - Single Path No Overlap */}
                                <path d="M410,0 L435,0 L470,130 L448,130 L442,105 L403,105 L397,130 L375,130 Z M422,18 L407,85 L438,85 Z" />
                            </g>
                        </g>

                        <g
                            transform="translate(400, 240)"
                            className="font-sans font-black tracking-[0.1em]"
                            style={{
                                fill: "white",
                                stroke: "white",
                                strokeWidth: "1.5px",
                                paintOrder: "stroke fill",
                                fillOpacity: 0
                            }}
                        >
                            {/* WORLD */}
                            <g transform="translate(-350, 0) scale(1.2)">
                                {/* W */}
                                <path d="M0,0 L25,0 L45,90 L65,0 L85,0 L105,90 L125,0 L150,0 L120,130 L95,130 L75,40 L55,130 L30,130 Z" />
                                {/* O */}
                                <path d="M225,0 C260,0 285,30 285,65 C285,100 260,130 225,130 C190,130 165,100 165,65 C165,30 190,0 225,0 M225,15 C205,15 185,35 185,65 C185,95 205,115 225,115 C245,115 265,95 265,65 C265,35 245,15 225,15" />
                                {/* R */}
                                <path d="M305,0 L355,0 C375,0 390,15 390,35 C390,55 375,65 355,65 L330,65 L330,0 Z M330,75 L355,75 L385,130 L360,130 L330,80 L330,130 L305,130 L305,0 L330,0 Z" />
                                {/* L */}
                                <path d="M410,0 L435,0 L435,110 L480,110 L480,130 L410,130 Z" />
                                {/* D */}
                                <path d="M500,0 L545,0 C585,0 605,30 605,65 C605,100 585,130 545,130 L500,130 Z M525,20 L525,110 L545,110 C570,110 580,90 580,65 C580,40 570,20 545,20 Z" />
                            </g>
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
