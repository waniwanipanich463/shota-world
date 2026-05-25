import Image from "next/image";

const tags = [
  "AI ART",
  "VISUAL DESIGN",
  "POSTER",
  "SNS CREATIVE",
  "KEY VISUAL",
  "CONCEPT VISUAL",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-32">
      <div className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[0.96fr_1.04fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/[0.12] bg-mist-navy shadow-[0_30px_90px_rgba(5,7,21,0.38)]">
          <Image
            src="/images/profile/shota-portrait.png"
            alt="SHOTA WORLD creator portrait"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,21,0.05)_0%,rgba(5,7,21,0.6)_100%)]" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="section-kicker mb-2">Visual World Designer</p>
            <p className="text-sm leading-6 text-white/[0.78]">
              AIとデザインで、頭の中にある世界観を「使えるビジュアル」へ。
            </p>
          </div>
        </div>

        <div className="glass-panel rounded-lg p-6 md:p-9">
          <p className="section-kicker mb-4">ABOUT</p>
          <h2 className="mb-7 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            AIで世界観を作り、<span className="text-gradient">伝わる形</span>へ整える。
          </h2>

          <div className="space-y-5 text-base leading-8 text-mist-gray">
            <p>
              私は、AIを使って「頭の中にある世界観」をビジュアルとして形にするクリエイターです。
            </p>
            <p>
              ただ綺麗な画像を作るだけではなく、見る人の印象に残ること、伝えたい価値が届くこと、広告やポスター、SNS上で“目を止めてもらうこと”を大切にしています。
            </p>
            <p>
              AIアート、画像生成、ビジュアルデザインを組み合わせ、ブランドやサービスの魅力を、記憶に残る表現へ変換します。
            </p>
            <p className="font-semibold text-white">
              SHOTA WORLDは、想像とデザインをつなぐビジュアル表現の場所です。
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-synth-cyan/25 bg-white/[0.06] px-4 py-2 text-xs font-bold text-white/[0.82]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
