'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ServicesHero() {
    return (
        <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/gallery/slide4.jpeg"
                    alt="Meditation and Yoga Services"
                    fill
                    priority
                    className="object-cover"
                    quality={90}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center justify-center gap-3 mb-6"
                >
                    <Sparkles className="w-8 h-8 text-[#C7DC49]" />
                    <p className="text-sm md:text-base font-light tracking-[0.3em] uppercase">
                        Our Offerings
                    </p>
                    <Sparkles className="w-8 h-8 text-[#C7DC49]" />
                </motion.div> */}

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight"
                >
                    Meditation & Yoga
                    <br />
                    <span className="text-[#C7DC49]">Services</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
                >
                    Time is our most valuable and finite resource. Yet, for over 40 years, dedicated meditation practitioners and volunteer coaches like myself have joyfully devoted countless hours to teaching and practicing meditation, even amidst demanding schedules.
                </motion.p>


            </div>
        </section>
    );
}
