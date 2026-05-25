import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden pt-24 text-white md:min-h-[90vh]">
      <Image
        src="/images/hero/synthwave-oasis-hero.jpg"
        alt="霧に包まれた高層都市とパームツリー、水面反射のあるSHOTA WORLDの背景"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,21,0.18)_0%,rgba(5,7,21,0.42)_52%,rgba(5,7,21,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,21,0.58)_0%,rgba(5,7,21,0.12)_50%,rgba(5,7,21,0.5)_100%)]" />
      <div className="mist-band bottom-[-18%]" />

      <div className="section-shell relative z-10 grid gap-8 pb-8 md:pb-10">
        <div className="max-w-5xl animate-fade-up">
          <p className="section-kicker mb-4 text-white/[0.82]">AI ART × VISUAL DESIGN</p>

          <div className="mb-5 w-[min(90vw,760px)]">
            <Image
              src="/images/logo/shota-world-logo.png"
              alt="SHOTA WORLD"
              width={2172}
              height={724}
              priority
              className="h-auto w-full drop-shadow-[0_18px_46px_rgba(0,229,255,0.24)]"
            />
          </div>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-white drop-shadow-[0_8px_28px_rgba(5,7,21,0.76)] sm:text-4xl md:text-5xl">
            AIで描く。デザインで伝える。
          </h1>

          <p className="max-w-2xl text-base leading-8 text-white/[0.84] drop-shadow-[0_8px_24px_rgba(5,7,21,0.72)] md:text-lg">
            AIアートとビジュアルデザインを組み合わせ、広告・ポスター・SNSクリエイティブに使える印象的な世界観を制作します。
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#works"
              className="cta-link focus-ring border border-white/[0.35] bg-white/[0.13] text-white shadow-[0_0_32px_rgba(155,231,245,0.2)] backdrop-blur-xl hover:border-synth-cyan/70 hover:bg-synth-cyan/[0.14] hover:shadow-[0_0_34px_rgba(0,229,255,0.32)]"
            >
              Worksを見る
            </Link>
            <Link
              href="#contact"
              className="cta-link focus-ring border border-synth-purple/60 bg-transparent text-[#f4d8ff] backdrop-blur-xl hover:border-synth-pink/80 hover:bg-synth-pink/[0.1] hover:shadow-[0_0_34px_rgba(255,102,217,0.24)]"
            >
              相談する
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
