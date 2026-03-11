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
                        viewBox="0 0 1000 400"
                        className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-visible"
                    >
                        {/* Final Definitive High-Precision paths with perfect geometry and spacing */}
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
                            {/* SHOTA - Line 1 (Lifted higher) */}
                            <g transform="translate(500, 75) scale(1.15)">
                                {/* S - Shifted slightly left, refined curves */}
                                <path d="M-260,-45 C-300,-45 -315,-25 -315,-5 C-315,15 -295,20 -280,25 C-265,30 -255,35 -255,55 C-255,75 -270,90 -295,90 C-315,90 -330,75 -330,60 L-355,60 C-355,85 -335,115 -295,115 C-255,115 -230,90 -230,55 C-230,30 -245,20 -265,15 C-285,10 -290,5 -290,-5 C-290,-15 -285,-20 -270,-20 C-255,-20 -245,-10 -245,5 L-220,5 C-220,-20 -240,-45 -260,-45 Z" transform="translate(0, -35)" />
                                {/* H */}
                                <path d="M-180,-45 L-155,-45 L-155,15 L-110,15 L-110,-45 L-85,-45 L-85,85 L-110,85 L-110,35 L-155,35 L-155,85 L-180,85 Z" transform="translate(0, -35)" />
                                {/* O */}
                                <path fillRule="evenodd" d="M0,-45 C40,-45 70,-15 70,20 C70,55 40,85 0,85 C-40,85 -70,55 -70,20 C-70,-15 -40,-45 0,-45 M0,-20 C-18,-20 -40,0 -40,20 C-40,40 -18,60 0,60 C18,60 40,40 40,20 C40,0 18,-20 0,-20 Z" transform="translate(0, -35)" />
                                {/* T */}
                                <path d="M95,-45 L185,-45 L185,-20 L155,-20 L155,85 L125,85 L125,-20 L95,-20 Z" transform="translate(0, -35)" />
                                {/* A */}
                                <path fillRule="evenodd" d="M250,-45 L280,-45 L330,85 L303,85 L292,60 L238,60 L227,85 L200,85 Z M265,-15 L245,35 L285,35 Z" transform="translate(0, -35)" />
                            </g>

                            {/* WORLD - Line 2 (Dropped lower to clear S) */}
                            <g transform="translate(500, 265) scale(1.15)">
                                {/* W - Cleaned and shifted to satisfy layout */}
                                <path d="M-340,-45 L-310,-45 L-285,55 L-260,-45 L-230,-45 L-205,55 L-180,-45 L-150,-45 L-190,85 L-220,85 L-245,-10 L-270,85 L-300,85 Z" transform="translate(0, -35)" />
                                {/* O */}
                                <path fillRule="evenodd" d="M-55,-45 C-15,-45 15,-15 15,20 C15,55 -15,85 -55,85 C-95,85 -125,55 -125,20 C-125,-15 -95,-45 -55,-45 M-55,-20 C-73,-20 -95,0 -95,20 C-95,40 -73,60 -55,60 C-37,60 -15,40 -15,20 C-15,0 -37,-20 -55,-20 Z" transform="translate(0, -35)" />
                                {/* R */}
                                <path fillRule="evenodd" d="M45,-45 L110,-45 C145,-45 160,-25 160,0 C160,15 150,25 135,35 L165,85 L135,85 L108,40 L70,40 L70,85 L45,85 Z M70,-20 L70,14 L110,14 C128,14 135,7 135,0 C135,-7 128,-20 110,-20 Z" transform="translate(0, -35)" />
                                {/* L */}
                                <path d="M185,-45 L210,-45 L210,60 L255,60 L255,85 L185,85 Z" transform="translate(0, -35)" />
                                {/* D - Perfectly reconstructed with smooth Bezier curves */}
                                <path fillRule="evenodd" d="M280,-45 L345,-45 C385,-45 420,-15 420,20 C420,55 385,85 345,85 L280,85 Z M306,-21 L306,61 L345,61 C371,61 392,45 392,20 C392,-5 371,-21 345,-21 L306,-21 Z" transform="translate(0, -35)" />
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
