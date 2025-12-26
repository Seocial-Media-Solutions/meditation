'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FutureVision() {
    return (
        <section className="py-24 px-4 bg-[#F7F8ED]">
            <div className="max-w-7xl mx-auto">
                {/* Vision Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative rounded-3xl overflow-hidden bg-[#10551f] text-white shadow-2xl"
                >
                    {/* Background Image / Overlay */}
                    <div className="absolute inset-0 opacity-100">
                        <Image
                            src="/images/vision-bg.png"
                            alt="bg pattern design"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 py-20 px-6 md:px-12 text-center space-y-12">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                className="inline-block py-1 px-3 rounded-full bg-[#C7DC49]/20 text-[#C7DC49] text-sm tracking-widest uppercase mb-6 backdrop-blur-sm border border-[#C7DC49]/30"
                            >
                                Our Vision
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                className="text-4xl md:text-5xl lg:text-6xl font-serif italic tracking-wide text-white mb-6"
                            >
                                A Path Toward a <span className="text-[#C7DC49]">Better Future</span>
                            </motion.h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto"
                        >
                            The benefits of meditation — improved wellbeing, balanced emotions, clarity, and harmony — are not just personal goals. <br className="hidden md:block" />
                            They are the seeds of a deeper collective transformation.
                        </motion.p>

                        <div className="py-8">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                className="text-xl font-light mb-8 text-gray-300"
                            >
                                Inner Change Creates Outer Change
                            </motion.h3>

                            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                                {['In Families', 'In Workplaces', 'In Communities', 'In Leadership'].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.6, delay: 0.6 + (index * 0.1), ease: "easeOut" }}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[#C7DC49]"></span>
                                        <span className="text-lg tracking-wide uppercase text-white font-medium">
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                            className="max-w-2xl mx-auto border-t border-white/10 pt-8"
                        >
                            <p className="text-lg text-gray-300 font-light italic">
                                "This is how meditation quietly contributes to a more peaceful, conscious, and sustainable world."
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}