"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "サービス", href: "/#service" },
  { name: "制作実績", href: "/#works" },
  { name: "プロフィール", href: "/#about" },
  { name: "制作の流れ", href: "/#process" },
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
    <header className={`studio-header ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
      <div className="section-shell studio-header-inner">
        <Link
          href="/"
          aria-label="SHOTA WORLD ホーム"
          className="studio-brand focus-ring"
          onClick={() => setMenuOpen(false)}
        >
          <span className="studio-brand-mark">SW</span>
          <span className="studio-brand-copy">
            <strong>SHOTA WORLD</strong>
            <small>DESIGN STUDIO</small>
          </span>
        </Link>

        <nav className="studio-nav" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="focus-ring">
              {item.name}
            </Link>
          ))}
        </nav>

        <Link href="/#contact" className="studio-header-cta focus-ring">
          制作を相談する
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="studio-menu-button focus-ring"
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {menuOpen && (
        <div className="section-shell studio-mobile-menu">
          <nav className="studio-mobile-nav" aria-label="モバイルナビゲーション">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="focus-ring studio-mobile-contact"
            >
              制作を相談する
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
