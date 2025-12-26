"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IntroductionSection() {
  return (
    <section className="py-20 px-4 bg-[#F7F8ED]">
      <div className="container mx-auto max-w-4xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center mb-12"
        >
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="mx-4">
            <Image
              src="/images/leaf.svg"
              alt="Leaf decoration"
              width={40}
              height={40}
              className="opacity-60 mb-2"
            />
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl md:text-4xl text-center text-[#1A2E05] font-serif mb-8"
        >
          A Gentle Path to Self-Realization
        </motion.h2>

        {/* Content */}
        <div className="text-center text-gray-600 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl leading-relaxed"
          >
            Meditation is more than relaxation. It is a journey inward — toward clarity,
            balance, and genuine fulfillment. For over three decades, this meditation
            practice has helped individuals across the world experience inner peace,
            emotional stability, and a deeper connection with themselves.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl leading-relaxed"
          >
            Rooted in Sahaja Yoga meditation, this approach is simple, experiential,
            and scientifically studied — offering real results for modern life without
            effort or strain.
          </motion.p>
        </div>

        {/* Bottom decorative divider with leaf */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center mt-12"
        >
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="mx-4">
            <Image
              src="/images/leaf.svg"
              alt="Leaf decoration"
              width={40}
              height={40}
              className="opacity-60 transform rotate-180 mt-4"
            />
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </motion.div>
      </div>

    </section>
  );
}