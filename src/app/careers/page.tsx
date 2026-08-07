import type { Metadata } from "next";
import {
  Clock3,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  TrendingUp,
  Users,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/patterns/CTASection";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FeatureCard } from "@/components/sections/why-choose-us/FeatureCard";
import { CareerOpeningsSection } from "@/components/careers/CareerOpeningsSection";
import { jobs } from "@/data/careers";
import { phoneHref } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers",
  description:
    "Join the Pink City Healthcare team in Jaipur — explore current openings for nurses, caregivers, and healthcare professionals and apply online.",
  path: "/careers",
});

const whyWorkWithUs = [
  {
    icon: TrendingUp,
    title: "Professional Growth",
    description:
      "Take on real clinical responsibility from day one, with a clear path to grow your career in home healthcare.",
  },
  {
    icon: Clock3,
    title: "Flexible Working Environment",
    description:
      "Full-time and part-time roles with shift options built around real life, not just a fixed roster.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Team",
    description:
      "Work alongside coordinators and caregivers who treat every patient — and every colleague — like family.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "Ongoing training and hands-on experience across a wide range of home healthcare specialties.",
  },
  {
    icon: HeartPulse,
    title: "Meaningful Healthcare Impact",
    description:
      "See the direct difference your care makes in a patient's recovery and a family's peace of mind.",
  },
  {
    icon: Users,
    title: "Supportive Work Culture",
    description:
      "A team that backs you with clear communication, fair scheduling, and coordinators who are always reachable.",
  },
];

const activeJobs = jobs.filter((job) => job.isActive);

export default function CareersPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Join Our Team"
          subtitle="Become part of Pink City Healthcare and help us deliver compassionate home healthcare services across Jaipur."
          breadcrumbs={[{ label: "Careers" }]}
        />
      }
    >
      <Section id="why-work-with-us">
        <SectionHeader
          eyebrow="Why Work With Us"
          title="A Team Built Around Compassionate Care"
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {whyWorkWithUs.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      <Section id="current-openings" className="bg-secondary/40">
        <SectionHeader
          eyebrow="Current Openings"
          title="Explore Opportunities at Pink City Healthcare"
          description="Click Apply Now on any role below to submit your application — no page reload, no separate account needed."
        />
        <div className="mt-10">
          <CareerOpeningsSection jobs={activeJobs} />
        </div>
      </Section>

      <CTASection
        title="Ready to Join Pink City Healthcare?"
        description="Explore our current openings above, or reach out directly if you have questions about working with us."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Call Now", href: phoneHref }}
      />
    </PageLayout>
  );
}
