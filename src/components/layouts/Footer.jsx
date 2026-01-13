import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#10551f] pt-16 pb-24 border-t border-[#10551f] text-white relative overflow-hidden rounded-t-[70px] ">
            {/* Top Decorative Divider (Adapted to new theme) */}
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <div className="flex items-center justify-center gap-4 text-white/30">
                    <div className="h-px bg-white/20 flex-1"></div>
                    {/* Decorative motif */}
                    <div className="flex items-center gap-2">
                        <svg width="60" height="24" viewBox="0 0 60 24" fill="none" stroke="currentColor" className="opacity-60">
                            <path d="M30 20V4M30 4L26 8M30 4L34 8" strokeWidth="1" strokeLinecap="round" />
                            <path d="M20 12C20 12 25 10 30 12C35 14 40 12 40 12" strokeWidth="1" strokeLinecap="round" />
                            <circle cx="20" cy="12" r="2" fill="currentColor" stroke="none" />
                            <circle cx="40" cy="12" r="2" fill="currentColor" stroke="none" />
                            <circle cx="30" cy="4" r="2" fill="currentColor" stroke="none" />
                        </svg>
                    </div>
                    <div className="h-px bg-white/20 flex-1"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 text-gray-200">

                    {/* Column 1: Explore (Navbar Links) */}
                    <div>
                        <h4 className="text-base font-semibold mb-6 text-white uppercase tracking-wider">Explore</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-lg text-gray-300 font-light hover:text-[#C7DC49] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-lg text-gray-300 font-light hover:text-[#C7DC49] transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-lg text-gray-300 font-light hover:text-[#C7DC49] transition-colors">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-lg text-gray-300 font-light hover:text-[#C7DC49] transition-colors">
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-lg text-gray-300 font-light hover:text-[#C7DC49] transition-colors">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-base font-semibold mb-6 text-white uppercase tracking-wider">Services</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/meditate-now" className="text-lg text-gray-300 font-light hover:text-[#C7DC49] transition-colors">
                                    Meditate Now
                                </Link>
                            </li>
                            <li>
                                <Link href="/music" className="text-lg text-gray-300 font-light hover:text-[#C7DC49] transition-colors">
                                    Music for Meditation
                                </Link>
                            </li>
                            <li>
                                <Link href="/inspiration" className="text-lg text-gray-300 font-light hover:text-[#C7DC49] transition-colors">
                                    Inspiration
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Legal */}
                    <div>
                        <h4 className="text-base font-semibold mb-6 text-white uppercase tracking-wider">Support</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/contact" className="text-lg text-gray-300 font-light hover:text-[#C7DC49] transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-lg text-gray-300 font-light hover:text-[#C7DC49] transition-colors">
                                    Privacy Notice
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Socials & Language */}
                    <div>
                        <div className="flex gap-6 mb-8 text-gray-300">
                            {/* Instagram Icon */}
                            <a href="#" className="hover:text-[#C7DC49] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                            {/* Facebook Icon */}
                            <a href="#" className="hover:text-[#C7DC49] transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                        </div>


                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-20 text-right text-xs text-white/40 font-light border-t border-white/10 pt-8 relative z-10">
                    <p>&copy; Copyright ©  {currentYear} | Powered by <Link href="https://www.seocialmedia.in/" target="_blank" rel="noopener noreferrer"> SEOcial Media Solutions</Link></p>
                </div>

                {/* Flower Placeholder - Center Bottom */}
                <div className="absolute bottom-[-260px] left-1/2 -translate-x-1/2 opacity-100 pointer-events-none w-[300px] h-[300px] flex items-center justify-center z-0">
                    <Image
                        src="/images/flower.png"
                        alt="Rotating flower pattern"
                        fill
                        className="object-contain animate-[spin_60s_linear_infinite]"
                    />
                </div>
            </div>
        </footer>
    );
}