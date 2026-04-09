'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex p-3 bg-[#C7DC49]/10 rounded-2xl mb-6">
                        <Shield className="w-8 h-8 text-[#4A6741]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif text-[#1A2E05] mb-4">Privacy Policy</h1>
                    <p className="text-gray-500 font-light">Last Updated: April 9, 2026</p>
                </motion.div>

                {/* Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg max-w-none space-y-12"
                >
                    <section>
                        <h2 className="text-2xl font-serif text-[#1A2E05] flex items-center gap-3 mb-6">
                            <Eye className="w-6 h-6 text-[#C7DC49]" />
                            1. Introduction
                        </h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Welcome to our Meditation Sanctuary. We are committed to protecting your personal information and your right to privacy. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website and engage with our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-[#1A2E05] flex items-center gap-3 mb-6">
                            <FileText className="w-6 h-6 text-[#C7DC49]" />
                            2. Information We Collect
                        </h2>
                        <p className="text-gray-600 font-light leading-relaxed mb-4">
                            We collect personal information that you provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 font-light">
                            <li>Book a meditation or yoga session</li>
                            <li>Contact us via our contact form</li>
                            <li>Subscribe to our newsletter</li>
                            <li>Participate in our workshops or retreats</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-[#1A2E05] flex items-center gap-3 mb-6">
                            <Lock className="w-6 h-6 text-[#C7DC49]" />
                            3. How We Use Your Information
                        </h2>
                        <p className="text-gray-600 font-light leading-relaxed">
                            Your information is used to provide and improve our services, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600 font-light mt-4">
                            <li>Scheduling and managing your bookings</li>
                            <li>Sending you updates regarding your sessions</li>
                            <li>Communicating about new workshops or special events</li>
                            <li>Ensuring the security of our platform</li>
                        </ul>
                    </section>

                    <section className="bg-[#F7F8ED] p-8 rounded-3xl border border-[#C7DC49]/20">
                        <h2 className="text-2xl font-serif text-[#1A2E05] mb-4">Your Trust Matters</h2>
                        <p className="text-gray-600 font-light leading-relaxed text-sm">
                            We do not sell, rent, or trade your personal information to third parties. Every detail shared with us is treated with the utmost respect and confidentiality, allowing you to focus entirely on your spiritual journey.
                        </p>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}
