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
                            About the Author
                        </motion.h2>

                        <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            >
                                Born in Viet Nam, from a Thai father and French mother, Wanphen L. Sreshthaputra (aka “Saraswati”) is a dual French-Thai national, brought up and educated in Switzerland and France. Trained as a journalist, she had been working for over 8 years in increasingly senior positions in national print and broadcast mass media in France and Thailand before joining an intergovernmental organization in the early 2000s.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                A practitioner of meditation since her teenage years, she has been practicing meditation on a daily basis for over 40 years, guiding meditation sessions and delivering meditation workshops for 30 years as a volunteer for non-profit organizations.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                className="font-medium text-[#1A2E05]"
                            >
                                She holds a Masters degree in Information and Communication, with a specialization in print mass media. She also holds a degree from the University of Hawaii East-West Center in Advocacy and Communication for Policy Makers, as well as diplomas in the field of knowledge management. Apart from meditation, she also holds a professional diploma in Indian classical dance (Bharat Natyam) and has been performing for live audiences in the Asia-Pacific region on a regular basis.
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