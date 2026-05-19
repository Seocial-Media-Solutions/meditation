'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Calendar } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => { 
    setMounted(true); 
  }, []);

  if (!mounted) return null; 

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        .bg-zen-soft {
          background-color: #F2F4EB; 
          background-image: 
            radial-gradient(circle at 75% 25%, rgba(199, 220, 73, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 25% 75%, rgba(220, 224, 210, 0.8) 0%, transparent 50%);
        }

        .hero-gradient {
          background: linear-gradient(135deg, #C7DC49, #d4e066);
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .hero-gradient:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 15px 35px rgba(199, 220, 73, 0.4);
        }

        .btn-outline {
          background: transparent;
          border: 1px solid rgba(15, 23, 42, 0.15); 
          color: #334155; 
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          background: rgba(199, 220, 73, 0.15);
          border-color: #9cb32d;
          color: #3b4711;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }

        .highlight-text {
          background: linear-gradient(135deg, #8ba125, #abc233);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 25px rgba(199, 220, 73, 0.4);
        }

        .lotus-petal {
          position: absolute;
          border: 1px solid rgba(139, 161, 37, 0.35); 
          border-radius: 50% 0 50% 0;
          box-shadow: inset 0 0 20px rgba(199, 220, 73, 0.15), 0 0 15px rgba(199, 220, 73, 0.1);
          transform-origin: bottom right;
        }
      `}</style>

      {/* Added pt-32 on mobile and pt-40 on desktop to push the content safely below the header */}
      <section className="relative w-full min-h-screen overflow-hidden bg-zen-soft font-['Inter'] flex items-center pt-32 lg:pt-40 pb-16 lg:pb-16">
        
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          <div className="flex-1 w-full z-20 flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-['Cinzel'] font-normal text-slate-800 leading-[1.15] mb-6"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 4.5rem)' }}>
                MEDITATION FOR INNER<br className="hidden sm:block" />
                PEACE, BALANCE &amp;<br />
                <span className="highlight-text font-bold">TRANSFORMATION</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-600 text-4xl sm:text-4xl md:text-3xl font-light leading-relaxed mb-10 max-w-xl"
            >
              Discover a transformative journey that brings inner peace, mental clarity, and spiritual awakening through ancient meditation practices adapted for modern life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center lg:justify-start"
            >
              <Link href="/services" className="hero-gradient flex items-center justify-center gap-3 px-8 py-4 rounded-full text-black font-semibold text-[15px] tracking-wide w-full sm:w-auto">
                <Sparkles size={18} />
                Start Your Journey
              </Link>

              <button className="btn-outline flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-[15px] tracking-wide w-full sm:w-auto">
                Explore More
                <ArrowUpRight size={18} className="opacity-80" />
              </button>
            </motion.div>
          </div>

          <div className="flex-1 w-full relative flex flex-col items-center justify-center lg:justify-end z-10 mt-8 lg:mt-0">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] scale-[0.75] sm:scale-90 lg:scale-100"
            >
              <div className="absolute w-full h-full bg-[#C7DC49]/20 rounded-full blur-[70px]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="relative w-[240px] h-[240px] flex items-center justify-center"
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="lotus-petal w-[120px] h-[120px] origin-bottom-right"
                    style={{
                      top: 0,
                      left: 0,
                      transform: `rotate(${i * 45}deg)`,
                    }}
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>

              <motion.div 
                className="absolute w-[320px] h-[320px] rounded-full border border-[#8ba125]/20"
                animate={{ rotate: -360, scale: [1, 1.05, 1] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute w-[400px] h-[400px] rounded-full border border-[#8ba125]/15 border-dashed"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              <motion.div 
                animate={{ scale: [0.95, 1.1, 0.95] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-16 h-16 rounded-full bg-white/80 backdrop-blur-md border border-[#8ba125]/40 shadow-[0_0_30px_rgba(199,220,73,0.4)] flex items-center justify-center"
              >
                <div className="w-4 h-4 rounded-full bg-[#8ba125] shadow-[0_0_15px_#8ba125]" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card relative lg:absolute mt-0 sm:mt-4 lg:mt-0 bottom-auto lg:bottom-[5%] right-auto lg:-right-4 rounded-2xl p-6 w-[90%] max-w-[320px] lg:min-w-[260px] lg:w-auto z-30"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={16} className="text-[#8ba125]" />
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Daily Practice</span>
              </div>
              
              <p className="text-slate-800 text-[15px] font-semibold mb-5">Free · Every Week</p>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="relative w-9 h-9 rounded-full border-2 border-white bg-[#f8f9f2] flex items-center justify-center shadow-sm">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#C7DC49]/60 to-transparent" />
                    </div>
                  ))}
                </div>
                <span className="text-slate-500 text-xs font-semibold ml-2">+10k joined</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}