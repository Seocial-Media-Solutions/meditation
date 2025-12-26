'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BenefitsSection() {
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
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A2E05] mb-2"
          >
            Transform your body, mind,
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A2E05]"
          >
            and life
          </motion.h1>
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
                <h3 className="text-xl font-medium text-[#1A2E05] order-last lg:order-first">Boost overall wellness</h3>
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
                Yoga supports a healthy heart, improves circulation, and promotes better sleep.
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
                <h3 className="text-xl font-medium text-[#1A2E05] order-last lg:order-first">Find peace of mind</h3>
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
                Yoga combines breath control and mindfulness, which helps to reduce stress.
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
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
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
                <div className="relative w-[210px] h-[280px] lg:w-[280px] lg:h-[380px]">
                  <Image
                    src="/images/yoga-girl.png"
                    alt="Yoga Pose"
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
                <h3 className="text-xl font-medium text-[#1A2E05]">Promote general health</h3>
              </div>
              <p className="text-gray-600 max-w-sm mx-auto lg:mx-0">
                Yoga enhances flow, encourages better sleep, and supports a healthy heart.
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
                <h3 className="text-xl font-medium text-[#1A2E05]">Obtain mental peace</h3>
              </div>
              <p className="text-gray-600 max-w-sm mx-auto lg:mx-0">
                Yoga incorporates focus and breath awareness, which helps to lessen anxiety.
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
            <h3 className="text-xl font-medium text-[#1A2E05]">Move with ease</h3>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            You'll notice greater mobility, fewer aches, and better posture
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