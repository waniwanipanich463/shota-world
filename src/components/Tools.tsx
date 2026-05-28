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
        <div className="retro-panel reveal-on-scroll p-6 md:p-9">
          <div className="relative z-10 mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-kicker mb-3">TOOLS / SKILLS</p>
              <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
                CREATIVE CONSOLE
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-mist-gray">
              プロンプト、色、構図、仕上げをひとつの操作卓として扱い、世界観の出力精度を高めます。
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="neon-chip text-sm"
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
