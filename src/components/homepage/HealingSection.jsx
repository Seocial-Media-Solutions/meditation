'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HealingSection() {
  const benefits = [
    "Manage stress and anxiety",
    "Overcome addictive behaviors",
    "Reduce emotional trauma",
    "Improve overall quality of life"
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Flower Image */}
      <div className="absolute bottom-0 right-0 w-64 h-64 lg:w-96 lg:h-96 opacity-50 pointer-events-none">
        <Image
          src="/images/flower.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/healing-meditation.jpg"
              alt="Person practicing meditation for healing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Section Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block"
            >
              <span className="text-sm font-semibold tracking-wider text-[#4A6741] uppercase bg-[#F7F8ED] px-4 py-2 rounded-full">
                Natural Healing
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
                Meditation as a Natural Healing Support
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-2xl lg:text-3xl font-medium text-[#1A2E05] italic"
              >
                Meditation as the Best Medication
              </motion.h3>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-gray-600 leading-relaxed text-lg"
            >
              Research and real-life experiences have shown meditation to be a powerful
              complementary approach for wellbeing. It supports the body's natural healing
              mechanisms by calming the nervous system and restoring internal balance.
            </motion.p>

            {/* Benefits List */}
            <div className="space-y-4">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="text-xl font-medium text-[#1A2E05]"
              >
                Meditation has helped people:
              </motion.h4>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C7DC49] flex items-center justify-center mt-1 group-hover:bg-opacity-80 transition-colors duration-300">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-4 text-gray-700 text-lg">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}