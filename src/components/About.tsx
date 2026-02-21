import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 relative bg-black">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 border-l-4 border-[var(--neon-lime)] pl-6">
                        ABOUT
                    </h2>

                    <div className="space-y-6 text-gray-300 leading-relaxed font-sans text-lg">
                        <p>
                            東京都生まれ、千葉県市川市育ち。<br />
                            営業職・介護職を経て、<br />
                            <span className="text-white font-bold">「伝える」から「魅せる」へ。</span>
                        </p>
                        <p>
                            映画、とくにMARVELの世界観に影響を受け、<br />
                            ストリートと海の自由さをデザインに落とし込む。
                        </p>
                        <p>
                            グラフィック、WEB、そしてGO PRO HERO13による映像制作。<br />
                            表現のフィールドは、無限大。
                        </p>
                        <p className="text-2xl font-display font-bold text-white mt-8">
                            ここが、SHOTA WORLD。
                        </p>
                    </div>
                </div>

                {/* Visual Content */}
                <div className="relative aspect-[3/4] bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800 group">
                    <Image
                        src="/assets/portrait.jpg"
                        alt="SHOTA NIWANO"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--neon-lime)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
            </div>
        </section>
    );
}
