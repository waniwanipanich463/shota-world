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
        <section id="contact" className="py-40 px-6 bg-background flex flex-col items-center justify-center relative overflow-hidden">
            <div className="max-w-xl w-full text-center mb-24">
                <h2 className="text-4xl md:text-7xl font-display font-medium text-foreground tracking-tight mb-4">
                    TALK TO ME.
                </h2>
                <p className="text-xs uppercase tracking-[0.4em] text-foreground/40">
                    Let's create something beautiful together.
                </p>
                <div className="w-12 h-[1px] bg-turquoise mx-auto mt-10"></div>
            </div>

            <div className="w-full max-w-6xl z-10 flex flex-col lg:flex-row gap-20 items-start">
                {/* フォーム部分 */}
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-12 w-full">
                    {/* お名前（必須） */}
                    <div className="flex flex-col gap-3">
                        <label className="text-foreground font-sans text-[10px] tracking-[0.2em] uppercase flex items-center justify-between">
                            YOUR NAME
                            <span className="text-coral font-bold">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            className="bg-transparent border-b border-foreground/10 px-0 py-4 text-foreground focus:outline-none focus:border-turquoise transition-colors placeholder:text-foreground/20 text-lg"
                            placeholder="Shota Niwano"
                        />
                    </div>

                    {/* メールアドレス（必須） */}
                    <div className="flex flex-col gap-3">
                        <label className="text-foreground font-sans text-[10px] tracking-[0.2em] uppercase flex items-center justify-between">
                            E-MAIL ADDRESS
                            <span className="text-coral font-bold">*</span>
                        </label>
                        <input
                            type="email"
                            required
                            className="bg-transparent border-b border-foreground/10 px-0 py-4 text-foreground focus:outline-none focus:border-turquoise transition-colors placeholder:text-foreground/20 text-lg"
                            placeholder="hello@example.com"
                        />
                    </div>

                    {/* ご相談内容（必須） */}
                    <div className="flex flex-col gap-3">
                        <label className="text-foreground font-sans text-[10px] tracking-[0.2em] uppercase flex items-center justify-between">
                            YOUR MESSAGE
                            <span className="text-coral font-bold">*</span>
                        </label>
                        <textarea
                            required
                            rows={4}
                            className="bg-transparent border-b border-foreground/10 px-0 py-4 text-foreground focus:outline-none focus:border-turquoise transition-colors placeholder:text-foreground/20 text-lg resize-none"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-4 px-10 py-5 bg-foreground text-background font-sans text-[11px] tracking-[0.4em] hover:bg-turquoise transition-colors duration-500 w-full md:w-fit disabled:opacity-50 uppercase"
                    >
                        {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    </button>
                </form>

                {/* SNSリンク部分 */}
                <div className="w-full lg:w-1/3 flex flex-col gap-16 lg:pl-20 mt-20 lg:mt-0">
                    <div>
                        <h3 className="text-xl font-display font-medium text-foreground tracking-widest mb-8 uppercase">
                            Connect.
                        </h3>
                        <div className="space-y-10">
                            <a
                                href="https://x.com/Niwano_creator"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-6"
                            >
                                <div className="w-14 h-14 border border-foreground/10 flex items-center justify-center group-hover:border-turquoise group-hover:text-turquoise transition-all bg-white shadow-sm">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                    </svg>
                                </div>
                                <span className="text-[11px] font-sans tracking-[0.3em] text-foreground/40 group-hover:text-foreground transition-colors uppercase">Twitter</span>
                            </a>

                            <a
                                href="https://www.instagram.com/niwano_creator/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-6"
                            >
                                <div className="w-14 h-14 border border-foreground/10 flex items-center justify-center group-hover:border-turquoise group-hover:text-turquoise transition-all bg-white shadow-sm">
                                    <Instagram size={18} />
                                </div>
                                <span className="text-[11px] font-sans tracking-[0.3em] text-foreground/40 group-hover:text-foreground transition-colors uppercase">Instagram</span>
                            </a>
                        </div>
                    </div>

                    <div className="pt-10">
                         <Image
                            src="/assets/logo-sub.png"
                            alt="SHOTA WORLD"
                            width={160}
                            height={40}
                            className="object-contain opacity-20 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
