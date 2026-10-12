import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import styles from "./chive.module.css";

const imageBase = "/images/works/chive";
const pageUrl = "https://www.shota-world.jp/works/chive";
const description =
  "NPO法人アニマート グループホーム チャイブ様のWebサイト、10周年記念チラシ、名刺を制作しました。Webと紙をつなぎ、施設のあたたかさや親しみやすさを伝える制作実績をご紹介します。";

export const metadata: Metadata = {
  title: "WORKS｜グループホーム チャイブ Web・グラフィック制作｜SHOTA WORLD",
  description,
  alternates: {
    canonical: pageUrl,
    languages: { "ja-JP": pageUrl },
  },
  openGraph: {
    title: "グループホーム チャイブ Web・グラフィック制作｜SHOTA WORLD",
    description,
    url: pageUrl,
    type: "article",
    images: [
      {
        url: `${imageBase}/chive-total-design-mockup.webp`,
        width: 1448,
        height: 1086,
        alt: "チャイブ様のWebサイト、10周年記念チラシ、名刺",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "グループホーム チャイブ Web・グラフィック制作｜SHOTA WORLD",
    description,
    images: [`${imageBase}/chive-total-design-mockup.webp`],
  },
};

type ProjectImage = {
  file: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectSection = {
  index: string;
  label: string;
  title: string[];
  tone: "light" | "dark" | "green";
  paragraphs: string[];
  quotes?: string[];
  afterQuotes?: string[];
  image: ProjectImage;
  detail?: { title: string; paragraphs: string[] };
  note?: string;
};

const sections: ProjectSection[] = [
  {
    index: "01",
    label: "WEB DESIGN",
    title: ["施設の雰囲気を、", "Webで伝える。"],
    tone: "light",
    paragraphs: [
      "Webサイトでは、入居を検討される方やそのご家族だけでなく、採用を検討している方など、さまざまな目的を持った方が訪れることを想定しました。",
      "福祉施設としての安心感を大切にしながらも、堅い印象になりすぎないよう、やわらかな色使いや写真、キャラクターを取り入れています。",
      "施設でどのような暮らしが送れるのか、どのような考え方で支援を行っているのかが、初めてサイトを訪れた方にもイメージしやすい構成を意識しました。",
    ],
    image: {
      file: "chive-website-values-section.webp",
      alt: "チャイブが大切にしていることを、暮らしの写真とメッセージで伝えるWebサイトのセクション",
      width: 1672,
      height: 941,
    },
    detail: {
      title: "自分らしい暮らしをイメージできるように。",
      paragraphs: [
        "「チャイブが大切にしていること」では、文章だけで施設の考え方を説明するのではなく、実際の暮らしをイメージできる写真とメッセージを組み合わせています。",
        "一人ひとりの想いやペースを大切にするという施設の姿勢が、視覚的にも伝わることを目指しました。",
      ],
    },
  },
  {
    index: "02",
    label: "INFORMATION DESIGN",
    title: ["複雑な情報を、", "順番に理解できる形へ。"],
    tone: "dark",
    paragraphs: [
      "グループホームへの入居を初めて検討する方にとって、",
    ],
    quotes: ["「まず何をすればいいのか」", "「どのような手続きが必要なのか」"],
    afterQuotes: [
      "という部分は、不安を感じやすい情報のひとつです。",
      "そこで、問い合わせから入居開始までの流れを8つのステップに整理しました。",
      "情報を一度に並べるのではなく、順番に追って理解できる形にすることで、利用を検討する方が次に何をすればよいのかを把握しやすいページを目指しています。",
    ],
    image: {
      file: "chive-website-admission-flow.webp",
      alt: "問い合わせから入居開始までを8つのステップに整理したチャイブ様の入居案内ページ",
      width: 1448,
      height: 1086,
    },
  },
  {
    index: "03",
    label: "RECRUIT DESIGN",
    title: ["利用する方だけでなく、", "働く方にも伝わるサイトへ。"],
    tone: "green",
    paragraphs: [
      "Webサイトは、入居を検討される方だけが見るものではありません。",
      "チャイブ様で働くことを検討している方にも、施設がどのような支援を大切にしているのかが伝わるよう、採用ページを制作しました。",
      "「寄り添う支援ができる方」というメッセージを中心に、求める人物像を分かりやすく伝える構成としています。",
      "条件だけを掲載する求人ページではなく、チャイブ様の考え方に共感できる方へ届くことを意識しました。",
    ],
    image: {
      file: "chive-website-recruit-page.webp",
      alt: "寄り添う支援ができる方へ向けたメッセージを掲載したチャイブ様の採用ページ",
      width: 1672,
      height: 941,
    },
  },
  {
    index: "04",
    label: "FLYER DESIGN",
    title: ["10周年とWebサイト開設を、", "地域へ伝える。"],
    tone: "light",
    paragraphs: [
      "開所10周年という節目にあわせて、地域の方への感謝と、新たに開設したWebサイトを知らせるチラシを制作しました。",
      "「開所10年を迎えました。」というメッセージと施設の建物写真を大きく配置し、何を伝えるチラシなのかがひと目で分かる構成にしています。",
      "また、Webサイト開設のお知らせにはQRコードを配置し、紙媒体を見た方がそのままWebサイトへアクセスできるよう導線を設けました。",
    ],
    image: {
      file: "chive-10th-anniversary-flyer.webp",
      alt: "チャイブ様の開所10周年とWebサイト開設を知らせるチラシの全体と詳細",
      width: 1448,
      height: 1086,
    },
    detail: {
      title: "紙で知り、Webでもっと知る。",
      paragraphs: [
        "チラシだけですべての情報を伝えようとするのではなく、まず施設を知ってもらい、興味を持った方にはWebサイトで詳しい情報を確認していただく。",
        "紙とWeb、それぞれの特徴を活かした情報発信を意識しています。",
      ],
    },
  },
  {
    index: "05",
    label: "BUSINESS CARD DESIGN",
    title: ["日常的に使うツールにも、", "施設らしさを。"],
    tone: "dark",
    paragraphs: [
      "Webサイト、チラシとあわせて、施設の名刺も制作しました。",
      "施設名、役職、Webサイト、連絡先などの情報を整理しながら、チャイブ様のキャラクターや植物のモチーフを取り入れています。",
      "ビジネスツールとして必要な情報の読みやすさを確保しつつ、受け取った方にやわらかく親しみやすい印象を持っていただけるデザインを目指しました。",
    ],
    image: {
      file: "chive-business-card-mockup.webp",
      alt: "植物のモチーフとチャイブ様のキャラクターを取り入れた名刺の公開用モックアップ",
      width: 1448,
      height: 1086,
    },
    note: "※公開用画像では個人名・電話番号・メールアドレス・住所・QRコードをダミー情報へ変更。",
  },
  {
    index: "06",
    label: "TOTAL DESIGN",
    title: ["Webから紙まで、", "ひとつの", "プロジェクトとして。"],
    tone: "green",
    paragraphs: [
      "Webサイト、10周年記念チラシ、名刺。",
      "それぞれ役割や使用される場面が異なる媒体を制作しました。",
      "すべてをまったく同じデザインにするのではなく、それぞれの媒体に必要な役割を考えながら、チャイブ様の持つ「あたたかさ」「安心感」「親しみやすさ」という共通した印象を大切にしています。",
      "Webで施設を知った方にも、チラシを手に取った方にも、名刺を受け取った方にも、チャイブ様らしい雰囲気が伝わることを目指しました。",
    ],
    image: {
      file: "chive-total-design-mockup.webp",
      alt: "チャイブ様のWebサイト、10周年記念チラシ、名刺をまとめたトータルデザイン",
      width: 1448,
      height: 1086,
    },
  },
];

const overview = [
  { label: "PROJECT", value: "グループホーム Web・グラフィック制作" },
  { label: "CATEGORY", value: "Web Design / Graphic Design" },
  { label: "CLIENT", value: "NPO法人アニマート グループホーム チャイブ様" },
  { label: "YEAR", value: "2026" },
  { label: "DELIVERABLE", value: "Website / Flyer / Business Card" },
  { label: "ROLE", value: "Web Design & Development / Flyer Design / Business Card Design" },
];

function ProjectVisual({ image }: { image: ProjectImage }) {
  return (
    <figure className={styles.visual}>
      <Image
        src={`${imageBase}/${image.file}`}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(max-width: 640px) 92vw, (max-width: 1288px) 94vw, 1240px"
      />
    </figure>
  );
}

export default function ChiveWorksPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "グループホーム チャイブ Web・グラフィック制作",
    headline: "Webと紙をつなぎ、施設の想いを伝えるデザイン。",
    description,
    creator: {
      "@type": "Person",
      name: "庭野翔太",
      url: "https://www.shota-world.jp/#about",
    },
    about: {
      "@type": "Organization",
      name: "NPO法人アニマート グループホーム チャイブ",
      url: "https://www.animart-chive.com/",
    },
    dateCreated: "2026",
    image: `https://www.shota-world.jp${imageBase}/chive-total-design-mockup.webp`,
    url: pageUrl,
    inLanguage: "ja-JP",
  };

  return (
    <main className={`studio-site ${styles.page}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <article>
        <section className={styles.hero}>
          <div className="section-shell">
            <Link href="/#works" className={`${styles.backLink} focus-ring`}>
              <ArrowLeft size={17} aria-hidden="true" />
              SHOTA WORLD / WORKS
            </Link>
            <div className={styles.heroCopy}>
              <div>
                <p className={styles.label}>WEB &amp; GRAPHIC DESIGN</p>
                <h1>
                  <span>Webと紙をつなぎ、</span>
                  <span>
                    <span className={styles.titlePhrase}>施設の想いを</span>
                    <span className={styles.titlePhrase}>伝えるデザイン。</span>
                  </span>
                </h1>
              </div>
              <div className={styles.copy}>
                <p>NPO法人アニマート グループホーム チャイブ様のWebサイト、10周年記念チラシ、名刺を制作しました。</p>
                <p>入居を検討される方やご家族、求職者、地域の方など、それぞれの立場から必要な情報へたどり着きやすいことを大切にしながら、チャイブ様のあたたかく親しみやすい雰囲気が伝わるデザインを目指しました。</p>
              </div>
            </div>
            <figure className={styles.heroVisual}>
              <Image
                src={`${imageBase}/chive-website-pc-mobile-mockup.webp`}
                alt="グループホーム チャイブ様のWebサイトをPCとスマートフォンで表示したモックアップ"
                width={1448}
                height={1086}
                sizes="(max-width: 640px) 92vw, (max-width: 1288px) 94vw, 1240px"
                loading="eager"
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <section className={styles.overview} aria-label="案件概要">
          <div className={`section-shell ${styles.overviewInner}`}>
            <p className={styles.label}>PROJECT OVERVIEW</p>
            <dl className={styles.overviewGrid}>
              {overview.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {sections.map((section) => (
          <section
            key={section.index}
            className={`${styles.section} ${styles[section.tone]}`}
            aria-labelledby={`chive-section-${section.index}`}
          >
            <div className="section-shell">
              <div className={styles.sectionHeading}>
                <span className={styles.index} aria-hidden="true">{section.index}</span>
                <div>
                  <p className={styles.label}>{section.label}</p>
                  <h2 id={`chive-section-${section.index}`}>
                    {section.title.map((phrase) => (
                      <span key={phrase} className={styles.titlePhrase}>{phrase}</span>
                    ))}
                  </h2>
                </div>
              </div>
              <div className={`${styles.copy} ${styles.sectionCopy}`}>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.quotes && (
                  <blockquote className={styles.quotes}>
                    {section.quotes.map((quote) => <p key={quote}>{quote}</p>)}
                  </blockquote>
                )}
                {section.afterQuotes?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <ProjectVisual image={section.image} />
              {section.note && <p className={styles.note}>{section.note}</p>}
              {section.detail && (
                <div className={styles.detail}>
                  <h3>{section.detail.title}</h3>
                  <div className={styles.copy}>
                    {section.detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        <section className={`${styles.section} ${styles.light}`}>
          <div className={`section-shell ${styles.approach}`}>
            <div>
              <p className={styles.label}>DESIGN APPROACH</p>
              <h2>必要なデザインを、<br />まとめて考える。</h2>
            </div>
            <div className={styles.copy}>
              <p>ホームページ、チラシ、名刺。</p>
              <p>事業やサービスによって、本当に必要なものはそれぞれ異なります。</p>
              <p>SHOTA WORLDでは、最初から制作物がすべて決まっている必要はありません。</p>
              <blockquote className={styles.quotes}>
                <p>「誰に伝えたいのか」</p>
                <p>「何を知ってもらいたいのか」</p>
                <p>「そのために何が必要なのか」</p>
              </blockquote>
              <p>を整理しながら、それぞれの目的に合った形へデザインしていきます。</p>
              <p>Webと印刷物をまとめて考えることで、一つの媒体だけでは伝えきれない情報や魅力を、複数の接点から届けることができます。</p>
            </div>
          </div>
        </section>

        <section className={styles.website}>
          <div className={`section-shell ${styles.websiteInner}`}>
            <div>
              <p className={styles.label}>VIEW WEBSITE</p>
              <h2>グループホーム チャイブ<br />公式Webサイト</h2>
            </div>
            <a
              href="https://www.animart-chive.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.websiteLink} focus-ring`}
            >
              実際のWebサイトを見る
              <ArrowUpRight size={20} aria-hidden="true" />
              <span className="sr-only">（別タブで開きます）</span>
            </a>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={`section-shell ${styles.ctaInner}`}>
            <p className={styles.label}>START A PROJECT</p>
            <h2>Webも印刷物も、<br />まとめて相談しませんか？</h2>
            <div className={styles.copy}>
              <p>「ホームページを作りたい」</p>
              <p>「チラシや名刺も一緒に作りたい」</p>
              <p>「何から用意すればいいのかわからない」</p>
              <p>そんな段階からでも大丈夫です。</p>
              <p>事業やサービスについてお聞きしながら、必要な情報を整理し、目的に合った制作物を一緒に考えていきます。</p>
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
