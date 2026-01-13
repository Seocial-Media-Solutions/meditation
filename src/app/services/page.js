import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
    title: "Meditation & Yoga Services | Classes, Workshops & Retreats",
    description:
        "Explore our comprehensive meditation and yoga services including guided sessions, workshops, retreats, and personalized coaching for all experience levels.",
    keywords: [
        "meditation classes",
        "yoga services",
        "meditation workshops",
        "yoga retreats",
        "mindfulness coaching",
        "group meditation",
        "private yoga sessions",
        "spiritual guidance",
    ].join(", "),
    openGraph: {
        title: "Meditation & Yoga Services | Transform Your Practice",
        description:
            "Discover our range of meditation and yoga services designed to support your journey to inner peace and wellness",
        type: "website",
        url: "https://yoursite.com/services",
        images: [
            {
                url: "/images/services-og.jpg",
                width: 1200,
                height: 630,
                alt: "Meditation & Yoga Services",
            },
        ],
        siteName: "Meditation & Yoga Sanctuary",
    },
    alternates: {
        canonical: "https://yoursite.com/services",
    },
    robots: {
        index: true,
        follow: true,
    },
    twitter: {
        card: "summary_large_image",
        title: "Meditation & Yoga Services",
        description:
            "Transform your practice with our comprehensive meditation and yoga services",
        images: ["/images/services-og.jpg"],
    },
    other: {
        "application-name": "Meditation & Yoga Sanctuary",
        author: "Meditation Guide",
        generator: "Next.js",
        "theme-color": "#C7DC49",
    },
};

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesGrid />
            <ServicesCTA />
        </>
    );
}
