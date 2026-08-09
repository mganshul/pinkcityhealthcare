import type { Metadata } from "next";
import {
  BadgeCheck,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ContentSection } from "@/components/patterns/ContentSection";
import { ImageTextSection } from "@/components/patterns/ImageTextSection";
import { CTASection } from "@/components/patterns/CTASection";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FeatureCard } from "@/components/sections/why-choose-us/FeatureCard";
import { phoneHref, siteConfig } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Learn why Pink City Healthcare was founded, our mission and values, and the team bringing professional home healthcare to families across Jaipur.",
  path: "/about",
});

// Placeholder brand copy for development — written to be professional and
// publish-ready, but easy to swap for the client's own words later.
const coreValues = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    description:
      "We treat every patient like family, with patience and genuine care — not just a checklist of tasks.",
  },
  {
    icon: BadgeCheck,
    title: "Professionalism",
    description:
      "Every caregiver is trained, verified, and held to a consistent standard of clinical care.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Families let us into their homes during vulnerable moments. We take that responsibility seriously, every visit.",
  },
  {
    icon: HandHeart,
    title: "Respect",
    description:
      "We honor each family's routines, preferences, and dignity — care on their terms, not ours.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="About Pink City Healthcare"
          subtitle="Compassionate healthcare delivered to families in Jaipur with professionalism, dignity, and care."
          breadcrumbs={[{ label: "About Us" }]}
        />
      }
    >
      <ImageTextSection
        eyebrow="Our Story"
        title="Why We Started Pink City Healthcare"
        image="/images/about/about-final.png"
        imageAlt="The Pink City Healthcare team"
      >
        <p>{siteConfig.story}</p>
        <p>
          Hospitals are built for emergencies. But most healthcare — recovery,
          aging, chronic care — happens at home, in familiar surroundings, with
          people who know and love the patient. That&apos;s the gap we set out
          to close in Jaipur.
        </p>
        <p>
          Every nurse, caregiver, and therapist we bring into a home is chosen
          for the same two things: clinical skill, and the patience to treat a
          family&apos;s home like the personal space it is.
        </p>
      </ImageTextSection>

      <ImageTextSection
        eyebrow="Our Mission"
        title="Bringing Hospital-Grade Care Home"
        imagePosition="left"
        image="/images/about/mission.png"
        imageAlt="The Pink City Healthcare Mission: Bringing Hospital-Grade Care Home"
      >
        <p>
          Our mission is to make professional, verified healthcare accessible
          inside the home, so families in Jaipur don&apos;t have to choose
          between quality care and the comfort of familiar surroundings.
        </p>
        <p>
          That means matching every family with a caregiver suited to their
          specific medical needs — not a generic assignment — and staying
          reachable for as long as that care is needed.
        </p>
      </ImageTextSection>

      <ContentSection
        eyebrow="Our Vision"
        title="A Trusted Name in Home Healthcare Across Jaipur"
      >
        <p>
          We want every family in Jaipur to think of Pink City Healthcare first
          — not because we&apos;re the loudest, but because we&apos;re
          consistently reliable, verified, and present when it matters.
        </p>
      </ContentSection>

      <Section id="core-values" className="bg-secondary/40">
        <SectionHeader
          eyebrow="Core Values"
          title="What Guides Our Care"
          description="Four principles every caregiver at Pink City Healthcare is chosen and trained around."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {coreValues.map((value) => (
            <FeatureCard key={value.title} {...value} />
          ))}
        </div>
      </Section>

      <ContentSection
        eyebrow="Why Choose Us"
        title="Why Families Trust Pink City Healthcare"
      >
        <p>
          Every caregiver we place is background-verified and clinically
          trained. Our coordinators are based in Jaipur and reachable 24×7, so a
          familiar voice is always a phone call away. And every care plan comes
          with clear, upfront pricing — no surprises, no hidden fees.
        </p>
      </ContentSection>

      <ImageTextSection
        eyebrow="Founder's Message"
        title="A Personal Note From Mr. Rizwan Khan"
        image="/images/about/founder.png"
        imageAlt="Mr. Rizwan Khan, Founder of Pink City Healthcare"
      >
        <p>
          I started Pink City Healthcare after seeing how difficult it was for
          families in Jaipur to find reliable, professional care at home — not
          just a hospital referral, but someone they could trust inside their
          own house. My goal has always been simple: every family we work with
          should feel as looked after as our own.
        </p>
        <p className="text-foreground">
          <strong className="font-semibold">{siteConfig.founder.name}</strong>
          <br />
          Founder, {siteConfig.name}
        </p>
      </ImageTextSection>

      <CTASection
        title="Ready to Talk to Our Care Team?"
        description="Speak with a coordinator today and we'll help you find the right care plan for your family."
        primaryCta={{ label: "Book Appointment", href: "/appointment" }}
        secondaryCta={{ label: "Call Now", href: phoneHref }}
      />
    </PageLayout>
  );
}
