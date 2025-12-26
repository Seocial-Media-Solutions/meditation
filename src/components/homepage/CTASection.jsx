'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-[#F7F8ED] relative overflow-hidden">
      {/* Background Flower Images */}
      <div className="absolute top-0 left-0 w-56 h-56 lg:w-80 lg:h-80 opacity-20 pointer-events-none">
        <Image
          src="/images/flower.svg"
          alt=""
          fill
          className="object-contain scale-x-[-1]"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-56 h-56 lg:w-80 lg:h-80 opacity-20 pointer-events-none">
        <Image
          src="/images/flower.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#10551f] rounded-3xl p-12 lg:p-16 shadow-2xl border border-[#10551f] text-center relative overflow-hidden"
        >
          {/* Pattern Overlay */}
          <div className="absolute inset-0 ">
            <Image
              src="/images/vision-bg.png"
              alt="Pattern overlay"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10">
            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-3xl lg:text-5xl font-serif text-white mb-6 leading-tight tracking-wide"
            >
              Begin Your <span className="text-[#C7DC49] italic">Journey Today</span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="max-w-2xl mx-auto space-y-4 mb-12"
            >
              <p className="text-lg lg:text-xl text-gray-200 font-light leading-relaxed">
                Meditation is not something to believe in — it is something to <span className="font-medium text-white">experience</span>.
                Whether you seek peace, healing, or clarity, it gently opens the door.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <button className="group bg-[#C7DC49] text-[#10551f] px-10 py-4 rounded-full hover:bg-white transition-all duration-300 font-semibold tracking-wide shadow-lg hover:shadow-xl flex items-center gap-2 min-w-[220px] justify-center">
                <span>Start Meditating</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button className="group bg-transparent text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-medium tracking-wide border border-white/30 hover:border-white/50 flex items-center gap-2 min-w-[220px] justify-center">
                <span>Explore Benefits</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}