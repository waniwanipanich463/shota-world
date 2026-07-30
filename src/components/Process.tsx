const steps = [
  {
    num: "01",
    title: "ご相談",
    description: "作りたいもの、目的、希望時期など、わかる範囲でお聞かせください。",
  },
  {
    num: "02",
    title: "内容の整理",
    description: "伝える相手と優先順位を整理し、ページや紙面の構成をご提案します。",
  },
  {
    num: "03",
    title: "デザイン制作",
    description: "方向性を共有しながら、目的に合うデザインへ仕上げていきます。",
  },
  {
    num: "04",
    title: "公開・納品",
    description: "ホームページは公開まで、チラシは印刷に使えるデータの納品まで対応します。",
  },
];

export default function Process() {
  return (
    <section id="process" className="studio-section studio-process">
      <div className="section-shell">
        <div className="studio-section-heading">
          <p className="studio-eyebrow">PROCESS</p>
          <h2>ご相談から完成まで、<span>一緒に進めます。</span></h2>
          <p>専門用語をできるだけ使わず、確認するポイントを順番にご案内します。</p>
        </div>

        <div className="studio-process-grid">
          {steps.map((step) => (
            <article key={step.num} className="studio-process-step">
              <p>{step.num}</p>
              <h3>{step.title}</h3>
              <span>{step.description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
