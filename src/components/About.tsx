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
                            私は、ビジュアルをデザインして表現することで、<br />
                            <span className="text-foreground font-semibold">お客様の悩みを解決したい</span>と考えています。
                        </p>
                        <p>
                            ただ見た目を整えるだけではなく、<br />
                            「伝わらない」「目に留まらない」「反応につながらない」といった課題を、<br />
                            ビジュアルの力で改善していくことを大切にしています。
                        </p>
                        <p>
                            チラシ、リール広告、SNS広告など、<br />
                            目的に合わせた表現設計を通して、<br />
                            商品の魅力やサービスの価値が届くクリエイティブを制作しています。
                        </p>
                        <p>
                            見た瞬間の印象と、その先の行動。<br />
                            その両方を意識したデザインが、<span className="text-lush-green font-semibold">SHOTA WORLDの軸</span>です。
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
