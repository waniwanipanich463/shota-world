import { Image as ImageIcon, LayoutTemplate, MonitorSmartphone, Sparkles } from "lucide-react";

const services = [
  {
    title: "AI ART / Concept Visual",
    description: "世界観やイメージをもとに、印象的なAIアートを制作します。抽象的なアイデアや頭の中のイメージを、視覚的なコンセプトに変換します。",
    icon: Sparkles,
  },
  {
    title: "Poster / Key Visual",
    description: "広告、イベント、作品告知、サービス紹介などに使えるポスターやキービジュアルを制作します。",
    icon: ImageIcon,
  },
  {
    title: "SNS / Ad Creative",
    description: "Instagram、X、広告バナー、LP、サムネイルなどに使えるビジュアルを制作します。目を引き、伝わりやすい表現を意識します。",
    icon: MonitorSmartphone,
  },
  {
    title: "Visual Direction",
    description: "「どんな見せ方がいいかわからない」という段階から、世界観・構図・色味・見せ方を整理し、ビジュアルの方向性を提案します。",
    icon: LayoutTemplate,
  },
];

export default function Services() {
  return (
    <section id="service" className="relative overflow-hidden py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker mb-4">SERVICE</p>
          <h2 className="section-title mb-6">
            AI art made for <span className="text-gradient">real media.</span>
          </h2>
          <p className="text-base leading-8 text-mist-gray md:text-lg">
            AIアートとデザインを活用し、広告・SNS・ポスター・LPなどに使えるビジュアル制作を行います。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="glass-panel rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-synth-pink/[0.45] hover:shadow-[0_26px_80px_rgba(235,164,222,0.12)]"
              >
                <div className="mb-7 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-synth-cyan/25 bg-synth-cyan/[0.08] text-synth-cyan">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <h3 className="mb-4 font-display text-xl font-bold leading-tight text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-7 text-mist-gray">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
