import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Globe2, PanelsTopLeft, Shapes } from "lucide-react";

export default function Services() {
  return (
    <section id="service" className="studio-section studio-services">
      <div className="section-shell">
        <div className="studio-section-heading">
          <p className="studio-eyebrow">SERVICES</p>
          <h2>
            必要なデザインを、
            <span>情報整理から一緒に。</span>
          </h2>
          <p>
            お店やサービスの目的に合わせて、Webからロゴ・キャラクター、
            印刷物まで、伝わる形を一緒につくります。
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
              <li><Check size={17} />公開サポート</li>
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

        <div className="studio-service-row studio-service-character">
          <div className="studio-character-stage" aria-label="ロゴ・キャラクターのデザインイメージ">
            <span className="studio-character-ring" aria-hidden="true" />
            <Image
              src="/images/works/french-bulldog/french-bulldog-07-final-normal.png"
              alt="キッチンカー用に制作したフレンチブルドッグのオリジナルキャラクターデザイン"
              width={1182}
              height={1182}
              sizes="(max-width: 900px) 82vw, 42vw"
            />
            <small>ORIGINAL CHARACTER / BRAND IDENTITY</small>
          </div>

          <div className="studio-service-copy">
            <div className="studio-service-number">02</div>
            <Shapes className="studio-service-icon" aria-hidden="true" />
            <p className="studio-service-label">LOGO &amp; CHARACTER DESIGN</p>
            <h3>ロゴ・キャラクター制作</h3>
            <p>
              お店やサービスの個性を伝える、ロゴやオリジナルキャラクターを制作します。
              イメージが固まっていない段階でも、比較しながら方向性を探します。
            </p>
            <ul>
              <li><Check size={17} />ヒアリング</li>
              <li><Check size={17} />デザイン提案</li>
              <li><Check size={17} />バリエーション制作</li>
              <li><Check size={17} />使用媒体に合わせた調整</li>
            </ul>
            <Link href="#contact" className="studio-text-link focus-ring">
              ロゴ・キャラクター制作を相談する
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
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
            <div className="studio-service-number">03</div>
            <PanelsTopLeft className="studio-service-icon" aria-hidden="true" />
            <p className="studio-service-label">GRAPHIC DESIGN</p>
            <h3>チラシ・名刺などの印刷物</h3>
            <p>
              お店やサービスの情報を整理し、見た人に伝わりやすい
              チラシや名刺などの印刷物を制作します。
            </p>
            <ul>
              <li><Check size={17} />掲載内容の整理</li>
              <li><Check size={17} />レイアウト・デザイン</li>
              <li><Check size={17} />印刷用データ作成</li>
              <li><Check size={17} />入稿サポート</li>
            </ul>
            <Link href="#contact" className="studio-text-link focus-ring">
              印刷物の制作を相談する
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
