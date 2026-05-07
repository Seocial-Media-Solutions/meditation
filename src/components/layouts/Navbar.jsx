'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function MeditationHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'What we can offer' },
    { href: '/faq', label: 'FAQs' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap');
        
        .cursive-nav {
          font-family: 'Caveat', cursive;
          font-size: 1.75rem; 
          font-weight: 600;
        }
      `}</style>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
          ? 'bg-[#F2F4EB]/95 backdrop-blur-md border-b border-[#C7DC49]/20 py-2 shadow-sm' 
          : 'bg-transparent py-4 md:py-6' 
        }`}
      >
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center justify-between">
            
            {/* Responsively scaled Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/" className="shrink-0 block relative">
                <Image 
                  src="/images/newlogo.png" 
                  alt="Logo" 
                  width={320} 
                  height={120} 
                  /* Responsive heights: smaller on mobile (h-10 to h-12), larger on desktop (h-20 to h-24) */
                  className={`w-auto object-contain transition-all duration-500 brightness-0 opacity-80 hover:opacity-100 ${
                    isScrolled 
                    ? 'h-10 sm:h-12 md:h-16 lg:h-16' 
                    : 'h-12 sm:h-14 md:h-20 lg:h-24' 
                  }`}
                  priority 
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-8 xl:gap-14">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="cursive-nav text-slate-700 hover:text-[#8ba125] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-800 hover:text-[#8ba125] transition-colors z-[40]"
              aria-label="Open menu"
            >
              <div className="w-8 h-6 relative flex flex-col justify-between">
                <span className="w-full h-[3px] bg-current rounded-full transition-all"></span>
                <span className="w-full h-[3px] bg-current rounded-full transition-all"></span>
                <span className="w-full h-[3px] bg-current rounded-full transition-all"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%', transition: { delay: 0.2, duration: 0.4 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#0c120e] lg:hidden flex flex-col"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            {/* EXPLICIT CLOSE BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-[#C7DC49] hover:rotate-90 transition-all duration-300 z-[70]"
              aria-label="Close menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col h-full p-8 pt-32 relative z-10">
              <nav>
                <ul className="space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20, transition: { delay: index * 0.05 } }}
                      transition={{ duration: 0.4, delay: 0.1 + (index * 0.1), ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        /* Adjusted font size to be more manageable on mobile screens */
                        className="cursive-nav text-4xl sm:text-5xl text-white hover:text-[#C7DC49] transition-colors inline-block"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="mt-auto pb-8 text-white/30 cursive-nav text-2xl"
              >
                Find your inner peace
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}