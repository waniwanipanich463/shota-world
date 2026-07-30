import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜SHOTA WORLD",
  description: "SHOTA WORLDの個人情報保護方針です。",
  alternates: {
    canonical: "https://www.shota-world.jp/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const sections = [
  {
    title: "個人情報の取得と利用目的",
    body: "当サイトでは、お問い合わせへの返信、制作依頼に関する連絡、サービス向上のための匿名統計分析を目的として、必要な範囲で情報を取得します。",
  },
  {
    title: "第三者提供について",
    body: "取得した個人情報は、本人の同意を得ることなく、または法令に基づく場合を除き、第三者へ開示・提供することはありません。",
  },
  {
    title: "サードパーティによる情報収集",
    body: "お問い合わせフォームの送信にはFormSubmitを利用しています。フォームに入力された情報は、お問い合わせ内容を指定のメールアドレスへ転送するため、同サービスを経由して処理されます。",
  },
  {
    title: "Cookieについて",
    body: "当サイトではユーザー体験の最適化のためにCookieを使用する場合がありますが、個人を特定する情報を収集するものではありません。",
  },
  {
    title: "免責事項",
    body: "当サイトに掲載する情報の正確性については万全を期していますが、利用者が当サイトの情報を用いて行う一切の行為について、何ら責任を負うものではありません。",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 text-foreground">
      <div className="section-shell">
        <Link
          href="/"
          className="focus-ring mb-12 inline-flex items-center gap-3 rounded-full border border-white/[0.15] bg-white/[0.05] px-4 py-2 text-sm text-white/[0.78] transition-colors hover:border-synth-cyan/50 hover:text-synth-cyan"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Homeへ戻る
        </Link>

        <div className="glass-panel rounded-lg p-6 md:p-10">
          <p className="section-kicker mb-4">PRIVACY POLICY</p>
          <h1 className="mb-8 font-display text-4xl font-bold text-white md:text-6xl">
            個人情報保護方針
          </h1>

          <p className="mb-12 border-l-2 border-synth-cyan pl-5 text-base leading-8 text-mist-gray md:text-lg">
            SHOTA WORLD（運営：Shota Niwano）は、提供するサービスにおける訪問者の個人情報の保護に最大限の注意を払い、適正な管理に努めます。
          </p>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <section key={section.title} className="border-t border-white/10 pt-7">
                <p className="mb-2 font-display text-sm font-bold text-synth-cyan">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mb-3 font-display text-2xl font-bold text-white">
                  {section.title}
                </h2>
                <p className="text-sm leading-7 text-mist-gray md:text-base">{section.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-8 border-t border-white/10 pt-7">
            <p className="mb-2 font-display text-sm font-bold text-synth-cyan">06</p>
            <h2 className="mb-3 font-display text-2xl font-bold text-white">お問い合わせ窓口</h2>
            <p className="text-sm leading-7 text-mist-gray md:text-base">
              個人情報に関するお問い合わせや修正のご依頼は、
              <Link href="/#contact" className="mx-1 border-b border-synth-cyan/40 text-synth-cyan hover:text-white">
                Contact
              </Link>
              よりお願いいたします。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
