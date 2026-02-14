'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BenefitsSection() {
  // Config for the benefits to map easily to the layout
  const benefits = {
    topLeft: { title: "Improved sleep and deep rest", description: "Wake up feeling refreshed and renewed." },
    bottomLeft: { title: "Reduced stress and anxiety", description: "Find calm amidst the chaos of daily life." },
    topRight: { title: "Enhanced emotional balance", description: "Restore natural harmony to your inner self." },
    bottomRight: { title: "Sharper focus and mental clarity", description: "Achieve clarity and single-pointed attention." },
    bottomCenter: { title: "Greater physical ease and vitality", description: "Feel more energetic and at ease in your body." }
  };

  return (
    <div className="min-h-screen relative py-16 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/section-background.png"
          alt=""
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="relative w-6 h-6">
              <Image
                src="/images/icon-leaf.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide font-sans">
              Why Choose Us
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A2E05] mb-4"
          >
            Transform Your Body, Mind & Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Meditation gently supports holistic wellbeing by working at the level of the nervous system and awareness.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-8 lg:space-y-12 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-center lg:text-right flex flex-col items-center lg:block"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-3 mb-3">
                <h3 className="text-xl font-medium text-[#1A2E05] order-last lg:order-first">{benefits.topLeft.title}</h3>
                <div className="relative w-8 h-8 lg:w-6 lg:h-6 flex-shrink-0">
                  <Image
                    src="/images/icon-leaf.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-600 max-w-sm mx-auto lg:mx-0">
                {benefits.topLeft.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-center lg:text-right flex flex-col items-center lg:block"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-3 mb-3">
                <h3 className="text-xl font-medium text-[#1A2E05] order-last lg:order-first">{benefits.bottomLeft.title}</h3>
                <div className="relative w-8 h-8 lg:w-6 lg:h-6 flex-shrink-0">
                  <Image
                    src="/images/icon-leaf.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-600 max-w-sm mx-auto lg:mx-0">
                {benefits.bottomLeft.description}
              </p>
            </motion.div>
          </div>

          {/* Center - Image with Rotating Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-full max-w-[300px] aspect-square lg:max-w-[400px]">
              {/* Rotating Background Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full animate-spin-slow">
                  <Image
                    src="/images/flower-background.png"
                    alt=""
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Static Girl Image on Top */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative w-[70%] h-[93%]">
                  <Image
                    src="/images/yoga-girl.png"
                    alt="Meditation Pose"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-8 lg:space-y-12 order-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-center lg:text-left flex flex-col items-center lg:block"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 mb-3">
                <div className="relative w-8 h-8 lg:w-6 lg:h-6 flex-shrink-0">
                  <Image
                    src="/images/icon-leaf.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-medium text-[#1A2E05]">{benefits.topRight.title}</h3>
              </div>
              <p className="text-gray-600 max-w-sm mx-auto lg:mx-0">
                {benefits.topRight.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-center lg:text-left flex flex-col items-center lg:block"
            >
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 mb-3">
                <div className="relative w-8 h-8 lg:w-6 lg:h-6 flex-shrink-0">
                  <Image
                    src="/images/icon-leaf.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-medium text-[#1A2E05]">{benefits.bottomRight.title}</h3>
              </div>
              <p className="text-gray-600 max-w-sm mx-auto lg:mx-0">
                {benefits.bottomRight.description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mb-3">
            <div className="relative w-8 h-8 lg:w-6 lg:h-6">
              <Image
                src="/images/icon-leaf.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-medium text-[#1A2E05]">{benefits.bottomCenter.title}</h3>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            {benefits.bottomCenter.description}
          </p>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
          transform-origin: center center;
        }
      `}</style>
    </div>
  );
}