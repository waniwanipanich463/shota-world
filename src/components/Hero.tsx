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

        // Initial Background Animation
        tl.fromTo(
            bgRef.current,
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 0.8, duration: 2.5, ease: "power2.out" }
        );

        // Slow fade-in for typo.png
        if (typoRef.current) {
            tl.fromTo(
                typoRef.current,
                { 
                    opacity: 0, 
                    y: 30,
                    filter: "blur(10px)" // Slight blur at start for smoother fade feeling
                },
                { 
                    opacity: 1, 
                    y: 0, 
                    filter: "blur(0px)",
                    duration: 2.5, 
                    ease: "power2.out" 
                },
                "-=1.5" // Start during the background fade
            );

            // Floating Animation for Logo
            gsap.to(typoRef.current, {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1.0 // Start floating after fade-in
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
                        className="w-full h-auto max-w-[800px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)]"
                        priority
                    />
                </div>
                <div className="max-w-[700px] space-y-6">
                    <h1 className="text-xl md:text-2xl font-medium tracking-widest leading-relaxed text-foreground/80">
                        SHOTA WORLD<br />
                        ビジュアルデザインで、<br className="md:hidden" />伝わらない悩みを解決する。
                    </h1>
                    <p className="text-sm md:text-base font-sans tracking-[0.2em] text-foreground/60 leading-loose">
                        チラシ・リール広告・SNS広告など、<br />
                        目を引き、伝わり、行動につながる表現を形にします。
                    </p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
                <span className="text-[10px] tracking-[0.4em] text-foreground/40 uppercase rotate-90 origin-left translate-x-1">Scroll</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-foreground/40 to-transparent"></div>
            </div>
        </section>
    );
}
