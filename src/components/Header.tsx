"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "ABOUT", href: "#about" },
        { name: "WORKS", href: "#works" },
        { name: "VISION", href: "#vision" },
        { name: "CONTACT", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/40 backdrop-blur-lg py-4 border-b border-black/5" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="#" className="text-xl font-display font-medium tracking-[0.2em] text-foreground hover:text-turquoise transition-colors">
                    SHOTA WORLD
                </Link>

                <nav className="hidden md:flex gap-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-[11px] font-sans tracking-[0.3em] text-foreground/80 hover:text-turquoise transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop: Contact Link as a refined button */}
                <div className="hidden md:block">
                     <Link
                        href="#contact"
                        className="text-[10px] font-sans tracking-[0.2em] text-white bg-foreground px-6 py-2 hover:bg-turquoise transition-all"
                    >
                        GET IN TOUCH
                    </Link>
                </div>

                {/* Mobile: Link */}
                <div className="md:hidden">
                    <Link
                        href="#contact"
                        className="text-[10px] font-sans tracking-[0.2em] text-foreground font-bold border-b border-foreground"
                    >
                        CONTACT
                    </Link>
                </div>
            </div>
        </header>
    );
}
