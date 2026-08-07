import { Hero } from "@/components/sections/hero/Hero";
import { UrgentCareStrip } from "@/components/sections/UrgentCareStrip";
import { WhoWeHelp } from "@/components/sections/who-we-help/WhoWeHelp";
import { WhyChooseUs } from "@/components/sections/why-choose-us/WhyChooseUs";
import { HowItWorks } from "@/components/sections/how-it-works/HowItWorks";
import { FeaturedServices } from "@/components/sections/featured-services/FeaturedServices";
import { Statistics } from "@/components/sections/statistics/Statistics";
import { CareTeam } from "@/components/sections/care-team/CareTeam";
import { Testimonials } from "@/components/sections/testimonials/Testimonials";
import { FAQSection } from "@/components/sections/FAQSection";
import { HealthTips } from "@/components/sections/health-tips/HealthTips";

export default function Home() {
  return (
    <>
      <Hero />
      <UrgentCareStrip />
      <WhoWeHelp />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedServices />
      <Statistics />
      <CareTeam />
      <Testimonials />
      <FAQSection />
      <HealthTips />
    </>
  );
}
