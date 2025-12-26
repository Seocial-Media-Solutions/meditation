'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SahajaYogaSection() {
  const features = [
    {
      title: "Effortless Practice",
      description: "Natural and spontaneous meditation without force or strain",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Thoughtless Awareness",
      description: "Experience pure consciousness beyond mental chatter",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Direct Inner Experience",
      description: "Connect with your inner self through tangible sensations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Tangible Results",
      description: "Measurable effects on the nervous system and well-being",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Flower Images */}
      <div className="absolute top-0 left-0 w-48 h-48 lg:w-64 lg:h-64 opacity-5 pointer-events-none">
        <Image
          src="/images/flower.svg"
          alt=""
          fill
          className="object-contain scale-x-[-1]"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 lg:w-64 lg:h-64 opacity-5 pointer-events-none">
        <Image
          src="/images/flower.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl lg:text-5xl font-serif text-[#1A2E05] mb-6 leading-tight"
          >
            Sahaja Yoga Meditation
          </motion.h2>

          {/* Subtitle */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-2xl lg:text-3xl font-medium text-[#1A2E05] mb-8"
          >
            What Makes This Meditation Different?
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Sahaja Yoga meditation offers a unique approach to inner peace and self-discovery
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
              className="bg-[#F7F8ED] p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
            >
              {/* Icon */}
              <div className="mb-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h4 className="text-xl font-medium text-[#1A2E05] mb-3">
                {feature.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[#F7F8ED] rounded-2xl p-10 border border-gray-200">
            <div className="text-center">
              <div className="inline-block mb-4">
                <svg className="w-10 h-10 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              <p className="text-xl lg:text-2xl text-gray-600 font-light mb-2">
                It is not belief-based —
              </p>
              <p className="text-2xl lg:text-3xl text-[#1A2E05] font-medium">
                it is experiential.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}