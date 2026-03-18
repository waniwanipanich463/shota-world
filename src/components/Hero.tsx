"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const svgContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Initial Background Animation
        tl.fromTo(
            bgRef.current,
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 0.8, duration: 2.5, ease: "power2.out" }
        );

        if (svgContainerRef.current) {
            // GSAP settings for the overarching "burst" & "wipe" wrapper
            gsap.set(svgContainerRef.current, {
                clipPath: "inset(0% 100% 0% 0%)",
                scale: 1.1,
                filter: "blur(20px)",
                opacity: 0,
                y: 30
            });

            // "Wipe & Burst" of the container itself
            tl.to(
                svgContainerRef.current,
                {
                    opacity: 1,
                    y: 0,
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 1.8,
                    ease: "power3.inOut"
                },
                "-=1.8"
            ).to(
                svgContainerRef.current,
                {
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "back.out(1.5)"
                },
                "-=0.6"
            );

            // Fetch and inject the SVG for the "stroke to fill" inner animation
            // Using CSS animations for the paths to avoid GSAP overloading the browser with thousands of nodes
            fetch('/typo.svg')
                .then(res => res.text())
                .then(svgText => {
                    if (!svgContainerRef.current) return;
                    
                    // Inject styles and SVG
                    svgContainerRef.current.innerHTML = `
                        <style>
                            .custom-svg-strokes path, .custom-svg-strokes polygon, .custom-svg-strokes rect {
                                stroke: rgba(255,255,255,0.7) !important;
                                stroke-width: 2px !important;
                                fill-opacity: 0;
                                stroke-dasharray: 1000;
                                stroke-dashoffset: 1000;
                                animation: 
                                    drawTrace 2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards,
                                    burstFill 1.5s cubic-bezier(0.1, 0.9, 0.2, 1) 1.5s forwards;
                            }
                            @keyframes drawTrace {
                                0% { stroke-dashoffset: 1000; opacity: 0; }
                                10% { opacity: 1; }
                                100% { stroke-dashoffset: 0; opacity: 1; }
                            }
                            @keyframes burstFill {
                                0% { fill-opacity: 0; stroke-opacity: 1; }
                                100% { fill-opacity: 1; stroke-opacity: 0; }
                            }
                        </style>
                        ${svgText}
                    `;
                    
                    const svgEl = svgContainerRef.current.querySelector('svg');
                    if (svgEl) {
                        svgEl.classList.add('custom-svg-strokes');
                        svgEl.setAttribute('width', '100%');
                        svgEl.setAttribute('height', '100%');
                        svgEl.style.filter = "drop-shadow(0 40px 80px rgba(0,0,0,0.3))";
                    }
                })
                .catch(err => console.error("Failed to load typo.svg:", err));

            // Floating Animation for Logo
            gsap.to(svgContainerRef.current, {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 2.5
            });
        }

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
                <div className="mb-12 relative w-full flex justify-center">
                    <div 
                        ref={svgContainerRef} 
                        className="w-full h-auto max-w-[800px] flex items-center justify-center"
                    >
                        {/* SVG will be injected here via Fetch */}
                    </div>
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
