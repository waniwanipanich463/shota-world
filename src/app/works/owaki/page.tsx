import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { owakiImages } from "@/data/owaki";
import works from "../works.module.css";
import styles from "./owaki.module.css";

const pageUrl = "https://www.shota-world.jp/works/owaki";
const title = "居酒屋おおわき様 オリジナルTシャツ制作実績 | SHOTA WORLD";
const description =
  "東京都八丈島の居酒屋おおわき様のオリジナルTシャツ用デザイン。招き猫キャラクターを使った背面と前面右胸を、白1色版・3色DTF版で制作しました。";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
    languages: { "ja-JP": pageUrl },
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "article",
    images: [
      {
        url: owakiImages.backColorMockup.src,
        width: owakiImages.backColorMockup.width,
        height: owakiImages.backColorMockup.height,
        alt: owakiImages.backColorMockup.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [owakiImages.backColorMockup.src],
  },
};

const overview = [
  ["PROJECT", "居酒屋オリジナルTシャツデザイン"],
  ["CATEGORY", "Character Design / T-Shirt Design"],
  ["CLIENT", "居酒屋おおわき様"],
  ["YEAR", "2026"],
  ["DELIVERABLE", "T-Shirt Graphic / Front & Back Design / Adobe Illustrator Data"],
  ["VARIATION", "White 1-Color / 3-Color DTF"],
];

type ProjectImage = (typeof owakiImages)[keyof typeof owakiImages];
type ImagePair = readonly [ProjectImage, ProjectImage];
type ProjectSection = {
  index: string;
  label: string;
  heading: string[];
  paragraphs: string[];
  images?: ImagePair;
  light?: boolean;
  mockups?: boolean;
};

const sections: ProjectSection[] = [
  {
    index: "01",
    label: "STARTING POINT",
    heading: ["店長様の個性を、", "親しみやすい", "キャラクターへ。"],
    paragraphs: [
      "店舗で使用するオリジナルTシャツの制作にあたり、店長様の特徴を取り入れた招き猫キャラクターをデザインしました。",
      "縁起のよさと店舗らしい親しみやすさを大切にしながら、表情やシルエットを調整しています。",
    ],
  },
  {
    index: "02",
    label: "CHARACTER & BACK DESIGN",
    heading: ["招き猫らしさと、", "お店らしさをひとつに。"],
    paragraphs: [
      "背面デザインでは、招き猫キャラクターを中心に店名や「商売繁盛」「千客万来」の文字を配置しました。",
      "招く手、猫耳、鈴、酒瓶などのモチーフを取り入れ、居酒屋らしい楽しさを表現しています。",
    ],
    images: [owakiImages.backColorDesign, owakiImages.backWhiteDesign],
    light: true,
  },
  {
    index: "03",
    label: "FRONT MARK DESIGN",
    heading: ["前面は、", "さりげなく使える", "ワンポイントに。"],
    paragraphs: [
      "前面右胸には、背面と共通の招き猫キャラクターを使用しました。",
      "背面のインパクトと、前面の着用しやすいシンプルさを両立することを目指しています。",
    ],
    images: [owakiImages.frontColorDesign, owakiImages.frontWhiteDesign],
  },
  {
    index: "04",
    label: "COLOR & PRINT VARIATION",
    heading: ["印刷表現に合わせた、", "2つのデザイン。"],
    paragraphs: [
      "白1色版は、輪郭や文字を単色で表現し、シンプルながら視認性のあるデザインにしました。",
      "3色DTF版では、生成り系の色をベースに赤をアクセントとして加え、キャラクターの表情や親しみやすさを表現しています。",
    ],
    images: [owakiImages.backWhiteMockup, owakiImages.frontWhiteMockup],
    light: true,
    mockups: true,
  },
  {
    index: "05",
    label: "FINAL DESIGN",
    heading: ["お店の想いを、", "着るデザインへ。"],
    paragraphs: [
      "ご希望を伺いながらキャラクターや文字、全体の配置を調整し、前面と背面のデザインを完成させました。",
      "それぞれの印刷仕様に合わせ、Illustrator形式のデータとして納品しています。",
    ],
  },
];

