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
          Through My Lens — A Personal Journey into Meditation
        </motion.h2>

        {/* Content */}
        <div className="text-center text-gray-600 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl leading-relaxed italic font-medium"
          >
            Turn inward. Meditate. In today’s fast-paced, outward-driven world, this has become the need of the hour.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl leading-relaxed"
          >
            It has been over forty years since I first experienced the profound stillness of deep meditation. As a shy teenager growing up in the French suburbs of Geneva, I was introduced to Sahaja Yoga meditation by one of my high-school teachers, a colleague of my mother.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl leading-relaxed"
          >
            The effects were immediate and tangible — better sleep, sharper attention, and a quiet inner joy. What began as curiosity soon became a lifelong practice. I have never stopped since.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl leading-relaxed"
          >
            Over the years, this practice has revealed layers of beauty, balance, and inner freedom — experiences too precious not to share.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl leading-relaxed pt-4"
          >
            <p className="mb-4 font-serif text-[#1A2E05]">This space exists as:</p>
            <ul className="space-y-2 inline-block text-left">
              <li>• A repository of lived experience</li>
              <li>• A place for short reflections and deeper narratives</li>
              <li>• An avenue to connect, explore, and grow together</li>
              <li>• A gentle introduction to meditation — even for skeptics</li>
            </ul>
          </motion.div>
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