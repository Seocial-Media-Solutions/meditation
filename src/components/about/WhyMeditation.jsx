'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WhyMeditation() {
    const points = [
        "Calming the nervous system",
        "Reducing mental noise and emotional strain",
        "Supporting healing and resilience",
        "Encouraging clarity in action and decision-making"
    ];

    return (
        <section className="py-24 px-4 bg-[#F7F8ED] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-[-50px] right-[-50px] w-80 h-80 lg:w-[450px] lg:h-[450px] opacity-15 pointer-events-none mix-blend-multiply">
                <Image src="/images/flower.png" alt="" fill className="object-contain" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-3xl lg:text-4xl font-serif text-[#1A2E05] mb-4"
                    >
                        Why Meditation Matters Today
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-xl text-[#1A2E05] font-serif italic"
                    >
                        A Response to Modern Challenges
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="text-lg text-gray-600 leading-relaxed mb-8 text-center"
                    >
                        Modern life brings unprecedented convenience — yet also stress, disconnection, and dissatisfaction. Meditation offers a natural counterbalance by:
                    </motion.p>

                    <ul className="grid sm:grid-cols-2 gap-6 mb-10">
                        {points.map((point, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.4 + (i * 0.1), ease: "easeOut" }}
                                className="flex items-center gap-4 text-gray-700 font-light text-lg"
                            >
                                <span className="w-2 h-2 rounded-full bg-[#1A2E05]"></span>
                                {point}
                            </motion.li>
                        ))}
                    </ul>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                        className="text-center pt-8 border-t border-gray-100"
                    >
                        <p className="text-lg font-medium text-[#1A2E05]">
                            More importantly, it helps individuals rediscover a sense of meaning, contentment, and connection that no external achievement alone can provide.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}