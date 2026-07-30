import { ArrowUp, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="studio-footer">
      <div className="section-shell studio-footer-inner">
        <div>
          <Link href="/" className="studio-brand focus-ring">
            <span className="studio-brand-mark">SW</span>
            <span className="studio-brand-copy">
              <strong>SHOTA WORLD</strong>
              <small>DESIGN STUDIO</small>
            </span>
          </Link>
          <p className="studio-footer-role">ホームページ制作・チラシ制作 / 庭野翔太</p>
        </div>

        <div className="studio-footer-links">
          <Link href="/#service">サービス</Link>
          <Link href="/#about">プロフィール</Link>
          <Link href="/#process">制作の流れ</Link>
          <Link href="/privacy">プライバシー</Link>
        </div>

        <div className="studio-footer-social">
          <a
            href="https://www.instagram.com/niwano_creator/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="focus-ring"
          >
            <Instagram size={18} aria-hidden="true" />
          </a>
          <a
            href="https://x.com/Niwano_creator"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="focus-ring"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
        </div>

        <div className="studio-footer-bottom">
          <p>© 2026 SHOTA WORLD. All Rights Reserved.</p>
          <Link href="#" aria-label="ページ上部へ戻る" className="focus-ring">
            <ArrowUp size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
