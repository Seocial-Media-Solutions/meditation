import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import Philosophy from '@/components/about/Philosophy';
import Practice from '@/components/about/Practice';
import WhyMeditation from '@/components/about/WhyMeditation';
import Experience from '@/components/about/Experience';
import FutureVision from '@/components/about/FutureVision';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
    title: 'About Us | A Journey Inward',
    description: 'Meditation as a lived experience — nurturing inner peace, collective harmony, and a more conscious way of living.',
};

export default function AboutPage() {
    return (
        <main className="bg-white">
            <AboutHero />
            <OurStory />
            <Philosophy />
            <Practice />
            <WhyMeditation />
            <Experience />
            <FutureVision />
            <AboutCTA />
        </main>
    );
}
