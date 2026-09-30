import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import styles from "./works.module.css";

const imageBase = "/images/works/french-bulldog";

const initialDesigns = [
  { label: "A", image: `${imageBase}/french-bulldog-01-initial-a.png` },
  { label: "B", image: `${imageBase}/french-bulldog-01-initial-b.png` },
  { label: "C", image: `${imageBase}/french-bulldog-01-initial-c.png` },
  { label: "D", image: `${imageBase}/french-bulldog-01-initial-d.png` },
];

const balanceDesigns = [
  {
    label: "A",
    caption: "フレーム強調",
    alt: "フレームを強調したA案",
    image: `${imageBase}/french-bulldog-02-balance-a.png`,
  },
  {
    label: "B",
    caption: "サイズ調整",
    alt: "顔と前足のサイズを調整したB案",
    image: `${imageBase}/french-bulldog-02-balance-b.png`,
  },
  {
    label: "C",
    caption: "両方を調整",
    alt: "フレームとサイズの両方を調整したC案",
    image: `${imageBase}/french-bulldog-02-balance-c.png`,
  },
];

export const metadata: Metadata = {
  title: "WORKS｜キッチンカー キャラクターデザイン｜SHOTA WORLD",
  description:
    "キッチンカーのために制作したフレンチブルドッグのオリジナルキャラクター。その提案とブラッシュアップの過程をご紹介します。",
  alternates: {
    canonical: "https://www.shota-world.jp/works",
  },
  openGraph: {
    title: "キッチンカー キャラクターデザイン｜SHOTA WORLD",
    description:
      "ヒアリングから複数案の比較、カラー調整、利用シーンの検証まで。キャラクターデザインの制作実績です。",
    url: "https://www.shota-world.jp/works",
    type: "article",
    images: [
      {
        url: `${imageBase}/french-bulldog-07-final-normal.png`,
        width: 1182,
        height: 1182,
        alt: "キッチンカーのフレンチブルドッグキャラクター",
      },
    ],
  },
};

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
};

