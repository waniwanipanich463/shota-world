import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";

export default function Works() {
  return (
    <section id="works" className="works-gateway relative overflow-hidden py-20 md:py-28">
      <div className="mist-band top-0" />

      <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="reveal-on-scroll max-w-3xl">
          <h2 className="section-title mb-6">
            作品集は、<span className="text-gradient">別ページでゆっくり。</span>
          </h2>
          <p className="text-base leading-8 text-mist-gray md:text-lg">
            ホームでは世界観の流れを優先し、作品は専用アーカイブにまとめています。大きなビューアで、作品とタイトルだけをすっきり辿れます。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/works"
              className="cta-link focus-ring border border-synth-cyan/60 bg-synth-cyan/[0.14] text-white shadow-[0_0_32px_rgba(155,231,245,0.18)] hover:border-retro-amber hover:bg-synth-cyan/[0.2]"
            >
              作品集を見る
              <ArrowRight className="ml-2" size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <Link href="/works" className="works-gateway-display reveal-on-scroll focus-ring" aria-label="作品集ページへ移動">
          <div className="works-gateway-ring" aria-hidden="true" />
          <div className="works-gateway-screen">
            <Image
              src="/images/gallery/tokyo-tower.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 92vw, 48vw"
              className="object-cover"
            />
          </div>
          <div className="works-gateway-card works-gateway-card-a" aria-hidden="true">
            <Image src="/images/gallery/highrise-02.png" alt="" fill sizes="180px" className="object-cover" />
          </div>
          <div className="works-gateway-card works-gateway-card-b" aria-hidden="true">
            <Image src="/images/gallery/room-evening.png" alt="" fill sizes="180px" className="object-cover" />
          </div>
          <div className="works-gateway-badge" aria-hidden="true">
            <Images size={18} />
            <span>作品集</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
