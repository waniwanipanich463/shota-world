import Image from "next/image";

const projects = [
    { title: "GRAPHIC", category: "ARTWORK", image: "/assets/hero-bg.png" }, // Placeholder
    { title: "WEB", category: "DEVELOPMENT", image: "/assets/hero-bg.png" }, // Placeholder
    { title: "PHOTO", category: "PHOTOGRAPHY", image: "/assets/hero-bg.png" }, // Placeholder
    { title: "MOVIE", category: "VIDEOGRAPHY", image: "/assets/hero-bg.png" }, // Placeholder
];

export default function Works() {
    return (
        <section className="min-h-screen py-20 px-4 bg-black">
            <h2 className="text-4xl md:text-8xl font-display font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-800">
                WORKS
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-1">
                {projects.map((project, index) => (
                    <div key={index} className="group relative aspect-square overflow-hidden bg-neutral-900 cursor-pointer border border-neutral-900">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                        />

                        <div className="absolute inset-0 bg-black/80 group-hover:bg-black/40 transition-colors duration-500 flex flex-col items-center justify-center">
                            <h3 className="text-3xl font-display font-bold text-white tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                {project.title}
                            </h3>
                            <p className="text-[var(--neon-lime)] text-sm tracking-widest mt-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                                {project.category}
                            </p>

                            <button className="mt-8 px-6 py-2 border border-white text-white text-sm tracking-widest hover:bg-white hover:text-black transition-colors translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 delay-300">
                                VIEW PROJECT
                            </button>
                        </div>
                    </div>
                ))}
                {/* Fillers for 3-col grid if needed, or layout adjustment */}
            </div>
        </section>
    );
}
