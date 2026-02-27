'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import JourneyOptions from './JourneyOptions';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>

      <section className="relative w-full min-h-screen md:min-h-[800px] md:h-[800px] flex flex-col font-[Inter] text-neutral-900">
        <Image
          src="/images/hero/hero5.jpeg"
          alt="Meditation"
          fill
          priority
          className="object-cover brightness-95"
          quality={90}
        />

        {/* Soft white overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-white/15"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 md:pt-4 pb-20 pt-28 sm:pt-32 max-w-7xl mx-auto w-full h-full my-auto mt-20 md:mt-32">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Cinzel'] font-semibold mb-4 sm:mb-6 md:mb-8 leading-tight px-2 tracking-wide"
          >
            <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 text-transparent bg-clip-text">
              Meditation for Inner Peace, Balance & Transformation
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
            className="max-w-4xl mb-8 md:mb-12 px-4 sm:px-6 md:px-8 py-4 sm:py-5 rounded-3xl text-sm sm:text-base md:text-xl text-neutral-700 leading-relaxed bg-white/80 backdrop-blur-md border border-neutral-200 shadow-lg"
          >
            Discover a gentle yet powerful meditation practice that restores inner balance,
            awakens joy, expands awareness, and nurtures a deeply peaceful life — within and beyond.
            <span className="block mt-3 text-neutral-900 font-medium sm:hidden">
              Join me on a meaningful journey of self-discovery and inner transformation.
            </span>
            <span className="hidden sm:block mt-4 font-medium text-neutral-900">
              <br />
              Join me on a meaningful journey of self-discovery and inner transformation.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex flex-col sm:flex-row gap-4 items-center flex-wrap justify-center w-full max-w-2xl"
          >
            <Link
              href="/start-journey"
              className="w-full sm:w-auto px-8 py-4 bg-neutral-900 text-white rounded-full font-medium text-sm md:text-base hover:bg-neutral-800 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
            >
              Start Your Meditation Journey
            </Link>

            <Link
              href="/about-practice"
              className="w-full sm:w-auto px-8 py-4 border-2 border-neutral-900 text-neutral-900 rounded-full font-medium text-sm md:text-base hover:bg-neutral-100 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                         
            >
              Learn About the Practice
            </Link>
          </motion.div>

          {/* Explore More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false }}
            onClick={() => setIsJourneyOpen(true)}
            className="mt-12 flex items-center gap-2 cursor-pointer group text-neutral-800 hover:text-neutral-600 transition-colors duration-300"
          >
            <span className="text-base md:text-lg font-medium tracking-wide border-b border-transparent group-hover:border-neutral-700 transition-all">
              Explore More
            </span>
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.div>

        </div>

        <JourneyOptions isOpen={isJourneyOpen} onClose={() => setIsJourneyOpen(false)} />
      </section>
    </>
  );
}