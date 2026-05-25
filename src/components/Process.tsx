const steps = [
  {
    num: "01",
    title: "Hearing",
    description: "目的、使用媒体、ターゲット、見せたい印象を整理します。",
  },
  {
    num: "02",
    title: "Concept Design",
    description: "世界観、構図、色味、参考イメージをもとに方向性を設計します。",
  },
  {
    num: "03",
    title: "AI Generation",
    description: "プロンプトを設計し、複数パターンのビジュアルを生成します。",
  },
  {
    num: "04",
    title: "Select / Retouch",
    description: "使用目的に合う画像を選定し、必要に応じてレタッチ・色調整を行います。",
  },
  {
    num: "05",
    title: "Design Finish",
    description: "文字入れ、レイアウト調整、媒体に合わせたサイズ展開を行い納品します。",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker mb-4">PROCESS</p>
          <h2 className="section-title mb-6">
            From image idea to <span className="text-gradient">finished design.</span>
          </h2>
          <p className="text-base leading-8 text-mist-gray md:text-lg">
            AI制作でも、目的・媒体・印象設計から仕上げまでプロセスを踏んで制作します。
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-5">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-synth-cyan/[0.28] to-transparent lg:block" />
          {steps.map((step) => (
            <article
              key={step.num}
              className="glass-panel relative rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-synth-cyan/40"
            >
              <p className="mb-6 font-display text-5xl font-bold leading-none text-transparent [background:linear-gradient(135deg,#9be7f5,#c875ea,#eba4de)] [-webkit-background-clip:text] [background-clip:text]">
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
