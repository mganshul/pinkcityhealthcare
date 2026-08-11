import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ImageTextSection } from "@/components/patterns/ImageTextSection";
import { CTASection } from "@/components/patterns/CTASection";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TeamMemberCard } from "@/components/sections/care-team/TeamMemberCard";
import { teamMembers } from "@/data/team";
import { siteConfig } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Team",
  description:
    "Meet the compassionate, professionally trained nurses, caregivers, and specialists behind PinkCity Healthcare's home healthcare services in Jaipur.",
  path: "/our-team",
});

export default function OurTeamPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Meet Our Team"
          subtitle="The compassionate professionals behind PinkCity Healthcare, dedicated to providing trusted, respectful care to every family we serve."
          breadcrumbs={[{ label: "Our Team" }]}
        />
      }
    >
      <ImageTextSection
        eyebrow="Our Leadership"
        title="Meet Our Founder"
        image="/images/about/founder.png"
        imageAlt={`${siteConfig.founder.name}, Founder of ${siteConfig.name}`}
      >
        <p>
          {siteConfig.founder.name} founded {siteConfig.name} to bring
          hospital-grade care into Jaipur homes — the same standard of
          professionalism and compassion every member of our team is trained
          to uphold.
        </p>
        <p className="text-foreground">
          <strong className="font-semibold">{siteConfig.founder.name}</strong>
          <br />
          Founder, {siteConfig.name}
        </p>
        <Link
          href="/about"
          className="text-primary focus-visible:ring-ring inline-flex items-center gap-1.5 rounded-md text-base font-semibold outline-none hover:underline focus-visible:ring-3 focus-visible:ring-offset-2"
        >
          Read Our Full Story
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </ImageTextSection>

      <ImageTextSection
        eyebrow="Our Leadership"
        title="Meet Our Director"
        imagePosition="left"
        image="/images/staff/staff1.png"
        imageAlt={`${siteConfig.director.name}, Director at ${siteConfig.name}`}
        imageObjectPosition="top"
      >
        <p>
          {siteConfig.director.name} leads {siteConfig.name}&apos;s
          day-to-day operations, working closely with our care coordinators
          and nursing staff to make sure every family receives the same
          standard of compassionate, professional care.
        </p>
        <p className="text-foreground">
          <strong className="font-semibold">{siteConfig.director.name}</strong>
          <br />
          Director, {siteConfig.name}
        </p>
      </ImageTextSection>

      <Section id="team" className="bg-secondary/40">
        <SectionHeader
          eyebrow="Our Team"
          title="The People Behind Your Care"
          description="Every nurse, caregiver, and specialist at PinkCity Healthcare is background-verified, professionally trained, and selected for genuine compassion — the same team caring for your family, every visit."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.role} {...member} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Need Professional Care at Home?"
        description="Our team is ready to understand your needs and help you find the right care for your loved one."
        primaryCta={{ label: "Book Appointment", href: "/appointment" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </PageLayout>
  );
}
