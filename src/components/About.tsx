import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 relative bg-background">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                
                {/* Visual Content (Left for a change in rhythm) */}
                <div className="relative aspect-[4/5] photo-frame rotate-[-2deg] group">
                    <Image
                        src="/assets/portrait.jpg"
                        alt="SHOTA NIWANO"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-coral/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Text Content */}
                <div className="space-y-10">
                    <div className="relative inline-block">
                        <h2 className="text-4xl md:text-7xl font-display font-medium text-lush-green mb-2">
                            ABOUT.
                        </h2>
                        <div className="w-12 h-[2px] bg-turquoise"></div>
                    </div>

                    <div className="space-y-8 text-foreground/80 leading-relaxed font-sans text-lg md:text-xl">
                        <p>
                            東京都生まれ、千葉県市川市育ち。<br />
                            営業職・介護職を経て、<br />
                            <span className="text-foreground font-semibold">「伝える」から「魅せる」へ。</span>
                        </p>
                        <p>
                            光と影、そして海の自由さをデザインに落とし込み、<br />
                            見る人の心に「余白」を届ける。
                        </p>
                        <p>
                            グラフィック、WEB、そしてGO PRO HERO13による映像制作。<br />
                            リラックスしたラグジュアリーを、ここに。
                        </p>
                        <p className="text-3xl font-display italic text-coral mt-10">
                            Relaxed Luxury.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
