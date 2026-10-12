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
        </div>

        <Link href="/works" className="studio-works-feature focus-ring">
          <div className="studio-works-feature-visual">
            <span className="studio-works-feature-index">01</span>
            <Image
              src="/images/works/french-bulldog/french-bulldog-logo-normal-v2.png"
              alt="キッチンカー用に制作したフレンチブルドッグのオリジナルキャラクターデザイン"
              width={1182}
              height={1182}
              sizes="(max-width: 900px) 90vw, 52vw"
            />
          </div>
          <div className="studio-works-feature-info">
            <small>CHARACTER DESIGN / 2026</small>
            <strong>キッチンカー キャラクターデザイン</strong>
            <p>
              フレンチブルドッグをモチーフにしたオリジナルキャラクター。
              複数案の提案から、使用シーンに合わせた調整まで一貫して担当。
            </p>
            <span className="studio-works-view">
              VIEW PROJECT
              <ArrowUpRight size={20} aria-hidden="true" />
            </span>
          </div>
        </Link>

        <Link href="/works/chive" className="studio-works-feature studio-works-feature-chive focus-ring">
          <div className="studio-works-feature-visual">
            <Image
              src="/images/works/chive/chive-total-design-mockup.webp"
              alt="グループホーム チャイブ様のWebサイト、10周年記念チラシ、名刺の制作実績"
              width={1448}
              height={1086}
              sizes="(max-width: 900px) 90vw, 60vw"
            />
          </div>
          <div className="studio-works-feature-info">
            <small>02 WEB &amp; GRAPHIC DESIGN / 2026</small>
            <strong>
              グループホーム
              <br />
              <span className="studio-works-title-phrase">Webサイト・</span>
              <span className="studio-works-title-phrase">チラシ・名刺制作</span>
            </strong>
            <p>
              NPO法人アニマート グループホーム チャイブ様のWebサイト、10周年記念チラシ、名刺を制作しました。
              施設のあたたかさや親しみやすさを大切にしながら、それぞれの媒体の目的に合わせて情報を整理し、デザインしています。
            </p>
            <span className="studio-works-view">
              VIEW PROJECT
              <ArrowUpRight size={20} aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
