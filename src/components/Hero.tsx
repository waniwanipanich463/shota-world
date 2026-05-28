import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-stage relative flex min-h-[84svh] items-center overflow-hidden pt-16 text-white md:min-h-[88vh] md:pt-20">
      <Image
        src="/images/hero/synthwave-oasis-hero.jpg"
        alt="霧に包まれた高層都市とパームツリー、水面反射のあるSHOTA WORLDの背景"
        fill
        priority
        sizes="100vw"
        className="object-cover saturate-[1.18] contrast-[1.08]"
      />
      <div className="hero-scan" />
      <div className="hero-grid-floor" />
      <div className="mist-band bottom-[-18%] z-[3]" />

      <div className="section-shell relative z-10 grid gap-8 pb-2 md:pb-4">
        <div className="reveal-on-scroll max-w-5xl animate-fade-up">
          <div className="signal-row mb-4">
            <span className="signal-chip">VISUAL TRANSMISSION</span>
            <span className="signal-chip">TOKYO / RETRO FUTURE</span>
            <span className="signal-chip">SIGNAL 88.7</span>
          </div>

          <div className="hero-logo-wrap mb-5">
            <span className="logo-spark logo-spark-a" aria-hidden="true" />
            <span className="logo-spark logo-spark-b" aria-hidden="true" />
            <span className="logo-spark logo-spark-c" aria-hidden="true" />
            <Image
              src="/images/logo/shota-world-logo.png"
              alt="SHOTA WORLD"
              width={2172}
              height={724}
              priority
              className="h-auto w-full drop-shadow-[0_22px_54px_rgba(0,229,255,0.34)]"
            />
          </div>

          <p className="section-kicker mb-4 text-white/[0.86]">AI ART × VISUAL DESIGN</p>

          <h1 className="retro-title mb-4 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            AIで描く。デザインで伝える。
          </h1>

          <p className="max-w-2xl text-base leading-8 text-white/[0.86] drop-shadow-[0_8px_24px_rgba(5,7,21,0.72)] md:text-lg">
            霧、ネオン、都市の余白。AIで生まれたイメージを、広告・ポスター・SNSで使える“記憶に残るビジュアル信号”へ編集します。
          </p>

          <div className="mt-5 grid max-w-2xl grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="neon-chip">POSTER / KEY VISUAL</div>
            <div className="neon-chip">SNS CREATIVE</div>
            <div className="neon-chip">WORLD DESIGN</div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#works"
              className="cta-link focus-ring border border-synth-cyan/60 bg-synth-cyan/[0.14] text-white shadow-[0_0_32px_rgba(155,231,245,0.22)] backdrop-blur-xl hover:border-retro-amber hover:bg-synth-cyan/[0.2] hover:shadow-[0_0_34px_rgba(0,229,255,0.34)]"
            >
              Worksを見る
            </Link>
            <Link
              href="#contact"
              className="cta-link focus-ring border border-synth-pink/60 bg-neon-pink/[0.1] text-white backdrop-blur-xl hover:border-retro-amber hover:bg-synth-pink/[0.15] hover:shadow-[0_0_34px_rgba(255,102,217,0.28)]"
            >
              相談する
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
