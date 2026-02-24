"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
    { title: "GRAPHIC", category: "ARTWORK", image: "/assets/hero-bg.png" }, // Placeholder
    { title: "WEB", category: "DEVELOPMENT", image: "/assets/hero-bg.png" }, // Placeholder
    { title: "PHOTO", category: "PHOTOGRAPHY", image: "/assets/hero-bg.png" }, // Placeholder
    { title: "MOVIE", category: "VIDEOGRAPHY", image: "/assets/hero-bg.png" }, // Placeholder
];

export default function Works() {
    return (
        <section id="works" className="min-h-screen py-20 px-4 bg-black overflow-hidden relative">
            <h2 className="text-4xl md:text-8xl font-display font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800">
                WORKS
            </h2>

            <div className="w-full max-w-[1400px] mx-auto pb-10">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 300,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ el: '.custom-swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.custom-swiper-button-next',
                        prevEl: '.custom-swiper-button-prev',
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="w-full py-10"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide
                            key={index}
                            className="!w-[300px] sm:!w-[400px] md:!w-[500px] !h-[300px] sm:!h-[400px] md:!h-[500px] group relative bg-neutral-900 border border-neutral-800 select-none overflow-hidden"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 md:group-hover:scale-110 opacity-100 grayscale-0 pointer-events-none"
                            />

                            <div className="absolute inset-0 bg-black/40 md:bg-black/50 md:group-hover:bg-black/20 transition-colors duration-500 flex flex-col items-center justify-center pointer-events-none">
                                <h3 className="text-3xl font-display font-bold text-white tracking-widest translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 md:delay-100">
                                    {project.title}
                                </h3>
                                <p className="text-[#bfff00] text-sm tracking-widest mt-2 translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 md:delay-200">
                                    {project.category}
                                </p>

                                <button className="mt-8 px-6 py-2 border border-white text-white text-sm tracking-widest bg-transparent pointer-events-auto hover:bg-white hover:text-black transition-colors translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 duration-300 md:delay-300">
                                    VIEW PROJECT
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="flex justify-center items-center gap-6 mt-12 z-10 relative">
                        <button className="custom-swiper-button-prev w-12 h-12 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <div className="custom-swiper-pagination flex items-center justify-center gap-2"></div>

                        <button className="custom-swiper-button-next w-12 h-12 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </Swiper>
            </div>

            <style jsx global>{`
                .custom-swiper-pagination .swiper-pagination-bullet {
                    background: #fff;
                    opacity: 0.3;
                    width: 10px;
                    height: 10px;
                    transition: all 0.3s ease;
                    display: inline-block;
                    border-radius: 50%;
                    cursor: pointer;
                }
                .custom-swiper-pagination .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 24px;
                    border-radius: 5px;
                }
            `}</style>
        </section>
    );
}
