'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurStory() {
    return (
        <section className="py-20 px-4 bg-white relative overflow-hidden">
            {/* Background Flower */}
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 lg:w-[500px] lg:h-[500px] opacity-20 pointer-events-none mix-blend-multiply">
                <Image
                    src="/images/flower.png"
                    alt=""
                    fill
                    className="object-contain animate-[spin_60s_linear_infinite]"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-4xl lg:text-5xl font-serif text-[#1A2E05]"
                        >
                            From Personal Experience to a Universal Vision
                        </motion.h2>

                        <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            >
                                For over three decades, this journey has been shaped by direct experience rather than theory. What began as a personal exploration of meditation gradually unfolded into a deeper understanding of its profound impact — not only on individual wellbeing, but on relationships, communities, and society as a whole.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                Meditation revealed itself as more than a personal wellness practice. It became a practical path to inner balance, clarity, emotional stability, and a genuine sense of fulfillment — qualities increasingly needed in today's fast-paced and divided world.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                className="font-medium text-[#1A2E05]"
                            >
                                This platform exists to share that lived experience in a simple, accessible, and authentic way.
                            </motion.p>
                        </div>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-xl bg-[#F7F8ED]"
                    >
                        <Image
                            src="/images/men-medatating.webp"
                            alt="Person walking in nature"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}