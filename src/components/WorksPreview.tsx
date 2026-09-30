import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WorksPreview() {
  return (
    <section id="works" className="studio-section studio-works">
      <div className="section-shell studio-works-layout">
        <div className="studio-works-copy">
          <p className="studio-eyebrow">WORKS</p>
          <h2>制作実績</h2>
          <p>
            お客様のお話を伺いながら、イメージや目的を整理し、ひとつずつ形にしています。
          </p>
          <Link href="/works" className="studio-button studio-button-ghost focus-ring">
            制作ストーリーを見る
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <Link href="/works" className="studio-works-feature focus-ring">
          <div className="studio-works-feature-visual">
            <span className="studio-works-feature-index">01</span>
            <Image
              src="/images/works/french-bulldog/french-bulldog-07-final-normal.png"
              alt="キッチンカーのために制作したフレンチブルドッグのキャラクター"
              width={1182}
              height={1182}
              sizes="(max-width: 900px) 90vw, 52vw"
            />
          </div>
          <div className="studio-works-feature-info">
            <div>
              <small>CHARACTER DESIGN / 2026</small>
              <strong>キッチンカー キャラクターデザイン</strong>
            </div>
            <ArrowUpRight size={24} aria-hidden="true" />
          </div>
        </Link>
      </div>
    </section>
  );
}
