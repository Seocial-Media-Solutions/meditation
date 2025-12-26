'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TeacherSection() {
  return (
    <section className="py-20 px-4 bg-[#F7F8ED] relative overflow-hidden">
      {/* Background Flower Images */}
      {/* Bottom Left Flower - Flipped */}
      <div className="absolute bottom-0 left-0 w-48 h-48 lg:w-72 lg:h-72 opacity-30 pointer-events-none">
        <Image
          src="/images/flower.svg"
          alt=""
          fill
          className="object-contain scale-x-[-1]"
        />
      </div>

      {/* Bottom Right Flower */}
      <div className="absolute bottom-0 right-0 w-48 h-48 lg:w-72 lg:h-72 opacity-30 pointer-events-none">
        <Image
          src="/images/flower.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Section Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block"
            >
              <span className="text-sm font-semibold tracking-wider text-[#4A6741] uppercase bg-[#F7F8ED] px-4 py-2 rounded-full">
                About the Teacher
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-4xl lg:text-5xl font-serif text-[#1A2E05] leading-tight"
              >
                A Life Dedicated to Meditation
              </motion.h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-gray-600 leading-relaxed text-lg"
              >
                With over <span className="font-medium text-[#1A2E05]">30 years of personal practice</span> and
                global experience, the journey behind this work is rooted in authenticity, sincerity, and
                lived experience rather than theory.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-gray-600 leading-relaxed text-lg"
              >
                From early exposure to meditation in <span className="font-medium text-[#1A2E05]">Europe</span> to
                deep immersion in <span className="font-medium text-[#1A2E05]">India</span>, this path has
                consistently revealed meditation as a source of peace, resilience, and inspiration.
              </motion.p>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-6 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="text-3xl font-light text-gray-800 mb-1">30+</div>
                <div className="text-sm text-gray-600">Years of Practice</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="text-3xl font-light text-gray-800 mb-1">Global</div>
                <div className="text-sm text-gray-600">Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="text-3xl font-light text-gray-800 mb-1">Authentic</div>
                <div className="text-sm text-gray-600">Teaching</div>
              </motion.div>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/teacher-meditation.png"
                alt="Teacher in meditation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Overlay Quote */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-xl lg:text-2xl font-light italic leading-relaxed">
                  "Meditation is not theory—it's a lived experience of inner peace."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}