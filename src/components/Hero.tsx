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
                        viewBox="0 0 800 320"
                        className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-visible"
                    >
                        {/* Custom high-precision merged paths for SHOTA WORLD to ensure perfect outline drawing */}
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
                            {/* SHOTA - Line 1 */}
                            <g transform="translate(400, 85) scale(1.1)">
                                {/* S - Merged Path */}
                                <path d="M-225,-45 C-260,-45 -275,-25 -275,-5 C-275,15 -255,20 -240,25 C-225,30 -215,35 -215,55 C-215,75 -230,90 -255,90 C-275,90 -290,75 -290,60 L-315,60 C-315,85 -295,115 -255,115 C-215,115 -190,90 -190,55 C-190,30 -205,20 -225,15 C-245,10 -250,5 -250,-5 C-250,-15 -245,-20 -230,-20 C-215,-20 -205,-10 -205,5 L-180,5 C-180,-20 -200,-45 -225,-45 Z" transform="translate(0, -35)" />
                                {/* H - Merged Path */}
                                <path d="M-170,-45 L-145,-45 L-145,15 L-100,15 L-100,-45 L-75,-45 L-75,85 L-100,85 L-100,35 L-145,35 L-145,85 L-170,85 Z" transform="translate(0, -35)" />
                                {/* O - Merged Path (Inner and Outer combined with fill-rule: evenodd) */}
                                <path fillRule="evenodd" d="M0,-45 C40,-45 70,-15 70,20 C70,55 40,85 0,85 C-40,85 -70,55 -70,20 C-70,-15 -40,-45 0,-45 M0,-20 C-18,-20 -40,0 -40,20 C-40,40 -18,60 0,60 C18,60 40,40 40,20 C40,0 18,-20 0,-20 Z" transform="translate(0, -35)" />
                                {/* T - Merged Path */}
                                <path d="M85,-45 L175,-45 L175,-20 L145,-20 L145,85 L115,85 L115,-20 L85,-20 Z" transform="translate(0, -35)" />
                                {/* A - Merged Path (No internal overlaps) */}
                                <path fillRule="evenodd" d="M230,-45 L260,-45 L310,85 L285,85 L275,60 L215,60 L205,85 L180,85 Z M245,-15 L225,35 L265,35 Z" transform="translate(0, -35)" />
                            </g>

                            {/* WORLD - Line 2 */}
                            <g transform="translate(400, 235) scale(1.1)">
                                {/* W - Merged Path */}
                                <path d="M-300,-45 L-270,-45 L-245,55 L-220,-45 L-190,-45 L-165,55 L-140,-45 L-110,-45 L-150,85 L-180,85 L-205,-10 L-230,85 L-260,85 Z" transform="translate(0, -35)" />
                                {/* O - Merged Path */}
                                <path fillRule="evenodd" d="M-40,-45 C0,-45 30,-15 30,20 C30,55 0,85 -40,85 C-80,85 -110,55 -110,20 C-110,-15 -80,-45 -40,-45 M-40,-20 C-58,-20 -80,0 -80,20 C-80,40 -58,60 -40,60 C-22,60 0,40 0,20 C0,0 -22,-20 -40,-20 Z" transform="translate(0, -35)" />
                                {/* R - Merged Path */}
                                <path fillRule="evenodd" d="M45,-45 L105,-45 C135,-45 150,-25 150,0 C150,15 140,25 125,35 L155,85 L125,85 L100,40 L70,40 L70,85 L45,85 Z M70,-20 L70,15 L100,15 C115,15 125,10 125,0 C125,-10 115,-20 100,-20 Z" transform="translate(0, -35)" />
                                {/* L - Merged Path */}
                                <path d="M165,-45 L190,-45 L190,60 L235,60 L235,85 L165,85 Z" transform="translate(0, -35)" />
                                {/* D - Merged Path */}
                                <path fillRule="evenodd" d="M250,-45 L300,-45 C345,-45 365,-15 365,20 C365,55 345,85 300,85 L250,85 Z M275,-20 L275,60 L300,60 C325,60 340,45 340,20 C340,-5 325,-20 300,-20 Z" transform="translate(0, -35)" />
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
