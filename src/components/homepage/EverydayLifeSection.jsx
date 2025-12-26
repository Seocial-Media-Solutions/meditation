'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EverydayLifeSection() {
  const lifeAspects = [
    {
      icon: "/images/icons/work-study.png",
      title: "Work & Study",
      description: "Better focus, productivity, and creativity"
    },
    {
      icon: "/images/icons/family.png",
      title: "Family Life",
      description: "Patience, balance, and emotional maturity"
    },
    {
      icon: "/images/icons/relationships.png",
      title: "Relationships",
      description: "Improved communication and understanding"
    },
    {
      icon: "/images/icons/community.png",
      title: "Community",
      description: "Reduced conflict and greater unity"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background Flower Images */}
      {/* Left Flower - Flipped */}
      <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 opacity-10 pointer-events-none">
        <Image
          src="/images/flower.svg"
          alt=""
          fill
          className="object-contain scale-x-[-1]"
        />
      </div>

      {/* Right Flower */}
      <div className="absolute bottom-0 right-0 w-64 h-64 lg:w-96 lg:h-96 opacity-10 pointer-events-none">
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl lg:text-5xl font-serif text-[#1A2E05] mb-4"
          >
            Meditation for Everyday Life
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-2xl lg:text-3xl font-medium text-[#1A2E05] mb-6 italic"
          >
            Not Just for Retreats — For Real Life
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            This meditation practice supports all aspects of daily living:
          </motion.p>
        </div>

        {/* Life Aspects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {lifeAspects.map((aspect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
              className="bg-[#F7F8ED] p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group"
            >
              {/* Icon */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="relative w-16 h-16 mx-auto">
                  <Image
                    src={aspect.icon}
                    alt={aspect.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h4 className="text-xl font-medium text-[#1A2E05] mb-3 text-center">
                {aspect.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {aspect.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bg-[#F7F8ED] rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 text-lg leading-relaxed">
              Meditation integrates naturally into modern lifestyles —
              <span className="font-medium text-gray-800"> without renunciation or isolation.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}