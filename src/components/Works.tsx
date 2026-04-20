"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, FreeMode, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const projects = [
    { 
        title: "Flyer Design / Promotional Design", 
        category: "Flyer Design", 
        image: "https://images.unsplash.com/photo-1579546678181-7f9630324701?auto=format&fit=crop&q=80&w=1200",
        description: "集客とブランド認知を最大化するチラシ・販促物のデザイン。"
    }, 
    { 
        title: "SNS Ads / Web Visuals", 
        category: "SNS Ads", 
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
        description: "クリック率とエンゲージメントを高めるSNS・ウェブ広告の制作。"
    },
    { 
        title: "Reel Ads / Short Video Creative", 
        category: "Reel Ads", 
        image: "https://images.unsplash.com/photo-1492691523567-6170c2298b4e?auto=format&fit=crop&q=80&w=1200",
        description: "リール広告やショート動画による、心に届くストーリーテリング。"
    },
    { 
        title: "Campaign Visual Planning", 
        category: "Creative", 
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1200",
        description: "キャンペーンを成功に導くための包括的なビジュアル設計。"
    },
];

export default function Works() {
    return (
        <section id="works" className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-sm font-bold tracking-[0.2em] text-sky-blue uppercase mb-4">
                            Portfolio
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-display font-semibold text-foreground leading-tight mb-6">
                            Selected Works.
                        </h3>
                        <p className="text-foreground/60 leading-relaxed font-sans max-w-xl">
                            チラシ、広告クリエイティブ、SNS用ビジュアルなど、課題や目的に合わせて制作した事例です。<br className="hidden md:block" />
                            伝わりやすさ、印象の強さ、行動につながる表現を大切にしています。
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="custom-swiper-button-prev w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:bg-foreground/5 hover:text-foreground transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button className="custom-swiper-button-next w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:bg-foreground/5 hover:text-foreground transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay, FreeMode, Mousewheel]}
                    spaceBetween={24}
                    slidesPerView={"auto"}
                    centeredSlides={false}
                    grabCursor={true}
                    freeMode={{
                        enabled: true,
                        momentumRatio: 0.5,
                        momentumVelocityRatio: 0.5,
                    }}
                    mousewheel={{
                        forceToAxis: true,
                    }}
                    navigation={{
                        nextEl: '.custom-swiper-button-next',
                        prevEl: '.custom-swiper-button-prev',
                    }}
                    pagination={{
                        el: '.custom-swiper-pagination',
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            spaceBetween: 32,
                        },
                        1024: {
                            spaceBetween: 40,
                        }
                    }}
                    className="!px-6 md:!px-[10vw] !pb-20 !overflow-visible"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide
                            key={index}
                            className="!w-[300px] sm:!w-[400px] md:!w-[500px] group"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-neutral-100 transition-transform duration-500 hover:scale-[1.02] shadow-sm">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="absolute top-8 left-8 right-8 z-10">
                                    <p className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase mb-2">
                                        {project.category}
                                    </p>
                                    <h4 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight leading-tight">
                                        {project.title}
                                    </h4>
                                </div>

                                <div className="absolute bottom-8 left-8 right-8 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="text-white/80 text-sm mb-6 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <button className="px-6 py-2 rounded-full bg-white text-black text-xs font-bold tracking-widest hover:bg-sky-blue hover:text-white transition-colors">
                                        VIEW DETAILS
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                <div className="custom-swiper-pagination flex items-center justify-center gap-3 mt-4"></div>
            </div>

            <style jsx global>{`
                .custom-swiper-pagination .swiper-pagination-bullet {
                    background: var(--foreground);
                    opacity: 0.1;
                    width: 8px;
                    height: 8px;
                    margin: 0 !important;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                }
                .custom-swiper-pagination .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: var(--sky-blue);
                    width: 24px;
                    border-radius: 4px;
                }
            `}</style>
        </section>
    );
}

