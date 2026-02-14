'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function YogaFAQSection() {
    const [openIndex, setOpenIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const faqs = [
        {
            question: "What is meditation, and how can it benefit me?",
            answer: "Meditation is a practice that connects you with your inner self, helping to reduce stress, improve focus, and bring a deep sense of peace and balance to your daily life."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-8 md:py-12 px-4 bg-[#F7F8ED]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Left Column - Content */}
                    <div>
                        {/* Header */}
                        <div className="mb-4 md:mb-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex items-center gap-2 mb-2"
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
                                className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A2E05] leading-tight mb-4"
                            >
                                Answers to common<br />
                                meditation<br />
                                questions
                            </motion.h2>
                        </div>

                        {/* CTA Card with Image */}

                    </div>
                    {/* Right Column - FAQ Accordion */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="bg-white rounded-3xl p-6 relative overflow-hidden min-h-[200px] shadow-xl"
                        >
                            {/* Rotating Flower on Right */}
                            <div className="hidden sm:block absolute right-[-150px] top-1/2 -translate-y-1/2 w-[250px] h-[250px] opacity-100">
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
                            <div className="hidden sm:block absolute right-[110px] top-1/2 -translate-y-1/2 w-[160px] h-[220px] z-10">
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
                                <h3 className="text-xl md:text-2xl font-serif text-[#1A2E05] mb-4 leading-snug">
                                    Searching for<br className="hidden md:block" />
                                    <span className="md:hidden">inner peace? </span>
                                    <span className="hidden md:inline">inner peace?<br /></span>
                                    Start your journey!
                                </h3>
                                <Link href="/faq">
                                    <button className="bg-[#10551F] hover:bg-green-500 text-white font-medium px-5 py-2.5 rounded-full flex items-center gap-2 transition-colors text-sm">
                                        View all questions
                                        <span className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs ">
                                            &gt;
                                        </span>
                                    </button>
                                </Link>
                            </div>

                            {/* Mobile Only - Decorative Element */}
                            <div className="sm:hidden absolute bottom-[-20px] right-[-20px] w-24 h-24 opacity-10">
                                <Image
                                    src="/images/flower.png"
                                    alt=""
                                    fill
                                    className="object-contain animate-[spin_10s_linear_infinite]"
                                />
                            </div>
                        </motion.div>
                    </div>
                    <div className="lg:col-span-2 w-full h-full">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.3 + index * 0.1,
                                    ease: "easeOut",
                                }}
                                className={`rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index
                                    ? "border-[#1A2E05] shadow-md"
                                    : "border-transparent shadow-sm"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                >
                                    <h3
                                        className={`text-lg md:text-xl font-medium pr-8 font-serif ${openIndex === index ? "text-[#1A2E05]" : "text-gray-800"
                                            }`}
                                    >
                                        {faq.question}
                                    </h3>

                                    <span
                                        className={`text-2xl font-light flex-shrink-0 ${openIndex === index ? "text-[#1A2E05]" : "text-gray-400"
                                            }`}
                                    >
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openIndex === index
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-6">
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