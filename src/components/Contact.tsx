import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

const offers = [
  "AIアート制作",
  "ポスター",
  "SNS広告",
  "バナー",
  "キービジュアル",
  "LP用ビジュアル",
  "コンセプトアート",
];

export default function Contact() {
  return (
    <section id="contact" className="retro-section relative overflow-hidden py-20 md:py-32">
      <div className="mist-band top-[-8%]" />

      <div className="section-shell relative z-10">
        <div className="contact-console reveal-on-scroll mx-auto max-w-5xl p-6 text-center md:p-12">
          <div className="relative z-10">
            <h2 className="mb-8 font-display text-5xl font-bold leading-none text-white md:text-7xl">
              世界観の相談をする。
            </h2>

            <div className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-mist-gray md:text-lg">
              <p>
                AIアートを活用したビジュアル制作、広告・ポスター・SNSクリエイティブ・キービジュアル制作のご相談を受け付けています。
              </p>
              <p className="text-white">
                「頭の中にあるイメージを形にしたい」<br />
                「サービスやブランドの世界観をビジュアル化したい」<br />
                「SNSで目を引く画像を作りたい」
              </p>
              <p>そんなときは、お気軽にご相談ください。</p>
            </div>

            <div className="my-10 flex flex-wrap justify-center gap-2">
              {offers.map((offer) => (
                <span
                  key={offer}
                  className="neon-chip"
                >
                  {offer}
                </span>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="mailto:contact@shota-world.jp"
                className="cta-link cta-link-primary focus-ring w-full border border-white/[0.35] bg-white shadow-[0_0_32px_rgba(155,231,245,0.2)] hover:border-synth-cyan hover:bg-synth-cyan sm:w-auto"
              >
                <Mail size={18} aria-hidden="true" />
                <span className="ml-2">メールで相談する</span>
              </Link>

              <Link
                href="https://www.instagram.com/niwano_creator/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-link focus-ring w-full border border-synth-pink/35 bg-white/[0.06] text-white hover:border-synth-pink/70 hover:bg-synth-pink/[0.1] sm:w-auto"
              >
                <Instagram size={18} aria-hidden="true" />
                <span className="ml-2">Instagramを見る</span>
              </Link>

              <Link
                href="https://x.com/Niwano_creator"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-link focus-ring w-full border border-synth-cyan/35 bg-white/[0.06] text-white hover:border-synth-cyan/70 hover:bg-synth-cyan/[0.1] sm:w-auto"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                <span className="ml-2">Xを見る</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
