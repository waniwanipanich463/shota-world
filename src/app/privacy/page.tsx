"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { gsap } from "gsap";

export default function PrivacyPolicy() {
    const mainRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();
        
        tl.fromTo(
            mainRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: "power2.out" }
        ).fromTo(
            contentRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
            "-=1.0"
        );
    }, []);

    return (
        <main ref={mainRef} className="min-h-screen bg-background text-foreground pt-40 pb-32 px-6 md:px-12 selection:bg-turquoise/20">
            <div ref={contentRef} className="max-w-4xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-3 text-foreground/40 hover:text-turquoise transition-all mb-20 font-sans tracking-[0.4em] text-[10px] md:text-xs group"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    BACK TO HOME
                </Link>

                <div className="mb-24">
                    <h1 className="text-4xl md:text-7xl font-display font-medium mb-6 tracking-tight">
                        PRIVACY POLICY
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-turquoise"></div>
                        <span className="text-xs uppercase tracking-[0.5em] text-foreground/40 font-sans">
                            個人情報保護方針
                        </span>
                    </div>
                </div>

                <div className="space-y-20 font-sans leading-[1.8] text-foreground/70 text-sm md:text-base">
                    <p className="text-xl md:text-2xl font-display font-medium text-foreground leading-relaxed italic border-l-2 border-turquoise pl-8 py-2">
                        「SHOTA WORLD では、あなたの大切な情報を適切に扱い、安心してお問い合わせいただける環境を提供することを大切にしています。」
                    </p>

                    <div className="space-y-16">
                        <p className="tracking-wide">
                            SHOTA WORLD（運営：Shota Niwano）は、提供するサービスにおける訪問者の個人情報の保護に最大限の注意を払い、適正な管理に努めます。
                        </p>

                        <section className="space-y-8">
                            <h2 className="text-xl font-display font-medium text-foreground tracking-widest flex items-baseline gap-4">
                                <span className="text-turquoise text-sm font-sans tracking-normal">01.</span>
                                個人情報の取得と利用目的
                            </h2>
                            <div className="pl-10 space-y-6">
                                <p>当サイトでは、お問い合わせフォームを通じて以下の情報を取得・利用します：</p>
                                <ul className="space-y-4 text-foreground/60 tracking-wide list-none">
                                    <li className="flex items-center gap-3"><div className="w-1 h-1 bg-turquoise rounded-full"></div>お名前</li>
                                    <li className="flex items-center gap-3"><div className="w-1 h-1 bg-turquoise rounded-full"></div>メールアドレス</li>
                                    <li className="flex items-center gap-3"><div className="w-1 h-1 bg-turquoise rounded-full"></div>お問い合わせ内容</li>
                                </ul>
                                <p>取得した情報は、以下の目的に利用し、それ以外の目的で使用することはありません：</p>
                                <ul className="space-y-4 text-foreground/60 tracking-wide list-none">
                                    <li className="flex items-center gap-3"><div className="w-1 h-1 bg-lush-green/30 rounded-full"></div>お問い合わせへの返信・対応</li>
                                    <li className="flex items-center gap-3"><div className="w-1 h-1 bg-lush-green/30 rounded-full"></div>制作依頼に関する連絡の遂行</li>
                                    <li className="flex items-center gap-3"><div className="w-1 h-1 bg-lush-green/30 rounded-full"></div>サービス向上のための匿名統計分析</li>
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-xl font-display font-medium text-foreground tracking-widest flex items-baseline gap-4">
                                <span className="text-turquoise text-sm font-sans tracking-normal">02.</span>
                                第三者提供について
                            </h2>
                            <p className="pl-10 tracking-wide">
                                取得した個人情報は、本人の同意を得ることなく、または法令に基づく場合を除き、第三者へ開示・提供することはありません。
                            </p>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-xl font-display font-medium text-foreground tracking-widest flex items-baseline gap-4">
                                <span className="text-turquoise text-sm font-sans tracking-normal">03.</span>
                                サードパーティによる情報収集
                            </h2>
                            <div className="pl-10 space-y-6">
                                <p>
                                    当サイトは、ホスティングサービスやアクセス解析ツール等を利用する倍があります。これらのツールにより自動的に収集される情報（IPアドレス、ブラウザ情報等）は、匿名形式で処理され、個人を特定するものではありません。
                                </p>
                                <div className="bg-foreground/5 p-8 border border-foreground/5 rounded-sm">
                                    <p className="text-xs md:text-sm text-foreground/40 italic">
                                        ※ 現在、ユーザー体験の向上のためにアクセス解析ツール等を利用する場合は、適切な匿名化とプライバシー保護措置のもとデータを収集しています。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-xl font-display font-medium text-foreground tracking-widest flex items-baseline gap-4">
                                <span className="text-turquoise text-sm font-sans tracking-normal">04.</span>
                                Cookieについて
                            </h2>
                            <p className="pl-10 tracking-wide">
                                当サイトではユーザー体験の最適化のためにCookieを使用する場合がありますが、個人を特定する情報を収集するものではありません。ブラウザの設定によりCookieを無効化することが可能です。
                            </p>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-xl font-display font-medium text-foreground tracking-widest flex items-baseline gap-4">
                                <span className="text-turquoise text-sm font-sans tracking-normal">05.</span>
                                免責事項
                            </h2>
                            <p className="pl-10 tracking-wide">
                                当サイトに掲載する情報の正確性については万全を期していますが、利用者が当サイトの情報を用いて行う一切の行為について、何ら責任を負うものではありません。
                            </p>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-xl font-display font-medium text-foreground tracking-widest flex items-baseline gap-4">
                                <span className="text-turquoise text-sm font-sans tracking-normal">06.</span>
                                お問い合わせ窓口
                            </h2>
                            <p className="pl-10 tracking-wide">
                                個人情報に関するお問い合わせや修正のご依頼は、
                                <Link href="/#contact" className="text-turquoise hover:text-foreground transition-colors border-b border-turquoise/30 mx-1 pb-0.5">
                                    Contactフォーム
                                </Link>
                                よりお願いいたします。
                            </p>
                        </section>
                    </div>

                    <div className="pt-32 border-t border-foreground/5 text-center">
                        <p className="text-[10px] tracking-[0.5em] text-foreground/20 uppercase">
                            © 2026 SHOTA WORLD
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
