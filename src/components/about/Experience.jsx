'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <section className="py-32 px-4 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-20 left-10 w-32 h-32 opacity-20 pointer-events-none">
                <Image src="/images/leaf.svg" alt="" fill className="object-contain" />
            </div>
            <div className="absolute bottom-20 right-10 w-40 h-40 opacity-10 pointer-events-none">
                <Image src="/images/flower.svg" alt="" fill className="object-contain animate-spin-slow" />
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl lg:text-5xl font-serif text-[#1A2E05] mb-6"
                    >
                        Experience Over Belief
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-2xl text-[#1A2E05] font-medium italic"
                    >
                        No Theory. No Dogma. Just Experience.
                    </motion.h3>
                </div>

                <div className="text-xl text-gray-600 leading-loose font-light space-y-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        This work is not rooted in academic ideology or philosophical debate. It is grounded in long-term personal practice, first-hand observation, and shared experiences with thousands of practitioners worldwide.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="text-2xl text-[#1A2E05] font-medium"
                    >
                        Meditation is presented here not as something to believe in, but something to experience directly — allowing each individual to discover its value in their own way.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}