"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MeditationSection() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content Section */}
        <div className="space-y-8 px-4 lg:px-12">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-sm font-semibold tracking-[0.3em] text-[#4A6741] uppercase mb-8"
            >
              Guided Meditations
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-4xl lg:text-5xl font-serif text-[#1A2E05] mb-6"
            >
              Why Meditation Matters Today
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-2xl lg:text-3xl font-medium text-[#1A2E05] mb-8"
            >
              In a World Full of Noise, Discover Stillness
            </motion.h2>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Despite rapid technological progress, stress, anxiety, division, and dissatisfaction continue to rise. We are more connected than ever — yet often disconnected from ourselves.
              <br /><br />
              Meditation offers a natural, grounded response. Not an escape from life — but a deeper understanding of it from within.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <p className="mb-4">Through regular practice, meditation helps you:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Calm mental turbulence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Balance emotions naturally</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Improve focus and clarity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Develop inner satisfaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Foster harmony in relationships and communities</span>
                </li>
              </ul>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="italic"
            >
              This is meditation not only for personal wellbeing — but for creating a more balanced, compassionate world.
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="bg-[#C7DC49] text-white px-8 py-3 hover:bg-opacity-90 transition-colors duration-300 font-light tracking-wide rounded-full"
          >
            Meditate Now
          </motion.button>
        </div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[600px] lg:h-[700px]"
        >
          <Image
            src="/images/meditation-person.jpg"
            alt="Person meditating peacefully"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}