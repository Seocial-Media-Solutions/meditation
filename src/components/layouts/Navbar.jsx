'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MeditationHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Header - visible at top */}
      <header className={`absolute bg-white/90  top-0 left-0 right-0 z-40   text-black transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

        {/* Top row with logo and menu items */}
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Left menu item - Hidden on mobile */}
            <Link
              href="/"
              className="hidden md:flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <span className="text-sm font-light">Meditate</span>
            </Link>

            {/* Mobile Menu Button - Left side */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col gap-1 p-1.5 hover:opacity-80 transition-opacity"
              aria-label="Toggle menu"
            >
              <span className="w-5 h-0.5 bg-white"></span>
              <span className="w-5 h-0.5 bg-white"></span>
              <span className="w-5 h-0.5 bg-white"></span>
            </button>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center md:flex-initial">
              <Link href="/" className="text-2xl md:text-3xl font-serif italic hover:opacity-80 transition-opacity">
                Logo
              </Link>
            </div>

            {/* Right menu item - Hidden on mobile */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-1.5 hover:opacity-80 transition-opacity text-right"
            >
              <span className="text-sm font-light">Contact Us</span>
            </Link>

            {/* Placeholder for mobile to balance layout */}
            <div className="w-8 md:hidden"></div>
          </div>
        </div>

        {/* Bottom navigation bar - Desktop only */}
        <nav className="border-t border-white/30 hidden md:block">
          <div className="container mx-auto px-4">
            <ul className="flex items-center justify-around py-3">
              <li>
                <Link
                  href="/"
                  className="text-base font-light hover:text-white/80 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-base font-light hover:text-white/80 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base font-light hover:text-white/80 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-base font-light hover:text-white/80 transition-colors"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base font-light hover:text-white/80 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Full Screen */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-[#10551f]"></div>

        {/* Animated background shapes */}
        <div className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${isMobileMenuOpen ? 'opacity-20' : 'opacity-0'}`}>
          <div className="absolute top-20 -left-20 w-64 h-64 bg-[#C7DC49] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#C7DC49] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col">
          {/* Close button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 p-2.5 text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:rotate-90 z-10"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo at top */}
          <div className={`pt-6 pb-8 text-center transition-all duration-700 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <Link href="/" className="text-4xl font-serif italic text-white" onClick={closeMobileMenu}>
              Logo
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex items-center justify-center px-6">
            <ul className="space-y-1 w-full">
              {[
                { href: '/', label: 'Home', delay: '100ms' },
                { href: '/blog', label: 'Blog', delay: '200ms' },
                { href: '/about', label: 'About', delay: '300ms' },
                { href: '/services', label: 'Service', delay: '400ms' },
                { href: '/faq', label: 'FAQs', delay: '500ms' },
                { href: '/contact', label: 'Contact Us', delay: '600ms' },
              ].map((item, index) => (
                <li
                  key={item.href}
                  className={`transition-all duration-700 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}
                  style={{ transitionDelay: isMobileMenuOpen ? item.delay : '0ms' }}
                >
                  <Link
                    href={item.href}
                    className="block text-3xl font-light text-white py-3 hover:pl-4 transition-all duration-300 hover:text-[#C7DC49] border-b border-white/10 hover:border-[#C7DC49]"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer text */}
          <div className={`pb-6 text-center text-white/60 text-sm transition-all duration-700 delay-700 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Find your inner peace
          </div>
        </div>
      </div>

      {/* Fixed navigation bar - shows when scrolled */}
      <nav
        className={`fixed top-0 left-0 right-0 shadow-md transition-all duration-300 z-50 ${isScrolled ? 'translate-y-0 bg-white text-gray-800 border-b border-gray-200' : '-translate-y-full bg-white/10 backdrop-blur-md border-b border-white/30 text-white'
          }`}
      >
        {/* Mobile Scrolled Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-2.5">
          <Link href="/" className="text-xl font-serif italic">
            Logo
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="container mx-auto px-4 hidden md:block">
          <ul className="flex items-center justify-around py-3">
            <li>
              <Link
                href="/"
                className={`text-base font-light transition-colors ${isScrolled ? 'hover:text-gray-600' : 'hover:text-white/80'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`text-base font-light transition-colors ${isScrolled ? 'hover:text-gray-600' : 'hover:text-white/80'}`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-base font-light transition-colors ${isScrolled ? 'hover:text-gray-600' : 'hover:text-white/80'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`text-base font-light transition-colors ${isScrolled ? 'hover:text-gray-600' : 'hover:text-white/80'}`}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className={`text-base font-light transition-colors ${isScrolled ? 'hover:text-gray-600' : 'hover:text-white/80'}`}
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}