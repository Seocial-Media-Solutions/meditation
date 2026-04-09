'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Users,
    User,
    Mountain,
    Heart,
    Brain,
    Sunrise,
    BookOpen,
    Sparkles,
    Clock,
    CheckCircle
} from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Private Online Sessions",
        description: "One-on-one customized online sessions tailored to your unique needs, goals, and spiritual journey.",
        icon: User,
        image: "/images/service-private.jpg",
        duration: "45 minutes",
        level: "1-2 Slots/Week",
        features: [
            "Personalized practice plan",
            "Individual attention",
            "Goal-oriented approach",
            "Flexible scheduling"
        ],
        color: "from-blue-500 to-cyan-600"
    },
    {
        id: 2,
        title: "Small Group Meditation",
        description: "Experience the powerful collective energy of guided group meditation in an intimate, supportive environment.",
        icon: Users,
        image: "/images/service-group.jpg",
        duration: "45-60 minutes",
        level: "4-5 Participants",
        features: [
            "Community connection",
            "Shared energy field",
            "Group discussions",
            "Guided practice"
        ],
        color: "from-violet-500 to-purple-600"
    },
    {
        id: 3,
        title: "Corporate Programs",
        description: "Comprehensive workplace wellness sessions designed for your team, co-facilitated with another experienced coach.",
        icon: Heart,
        image: "/images/service-mindfulness.jpg",
        duration: "Custom",
        level: "Advance Booking",
        features: [
            "Stress management",
            "Workplace well-being",
            "Team connection",
            "Joint facilitation"
        ],
        color: "from-teal-500 to-emerald-600"
    },
    {
        id: 4,
        title: "Music & Meditation",
        description: "Immersive in-person experiences featuring live spiritual music, bringing harmony to body and soul.",
        icon: Sparkles,
        image: "/images/service-retreat.jpg",
        duration: "Varies",
        level: "Thailand / SEA",
        features: [
            "Live spiritual music",
            "Inward journey",
            "Deep relaxation",
            "In-person experience"
        ],
        color: "from-pink-500 to-rose-600"
    },
    {
        id: 5,
        title: "Sacred Arts Exploration",
        description: "Inner journey experiences integrating meditation with expressive arts, such as dance and self-exploration.",
        icon: Sunrise,
        image: "/images/service-chakra.jpg",
        duration: "Varies",
        level: "All Levels",
        features: [
            "Meditative dance",
            "Self-exploration",
            "Expressive arts",
            "Deep healing"
        ],
        color: "from-orange-500 to-amber-600"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function ServicesGrid() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-white via-[#F7F8ED] to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-semibold tracking-[0.3em] text-[#4A6741] uppercase mb-4">
                        Why Make This Commitment?
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1A2E05] mb-6">
                        The Ultimate Return on Investment
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Meditation deeply anchors us in the present moment, offering profound peace, joy, and clarity. Whether you are an experienced meditation enthusiast seeking like-minded peers, someone simply curious about the benefits, or even a healthy skeptic, I welcome the opportunity to connect.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                variants={cardVariants}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500"
                            >
                                {/* Image Section */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

                                    {/* Icon Badge */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                                        <IconComponent className="w-6 h-6 text-[#4A6741]" />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-serif text-[#1A2E05] mb-3 group-hover:text-[#C7DC49] transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 leading-relaxed font-light">
                                        {service.description}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-[#C7DC49]" />
                                            <span>{service.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <User className="w-4 h-4 text-[#C7DC49]" />
                                            <span>{service.level}</span>
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-2 mb-6">
                                        {service.features.slice(0, 3).map((feature, index) => (
                                            <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-[#C7DC49] mt-0.5 flex-shrink-0" />
                                                <span className="font-light">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="inline-flex items-center gap-2 text-[#4A6741] font-medium group-hover:text-[#C7DC49] transition-colors duration-300"
                                    >
                                        <span>Learn More</span>
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{
                                                repeat: Infinity,
                                                duration: 1.5,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            →
                                        </motion.span>
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
