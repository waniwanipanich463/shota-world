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

            <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-12 w-full px-4 text-center">
                <span className="text-5xl sm:text-7xl md:text-9xl font-display font-medium text-foreground tracking-widest uppercase">
                    Inspire.
                </span>
                <span className="text-5xl sm:text-7xl md:text-9xl font-display italic text-turquoise tracking-widest">
                    Relax.
                </span>
                <span className="text-5xl sm:text-7xl md:text-9xl font-display font-medium text-lush-green tracking-widest uppercase">
                    Connect.
                </span>
            </div>

            {/* Sub text */}
            <div className="absolute bottom-20 w-full text-center">
                <p className="text-[10px] tracking-[0.5em] text-foreground/40 uppercase">
                    Shaping the future with calm and light.
                </p>
            </div>
        </section>
    );
}
