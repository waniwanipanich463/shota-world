import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-synth-cyan/20 bg-[#050715]/92 py-10 text-white/[0.62]">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-3 font-display text-xl font-bold text-white transition-colors hover:text-synth-cyan"
          >
            <span className="grid h-9 w-9 place-items-center rounded-md border border-synth-cyan/30 bg-synth-cyan/[0.08] text-sm text-synth-cyan">
              SW
            </span>
            <span>SHOTA WORLD</span>
          </Link>
          <p className="mt-2 text-sm text-mist-gray">AI ART × VISUAL DESIGN / RETRO FUTURE SIGNAL</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/niwano_creator/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.05] transition-colors hover:border-synth-pink/50 hover:text-white"
          >
            <Instagram size={18} aria-hidden="true" />
          </a>
          <a
            href="https://x.com/Niwano_creator"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.05] transition-colors hover:border-synth-cyan/50 hover:text-white"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-mist-gray">
          © 2026 SHOTA WORLD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
