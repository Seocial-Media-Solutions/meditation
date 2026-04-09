'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
    Clock, 
    User, 
    CheckCircle, 
    ArrowLeft, 
    Calendar, 
    MessageCircle,
    Users,
    Heart,
    Sparkles,
    Sunrise
} from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Private Online Sessions",
        description: "One-on-one customized online sessions tailored to your unique needs, goals, and spiritual journey. These sessions provide a safe and focused space for you to explore meditation at your own pace.",
        icon: User,
        image: "/images/service-private.jpg",
        duration: "45 minutes",
        level: "1-2 Slots/Week",
        longDescription: "Time is our most valuable asset. In these private sessions, we focus entirely on your personal journey. Whether you are dealing with specific stressors, looking to deepen your existing practice, or starting from scratch, these sessions are designed to meet you where you are. We will work together twice a week to build a sustainable habit that brings peace and clarity to your daily life.",
        features: [
            "Personalized meditation techniques",
            "One-on-one spiritual guidance",
            "Flexible online scheduling",
            "Progress tracking and adjustments",
            "Specific stress-reduction tools",
            "Practical mindfulness integration"
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
        longDescription: "There is an unique energy that arises when we meditate together. These small group sessions are designed for 4 to 5 participants, ensuring that everyone receives personal attention while benefiting from the collective focus of the group. It's a perfect way to connect with like-minded individuals and grow together in a supportive community.",
        features: [
            "Collective energy focus",
            "Intimate group setting",
            "Shared experiences and discussions",
            "Guided group visualizations",
            "Weekly community connection",
            "Balanced group atmosphere"
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
        longDescription: "Productivity and well-being go hand in hand. Our corporate programs are tailored to the specific needs of your organization. I work alongside another experienced meditation coach to deliver high-impact sessions that reduce burnout, improve focus, and foster a healthier work culture. Please note that these sessions require booking at least one month in advance.",
        features: [
            "Customized wellness workshops",
            "Stress management for teams",
            "Leadership focus sessions",
            "Joint facilitation for depth",
            "Sustainability planning",
            "On-site or remote delivery"
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
        longDescription: "Sound is a powerful gateway to the present moment. In collaboration with our spiritual music band, we offer immersive meditation experiences where live music serves as the vehicle for your inward journey. Currently offered in person across Thailand and Southeast Asia, these sessions are a celebration of silence and sound.",
        features: [
            "Live spiritual music performance",
            "Deep sound immersion",
            "Guided musical movements",
            "In-person community experience",
            "Beautiful SEA locations",
            "Sensory spiritual awakening"
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
        longDescription: "Meditation isn't just about sitting still; it's about the movement of the soul. These workshops explore the intersection of sacred arts and mindfulness. Through meditative dance, movement, and self-exploration techniques, we learn to express our inner silence and discover new layers of our being.",
        features: [
            "Meditative movement and dance",
            "Self-discovery workshops",
            "Creative spiritual expression",
            "Emotional release through art",
            "Guided self-exploration",
            "Holistic heart-opening practices"
        ],
        color: "from-orange-500 to-amber-600"
    }
];

export default function ServiceDetailPage({ params }) {
    const { id } = use(params);
    const service = services.find(s => s.id === parseInt(id));

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F7F8ED]">
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-[#1A2E05] mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-[#4A6741] hover:text-[#C7DC49] transition-colors">
                        Return to Services
                    </Link>
                </div>
            </div>
        );
    }

    const IconComponent = service.icon;

    return (
        <main className="min-h-screen bg-white mt-40">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link 
                                href="/services"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span>Back to Services</span>
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
                                {service.title}
                            </h1>
                            <div className="flex flex-wrap justify-center gap-6 mt-6">
                                <div className="flex items-center gap-2 text-white/90">
                                    <Clock className="w-5 h-5 text-[#C7DC49]" />
                                    <span>{service.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <User className="w-5 h-5 text-[#C7DC49]" />
                                    <span>{service.level}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-3xl font-serif text-[#1A2E05] mb-8">About this Service</h2>
                                <p className="text-xl text-gray-700 leading-relaxed font-light mb-8">
                                    {service.longDescription}
                                </p>
                                
                                <div className="bg-[#F7F8ED] p-8 rounded-3xl mb-12">
                                    <h3 className="text-2xl font-serif text-[#1A2E05] mb-6">What to Expect</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {service.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-[#C7DC49] mt-1 flex-shrink-0" />
                                                <span className="text-gray-600 font-light">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-2xl font-serif text-[#1A2E05]">Preparation Tips</h3>
                                    <p className="text-gray-600 leading-relaxed font-light">
                                        To get the most out of your session, we recommend finding a quiet space where you won't be disturbed. Wear comfortable clothing and have a cushion or chair ready. A stable internet connection is required for online sessions.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar / Booking */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="sticky top-24 bg-white border border-[#F7F8ED] shadow-xl rounded-3xl p-8"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-4 bg-[#C7DC49]/10 rounded-2xl">
                                        <IconComponent className="w-8 h-8 text-[#4A6741]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[#4A6741] uppercase tracking-wider">Service Type</p>
                                        <p className="text-xl font-serif text-[#1A2E05]">{service.title}</p>
                                    </div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <button className="w-full bg-[#1A2E05] hover:bg-[#4A6741] text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                                        <Calendar className="w-5 h-5 text-[#C7DC49]" />
                                        <Link href="/contact">Book this Session</Link>
                                    </button>
                                    <button className="w-full border-2 border-[#1A2E05] text-[#1A2E05] hover:bg-[#F7F8ED] font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                                        <MessageCircle className="w-5 h-5" />
                                        <Link href="/contact">Inquire Details</Link>
                                    </button>
                                </div>

                                <div className="pt-8 border-t border-gray-100 italic text-gray-500 font-light text-center">
                                    "The present moment is the only time over which we have any control."
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
