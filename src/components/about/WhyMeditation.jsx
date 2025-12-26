import React from 'react';
import Image from 'next/image';

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
                    <h2 className="text-3xl lg:text-4xl font-serif text-[#1A2E05] mb-4">
                        Why Meditation Matters Today
                    </h2>
                    <p className="text-xl text-[#1A2E05] font-serif italic">
                        A Response to Modern Challenges
                    </p>
                </div>

                <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
                    <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
                        Modern life brings unprecedented convenience — yet also stress, disconnection, and dissatisfaction. Meditation offers a natural counterbalance by:
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-6 mb-10">
                        {points.map((point, i) => (
                            <li key={i} className="flex items-center gap-4 text-gray-700 font-light text-lg">
                                <span className="w-2 h-2 rounded-full bg-[#1A2E05]"></span>
                                {point}
                            </li>
                        ))}
                    </ul>

                    <div className="text-center pt-8 border-t border-gray-100">
                        <p className="text-lg font-medium text-[#1A2E05]">
                            More importantly, it helps individuals rediscover a sense of meaning, contentment, and connection that no external achievement alone can provide.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
