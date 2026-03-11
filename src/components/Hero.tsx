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

        const logoPaths = svgLogoRef.current?.querySelectorAll(".logo-paths path");

        if (logoPaths && logoPaths.length > 0) {
            tl.fromTo(
                logoPaths,
                { strokeDasharray: 1000, strokeDashoffset: 1000, fillOpacity: 0 },
                { strokeDashoffset: 0, duration: 2, ease: "power2.inOut", stagger: 0.15 },
                "-=1.0"
            ).to(
                logoPaths,
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
                        viewBox="0 0 900 350"
                        className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-visible"
                    >
                        {/* Custom high-precision merged paths with adjusted kerning to prevent S/W overlap */}
                        <g
                            className="logo-paths"
                            style={{
                                fill: "white",
                                stroke: "white",
                                strokeWidth: "1.2px",
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                                paintOrder: "stroke fill",
                                fillOpacity: 0
                            }}
                        >
                            {/* SHOTA - Line 1 (Shifted up and spread out) */}
                            <g transform="translate(450, 80) scale(1.1)">
                                {/* S - Shifted further left */}
                                <path d="M-255,-45 C-290,-45 -305,-25 -305,-5 C-305,15 -285,20 -270,25 C-255,30 -245,35 -245,55 C-245,75 -260,90 -285,90 C-305,90 -320,75 -320,60 L-345,60 C-345,85 -325,115 -285,115 C-245,115 -220,90 -220,55 C-220,30 -235,20 -255,15 C-275,10 -280,5 -280,-5 C-280,-15 -275,-20 -260,-20 C-245,-20 -235,-10 -235,5 L-210,5 C-210,-20 -230,-45 -255,-45 Z" transform="translate(0, -35)" />
                                {/* H */}
                                <path d="M-180,-45 L-155,-45 L-155,15 L-110,15 L-110,-45 L-85,-45 L-85,85 L-110,85 L-110,35 L-155,35 L-155,85 L-180,85 Z" transform="translate(0, -35)" />
                                {/* O */}
                                <path fillRule="evenodd" d="M0,-45 C40,-45 70,-15 70,20 C70,55 40,85 0,85 C-40,85 -70,55 -70,20 C-70,-15 -40,-45 0,-45 M0,-20 C-18,-20 -40,0 -40,20 C-40,40 -18,60 0,60 C18,60 40,40 40,20 C40,0 18,-20 0,-20 Z" transform="translate(0, -35)" />
                                {/* T */}
                                <path d="M95,-45 L185,-45 L185,-20 L155,-20 L155,85 L125,85 L125,-20 L95,-20 Z" transform="translate(0, -35)" />
                                {/* A */}
                                <path fillRule="evenodd" d="M250,-45 L280,-45 L330,85 L305,85 L295,60 L235,60 L225,85 L200,85 Z M265,-15 L245,35 L285,35 Z" transform="translate(0, -35)" />
                            </g>

                            {/* WORLD - Line 2 (Shifted down and adjusted spacing) */}
                            <g transform="translate(450, 250) scale(1.1)">
                                {/* W - Adjusted to ensure no overlap with bottom of S */}
                                <path d="M-320,-45 L-290,-45 L-265,55 L-240,-45 L-210,-45 L-185,55 L-160,-45 L-130,-45 L-170,85 L-200,85 L-225,-10 L-250,85 L-280,85 Z" transform="translate(0, -35)" />
                                {/* O */}
                                <path fillRule="evenodd" d="M-50,-45 C-10,-45 20,-15 20,20 C20,55 -10,85 -50,85 C-90,85 -120,55 -120,20 C-120,-15 -90,-45 -50,-45 M-50,-20 C-68,-20 -90,0 -90,20 C-90,40 -68,60 -50,60 C-32,60 -10,40 -10,20 C-10,0 -32,-20 -50,-20 Z" transform="translate(0, -35)" />
                                {/* R */}
                                <path fillRule="evenodd" d="M45,-45 L105,-45 C135,-45 150,-25 150,0 C150,15 140,25 125,35 L155,85 L125,85 L100,40 L70,40 L70,85 L45,85 Z M70,-20 L70,15 L100,15 C115,15 125,10 125,0 C125,-10 115,-20 100,-20 Z" transform="translate(0, -35)" />
                                {/* L */}
                                <path d="M175,-45 L200,-45 L200,60 L245,60 L245,85 L175,85 Z" transform="translate(0, -35)" />
                                {/* D */}
                                <path fillRule="evenodd" d="M270,-45 L320,-45 C365,-45 385,-15 385,20 C385,55 365,85 320,85 L270,85 Z M295,-20 L295,60 L320,60 C345,60 360,45 360,20 C340,-5 325,-20 320,-20 Z" transform="translate(0, -35)" />
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
