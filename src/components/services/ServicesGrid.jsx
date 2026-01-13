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
        title: "Guided Meditation Sessions",
        description: "Join our experienced instructors for deeply relaxing guided meditation sessions. Perfect for beginners and experienced practitioners alike.",
        icon: Brain,
        image: "/images/service-meditation.jpg",
        duration: "45-60 minutes",
        level: "All Levels",
        features: [
            "Breath awareness techniques",
            "Body scan meditation",
            "Visualization practices",
            "Stress relief methods"
        ],
        color: "from-purple-500 to-indigo-600"
    },
    {
        id: 2,
        title: "Hatha Yoga Classes",
        description: "Traditional Hatha yoga focusing on asanas (postures), pranayama (breathing), and meditation for holistic wellness.",
        icon: Sunrise,
        image: "/images/service-hatha.jpg",
        duration: "60-90 minutes",
        level: "Beginner to Intermediate",
        features: [
            "Classical yoga postures",
            "Breathing exercises",
            "Flexibility training",
            "Strength building"
        ],
        color: "from-orange-500 to-pink-600"
    },
    {
        id: 3,
        title: "Mindfulness Workshops",
        description: "Learn practical mindfulness techniques to integrate awareness into your daily life and reduce stress.",
        icon: Heart,
        image: "/images/service-mindfulness.jpg",
        duration: "2-3 hours",
        level: "All Levels",
        features: [
            "Present moment awareness",
            "Mindful eating practices",
            "Stress management tools",
            "Daily integration techniques"
        ],
        color: "from-green-500 to-teal-600"
    },
    {
        id: 4,
        title: "Private Coaching",
        description: "One-on-one personalized sessions tailored to your unique needs, goals, and spiritual journey.",
        icon: User,
        image: "/images/service-private.jpg",
        duration: "60 minutes",
        level: "Customized",
        features: [
            "Personalized practice plan",
            "Individual attention",
            "Goal-oriented approach",
            "Flexible scheduling"
        ],
        color: "from-blue-500 to-cyan-600"
    },
    {
        id: 5,
        title: "Group Meditation Circles",
        description: "Experience the powerful collective energy of group meditation in a supportive, peaceful environment.",
        icon: Users,
        image: "/images/service-group.jpg",
        duration: "60 minutes",
        level: "All Levels",
        features: [
            "Community connection",
            "Shared energy field",
            "Group discussions",
            "Weekly sessions"
        ],
        color: "from-violet-500 to-purple-600"
    },
    {
        id: 6,
        title: "Meditation Retreats",
        description: "Immersive multi-day retreats in serene natural settings for deep transformation and renewal.",
        icon: Mountain,
        image: "/images/service-retreat.jpg",
        duration: "2-7 days",
        level: "Intermediate to Advanced",
        features: [
            "Silent meditation periods",
            "Nature immersion",
            "Healthy vegetarian meals",
            "Spiritual teachings"
        ],
        color: "from-emerald-500 to-green-600"
    },
    {
        id: 7,
        title: "Yoga Philosophy Classes",
        description: "Explore the ancient wisdom of yoga philosophy, including the Yoga Sutras, Bhagavad Gita, and more.",
        icon: BookOpen,
        image: "/images/service-philosophy.jpg",
        duration: "90 minutes",
        level: "All Levels",
        features: [
            "Ancient texts study",
            "Philosophical discussions",
            "Practical applications",
            "Spiritual insights"
        ],
        color: "from-amber-500 to-orange-600"
    },
    {
        id: 8,
        title: "Chakra Healing Sessions",
        description: "Balance and align your energy centers through guided meditation, visualization, and energy work.",
        icon: Sparkles,
        image: "/images/service-chakra.jpg",
        duration: "75 minutes",
        level: "All Levels",
        features: [
            "Energy assessment",
            "Chakra balancing",
            "Crystal healing",
            "Sound therapy"
        ],
        color: "from-pink-500 to-rose-600"
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
                        What We Offer
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#1A2E05] mb-6">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Choose from our diverse range of meditation and yoga services,
                        each designed to support your unique path to wellness and inner peace.
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
