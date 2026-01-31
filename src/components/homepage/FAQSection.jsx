'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function YogaFAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is meditation, and how can it benefit me?",
            answer: "Meditation is a practice that connects you with your inner self, helping to reduce stress, improve focus, and bring a deep sense of peace and balance to your daily life."
        },
        {
            question: "Do I need prior experience to start?",
            answer: "No, you do not need any prior experience. This practice is designed to be simple and effortless, accessible to everyone regardless of their background or previous knowledge."
        },
        {
            question: "How is this different from other techniques?",
            answer: "Unlike techniques that rely on concentration or mental effort, this approach uses your own inner energy to naturally and spontaneously bring you into a state of thoughtless awareness and deep peace."
        },
        {
            question: "What types of sessions do you offer?",
            answer: "We provide a flexible learning journey with audio podcast guides, video sessions, and comprehensive written materials, allowing you to explore the practice in the format that works best for you."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-16 md:py-24 px-4 bg-[#F7F8ED]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Content */}
                    <div>
                        {/* Header */}
                        <div className="mb-8 md:mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex items-center gap-2 mb-4"
                            >
                                <div className="relative w-5 h-5">
                                    <Image
                                        src="/images/icon-leaf.svg"
                                        alt=""
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-sm font-semibold text-[#4A6741] uppercase tracking-wide font-sans">
                                    FAQ
                                </p>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A2E05] leading-tight mb-8"
                            >
                                Answers to common<br />
                                meditation<br />
                                questions
                            </motion.h2>
                        </div>

                        {/* CTA Card with Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="bg-white rounded-3xl p-8 md:p-10 relative overflow-hidden min-h-[300px] shadow-xl"
                        >
                            {/* Rotating Flower on Right */}
                            <div className="hidden sm:block absolute right-[-150px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-100">
                                <div className="relative w-full h-full animate-spin-slow">
                                    <Image
                                        src="/images/flower-green.png"
                                        alt=""
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Static Girl Image */}
                            <div className="hidden sm:block absolute right-[110px] top-1/2 -translate-y-1/2 w-[200px] h-[260px] z-10">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/yoga-girl.png"
                                        alt="Meditation Pose"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="relative z-10 sm:pr-[240px]">
                                <h3 className="text-2xl md:text-3xl font-serif text-[#1A2E05] mb-6 leading-snug">
                                    Searching for<br className="hidden md:block" />
                                    <span className="md:hidden">inner peace? </span>
                                    <span className="hidden md:inline">inner peace?<br /></span>
                                    Start your journey!
                                </h3>
                                <Link href="/faq">
                                    <button className="bg-[#10551F] hover:bg-[#C7DC49] text-white font-medium px-6 py-3 rounded-full flex items-center gap-3 transition-colors text-base">
                                        View all questions
                                        <span className="bg-white text-black w-7 h-7 rounded-full flex items-center justify-center text-sm ">
                                            &gt;
                                        </span>
                                    </button>
                                </Link>
                            </div>

                            {/* Mobile Only - Decorative Element */}
                            <div className="sm:hidden absolute bottom-[-20px] right-[-20px] w-32 h-32 opacity-10">
                                <Image
                                    src="/images/flower.png"
                                    alt=""
                                    fill
                                    className="object-contain animate-[spin_10s_linear_infinite]"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-[#1A2E05] shadow-md' : 'border-transparent shadow-sm'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <h3 className={`text-lg md:text-xl font-medium pr-8 font-serif ${openIndex === index ? 'text-[#1A2E05]' : 'text-gray-800'}`}>
                                        {faq.question}
                                    </h3>
                                    <span className={`text-2xl font-light flex-shrink-0 ${openIndex === index ? 'text-[#1A2E05]' : 'text-gray-400'}`}>
                                        {openIndex === index ? '−' : '+'}
                                    </span>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-6 pt-0">
                                            <p className="text-gray-600 leading-relaxed font-sans">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
          transform-origin: center center;
        }
      `}</style>
        </section>
    );
}