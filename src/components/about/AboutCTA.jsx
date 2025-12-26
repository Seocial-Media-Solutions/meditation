import React from 'react';
import Link from 'next/link';

export default function AboutCTA() {
    return (
        <section className="py-24 px-4 bg-[#F7F8ED]">
            <div className="max-w-3xl mx-auto text-center space-y-10">
                <h2 className="text-4xl font-serif text-[#1A2E05]">
                    Begin With Yourself
                </h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                    Meditation is a gentle invitation — not to escape life, but to experience it more fully. <br className="hidden md:block" />
                    Whether you seek peace, clarity, healing, or deeper understanding, the journey always begins within.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <Link href="/practice" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-gray-400 text-gray-800 rounded-full hover:bg-white hover:border-gray-800 transition-all duration-300 font-light">
                        Explore the Practice
                    </Link>
                    <Link href="/meditate-now" className="inline-flex items-center justify-center px-8 py-4 bg-[#C7DC49] text-white rounded-full hover:bg-opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 font-light tracking-wide">
                        Start Your Meditation Experience
                    </Link>
                </div>
            </div>
        </section>
    );
}
