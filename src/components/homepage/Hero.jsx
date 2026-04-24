'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import JourneyOptions from './JourneyOptions';
import { ArrowUpRight, Sparkles } from 'lucide-react';

/* ── Word-by-word reveal ── */
function SplitText({ text, className, delay = 0 }) {
  const words = text.split(' ');
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.28em' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.09,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ── Breathing concentric rings ── */
function BreathingMandala() {
  const rings = [
    { scale: [1, 1.18, 1], opacity: [0.7, 0.2, 0.7], dur: 4.5, delay: 0,    size: 360 },
    { scale: [1, 1.22, 1], opacity: [0.5, 0.12, 0.5], dur: 4.5, delay: 0.4, size: 290 },
    { scale: [1, 1.28, 1], opacity: [0.35, 0.08, 0.35], dur: 4.5, delay: 0.8, size: 220 },
    { scale: [1, 1.35, 1], opacity: [0.2, 0.05, 0.2], dur: 4.5, delay: 1.2, size: 150 },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {rings.map((r, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            width: r.size,
            height: r.size,
            borderColor: 'rgba(199,220,73,0.55)',
          }}
          animate={{ scale: r.scale, opacity: r.opacity }}
          transition={{ duration: r.dur, repeat: Infinity, ease: 'easeInOut', delay: r.delay }}
        />
      ))}
      {/* centre glow */}
      <motion.div
        className="absolute rounded-full"
        style={{ width: 90, height: 90, background: 'radial-gradient(circle, rgba(199,220,73,0.35) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

    </div>
  );
}

/* ── Floating particles ── */
function Particles({ count = 30 }) {
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    setParticles(Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.8,
      dur: Math.random() * 14 + 10,
      dy: -(Math.random() * 60 + 30),
      delay: Math.random() * 8,
    })));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#C7DC49]"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, p.dy, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}
    </div>
  );
}


export default function Hero() {
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        .cta-primary {
          background: linear-gradient(135deg, #C7DC49, #9db832);
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .cta-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 12px 48px rgba(199,220,73,0.45);
        }
        .cta-text {
          transition: all 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .cta-text:hover { color: #C7DC49; letter-spacing: 0.08em; }
        .cta-text:hover .cta-arrow { transform: translate(3px,-3px); }
        .cta-arrow { transition: transform 0.3s ease; }

        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .image-frame {
          clip-path: polygon(0 6%, 94% 0, 100% 94%, 6% 100%);
        }
      `}</style>

      <section className="relative w-full min-h-screen bg-[#F7F8ED] overflow-hidden flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
        
        {/* Background Layers with Feathered Mask */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#080a06]"
          style={{ 
            maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
          }}
        >
          {/* BG image */}
          <Image
            src="/images/hero/hero5.jpeg"
            alt="Meditation"
            fill priority
            className="object-cover object-center opacity-20"
            quality={90}
          />
          {/* radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_30%,#080a06_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080a06]/60 via-transparent to-[#080a06]/90" />

          {/* Animated Bottom Shade */}
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              background: [
                'linear-gradient(to top, rgba(8,10,6,0.95) 0%, transparent 40%)',
                'linear-gradient(to top, rgba(16,85,31,0.2) 0%, transparent 60%)',
                'linear-gradient(to top, rgba(8,10,6,0.95) 0%, transparent 40%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* floating particles */}
        {mounted && <Particles count={28} />}

        {/* ──────────── MAIN CONTENT GRID ──────────── */}
        <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-0 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pt-32 lg:pt-40 pb-10">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col justify-start pr-0 lg:pr-16 pt-4 pb-8">



            {/* Label with pulse dot */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-[#C7DC49]"
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[#C7DC49]/80 text-xs tracking-[0.3em] uppercase font-light">
                Begin Your Journey
              </span>
            </motion.div>

            {/* ── HEADLINE ── */}
            <div className="mb-8 overflow-visible">
              <h1
                className="font-['Cinzel'] font-semibold text-white leading-[1.1] tracking-wide"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
              >
                <SplitText text="Meditation" delay={0.2} className="block text-white" />
                <SplitText text="for Inner Peace," delay={0.45} className="block text-white/90" />
                <div style={{ display: 'block' }}>
                  <span style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.28em' }}>
                    <motion.span
                      style={{ display: 'inline-block' }}
                      initial={{ y: '110%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
                    >
                      Balance &amp;
                    </motion.span>
                  </span>
                </div>
                <div style={{ display: 'block' }}>
                  <span style={{ display: 'inline-block', overflow: 'hidden' }}>
                    <motion.span
                      style={{
                        display: 'inline-block',
                        background: 'linear-gradient(100deg,#C7DC49,#e8f590)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                      initial={{ y: '110%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
                    >
                      Transformation
                    </motion.span>
                  </span>
                </div>
              </h1>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.2, ease: [0.22,1,0.36,1] }}
              style={{ originX: 0, background: 'linear-gradient(90deg, #C7DC49, transparent)', height: '1px', width: '6rem', marginBottom: '1.75rem' }}
            />

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
              className="text-white/55 font-light leading-7 mb-12 max-w-xl"
              style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)' }}
            >
              Discover a gentle yet powerful practice that restores inner balance,
              awakens joy, expands awareness, and nurtures a deeply peaceful life —
              within and beyond.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Link
                href="/start-journey"
                className="cta-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-black font-semibold text-sm"
              >
                <Sparkles size={15} className="opacity-70" />
                Start Your Meditation Journey
              </Link>

              <button
                onClick={() => setIsJourneyOpen(true)}
                className="cta-text group inline-flex items-center gap-2 text-white/50 text-sm font-light tracking-wide border-none bg-transparent cursor-pointer"
              >
                Explore More
                <ArrowUpRight size={15} className="cta-arrow" />
              </button>
            </motion.div>
          </div>

          {/* ── RIGHT: Breathing mandala + image ── */}
          <div className="relative hidden lg:flex items-center justify-center">

            {/* image frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22,1,0.36,1] }}
              className="relative w-[340px] h-[420px] image-frame overflow-hidden"
            >
              <Image
                src="/images/hero/img7.jpeg"
                alt="Meditation"
                fill
                className="object-cover object-center brightness-75"
                quality={88}
              />
              {/* inner overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a06]/60 via-transparent to-transparent" />
            </motion.div>

            {/* Breathing mandala on top */}
            <BreathingMandala />

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="absolute bottom-10 left-0 bg-white/6 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4"
            >
              <p className="text-[10px] tracking-[0.25em] uppercase text-white/35 mb-1">Daily Practice</p>
              <p className="text-white text-sm font-light">Free · Every Week</p>
              <div className="flex items-center gap-1.5 mt-2">
                {['#a0c030','#b8d445','#C7DC49'].map((c,i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-[#080a06]" style={{ background: c, marginLeft: i > 0 ? '-8px' : 0 }} />
                ))}
                <span className="text-white/40 text-xs ml-1">+10k joined</span>
              </div>
            </motion.div>
          </div>
        </div>

        <JourneyOptions isOpen={isJourneyOpen} onClose={() => setIsJourneyOpen(false)} />
      </section>
    </>
  );
}