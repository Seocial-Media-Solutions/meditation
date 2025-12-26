import React from 'react';
import Image from 'next/image';

export default function FutureVision() {
    return (
        <section className="py-24 px-4 bg-[#F7F8ED]">
            <div className="max-w-7xl mx-auto">
                {/* Vision Card */}
                <div className="relative rounded-3xl overflow-hidden bg-[#10551f] text-white shadow-2xl">
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
                            <span className="inline-block py-1 px-3 rounded-full bg-[#C7DC49]/20 text-[#C7DC49] text-sm tracking-widest uppercase mb-6 backdrop-blur-sm border border-[#C7DC49]/30">
                                Our Vision
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic tracking-wide text-white mb-6">
                                A Path Toward a <span className="text-[#C7DC49]">Better Future</span>
                            </h2>
                        </div>

                        <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto">
                            The benefits of meditation — improved wellbeing, balanced emotions, clarity, and harmony — are not just personal goals. <br className="hidden md:block" />
                            They are the seeds of a deeper collective transformation.
                        </p>

                        <div className="py-8">
                            <h3 className="text-xl font-light mb-8 text-gray-300">Inner Change Creates Outer Change</h3>

                            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                                {['In Families', 'In Workplaces', 'In Communities', 'In Leadership'].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#C7DC49]"></span>
                                        <span className="text-lg tracking-wide uppercase text-white font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="max-w-2xl mx-auto border-t border-white/10 pt-8">
                            <p className="text-lg text-gray-300 font-light italic">
                                "This is how meditation quietly contributes to a more peaceful, conscious, and sustainable world."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
