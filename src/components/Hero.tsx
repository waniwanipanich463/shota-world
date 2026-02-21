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

    useEffect(() => {
        const tl = gsap.timeline();

        // Initial Animation
        tl.fromTo(
            bgRef.current,
            { scale: 1.2, opacity: 0 },
            { scale: 1, opacity: 0.6, duration: 2, ease: "power2.out" }
        )
            .fromTo(
                logoRef.current,
                { scale: 0.8, opacity: 0, filter: "blur(10px)" },
                { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1, ease: "elastic.out(1, 0.5)" },
                "-=1.5"
            )
            .to(logoRef.current, {
                keyframes: [
                    { x: -2, skewX: 0, duration: 0.05 },
                    { x: 2, skewX: 0, duration: 0.05 },
                    { x: 0, skewX: 5, duration: 0.05 },
                    { x: 0, skewX: 0, duration: 0.05 },
                ],
                repeat: 5,
                repeatDelay: 3,
                ease: "none"
            })
            .fromTo(
                textRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            );

        // Scroll Animation
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            opacity: 0,
            y: -100,
        });
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black">
            {/* Background */}
            <div ref={bgRef} className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
                <div ref={logoRef} className="mb-8 relative w-[90vw] max-w-[500px] aspect-[3/2]">
                    <Image
                        src="/assets/logo-main.png"
                        alt="SHOTA WORLD"
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        priority
                    />
                </div>

                <h1 ref={textRef} className="text-2xl md:text-4xl font-display font-bold tracking-[0.1em] md:tracking-[0.2em] text-white mix-blend-difference">
                    DESIGN WITHOUT LIMITS.
                </h1>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent opacity-50"></div>
            </div>
        </section>
    );
}
