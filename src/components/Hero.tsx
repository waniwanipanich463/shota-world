import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Monitor, PanelsTopLeft } from "lucide-react";

export default function Hero() {
  return (
    <section className="studio-hero">
      <video
        className="studio-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero/synthwave-oasis-hero.jpg"
        aria-label="SHOTA WORLDの背景映像"
      >
        <source src="/videos/cyber-city.mp4" type="video/mp4" />
      </video>
      <div className="studio-hero-wash" />
      <div className="studio-hero-grid" />

      <div className="section-shell studio-hero-inner">
        <div className="studio-hero-copy">
          <p className="studio-eyebrow">WEB &amp; GRAPHIC DESIGN / SHOTA NIWANO</p>
          <h1>
            <span>伝えたいことを、</span>
            <strong>選ばれるデザインへ。</strong>
          </h1>
          <p className="studio-hero-lead">
            SHOTA WORLDは、デザイナー庭野翔太のデザインスタジオです。
            ホームページとチラシを、情報整理からデザインまで一緒につくります。
          </p>

          <div className="studio-hero-actions">
            <Link href="#contact" className="studio-button studio-button-primary focus-ring">
              制作を相談する
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="#service" className="studio-button studio-button-ghost focus-ring">
              できることを見る
              <ArrowDownRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="studio-hero-signature" aria-hidden="true">
          <div className="studio-orbit">
            <span />
            <span />
            <span />
          </div>
          <div className="studio-hero-logo">
            <Image
              src="/images/logo/shota-world-logo.png"
              alt=""
              width={2172}
              height={724}
              priority
            />
          </div>
          <div className="studio-scope studio-scope-web">
            <Monitor size={18} />
            <span>ホームページ制作</span>
          </div>
          <div className="studio-scope studio-scope-print">
            <PanelsTopLeft size={18} />
            <span>チラシ制作</span>
          </div>
        </div>
      </div>

      <div className="studio-hero-footer section-shell">
        <span>企画</span>
        <i />
        <span>デザイン</span>
        <i />
        <span>公開・入稿サポート</span>
      </div>
    </section>
  );
}
