import BenefitsSection from "@/components/homepage/BenefitsSection";
import CTASection from "@/components/homepage/CTASection";
import EverydayLifeSection from "@/components/homepage/EverydayLifeSection";
import YogaFAQSection from "@/components/homepage/FAQSection";
import HealingSection from "@/components/homepage/HealingSection";
import Hero from "@/components/homepage/Hero";
import IntroductionSection from "@/components/homepage/IntroductionSection";
import MeditationSection from "@/components/homepage/MeditationSection";
import SahajaYogaSection from "@/components/homepage/SahajaYogaSection";
import TeacherSection from "@/components/homepage/TeacherSection";


export default function Home() {
  return (
    <>
      <Hero />
      <IntroductionSection />
      <MeditationSection />
      <BenefitsSection />
      <HealingSection />
      <EverydayLifeSection />
      <TeacherSection />
      <SahajaYogaSection />
      <CTASection />
      <YogaFAQSection />
    </>
  );
}
