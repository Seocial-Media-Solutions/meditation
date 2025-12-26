'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Philosophy() {
    return (
        <section className="py-24 px-4 bg-[#F7F8ED] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute bottom-[-80px] left-[-80px] w-64 h-64 lg:w-[500px] lg:h-[500px] opacity-20 pointer-events-none mix-blend-multiply">
                <Image src="/images/flower.png" alt="" fill className="object-contain scale-x-[-1]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl mx-auto text-center relative z-10 border-2 border-[#1A2E05]/5 p-8 lg:p-14 rounded-3xl bg-white/50 backdrop-blur-sm"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-3xl lg:text-4xl font-serif text-[#1A2E05] mb-8"
                >
                    Meditation Beyond the Self
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="w-24 h-px bg-gray-300 mx-auto mb-12"
                ></motion.div>

                <div className="space-y-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        Meditation is often seen as a personal or spiritual pursuit. While its benefits for inner peace are undeniable, its true potential goes far beyond individual wellbeing.
                    </motion.p>

                    <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        className="text-2xl lg:text-3xl font-serif italic text-[#1A2E05] leading-normal px-8 py-4 border-l-4 border-gray-300 inline-block"
                    >
                        "When individuals become balanced and aware, their actions naturally create harmony around them."
                    </motion.blockquote>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        Our vision is rooted in understanding that through meditation, awareness expands, reactions soften, and a sense of collective consciousness begins to emerge — allowing more compassionate communication, responsible leadership, and sustainable ways of living.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}