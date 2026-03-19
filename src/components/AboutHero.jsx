"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutHero = ({
  bannerImage = "/images/slide3.jpeg",
  title = "Meditation Hero Title",
  subtitle = "Dedicated to excellence in medical care and research",
  breadcrumbs = [],
  color = "text-white",
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative w-full">
      {/* IMAGE */}
      <div className="relative w-full h-[600px] overflow-hidden">
        <motion.img
          src={bannerImage}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
        />

        {/* 🔥 GRADIENT OVERLAY (important) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl"
          >
            {/* TITLE */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              {title}
            </h1>

            {/* SUBTITLE */}
            <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-6 drop-shadow-md">
              {subtitle}
            </p>

            {/* BREADCRUMB */}
            <div className="flex flex-wrap justify-center gap-2 text-sm md:text-base">
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.path} className="flex items-center gap-2">
                  <a
                    href={crumb.path}
                    className="text-white/90 hover:text-cyan-400 transition"
                  >
                    {crumb.label}
                  </a>
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-white/60">/</span>
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 🔥 OPTIONAL: BOTTOM SHAPE (your idea) */}
        {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-white 
          [clip-path:polygon(0%_100%,100%_100%,85%_0%,15%_0%)]" /> */}
      </div>
    </section>
  );
};

export default AboutHero;