export default function About() {
  return (
    <section id="about" className="retro-section relative overflow-hidden py-20 md:py-32">
      <div className="mist-band top-[10%]" />
      <div className="section-shell relative z-10 grid items-start gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <div className="profile-display chrome-card reveal-on-scroll relative overflow-hidden shadow-[0_30px_90px_rgba(5,7,21,0.38)]">
          <div className="profile-video-wrap relative min-h-[520px] md:min-h-[620px] lg:min-h-[680px]">
            <video
              className="profile-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/profile/shota-artist-profile.jpg"
              aria-label="SHOTA WORLDの世界観を表す都市映像"
            >
              <source src="/videos/tokai-city.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,21,0.02)_0%,rgba(5,7,21,0.18)_48%,rgba(5,7,21,0.78)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
            <div className="mb-4 h-px bg-gradient-to-r from-synth-cyan/70 via-synth-pink/45 to-transparent" />
            <p className="section-kicker mb-2">プロフィール</p>
            <h3 className="font-display text-3xl font-bold text-white md:text-5xl">
              SHOTA NIWANO
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/[0.78]">
              都市の光、霧、余白を手がかりに、AIアートを広告やSNSで使えるビジュアルへ設計します。
            </p>
          </div>
        </div>

        <div className="retro-panel reveal-on-scroll p-6 md:p-9 lg:p-10">
          <div className="relative z-10">
            <h2 className="natural-title mb-7 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              <span className="title-line">世界観を描き、</span>
              <span className="title-line text-gradient">印象に残る形へ</span>
              <span className="title-line">仕上げる。</span>
            </h2>

            <div className="mb-8 border-l-2 border-retro-amber/70 pl-5 text-lg font-semibold leading-8 text-white md:text-xl">
              AIで画像を作るだけではなく、誰に何を届けるためのビジュアルなのかまで考えて設計します。
            </div>

            <div className="space-y-5 text-base leading-8 text-mist-gray">
              <p>
                SHOTA WORLDは、AIアートとビジュアルデザインを組み合わせ、ブランドやサービスの「頭の中にあるイメージ」を、広告・ポスター・SNSで使える表現へ変換する場所です。
              </p>
              <p>
                大切にしているのは、ただ綺麗な画像を作ることではなく、見る人の記憶に残ること、伝えたい価値が届くこと、スクロールの中で“目を止めてもらうこと”です。
              </p>
              <p className="font-semibold text-white">
                AIのスピードと、人の感情に届くデザインの視点。その両方を使って、まだ見たことのない世界観を、仕事に使えるビジュアルへ整えます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
