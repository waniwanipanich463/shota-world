import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Works() {
  return (
    <section id="works" className="studio-section studio-works">
      <div className="section-shell studio-works-layout">
        <div className="studio-works-copy">
          <p className="studio-eyebrow">SELECTED WORKS</p>
          <h2>デザインの土台になる、<span>世界観の引き出し。</span></h2>
          <p>
            光、色、構図、余白。SHOTA WORLDが制作してきたビジュアル作品を、
            専用の作品ページにまとめています。
          </p>
          <Link href="/works" className="studio-button studio-button-primary focus-ring">
            作品集を見る
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <Link href="/works" className="studio-works-collage focus-ring" aria-label="作品集ページへ移動">
          <figure className="studio-work-frame studio-work-frame-a">
            <Image src="/images/gallery/tokyo-tower.png" alt="" fill sizes="260px" className="object-cover" />
          </figure>
          <figure className="studio-work-frame studio-work-frame-b">
            <Image src="/images/gallery/open-sea.png" alt="" fill sizes="420px" className="object-cover" />
          </figure>
          <figure className="studio-work-frame studio-work-frame-c">
            <Image src="/images/gallery/room-night.png" alt="" fill sizes="300px" className="object-cover" />
          </figure>
          <div className="studio-works-stamp">
            <span>VIEW</span>
            <strong>21</strong>
            <small>VISUAL WORKS</small>
          </div>
        </Link>
      </div>
    </section>
  );
}
