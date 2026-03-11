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
                { strokeDasharray: 1500, strokeDashoffset: 1500, fillOpacity: 0 },
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
                        viewBox="0 0 1200 500"
                        className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)] overflow-visible"
                    >
                        {/* ULTIMATE RESOLVE: Physically merged paths with absolute zero overlap */}
                        <g
                            className="logo-paths"
                            style={{
                                fill: "white",
                                stroke: "white",
                                strokeWidth: "1.5px", // Slightly thicker for the larger scale
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                                paintOrder: "stroke fill",
                                fillOpacity: 0
                            }}
                        >
                            {/* SHOTA - Line 1 (Enlarged and Spaced) */}
                            <g transform="translate(600, 110) scale(1.6)">
                                {/* S - Perfect Single Boundary */}
                                <path d="M-230,-45 C-270,-45 -285,-25 -285,-5 C-285,15 -265,20 -250,25 C-235,30 -225,35 -225,55 C-225,75 -240,90 -265,90 C-285,90 -300,75 -300,60 L-325,60 C-325,85 -305,115 -265,115 C-225,115 -200,90 -200,55 C-200,30 -215,20 -235,15 C-255,10 -260,5 -260,-5 C-260,-15 -255,-20 -240,-20 C-225,-20 -215,-10 -215,5 L-190,5 C-190,-20 -210,-45 -230,-45 Z" transform="translate(0, -35)" />
                                {/* H - Single Boundary */}
                                <path d="M-170,-45 L-140,-45 L-140,15 L-95,15 L-95,-45 L-65,-45 L-65,85 L-95,85 L-95,40 L-140,40 L-140,85 L-170,85 Z" transform="translate(0, -35)" />
                                {/* O - Single Boundary (Compound path) */}
                                <path fillRule="evenodd" d="M0,-45 C45,-45 75,-15 75,20 C75,55 45,85 0,85 C-45,85 -75,55 -75,20 C-75,-15 -45,-45 0,-45 M0,-18 C-15,-18 -45,2 -45,20 C-45,38 -15,58 0,58 C15,58 45,38 45,20 C45,2 15,-18 0,-18 Z" transform="translate(0, -35)" />
                                {/* T - Single Boundary */}
                                <path d="M90,-45 L190,-45 L190,-15 L155,-15 L155,85 L125,85 L125,-15 L90,-15 Z" transform="translate(0, -35)" />
                                {/* A - ULTIMATE INTEGRATED PATH (Horizontal bar physically merged into the outline) */}
                                <path fillRule="evenodd" d="M255,-45 L290,-45 L345,85 L315,85 L303,55 L242,55 L230,85 L200,85 Z M253,30 L292,30 L272.5,-15 Z" transform="translate(0, -35)" />
                            </g>

                            {/* WORLD - Line 2 (Enlarged and Spaced) */}
                            <g transform="translate(600, 360) scale(1.6)">
                                {/* W - Perfect Single Boundary */}
                                <path d="M-360,-45 L-325,-45 L-295,50 L-265,-45 L-235,-45 L-205,50 L-175,-45 L-140,-45 L-185,85 L-220,85 L-250,-15 L-280,85 L-315,85 Z" transform="translate(0, -35)" />
                                {/* O - Single Boundary */}
                                <path fillRule="evenodd" d="M-55,-45 C-10,-45 25,-15 25,20 C25,55 -10,85 -55,85 C-100,85 -135,55 -135,20 C-135,-15 -100,-45 -55,-45 M-55,-18 C-70,-18 -105,2 -105,20 C-105,38 -70,58 -55,58 C-40,58 -5,38 -5,20 C-5,2 -40,-18 -55,-18 Z" transform="translate(0, -35)" />
                                {/* R - Single Boundary with merged bowl */}
                                <path fillRule="evenodd" d="M50,-45 L115,-45 C150,-45 170,-25 170,0 C170,18 160,30 145,38 L175,85 L145,85 L118,42 L75,42 L75,85 L50,85 Z M75,-18 L75,18 L115,18 C135,18 142,10 142,0 C142,-10 135,-18 115,-18 Z" transform="translate(0, -35)" />
                                {/* L - Single Boundary */}
                                <path d="M195,-45 L225,-45 L225,55 L280,55 L280,85 L195,85 Z" transform="translate(0, -35)" />
                                {/* D - Perfect Integrated Geometry */}
                                <path fillRule="evenodd" d="M305,-45 L375,-45 C425,-45 460,-15 460,20 C460,55 425,85 375,85 L305,85 Z M333,-18 L333,58 L375,58 C405,58 430,42 430,20 C430,-2 405,-18 375,-18 L333,-18 Z" transform="translate(0, -35)" />
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
