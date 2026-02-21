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
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="#" className="text-xl font-display font-bold tracking-widest text-white hover:text-[var(--neon-lime)] transition-colors">
                    SHOTA WORLD
                </Link>

                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-sans tracking-widest text-white hover:text-[var(--neon-lime)] transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile: Show Contact Button */}
                <div className="md:hidden">
                    <Link
                        href="#contact"
                        className="text-xs font-sans tracking-widest text-black bg-[var(--neon-lime)] px-4 py-2 font-bold"
                    >
                        CONTACT
                    </Link>
                </div>
            </div>
        </header>
    );
}
