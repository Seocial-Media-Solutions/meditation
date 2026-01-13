'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
    // { id: 1, src: "/images/healing-meditation.jpg", title: "Healing Meditation" },
    { id: 2, src: "/images/meditation-person.jpg", title: "Inner Peace" },
    // { id: 3, src: "/images/men-medatating.webp", title: "Collective Growth" },
    { id: 4, src: "/images/gallery/slide0.jpeg", title: "Sunset Serenity" },
    { id: 5, src: "/images/gallery/slide1.jpeg", title: "Forest Tranquility" },
    { id: 6, src: "/images/gallery/slide2.jpeg", title: "Mountain Calm" },
    { id: 7, src: "/images/gallery/slide3.jpeg", title: "Ocean Bliss" },
    { id: 8, src: "/images/gallery/slide4.jpeg", title: "Desert Stillness" },
];

export default function GallerySection() {
    // Duplicate list to ensure seamless looping
    const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages, ...galleryImages];

    return (
        <section className="py-20 bg-white text-black overflow-hidden border-t border-stone-100">
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-serif italic mb-6"
                    >
                        Moments of Stillness
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg font-light text-black/70"
                    >
                        A glimpse into the shared peace and collective growth of our community.
                    </motion.p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full flex overflow-hidden">
                {/* Animated Track */}
                <motion.div
                    className="flex gap-6 items-center px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30, // Adjust speed as needed
                        repeat: Infinity
                    }}
                >
                    {duplicatedImages.map((image, index) => (
                        <div
                            key={`${image.id}-${index}`}
                            className="relative min-w-[300px] md:min-w-[400px] h-[250px] md:h-[300px] rounded-2xl overflow-hidden shrink-0 group"
                        >
                            <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                className={`object-cover transition-transform duration-700 ${image.id !== 2 ? 'group-hover:scale-110' : ''}`}
                            />
                            {image.id !== 2 && (
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <p className="text-white font-serif italic text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {image.title}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
