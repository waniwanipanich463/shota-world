const steps = [
  {
    num: "01",
    title: "ヒアリング",
    description: "目的、使用媒体、ターゲット、見せたい印象を整理します。",
  },
  {
    num: "02",
    title: "世界観設計",
    description: "世界観、構図、色味、参考イメージをもとに方向性を設計します。",
  },
  {
    num: "03",
    title: "ビジュアル生成",
    description: "プロンプトを設計し、複数パターンのビジュアルを生成します。",
  },
  {
    num: "04",
    title: "選定・レタッチ",
    description: "使用目的に合う画像を選定し、必要に応じてレタッチ・色調整を行います。",
  },
  {
    num: "05",
    title: "デザイン仕上げ",
    description: "文字入れ、レイアウト調整、媒体に合わせたサイズ展開を行い納品します。",
  },
];

export default function Process() {
  return (
    <section id="process" className="retro-section relative overflow-hidden py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <h2 className="section-title natural-title mb-6">
            <span className="title-line">ラフな光を、</span>
            <span className="title-line text-gradient">使える一枚へ。</span>
          </h2>
          <p className="text-base leading-8 text-mist-gray md:text-lg">
            生成、選定、レタッチ、レイアウトを一続きの演出として扱い、使えるビジュアルへ仕上げます。
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-synth-cyan/[0.42] via-retro-amber/[0.38] to-transparent lg:block" />
          {steps.map((step) => (
            <article
              key={step.num}
              className="chrome-card reveal-on-scroll relative p-6 transition-all duration-300 hover:-translate-y-1 hover:border-synth-cyan/40"
            >
              <p className="timeline-number mb-6 text-5xl font-bold leading-none">
                {step.num}
              </p>
              <h3 className="mb-3 font-display text-xl font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-7 text-mist-gray">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
