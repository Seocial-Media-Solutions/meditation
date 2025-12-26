'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Practice() {
    const features = [
        {
            title: "Simple",
            desc: "No complex postures or mental exercises. Natural and effortless.",
        },
        {
            title: "Experiential",
            desc: "Based on direct verifiable experience, not just belief or theory.",
        },
        {
            title: "Effective",
            desc: "Tangible benefits for mental silence and emotional balance.",
        }
    ];

    return (
        <section className="py-24 px-4 bg-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.08] pointer-events-none mix-blend-multiply">
                <Image src="/images/vision-bg.png" alt="" fill className="object-cover" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-4xl font-serif text-[#1A2E05] mb-6"
                    >
                        The Practice We Share
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-xl text-gray-600 font-light"
                    >
                        Sahaja Yoga Meditation — Simple. Experiential. Effective.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                            className="bg-[#F7F8ED] rounded-xl p-10 border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-medium text-[#1A2E05] mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        className="text-lg text-gray-600 leading-relaxed"
                    >
                        Among the many meditation techniques available today, this approach is based on Sahaja Yoga meditation, a method known for its simplicity and tangible results.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        className="text-lg text-gray-600 leading-relaxed"
                    >
                        Rather than relying on effort, control, or belief, this meditation works through direct inner experience — leading to a state often described as <span className="font-semibold text-[#1A2E05]">thoughtless awareness</span>: a calm, clear, and alert state of consciousness.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}