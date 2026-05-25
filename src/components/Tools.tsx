const skills = [
  "ChatGPT",
  "Image Generation AI",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Canva",
  "Prompt Design",
  "Visual Direction",
  "Color Direction",
  "Layout Design",
  "SNS Creative",
];

export default function Tools() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="section-shell">
        <div className="glass-panel rounded-lg p-6 md:p-9">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker mb-3">TOOLS / SKILLS</p>
              <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
                制作環境とスキル
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-mist-gray">
              AIを使っていることを隠さず、目的に合わせてプロンプト・色・構図・仕上げを設計します。
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-synth-cyan/25 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/[0.82]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
