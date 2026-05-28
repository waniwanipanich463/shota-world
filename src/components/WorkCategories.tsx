const categories = [
  {
    title: "AI ART WORKS",
    description: "世界観重視のAIアート作品。映画的・幻想的・未来的なビジュアル表現。",
  },
  {
    title: "POSTER / KEY VISUAL",
    description: "広告、イベント、作品告知、ブランド表現に使えるメインビジュアル。",
  },
  {
    title: "SNS / AD CREATIVE",
    description: "SNS投稿、広告バナー、LP、サムネイルなどに展開できるビジュアル。",
  },
  {
    title: "CONCEPT VISUAL",
    description: "企画やブランドの方向性を固めるためのコンセプトアート。",
  },
];

export default function WorkCategories() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="section-shell">
        <div className="soft-divider mb-12" />
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker mb-4">WORKS CATEGORY</p>
          <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
            依頼イメージを、ひとつの映像世界として組み立てます。
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((category, index) => (
            <article
              key={category.title}
              className="chrome-card reveal-on-scroll p-6 transition-colors hover:border-synth-cyan/40"
            >
              <p className="retro-index mb-4 text-sm font-bold">
                0{index + 1}
              </p>
              <h3 className="mb-3 font-display text-2xl font-bold text-white">
                {category.title}
              </h3>
              <p className="text-sm leading-7 text-mist-gray">{category.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
