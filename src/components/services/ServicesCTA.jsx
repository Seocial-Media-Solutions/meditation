'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Phone, Mail, MapPin } from 'lucide-react';

export default function ServicesCTA() {
    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F7F8ED] via-white to-[#F7F8ED]">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#C7DC49] rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4A6741] rounded-full filter blur-3xl"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Main CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                >
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Left Side - Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <p className="text-sm font-semibold tracking-[0.3em] text-[#4A6741] uppercase mb-4">
                                    Begin Your Journey
                                </p>
                                <h2 className="text-3xl md:text-4xl font-serif text-[#1A2E05] mb-6">
                                    Ready to Transform Your Life?
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed font-light">
                                    Take the first step towards inner peace and holistic wellness.
                                    Book a session with us today and experience the transformative
                                    power of meditation and yoga.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 bg-[#C7DC49] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book a Session
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#4A6741] text-[#4A6741] px-8 py-4 rounded-full font-medium hover:bg-[#4A6741] hover:text-white transition-all duration-300"
                                    >
                                        Learn More
                                    </Link>
                                </div>

                                {/* Trust Indicators */}
                                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                                    <div>
                                        <p className="text-3xl font-serif text-[#1A2E05] mb-1">500+</p>
                                        <p className="text-sm text-gray-600 font-light">Happy Students</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-serif text-[#1A2E05] mb-1">10+</p>
                                        <p className="text-sm text-gray-600 font-light">Years Experience</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - Contact Info */}
                        <div className="bg-gradient-to-br from-[#4A6741] to-[#1A2E05] p-8 md:p-12 text-white flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-serif mb-8">Get in Touch</h3>

                                {/* Contact Items */}
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/70 mb-1">Call Us</p>
                                            <a href="tel:+1234567890" className="text-lg hover:text-[#C7DC49] transition-colors">
                                                +1 (234) 567-890
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/70 mb-1">Email Us</p>
                                            <a href="mailto:info@meditation.com" className="text-lg hover:text-[#C7DC49] transition-colors">
                                                info@meditation.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-white/70 mb-1">Visit Us</p>
                                            <p className="text-lg">
                                                123 Peaceful Lane<br />
                                                Meditation City, MC 12345
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="pt-6 border-t border-white/20">
                                    <p className="text-sm text-white/70 mb-2">Opening Hours</p>
                                    <p className="font-light">Monday - Friday: 6:00 AM - 8:00 PM</p>
                                    <p className="font-light">Saturday - Sunday: 7:00 AM - 6:00 PM</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid md:grid-cols-3 gap-6 mt-8"
                >
                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <div className="w-12 h-12 bg-[#C7DC49]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Calendar className="w-6 h-6 text-[#C7DC49]" />
                        </div>
                        <h4 className="font-serif text-lg text-[#1A2E05] mb-2">Flexible Scheduling</h4>
                        <p className="text-sm text-gray-600 font-light">
                            Book sessions at times that work for your lifestyle
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <div className="w-12 h-12 bg-[#C7DC49]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-6 h-6 text-[#C7DC49]" />
                        </div>
                        <h4 className="font-serif text-lg text-[#1A2E05] mb-2">Expert Guidance</h4>
                        <p className="text-sm text-gray-600 font-light">
                            Learn from experienced and certified instructors
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                        <div className="w-12 h-12 bg-[#C7DC49]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-6 h-6 text-[#C7DC49]" />
                        </div>
                        <h4 className="font-serif text-lg text-[#1A2E05] mb-2">Peaceful Space</h4>
                        <p className="text-sm text-gray-600 font-light">
                            Practice in our serene, purpose-built sanctuary
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