function ProjectGallery({
  images,
  hero = false,
  mockups = false,
}: {
  images: ImagePair;
  hero?: boolean;
  mockups?: boolean;
}) {
  return (
    <div className={styles.galleryBlock} data-works-reveal>
      <div className={`${styles.gallery} ${hero ? styles.heroGallery : ""}`}>
        {images.map(({ src, alt, width, height, caption }) => (
          <figure key={src} className={styles.figure}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              unoptimized
              loading={hero ? "eager" : "lazy"}
              fetchPriority={hero ? "high" : undefined}
            />
            <figcaption>{caption}</figcaption>
          </figure>
        ))}
      </div>
      {mockups && (
        <p className={styles.note}>
          ※掲載のTシャツ画像は完成イメージのモックアップです。実際の印刷済み商品写真ではありません。
        </p>
      )}
    </div>
  );
}

export default function OwakiWorksPage() {
  return (
    <main className={`studio-site ${works.page} ${styles.page}`}>
      <article>
        <section className={styles.hero} aria-labelledby="owaki-title">
          <div className="section-shell">
            <Link href="/#works" className={`${works.backLink} ${styles.backLink} focus-ring`}>
              <ArrowLeft size={17} aria-hidden="true" />
              SHOTA WORLD / WORKS
            </Link>
            <div className={styles.heroText} data-works-reveal>
              <div>
                <p className={works.sectionLabel}>T-SHIRT &amp; CHARACTER DESIGN</p>
                <h1 id="owaki-title">
                  <span className={styles.phrase}>お店の個性を、</span>
                  <span className={styles.phrase}>招き猫に込めた</span>
                  <span className={`${styles.phrase} ${styles.accent}`}>オリジナルTシャツ。</span>
                </h1>
              </div>
              <div className={`${works.heroDescription} ${styles.heroCopy}`}>
                <p>東京都八丈島の「居酒屋おおわき」様のオリジナルTシャツ用デザインを制作しました。</p>
                <p>店長様の特徴を取り入れた招き猫キャラクターを中心に、縁起のよさと親しみやすさを表現。背面のメインデザインと前面右胸のワンポイントを、白1色版・3色DTF版の2種類で制作しました。</p>
              </div>
            </div>
            <ProjectGallery
              images={[owakiImages.backColorMockup, owakiImages.frontColorMockup]}
              hero
              mockups
            />
          </div>
        </section>

        <section className={works.overview} aria-labelledby="owaki-overview">
          <div className={`section-shell ${works.overviewInner}`} data-works-reveal>
            <h2 id="owaki-overview" className={works.overviewTitle}>PROJECT OVERVIEW</h2>
            <dl className={`${works.overviewGrid} ${styles.overviewGrid}`}>
              {overview.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {sections.map((section) => (
          <section
            key={section.index}
            className={`${works.section} ${section.light ? works.lightSection : works.storyIntro}`}
            aria-labelledby={`owaki-section-${section.index}`}
          >
            <div className="section-shell">
              <div className={`${works.sectionHeading} ${styles.sectionHeading}`} data-works-reveal>
                <span className={works.sectionIndex} aria-hidden="true">{section.index}</span>
                <div>
                  <p className={works.sectionLabel}>{section.label}</p>
                  <h2 id={`owaki-section-${section.index}`}>
                    {section.heading.map((phrase) => (
                      <span key={phrase} className={styles.phrase}>{phrase}</span>
                    ))}
                  </h2>
                </div>
              </div>
              <div className={`${works.storyText} ${section.light ? styles.lightCopy : ""}`} data-works-reveal>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.images && <ProjectGallery images={section.images} mockups={section.mockups} />}
            </div>
          </section>
        ))}

        <section className={`${works.section} ${works.approachSection}`}>
          <div className={`section-shell ${works.approachLayout}`} data-works-reveal>
            <div>
              <p className={works.sectionLabel}>DESIGN APPROACH</p>
              <h2>「こんな感じにしたい」を、<wbr />一緒に形に。</h2>
            </div>
            <div className={works.approachCopy}>
              <p>お店の雰囲気や大切にしたいモチーフ、ご希望のテイストを伺いながら、一つひとつ具体的な形へ整えていきます。</p>
              <p>見た目の楽しさだけでなく、お店らしさが自然に伝わるデザインを大切にしています。</p>
            </div>
          </div>
        </section>

        <section className={works.ctaSection}>
          <div className={`section-shell ${works.ctaInner}`} data-works-reveal>
            <p className={works.sectionLabel}>START A PROJECT</p>
            <h2>お店らしさが伝わる、<wbr />オリジナルグッズを<wbr />つくりませんか？</h2>
            <div className={works.ctaCopy}>
              <p>スタッフTシャツ、キャラクター、ロゴ、販促ビジュアルなど、お店の個性を伝えるデザインをご提案します。</p>
            </div>
            <Link href="/#contact" className={`${works.ctaButton} focus-ring`}>
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
