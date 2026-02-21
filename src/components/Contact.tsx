"use client";

import { Instagram } from "lucide-react";
import Image from "next/image";

export default function Contact() {
    return (
        <section className="py-32 px-4 bg-black flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-black opacity-50"></div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-20 tracking-widest z-10">
                CONNECT WITH ME
            </h2>

            <div className="flex flex-col md:flex-row gap-12 md:gap-32 z-10">
                <a
                    href="https://x.com/Niwano_creator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center gap-4 transition-transform hover:scale-110"
                >
                    <div className="p-8 border border-white/20 rounded-full group-hover:border-[var(--neon-lime)] group-hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all duration-300 bg-neutral-900 group-hover:bg-black">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-white group-hover:text-[var(--neon-lime)] transition-colors"
                        >
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                    </div>
                    <span className="text-sm font-sans tracking-widest text-neutral-500 group-hover:text-white transition-colors">X (Twitter)</span>
                </a>

                <a
                    href="https://www.instagram.com/niwano_creator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center gap-4 transition-transform hover:scale-110"
                >
                    <div className="p-8 border border-white/20 rounded-full group-hover:border-[var(--neon-lime)] group-hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all duration-300 bg-neutral-900 group-hover:bg-black">
                        <Instagram size={48} className="text-white group-hover:text-[var(--neon-lime)] transition-colors" />
                    </div>
                    <span className="text-sm font-sans tracking-widest text-neutral-500 group-hover:text-white transition-colors">Instagram</span>
                </a>
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
