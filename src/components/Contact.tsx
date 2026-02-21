"use client";

import { Instagram } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // 仮の送信処理
        setTimeout(() => {
            alert("お問い合わせを受け付けました。");
            setIsSubmitting(false);
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <section id="contact" className="py-32 px-4 bg-black flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-black opacity-50"></div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-20 tracking-widest z-10 text-center">
                CONTACT
            </h2>

            <div className="w-full max-w-6xl z-10 flex flex-col lg:flex-row gap-20 items-stretch">
                {/* フォーム部分 */}
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-8">
                    {/* お名前（必須） */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-sans text-sm tracking-widest flex items-center gap-3">
                            <span className="text-[10px] px-2 py-0.5 bg-[var(--neon-lime)] text-black font-bold">必須</span>
                            お名前
                        </label>
                        <input
                            type="text"
                            required
                            className="bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[var(--neon-lime)] transition-colors placeholder:text-neutral-600"
                            placeholder="山田 太郎"
                        />
                    </div>

                    {/* メールアドレス（必須） */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-sans text-sm tracking-widest flex items-center gap-3">
                            <span className="text-[10px] px-2 py-0.5 bg-[var(--neon-lime)] text-black font-bold">必須</span>
                            メールアドレス
                        </label>
                        <input
                            type="email"
                            required
                            className="bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[var(--neon-lime)] transition-colors placeholder:text-neutral-600"
                            placeholder="your@email.com"
                        />
                    </div>

                    {/* 会社 / ブランド名（任意） */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-sans text-sm tracking-widest flex items-center gap-3">
                            <span className="text-[10px] px-2 py-0.5 border border-white/30 text-neutral-400 font-bold">任意</span>
                            会社 / ブランド名
                        </label>
                        <input
                            type="text"
                            className="bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[var(--neon-lime)] transition-colors placeholder:text-neutral-600"
                            placeholder="株式会社〇〇"
                        />
                    </div>

                    {/* ご相談内容（必須） */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-sans text-sm tracking-widest flex items-center gap-3">
                            <span className="text-[10px] px-2 py-0.5 bg-[var(--neon-lime)] text-black font-bold">必須</span>
                            ご相談内容
                        </label>
                        <textarea
                            required
                            rows={4}
                            className="bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[var(--neon-lime)] transition-colors placeholder:text-neutral-600 resize-none"
                            placeholder="プロジェクトの概要やご相談内容をご記入ください..."
                        ></textarea>
                    </div>

                    {/* 希望納期（任意） */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-sans text-sm tracking-widest flex items-center gap-3">
                            <span className="text-[10px] px-2 py-0.5 border border-white/30 text-neutral-400 font-bold">任意</span>
                            希望納期
                        </label>
                        <input
                            type="text"
                            className="bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[var(--neon-lime)] transition-colors placeholder:text-neutral-600"
                            placeholder="例：2026年12月末"
                        />
                    </div>

                    {/* 参考サイト / イメージ（任意） */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white font-sans text-sm tracking-widest flex items-center gap-3">
                            <span className="text-[10px] px-2 py-0.5 border border-white/30 text-neutral-400 font-bold">任意</span>
                            参考サイト / イメージ
                        </label>
                        <input
                            type="text"
                            className="bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[var(--neon-lime)] transition-colors placeholder:text-neutral-600"
                            placeholder="https://example.com"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-8 px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-[var(--neon-lime)] hover:text-black transition-colors duration-300 w-full disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                        <span className="relative z-10">{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                    </button>
                </form>

                {/* SNSリンク部分 */}
                <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start justify-center gap-12 lg:border-l lg:border-white/10 lg:pl-20 mt-20 lg:mt-0">
                    <h3 className="text-2xl font-display font-bold text-white tracking-widest mb-4">
                        SOCIAL
                    </h3>
                    <a
                        href="https://x.com/Niwano_creator"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-6 transition-transform hover:-translate-y-1 w-full"
                    >
                        <div className="p-6 border border-white/20 rounded-full group-hover:border-[var(--neon-lime)] group-hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all duration-300 bg-neutral-900 group-hover:bg-black shrink-0">
                            {/* SVG for X */}
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-white group-hover:text-[var(--neon-lime)] transition-colors"
                            >
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </div>
                        <span className="text-lg font-sans tracking-widest text-neutral-400 group-hover:text-white transition-colors">X (Twitter)</span>
                    </a>

                    <a
                        href="https://www.instagram.com/niwano_creator/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center gap-6 transition-transform hover:-translate-y-1 w-full"
                    >
                        <div className="p-6 border border-white/20 rounded-full group-hover:border-[var(--neon-lime)] group-hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all duration-300 bg-neutral-900 group-hover:bg-black shrink-0">
                            <Instagram size={24} className="text-white group-hover:text-[var(--neon-lime)] transition-colors" />
                        </div>
                        <span className="text-lg font-sans tracking-widest text-neutral-400 group-hover:text-white transition-colors">Instagram</span>
                    </a>
                </div>
            </div>

            <div className="mt-32 opacity-50 hover:opacity-100 transition-opacity duration-500">
                <Image
                    src="/assets/logo-sub.png"
                    alt="SHOTA WORLD"
                    width={200}
                    height={50}
                    className="object-contain"
                />
            </div>
        </section>
    );
}
