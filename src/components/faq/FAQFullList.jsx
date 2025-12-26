'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

export default function YogaFAQPage() {
    const [openIndex, setOpenIndex] = useState(null);
    const bgRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!bgRef.current) return;
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20; // Move max 20px
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        bgRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    const faqs = [
        {
            question: "What is Sahaja Yoga Meditation?",
            answer: "Sahaja Yoga is a unique method of meditation based on an experience called Self Realization (Kundalini awakening) that can occur within each human being. Through this process, an inner transformation takes place by which one becomes moral, united, integrated and balanced."
        },
        {
            question: "Do I need to be in a quiet place to meditate?",
            answer: "While a quiet environment helps initially to establish your attention, once you learn the technique and connect with your inner peace, you can meditate anywhere—at home, at work, or even while traveling."
        },
        {
            question: "How long should I meditate daily?",
            answer: "We recommend meditating for about 10 to 15 minutes twice a day, in the morning and evening. Consistency is more important than specific duration to experience the full benefits."
        },
        {
            question: "Is this meditation religious?",
            answer: "No, it is a spiritual practice that is universal and can be practiced by anyone regardless of their background, religion, or lifestyle. It focuses on your personal inner experience and growth."
        },
        {
            question: "What are the benefits of practicing daily?",
            answer: "Regular practice leads to a state of thoughtless awareness, reducing stress, improving focus, and bringing a sense of deep peace and emotional balance. It enhances your physical, mental, and emotional well-being."
        },
        {
            question: "Is it suitable for beginners?",
            answer: "Absolutely. The practice is simple, natural, and easy to learn, making it perfect for beginners as well as experienced practitioners. No prior experience is required."
        },
        {
            question: "Do I need special equipment?",
            answer: "No special equipment is needed. You can meditate sitting comfortably on a chair or on the floor. The most important thing is your desire to connect with your inner self."
        },
        {
            question: "How does it differ from other meditations?",
            answer: "Unlike other forms that use visualization or concentration, Sahaja Yoga connects you with your inner energy, leading to spontaneous mental silence (thoughtless awareness) without mental effort."
        },
        {
            question: "Can children practice it?",
            answer: "Yes, children can benefit greatly. It helps them improve their concentration, reduces anxiety, builds self-esteem, and helps them develop a calm and balanced personality."
        },
        {
            question: "What if I can't stop my thoughts?",
            answer: "That is natural. With this practice, you don't fight your thoughts but witness them. Gradually, as your inner energy rises, the spaces between thoughts widen, naturally leading to a state of mental silence."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div
            className="min-h-screen bg-[linear-gradient(to_bottom,#F7F8ED_0%,#ffffff_35%)] relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Section Background Image - Top 40% */}
                <div
                    ref={bgRef}
                    className="absolute top-10 left-0 w-full h-[35%] transition-transform duration-100 ease-out will-change-transform"
                >
                    <Image
                        src="/images/section-background.png"
                        alt="Background Pattern"
                        fill
                        className="object-cover opacity-100" // Adjust opacity as needed, user didn't specify but usually backgrounds are subtle. Keeping 100 based on '100% m aae' interpretation or just standard.
                        priority
                    />
                </div>

                <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 opacity-100">
                    <Image
                        src="/images/flower-green.png"
                        alt=""
                        fill
                        className="object-contain animate-spin-slow"
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                {/* Header Section */}
                <div className="text-center pt-16 md:pt-36 pb-12 md:pb-16 px-4">
                    <p className="text-sm md:text-base font-semibold text-[#4A6741] uppercase tracking-wider mb-4 font-sans">
                        Quick Answers
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E05] mb-6 font-serif">
                        FAQ Page
                    </h1>
                    <p className="text-base md:text-lg text-[#4A6741] max-w-2xl mx-auto font-sans">
                        Find answers to commonly asked questions about meditation, self-realization, and our classes
                    </p>
                </div>

                {/* FAQ Section */}
                <div className="max-w-7xl mx-auto px-4 pb-20">
                    <div className="space-y-4 md:space-y-5">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-[#F7F8ED] rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 md:px-8 py-2 md:py-2 flex items-start justify-between text-left hover:bg-[#F7F8ED] transition-colors group"
                                >
                                    <div className="flex items-start gap-4 flex-1 pr-4">
                                        <span className="text-[#1A2E05] font-semibold text-lg md:text-lg flex-shrink-0 mt-1 font-serif">
                                            {String(index + 1).padStart(2, '0')}.
                                        </span>
                                        <h3 className="text-base md:text-lg lg:text-lg font-semibold text-[#1A2E05] leading-relaxed group-hover:text-[#10551F] transition-colors font-serif">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[#1A2E05] text-white' : 'bg-[#F7F8ED] text-[#1A2E05]'}`}>
                                        <span className="text-2xl md:text-3xl font-light transform transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                                            +
                                        </span>
                                    </div>
                                </button>

                                <div
                                    className="overflow-hidden transition-all duration-300 ease-in-out"
                                    style={{
                                        maxHeight: openIndex === index ? '500px' : '0px',
                                        opacity: openIndex === index ? 1 : 0
                                    }}
                                >
                                    <div className="px-6 md:px-8 pb-6 md:pb-7 pl-16 md:pl-20">
                                        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-sans">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA Section */}
                    <div className="mt-16 md:mt-20 bg-[#10551F] rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                            <Image
                                src="/images/flower-green.png"
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
                            <Image
                                src="/images/flower-green.png"
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 font-serif">
                                Still have questions?
                            </h2>
                            <p className="text-[#F7F8ED] text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto font-sans opacity-90">
                                Can't find the answer you're looking for? Our friendly team is here to help you on your meditation journey.
                            </p>
                            <button className="bg-[#C7DC49] text-[#1A2E05] font-bold px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-lg text-base md:text-lg inline-flex items-center gap-3 font-sans">
                                Contact Us
                                <span className="bg-[#1A2E05] text-white w-8 h-8 rounded-full flex items-center justify-center">
                                    →
                                </span>
                            </button>
                        </div>
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
                @keyframes spin-slow-reverse {
                    from {
                        transform: rotate(360deg);
                    }
                    to {
                        transform: rotate(0deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 30s linear infinite;
                }
                .animate-spin-slow-reverse {
                    animation: spin-slow-reverse 25s linear infinite;
                }
            `}</style>
        </div>
    );
}