import { Image as ImageIcon, LayoutTemplate, MonitorSmartphone, Sparkles } from "lucide-react";

const services = [
  {
    title: "世界観の設計",
    description: "世界観やイメージをもとに、印象的なAIアートを制作します。抽象的なアイデアや頭の中のイメージを、視覚的なコンセプトに変換します。",
    icon: Sparkles,
  },
  {
    title: "メインビジュアル制作",
    description: "広告、イベント、作品告知、サービス紹介などに使えるポスターやキービジュアルを制作します。",
    icon: ImageIcon,
  },
  {
    title: "SNS・広告ビジュアル",
    description: "Instagram、X、広告バナー、LP、サムネイルなどに使えるビジュアルを制作します。目を引き、伝わりやすい表現を意識します。",
    icon: MonitorSmartphone,
  },
  {
    title: "見せ方の整理",
    description: "「どんな見せ方がいいかわからない」という段階から、世界観・構図・色味・見せ方を整理し、ビジュアルの方向性を提案します。",
    icon: LayoutTemplate,
  },
];

export default function Services() {
  return (
    <section id="service" className="retro-section relative overflow-hidden py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <h2 className="section-title natural-title mb-6">
            <span className="title-line">光を、</span>
            <span className="title-line text-gradient">記憶に残る形へ。</span>
          </h2>
          <p className="text-base leading-8 text-mist-gray md:text-lg">
            ただ画像を作るのではなく、媒体の中で光る見え方、余白、タイトルの置き方まで含めて設計します。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="chrome-card reveal-on-scroll p-6 transition-all duration-300 hover:-translate-y-1 hover:border-synth-pink/[0.45] hover:shadow-[0_26px_80px_rgba(235,164,222,0.14)]"
              >
                <div className="service-icon mb-7">
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
