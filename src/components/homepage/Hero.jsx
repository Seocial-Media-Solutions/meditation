'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import JourneyOptions from './JourneyOptions';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  const [bubbles, setBubbles] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate bubble parameters only on the client to avoid hydration mismatch
    setBubbles(Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      size: Math.random() * 120 + 40,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      moveX: (Math.random() - 0.5) * 40,
      moveY: (Math.random() - 0.5) * 40,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 5,
      isGreen: Math.random() > 0.5
    })));
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>

      <section className="relative w-full min-h-screen md:min-h-[1000px] md:h-[1000px] flex flex-col font-[Inter] text-white overflow-hidden bg-black">
        <Image
          src="/images/hero/hero5.jpeg"
          alt="Meditation"
          fill
          priority
          className="object-cover object-top brightness-90"
          quality={90}
        />

        {/* Deep overlay to enhance text readability and bubble contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80"></div>

        {/* Animated Floating Bubbles */}
        {mounted && bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className={`absolute rounded-full pointer-events-none blur-3xl ${bubble.isGreen ? 'bg-[#C7DC49]/30' : 'bg-white/20'}`}
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.startX}%`,
              top: `${bubble.startY}%`,
            }}
            animate={{
              x: [0, bubble.moveX, 0],
              y: [0, bubble.moveY, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }}
          />
        ))}

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 md:pt-4 pb-20 pt-5 sm:pt-32 max-w-7xl mx-auto w-full h-full my-auto mt-20 md:mt-32">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-['Cinzel'] font-semibold mb-4 sm:mb-6 md:mb-8 leading-tight tracking-wide drop-shadow-xl"
          >
            <span className="text-white">
              Meditation for Inner Peace, Balance & Transformation
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
            className="max-w-4xl mb-8 md:mb-12 px-6 sm:px-8 md:px-10 py-5 sm:py-6 rounded-3xl text-sm sm:text-base md:text-xl text-white/90 leading-relaxed bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl drop-shadow-lg"
          >
            Discover a gentle yet powerful meditation practice that restores inner balance,
            awakens joy, expands awareness, and nurtures a deeply peaceful life — within and beyond.
            <span className="block mt-4 font-medium text-[#C7DC49]">
              Join me on a meaningful journey of self-discovery and inner transformation.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full max-w-2xl"
          >
            <Link
              href="/start-journey"
              className="w-full sm:w-auto px-8 py-4 bg-[#C7DC49] text-black rounded-full font-semibold text-sm md:text-base hover:bg-[#b0c436] hover:shadow-[0_0_20px_rgba(199,220,73,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Your Meditation Journey
              <Sparkles size={18} className="text-black/70" />
            </Link>

            <Link
              href="/about-practice"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-sm md:text-base hover:bg-white/20 hover:border-white/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Learn About the Practice
            </Link>
          </motion.div>

          {/* Explore More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: false }}
            onClick={() => setIsJourneyOpen(true)}
            className="mt-16 flex flex-col items-center gap-3 cursor-pointer group text-white/70 hover:text-[#C7DC49] transition-colors duration-300"
          >
            <span className="text-sm tracking-[0.2em] uppercase font-light">
              Explore More
            </span>
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#C7DC49] group-hover:bg-[#C7DC49]/10 transition-all duration-300">
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </motion.div>

        </div>

        <JourneyOptions isOpen={isJourneyOpen} onClose={() => setIsJourneyOpen(false)} />
      </section>
    </>
  );
}