"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "作品集", href: "/works" },
  { name: "プロフィール", href: "/#about" },
  { name: "サービス", href: "/#service" },
  { name: "制作の流れ", href: "/#process" },
  { name: "相談", href: "/#contact" },
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
          ? "border-b border-synth-cyan/20 bg-[#050715]/82 py-3 shadow-[0_18px_70px_rgba(5,7,21,0.42)] backdrop-blur-xl"
          : "border-b border-white/0 bg-transparent py-5"
      }`}
    >
      <div className="section-shell flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="SHOTA WORLD home"
          className="focus-ring group inline-flex items-center gap-3 font-display text-base font-bold text-white transition-colors hover:text-synth-cyan sm:text-lg"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-md border border-synth-cyan/35 bg-synth-cyan/[0.08] text-sm text-synth-cyan shadow-[0_0_22px_rgba(0,229,255,0.2)] transition-colors group-hover:border-retro-amber group-hover:text-retro-amber">
            SW
          </span>
          <span>SHOTA WORLD</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.045] p-1 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-bold text-white/[0.72] transition-colors hover:bg-synth-cyan/[0.1] hover:text-synth-cyan"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="focus-ring hidden rounded-md border border-synth-pink/35 bg-synth-pink/[0.08] px-5 py-2 text-sm font-bold text-white transition-all hover:border-retro-amber hover:bg-synth-pink/[0.14] hover:text-retro-amber hover:shadow-[0_0_24px_rgba(255,102,217,0.24)] md:inline-flex"
        >
          相談する
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-synth-cyan/30 bg-white/[0.08] text-white backdrop-blur-xl transition-colors hover:border-retro-amber hover:text-retro-amber md:hidden"
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <div className="section-shell mt-4 md:hidden">
          <nav className="retro-panel grid overflow-hidden rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring relative z-10 border-b border-white/10 px-5 py-4 text-base font-semibold text-white/[0.86] transition-colors last:border-b-0 hover:bg-synth-cyan/[0.08] hover:text-synth-cyan"
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
