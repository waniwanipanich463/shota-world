"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const typoRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Initial Animation
        tl.fromTo(
            bgRef.current,
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 0.8, duration: 2.5, ease: "power2.out" }
        )

        if (typoRef.current) {
            // Setup initial state for typing/burst effect
            gsap.set(typoRef.current, {
                clipPath: "inset(0% 100% 0% 0%)", // Clipped from right
                scale: 1.1,
                filter: "blur(20px)",
                opacity: 0,
                y: 30
            });

            // "Trace/Wipe" effect from left to right
            tl.to(
                typoRef.current,
                {
                    opacity: 1,
                    y: 0,
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 1.8,
                    ease: "power3.inOut"
                },
                "-=1.8"
            ).to(
                typoRef.current,
                {
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "back.out(1.5)"
                },
                "-=0.6" // Burst effect starts slightly before the wipe finishes
            );

            // Floating Animation for Logo
            gsap.to(typoRef.current, {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1.5 // Start after appearing
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
                    <Image
                        ref={typoRef}
                        src="/typo.png"
                        alt="SHOTA WORLD TITLE"
                        width={1000}
                        height={400}
                        className="w-full h-auto max-w-[800px]"
                        priority
                    />
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
