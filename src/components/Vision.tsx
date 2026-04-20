"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Vision() {
    const containerRef = useRef(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const texts = textRef.current?.querySelectorAll("span");

        if (texts) {
            gsap.fromTo(texts,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.3,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }
    }, []);

    return (
        <section id="vision" ref={containerRef} className="h-screen relative flex items-center justify-center bg-background overflow-hidden">
            {/* Background Parallax */}
            <div className="absolute inset-0 opacity-20">
                <Image
                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=2000"
                    alt="Vision Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center space-y-4 md:space-y-8 w-full px-4 text-center">
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                    <span className="text-4xl sm:text-6xl md:text-8xl font-display font-medium text-foreground tracking-tight uppercase">
                        Visualize<br className="md:hidden" /> the Value.
                    </span>
                    <span className="text-4xl sm:text-6xl md:text-8xl font-display italic text-turquoise tracking-tight">
                        Solve with<br className="md:hidden" /> Design.
                    </span>
                </div>
                
                <p className="text-lg md:text-2xl font-sans text-foreground/80 tracking-[0.2em] mt-12 bg-background/50 backdrop-blur-sm px-6 py-2">
                    価値を見える形にし、デザインで課題を解決する。
                </p>
            </div>
        </section>
    );
}