function SectionHeading({ index, label, title }: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading} data-works-reveal>
      <span className={styles.sectionIndex}>{index}</span>
      <div>
        <p className={styles.sectionLabel}>{label}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default function WorksPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "キッチンカー キャラクターデザイン",
    headline: "キッチンカーの個性を伝える、フレンチブルドッグのキャラクター。",
    creator: {
      "@type": "Person",
      name: "庭野翔太",
      url: "https://www.shota-world.jp/#about",
    },
    dateCreated: "2026",
    image: `https://www.shota-world.jp${imageBase}/french-bulldog-07-final-normal.png`,
    url: "https://www.shota-world.jp/works",
    inLanguage: "ja-JP",
  };

  return (
    <main className={`${styles.page} studio-site`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        <section className={styles.hero}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={`section-shell ${styles.heroInner}`}>
            <div className={styles.heroCopy} data-works-reveal>
              <Link href="/" className={`${styles.backLink} focus-ring`}>
                <ArrowLeft size={17} aria-hidden="true" />
                SHOTA WORLD
              </Link>
              <p className={styles.heroLabel}>CHARACTER DESIGN</p>
              <h1>
                <span>キッチンカーの個性を伝える、</span>
                <strong>
                  フレンチブルドッグの
                  <br />
                  キャラクター。
                </strong>
              </h1>
              <div className={styles.heroDescription}>
                <p>
                  キッチンカーで使用するオリジナルキャラクターとして、
                  フレンチブルドッグをモチーフにしたデザインを制作しました。
                </p>
                <p>
                  ご希望のイメージを伺いながら複数のデザインをご提案し、表情やパーツのバランス、
                  フレーム、カラーなどを調整。さまざまな使用シーンを想定しながら仕上げました。
                </p>
              </div>
            </div>

            <figure className={styles.heroVisual} data-works-reveal>
              <span className={styles.heroOrbit} aria-hidden="true" />
              <Image
                src={`${imageBase}/french-bulldog-07-final-normal.png`}
                alt="完成したフレンチブルドッグのキャラクターデザイン"
                width={1182}
                height={1182}
                sizes="(max-width: 900px) 92vw, 48vw"
                loading="eager"
                fetchPriority="high"
              />
              <figcaption>FINAL CHARACTER / 2026</figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.overview} aria-label="案件概要">
          <div className={`section-shell ${styles.overviewInner}`} data-works-reveal>
            <p className={styles.overviewTitle}>PROJECT OVERVIEW</p>
            <dl className={styles.overviewGrid}>
              <div className={styles.overviewWide}>
                <dt>PROJECT</dt>
                <dd>キッチンカー キャラクターデザイン</dd>
              </div>
              <div>
                <dt>CATEGORY</dt>
                <dd>Character Design</dd>
              </div>
              <div>
                <dt>CLIENT</dt>
                <dd>キッチンカーオーナー様</dd>
              </div>
              <div>
                <dt>YEAR</dt>
                <dd>2026</dd>
              </div>
              <div className={styles.overviewWide}>
                <dt>DELIVERABLE</dt>
                <dd>Adobe Illustrator data / PNG</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className={`${styles.section} ${styles.storyIntro}`}>
          <div className={`section-shell ${styles.narrowContent}`}>
            <SectionHeading
              index="01"
              label="STARTING POINT"
              title="イメージを、一緒に整理するところから。"
            />
            <div className={styles.storyText} data-works-reveal>
              <p>
                ご相談いただいたのは、キッチンカーの顔となるフレンチブルドッグの
                オリジナルキャラクター制作。
              </p>
              <p>
                「丸みのある顔」「大きな目」「ピンクの耳」など、ご希望のイメージを伺いながら、
                キャラクターの表情や全体のバランスを整理していきました。
              </p>
              <p>
                最初からひとつの形に決めるのではなく、複数の案を比較しながら方向性を探していきました。
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`}>
          <div className="section-shell">
            <SectionHeading
              index="02"
              label="INITIAL PROPOSAL"
              title="まずは、4つの方向性をご提案。"
            />
            <div className={styles.initialGrid} data-works-reveal>
              {initialDesigns.map((design) => (
                <figure key={design.label} className={styles.initialItem}>
                  <div className={styles.lightImageStage}>
                    <Image
                      src={design.image}
                      alt={`初期提案 ${design.label}案`}
                      width={1254}
                      height={1254}
                      sizes="(max-width: 640px) 46vw, 23vw"
                    />
                  </div>
                  <figcaption>{design.label}</figcaption>
                </figure>
              ))}
            </div>
            <div className={styles.sectionBody} data-works-reveal>
              <p>
                眉の有無や顔・パーツのバランスなどに変化をつけた4案を制作。
                実際に見比べていただきながら、「なんとなくこちらが好き」という感覚も含めて、
                イメージに近い方向性を絞り込んでいきました。
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.balanceSection}`}>
          <div className="section-shell">
            <SectionHeading
              index="03"
              label="BALANCE STUDY"
              title="選ばれた方向性から、さらにブラッシュアップ。"
            />
            <div className={styles.balanceGrid} data-works-reveal>
              {balanceDesigns.map((design) => (
                <figure key={design.label} className={styles.balanceItem}>
                  <div className={styles.darkImageStage}>
                    <Image
                      src={design.image}
                      alt={design.alt}
                      width={1254}
                      height={1254}
                      sizes="(max-width: 700px) 90vw, 30vw"
                    />
                  </div>
                  <figcaption>
                    <span>{design.label}</span>
                    {design.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className={`${styles.sectionBody} ${styles.sectionBodyLight}`} data-works-reveal>
              <p>
                キャラクターと丸いフレームのバランスを改めて検討し、フレームの太さや、
                顔・前足の大きさを変えた3案を制作しました。小さな違いを比較しながら、
                キャラクターがより印象的に見えるバランスを探っています。
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.colorSection}`}>
          <div className="section-shell">
            <SectionHeading
              index="04"
              label="COLOR ADJUSTMENT"
              title="カラーを合わせ、デザインに統一感を。"
            />
            <figure className={styles.largeVisual} data-works-reveal>
              <p>COLOR ADJUSTMENT</p>
              <div className={styles.colorStage}>
                <Image
                  src={`${imageBase}/french-bulldog-03-pink-frame.png`}
                  alt="耳の色と合わせてフレームをピンクに調整したキャラクター"
                  width={1254}
                  height={1254}
                  sizes="(max-width: 900px) 92vw, 70vw"
                />
              </div>
            </figure>
            <div className={styles.sectionBody} data-works-reveal>
              <p>
                全体のバランスが固まった後、フレームのカラーも検討しました。
                耳の内側に使用しているピンクをフレームにも取り入れ、
                キャラクター全体に統一感を持たせています。
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkTestSection}`}>
          <div className="section-shell">
            <SectionHeading index="05" label="USABILITY TEST" title="使う場所まで考える。" />
            <div className={styles.comparisonBlock} data-works-reveal>
              <p>DARK BACKGROUND TEST</p>
              <div className={styles.comparisonGrid}>
                <figure>
                  <Image
                    src={`${imageBase}/french-bulldog-04-dark-bg-before.png`}
                    alt="白い縁取りを加える前の濃色背景テスト"
                    width={1254}
                    height={1254}
                    sizes="(max-width: 700px) 46vw, 43vw"
                  />
                  <figcaption>WITHOUT OUTLINE</figcaption>
                </figure>
                <figure>
                  <Image
                    src={`${imageBase}/french-bulldog-04-dark-bg-outline.png`}
                    alt="白い縁取りを加えた後の濃色背景テスト"
                    width={1254}
                    height={1254}
                    sizes="(max-width: 700px) 46vw, 43vw"
                  />
                  <figcaption>WITH OUTLINE</figcaption>
                </figure>
              </div>
            </div>
            <div className={`${styles.sectionBody} ${styles.sectionBodyLight}`} data-works-reveal>
              <p>
                黒など濃い背景で使用した場合、キャラクターの輪郭が背景になじんでしまう部分がありました。
                そこで白い縁取りを加え、背景色が変わってもシルエットがはっきり伝わるよう調整しました。
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.variationSection}`}>
          <div className="section-shell">
            <SectionHeading
              index="06"
              label="BODY VARIATION"
              title="見え方を変える、もうひとつのアプローチ。"
            />
            <div className={styles.variationLayout}>
              <div className={styles.variationVisual} data-works-reveal>
                <Image
                  src={`${imageBase}/french-bulldog-06-body-variation.png`}
                  alt="胸元まで見せたフレンチブルドッグのキャラクターバリエーション"
                  width={1254}
                  height={1254}
                  sizes="(max-width: 900px) 92vw, 62vw"
                />
              </div>
              <div className={styles.variationCopy} data-works-reveal>
                <p>
                  キャラクターの姿勢や全体のシルエットについても検討し、
                  胸元まで見せたバリエーションを制作しました。
                </p>
                <p>
                  課題に対してひとつの修正だけで進めるのではなく、別の見せ方も比較しながら、
                  最終的な方向性を検討しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.finalSection}`}>
          <div className="section-shell">
            <SectionHeading
              index="07"
              label="FINAL DESIGN"
              title="用途に合わせて使い分けられる、2つの最終データ。"
            />
            <div className={styles.finalGallery} data-works-reveal>
              <p className={styles.finalGalleryLabel}>FINAL DESIGN</p>
              <figure className={styles.finalItem}>
                <figcaption>NORMAL</figcaption>
                <div className={styles.finalNormalStage}>
                  <Image
                    src={`${imageBase}/french-bulldog-07-final-normal.png`}
                    alt="通常背景用の最終キャラクターデザイン"
                    width={1182}
                    height={1182}
                    sizes="(max-width: 900px) 92vw, 72vw"
                  />
                </div>
              </figure>
              <figure className={styles.finalItem}>
                <figcaption>DARK BACKGROUND</figcaption>
                <div className={styles.finalDarkStage}>
                  <Image
                    src={`${imageBase}/french-bulldog-07-final-dark.png`}
                    alt="濃色背景用の最終キャラクターデザイン"
                    width={1182}
                    height={1182}
                    sizes="(max-width: 900px) 92vw, 72vw"
                  />
                </div>
              </figure>
            </div>
            <div className={`${styles.sectionBody} ${styles.sectionBodyLight}`} data-works-reveal>
              <p>
                ヒアリングと複数回の提案・調整を重ね、最終デザインが完成しました。
              </p>
              <p>
                通常背景用に加え、黒や濃色の背景でも輪郭がしっかり見えるよう、
                白い縁取りを加えたバリエーションも制作。
              </p>
              <p>
                使用する媒体や背景に合わせて使い分けられるよう、
                Illustrator形式（AI）とPNG形式で納品しました。
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.approachSection}`}>
          <div className={`section-shell ${styles.approachLayout}`}>
            <div data-works-reveal>
              <p className={styles.sectionLabel}>DESIGN APPROACH</p>
              <h2>「こんな感じ」を、一緒に形にします。</h2>
            </div>
            <div className={styles.approachCopy} data-works-reveal>
              <p>
                デザインを依頼するときに、最初から完成形をうまく言葉にできる必要はありません。
              </p>
              <blockquote>
                <span>「もう少し丸くしたい」</span>
                <span>「こちらの方がなんとなく好き」</span>
                <span>「実際に使ったときにどう見えるか不安」</span>
              </blockquote>
              <p>
                そうした感覚も、デザインをつくるための大切な手がかりです。
              </p>
              <p>
                SHOTA WORLDでは、お話を伺いながらイメージを整理し、比較できる形でご提案しながら、
                一緒に完成へ近づけていきます。
              </p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={`section-shell ${styles.ctaInner}`} data-works-reveal>
            <p className={styles.sectionLabel}>START A PROJECT</p>
            <h2>お店のキャラクターやロゴを、一緒につくりませんか？</h2>
            <div className={styles.ctaCopy}>
              <p>「オリジナルキャラクターが欲しい」</p>
              <p>「なんとなくイメージはあるけれど、うまく説明できない」</p>
              <p>「ロゴやチラシもまとめて相談したい」</p>
              <p>
                そんな段階からでも大丈夫です。お店やサービスについてお聞きしながら、
                必要なデザインを一緒に考えます。
              </p>
            </div>
            <Link href="/#contact" className={`${styles.ctaButton} focus-ring`}>
              制作について相談する
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
