import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | SHOTA WORLD",
    description: "SHOTA WORLD（運営：Shota Niwano）の個人情報保護方針",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-[var(--neon-lime)] transition-colors mb-12 font-sans tracking-widest text-sm"
                >
                    <ArrowLeft size={16} />
                    BACK TO HOME
                </Link>

                <h1 className="text-3xl md:text-5xl font-display font-bold mb-12 tracking-widest border-l-4 border-[var(--neon-lime)] pl-6">
                    PRIVACY POLICY
                    <span className="block text-sm md:text-base font-sans font-normal text-neutral-400 mt-2 tracking-normal">
                        個人情報保護方針
                    </span>
                </h1>

                <div className="space-y-12 font-sans leading-relaxed text-neutral-300">
                    <p className="text-lg md:text-xl font-bold text-white border-b border-white/20 pb-6">
                        「SHOTA WORLD では、あなたの大切な情報を適切に扱い、安心してお問い合わせいただける環境を提供することを大切にしています。」
                    </p>

                    <p>
                        SHOTA WORLD（運営：Shota Niwano）は、訪問者の個人情報の保護に努めます。
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-4">
                            <span className="text-[var(--neon-lime)] font-display text-2xl">01</span>
                            個人情報の取得と利用目的
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>当サイトでは、お問い合わせフォームを通じて以下の情報を取得・利用します：</p>
                            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
                                <li>お名前</li>
                                <li>メールアドレス</li>
                                <li>お問い合わせ内容</li>
                            </ul>
                            <p>取得した情報は、以下の目的に利用します：</p>
                            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
                                <li>お問い合わせへの返信</li>
                                <li>制作依頼に関する連絡</li>
                                <li>サービス向上のための分析</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-4">
                            <span className="text-[var(--neon-lime)] font-display text-2xl">02</span>
                            第三者提供について
                        </h2>
                        <p className="pl-10">
                            取得した個人情報は、法令に基づく場合を除き、第三者へ提供することはありません。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-4">
                            <span className="text-[var(--neon-lime)] font-display text-2xl">03</span>
                            サードパーティによる情報収集について
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                当サイトは、ホスティングサービスやアクセス解析ツール等を利用する場合があります。<br />
                                これらのツールにより自動的に収集される情報（例：IPアドレス、閲覧履歴など）は、匿名形式で収集され、個人を特定するものではありません。
                            </p>
                            <p className="text-sm text-neutral-500 bg-neutral-900/50 p-4 rounded border border-white/5">
                                ※ 現在、ユーザー体験の向上のためにアクセス解析ツール等を利用する場合は、適切な匿名化のもとデータを収集しています。
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-4">
                            <span className="text-[var(--neon-lime)] font-display text-2xl">04</span>
                            Cookieについて
                        </h2>
                        <p className="pl-10">
                            当サイトではCookieを使用する場合がありますが、個人を特定する情報を収集するものではありません。<br />
                            ブラウザの設定によりCookieを無効にすることができます。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-4">
                            <span className="text-[var(--neon-lime)] font-display text-2xl">05</span>
                            免責事項
                        </h2>
                        <p className="pl-10">
                            当サイトに掲載する情報の正確性には細心の注意を払っていますが、内容の完全性や安全性を保証するものではありません。
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-4">
                            <span className="text-[var(--neon-lime)] font-display text-2xl">06</span>
                            お問い合わせ窓口
                        </h2>
                        <p className="pl-10">
                            個人情報に関するお問い合わせは、
                            <Link href="/#contact" className="text-[var(--neon-lime)] hover:text-white transition-colors underline underline-offset-4 mx-1">
                                Contactページ
                            </Link>
                            よりお願いいたします。
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
