import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Globe2, PanelsTopLeft } from "lucide-react";

export default function Services() {
  return (
    <section id="service" className="studio-section studio-services">
      <div className="section-shell">
        <div className="studio-section-heading">
          <p className="studio-eyebrow">SERVICES</p>
          <h2>
            ホームページとチラシを、
            <span>ひとつの世界観で。</span>
          </h2>
          <p>
            目的や伝えたい内容がまだ曖昧でも大丈夫です。
            情報を整理し、見た人が迷わず行動できる形へ設計します。
          </p>
        </div>

        <div className="studio-service-row studio-service-web">
          <div className="studio-service-copy">
            <div className="studio-service-number">01</div>
            <Globe2 className="studio-service-icon" aria-hidden="true" />
            <p className="studio-service-label">WEBSITE DESIGN</p>
            <h3>ホームページ制作</h3>
            <p>
              事業やサービスの魅力を整理し、スマートフォンでも見やすく、
              問い合わせや来店につながるホームページを制作します。
            </p>
            <ul>
              <li><Check size={17} />ページ構成・情報整理</li>
              <li><Check size={17} />オリジナルデザイン</li>
              <li><Check size={17} />スマートフォン対応</li>
              <li><Check size={17} />公開までのサポート</li>
            </ul>
            <Link href="#contact" className="studio-text-link focus-ring">
              ホームページ制作を相談する
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="studio-browser-mockup" aria-label="ホームページのデザインイメージ">
            <div className="studio-browser-bar"><i /><i /><i /><span>shota-world.jp</span></div>
            <div className="studio-browser-screen">
              <Image
                src="/images/gallery/highrise-02.png"
                alt=""
                fill
                sizes="(max-width: 900px) 90vw, 48vw"
                className="object-cover"
              />
              <div className="studio-browser-overlay">
                <small>BRAND EXPERIENCE</small>
                <strong>まだ見たことのない<br />景色へ。</strong>
                <span>VIEW PROJECT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="studio-service-row studio-service-print">
          <div className="studio-flyer-stage" aria-label="チラシのデザインイメージ">
            <article className="studio-flyer studio-flyer-back">
              <Image src="/images/gallery/room-evening.png" alt="" fill sizes="280px" className="object-cover" />
              <span>MAKE<br />A MOMENT</span>
            </article>
            <article className="studio-flyer studio-flyer-front">
              <Image src="/images/gallery/tokyo-tower.png" alt="" fill sizes="280px" className="object-cover" />
              <div>
                <small>NEW VISUAL</small>
                <strong>TOKYO<br />AFTER DARK</strong>
              </div>
            </article>
          </div>

          <div className="studio-service-copy">
            <div className="studio-service-number">02</div>
            <PanelsTopLeft className="studio-service-icon" aria-hidden="true" />
            <p className="studio-service-label">FLYER DESIGN</p>
            <h3>チラシ制作</h3>
            <p>
              イベント、店舗、サービスの情報を読みやすく整理し、
              手に取った瞬間に魅力が伝わるチラシを制作します。
            </p>
            <ul>
              <li><Check size={17} />掲載内容の整理</li>
              <li><Check size={17} />表面・両面デザイン</li>
              <li><Check size={17} />写真・ビジュアルの調整</li>
              <li><Check size={17} />印刷用データの作成</li>
            </ul>
            <Link href="#contact" className="studio-text-link focus-ring">
              チラシ制作を相談する
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
