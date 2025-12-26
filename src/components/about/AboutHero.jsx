'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero1.jpg"
                    alt="Peaceful meditation setting"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Gradient Overlay for Navbar Visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/30"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl mt-20">
                <div className="space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight drop-shadow-2xl"
                    >
                        A Journey Inward. <br />
                        <span className="font-serif italic text-white/90 block mt-2 drop-shadow-lg">A Transformation Outward.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-100 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md"
                    >
                        Meditation as a lived experience — nurturing inner peace, collective harmony, and a more conscious way of living.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="pt-8"
                    >
                        <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}