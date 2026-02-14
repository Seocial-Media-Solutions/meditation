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
    <section className="relative w-full min-h-screen flex flex-col">
      <Image
        src="/images/gallery/slide3.jpeg"
        alt="Meditation"
        fill
        priority
        className="object-cover  "
        quality={90}
      />
      {/* <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src="/images/hero.mp4" type="video/mp4" />
      </video> */}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center  px-4 pt-40 pb-20">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" text-border text-4xl md:text-5xl font-serif mb-6 text-[#C7DC49] bg-transparent backdrop-blur-[1px]  p-3  rounded-lg  leading-tight"
          style={{
         textShadow: "0.1px 0 black, 0 0.1px black, 0.1 px 0 black, 0 -0.1px black",  
          }}
        >
          Meditation for Inner Peace, Balance & Transformation
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl font-light max-w-3xl mb-12 leading-relaxed"

        >
          Discover a gentle yet powerful meditation practice that restores inner balance, awakens joy, expands awareness, and nurtures a deeply peaceful life — within and beyond.
          <br /><br />
          Join me on a meaningful journey of self-discovery and inner transformation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center flex-wrap justify-center"
        >
          <Link
            href="/start-journey"
            className="px-8 py-4 bg-[#C7DC49] text-gray-700 text-shadow-regal-blue rounded-full font-light text-base hover:bg-opacity-90 transition-colors flex items-center gap-2"
          >
            Start Your Meditation Journey
          </Link>



          <div className="flex flex-col items-center">
            <Link
              href="/about-practice"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-light text-base hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Learn About the Practice
            </Link>
          </div>
        </motion.div>

        <div
          onClick={() => setIsJourneyOpen(true)}
          className="mt-12 flex items-center gap-2 cursor-pointer group text-white hover:text-[#C7DC49] transition-colors duration-300"
        >
          <span className="text-lg font-light tracking-wide border-b border-transparent group-hover:border-[#C7DC49] transition-all">
            Explore More
          </span>
          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>

      </div>

      <JourneyOptions isOpen={isJourneyOpen} onClose={() => setIsJourneyOpen(false)} />
    </section>
  )
}