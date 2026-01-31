'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Headphones, Video, FileText, ArrowRight, ArrowLeft, Camera } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function JourneyOptions({ isOpen, onClose }) {
    const [activeMedia, setActiveMedia] = useState(null);
    const router = useRouter();

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setActiveMedia(null); // Reset on close
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const options = [
        {
            id: 'audio',
            title: 'Audio Guide',
            description: 'Listen to our guided podcast sessions.',
            icon: Headphones,
            href: 'https://www.freemeditation.com.au/resources/talks/',
            // Using generic embed approach; note generic sites may block iframes but we try as requested
            embedUrl: 'https://www.freemeditation.com.au/resources/talks/',
            color: 'bg-purple-100 text-purple-600',
            delay: 0.1,
        },
        {
            id: 'video',
            title: 'Video Guide',
            description: 'Watch live sessions and recordings.',
            icon: Video,
            href: 'https://www.youtube.com/live/dyermy05Yio?si=46qbiyoPzpHAPjQl',
            embedUrl: 'https://www.youtube.com/embed/dyermy05Yio',
            color: 'bg-red-100 text-red-600',
            delay: 0.2,
        },
        {
            id: 'pdf',
            title: 'PDF Guide',
            description: 'Comprehensive written materials.',
            icon: FileText,
            href: null, // Coming soon
            color: 'bg-orange-100 text-orange-600',
            delay: 0.3,
            disabled: true,
            badge: 'Coming Soon',
        },
        {
            id: 'practice',
            title: 'Learn About the Practice',
            description: 'Through my lens',
            icon: Camera,
            href: '/about-practice',
            color: 'bg-green-100 text-green-600',
            delay: 0.4,
        },
    ];

    const handleOptionClick = (option) => {
        if (option.disabled) return;

        // If it has a specific embed URL, use the internal player
        if (option.embedUrl) {
            setActiveMedia(option);
        } else if (option.href && option.href.startsWith('/')) {
            // Internal navigation
            onClose(); // Close modal
            router.push(option.href);
        } else {
            // Fallback for simple links if we had any
            window.open(option.href, '_blank');
        }
    };

    const handleBack = () => {
        setActiveMedia(null);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`relative w-full ${activeMedia ? 'max-w-4xl h-[80vh]' : 'max-w-lg'} bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md transition-all duration-500`}
                        >
                            {/* Decorative background gradients */}
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#C7DC49]/20 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

                            {/* Media Player View */}
                            {activeMedia ? (
                                <div className="flex flex-col h-full relative z-20">
                                    {/* Header with Back Button */}
                                    <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5 backdrop-blur-sm">
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={handleBack}
                                                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors group"
                                                aria-label="Back to options"
                                            >
                                                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                            </button>

                                            <div className="flex items-center gap-3">
                                                <div className={`p-2 rounded-full ${activeMedia.color} bg-opacity-20`}>
                                                    <activeMedia.icon size={20} />
                                                </div>
                                                <h3 className="text-xl font-serif text-white">{activeMedia.title}</h3>
                                            </div>
                                        </div>
                                        <button
                                            onClick={onClose}
                                            className="p-2 rounded-full hover:bg-white/10 text-white/70 transition-colors"
                                            aria-label="Close modal"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    {/* Iframe Content */}
                                    <div className="flex-1 bg-black/40 relative">
                                        <iframe
                                            src={activeMedia.embedUrl}
                                            className="w-full h-full absolute inset-0 border-0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title={activeMedia.title}
                                        />
                                    </div>

                                    {/* Footer Info */}
                                    <div className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-sm flex justify-between items-center text-sm text-white/60">
                                        <span>{activeMedia.description}</span>
                                        <a href={activeMedia.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#C7DC49] transition-colors flex items-center gap-1">
                                            Open in new tab <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                /* Selection Menu View */
                                <div className="p-8 relative z-10 transition-opacity duration-300">
                                    <div className="text-center mb-8">
                                        <button
                                            onClick={onClose}
                                            className="absolute right-0 top-0 p-2 rounded-full hover:bg-white/10 text-white/70 transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                        <h2 className="text-3xl font-serif text-white mb-2">Start Your Journey</h2>
                                        <p className="text-white/70 font-light">Select your preferred format to begin</p>
                                    </div>

                                    <div className="grid gap-4">
                                        {options.map((option) => (
                                            <motion.div
                                                key={option.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: option.delay }}
                                            >
                                                {option.disabled ? (
                                                    <div className="group relative overflow-hidden p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 opacity-70 cursor-not-allowed">
                                                        <div className={`p-3 rounded-full ${option.color} bg-opacity-20`}>
                                                            <option.icon size={24} />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-white font-medium flex items-center gap-2">
                                                                {option.title}
                                                                {option.badge && (
                                                                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                                                                        {option.badge}
                                                                    </span>
                                                                )}
                                                            </h3>
                                                            <p className="text-sm text-white/50">{option.description}</p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div
                                                        onClick={() => handleOptionClick(option)}
                                                        className="cursor-pointer group relative overflow-hidden p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C7DC49]/50 transition-all duration-300 flex items-center gap-4"
                                                    >
                                                        <div className={`p-3 rounded-full ${option.color} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                                                            <option.icon size={24} />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-white font-medium text-lg flex items-center gap-2">
                                                                {option.title}
                                                            </h3>
                                                            <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                                                                {option.description}
                                                            </p>
                                                        </div>
                                                        <div className="text-white/30 group-hover:text-[#C7DC49] group-hover:translate-x-1 transition-all">
                                                            <ArrowRight size={20} />
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
