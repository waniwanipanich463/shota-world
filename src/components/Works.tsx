"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
    { title: "GRAPHIC", category: "ARTWORK", image: "https://images.unsplash.com/photo-1579546678181-7f9630324701?auto=format&fit=crop&q=80&w=800" }, 
    { title: "WEB", category: "DEVELOPMENT", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" },
    { title: "PHOTO", category: "PHOTOGRAPHY", image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800" },
    { title: "MOVIE", category: "VIDEOGRAPHY", image: "https://images.unsplash.com/photo-1492691523567-6170c2298b4e?auto=format&fit=crop&q=80&w=800" },
];

export default function Works() {
    return (
        <section id="works" className="min-h-screen py-32 px-4 bg-background overflow-hidden relative">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-8xl font-display font-medium text-foreground/10 absolute top-20 left-1/2 -translate-x-1/2 select-none tracking-[0.2em]">
                    PORTFOLIO
                </h2>
                <h3 className="text-4xl md:text-6xl font-display font-medium text-foreground relative z-10">
                    SELECTED WORKS.
                </h3>
                <div className="w-16 h-[2px] bg-sky-blue mx-auto mt-6"></div>
            </div>

            <div className="w-full pb-10 px-4 md:px-0">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={1.2}
                    spaceBetween={20}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3.5,
                            spaceBetween: 60,
                        },
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ el: '.custom-swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.custom-swiper-button-next',
                        prevEl: '.custom-swiper-button-prev',
                    }}
                    mousewheel={{
                        forceToAxis: true,
                        releaseOnEdges: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay, Mousewheel]}
                    className="w-full py-20 !overflow-visible"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide
                            key={index}
                            className="!h-auto"
                        >
                            <div className="photo-frame flex flex-col gap-4 mx-4">
                                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 md:group-hover:scale-110 pointer-events-none"
                                    />
                                </div>
                                
                                <div className="pt-2">
                                    <h4 className="text-2xl font-display font-medium text-foreground tracking-widest">
                                        {project.title}
                                    </h4>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-turquoise text-[10px] tracking-[0.2em] font-sans uppercase">
                                            {project.category}
                                        </p>
                                        <LinkBtn />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="flex justify-center items-center gap-10 mt-20 z-10 relative">
                        <button className="custom-swiper-button-prev p-2 text-foreground/40 hover:text-turquoise transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                        </button>

                        <div className="custom-swiper-pagination flex items-center justify-center gap-4"></div>

                        <button className="custom-swiper-button-next p-2 text-foreground/40 hover:text-turquoise transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </Swiper>
            </div>

            <style jsx global>{`
                .custom-swiper-pagination .swiper-pagination-bullet {
                    background: var(--foreground);
                    opacity: 0.1;
                    width: 6px;
                    height: 6px;
                    transition: all 0.4s ease;
                    display: inline-block;
                    border-radius: 50%;
                    cursor: pointer;
                }
                .custom-swiper-pagination .swiper-pagination-bullet-active {
                    opacity: 1;
                    background: var(--turquoise);
                    transform: scale(1.5);
                }
            `}</style>
        </section>
    );
}

function LinkBtn() {
    return (
        <button className="text-[10px] font-sans tracking-[0.1em] text-foreground/40 hover:text-turquoise transition-colors flex items-center gap-2 group">
            LEARN MORE
            <span className="w-4 h-[1px] bg-foreground/20 group-hover:bg-turquoise transition-colors"></span>
        </button>
    );
}
