"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Works", href: "#works" },
  { name: "About", href: "#about" },
  { name: "Service", href: "#service" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-[#080b16]/70 py-3 shadow-[0_18px_70px_rgba(5,7,21,0.3)] backdrop-blur-xl"
          : "border-b border-white/0 bg-transparent py-5"
      }`}
    >
      <div className="section-shell flex items-center justify-between gap-4">
        <Link
          href="#"
          aria-label="SHOTA WORLD home"
          className="focus-ring font-display text-base font-bold text-white transition-colors hover:text-synth-cyan sm:text-lg"
          onClick={() => setMenuOpen(false)}
        >
          SHOTA WORLD
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="focus-ring text-sm font-medium text-white/[0.78] transition-colors hover:text-synth-cyan"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="focus-ring hidden rounded-full border border-white/20 bg-white/[0.08] px-5 py-2 text-sm font-bold text-white transition-all hover:border-synth-cyan/60 hover:bg-synth-cyan/[0.12] hover:text-synth-cyan hover:shadow-[0_0_24px_rgba(155,231,245,0.24)] md:inline-flex"
        >
          Talk to me
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white backdrop-blur-xl transition-colors hover:border-synth-cyan/[0.55] hover:text-synth-cyan md:hidden"
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <div className="section-shell mt-4 md:hidden">
          <nav className="glass-panel grid overflow-hidden rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring border-b border-white/10 px-5 py-4 text-base font-semibold text-white/[0.86] transition-colors last:border-b-0 hover:bg-white/[0.08] hover:text-synth-cyan"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
