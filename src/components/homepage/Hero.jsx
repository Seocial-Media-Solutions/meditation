'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/images/hero.JPEG"
        alt="Meditation"
        fill
        priority
        className="object-cover"
        quality={90}
      />
      {/* <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/images/hero.mp4" type="video/mp4" />
      </video> */}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4 ">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-serif mb-6 leading-tight mt-20"
        >
          Meditation for Inner Peace.<br />
          Clarity. Transformation.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl font-light max-w-3xl mb-12 leading-relaxed"
        >
          Discover a proven meditation practice that expands awareness, restores balance,
          and nurtures a more peaceful life — within and beyond.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/start-journey"
            className="px-8 py-4 bg-[#C7DC49] text-white rounded-full font-light text-base hover:bg-opacity-90 transition-colors flex items-center gap-2"
          >
            Start Your Meditation Journey
          </Link>

          <Link
            href="/about-practice"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-light text-base hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            Learn About the Practice
          </Link>
        </motion.div>
      </div>
    </section>
  );
}