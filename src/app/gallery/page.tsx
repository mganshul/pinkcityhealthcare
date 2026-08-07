import type { Metadata } from "next";
import { BadgeCheck, Lock, ShieldCheck, Stethoscope } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ContentSection } from "@/components/patterns/ContentSection";
import { CTASection } from "@/components/patterns/CTASection";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TrustBadge } from "@/components/common/TrustBadge";
import { GallerySection } from "@/components/gallery/GallerySection";
import { galleryItems } from "@/data/gallery";
import { phoneHref, siteConfig } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Gallery",
  description:
    "Take a closer look at Pink City Healthcare's caregiving services, professional healthcare team, medical equipment, and training in Jaipur.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Gallery"
          subtitle="Take a closer look at our caregiving services, professional healthcare team, medical equipment, and our commitment to compassionate home healthcare."
          breadcrumbs={[{ label: "Gallery" }]}
        />
      }
    >
      <ContentSection eyebrow="Our Gallery" title="A Closer Look at Care in Action">
        <p>
          From nursing visits and elder care to medical equipment and
          caregiver training, this gallery gives you a glimpse into how{" "}
          {siteConfig.name} delivers compassionate healthcare at home. Filter
          by category below, or click any image for a closer look.
        </p>
      </ContentSection>

      <Section id="gallery" className="bg-secondary/40">
        <SectionHeader
          eyebrow="Gallery"
          title="Caregiving, Equipment & Training"
          description="Real moments from our home healthcare services across Jaipur — photography is being added over time."
        />
        <div className="mt-10">
          <GallerySection items={galleryItems} />
        </div>
      </Section>

      <Section id="healthcare-commitment">
        <SectionHeader
          eyebrow="Our Commitment"
          title={`What ${siteConfig.name} Stands For`}
          description="Every visit, every caregiver, and every piece of equipment reflects the same standards."
        />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <TrustBadge icon={ShieldCheck} label="Professional Care" />
          <TrustBadge icon={BadgeCheck} label="Verified Staff" />
          <TrustBadge icon={Stethoscope} label="Safe Medical Practices" />
          <TrustBadge icon={Lock} label="Patient Privacy" />
        </div>
      </Section>

      <CTASection
        title="Ready to Experience Compassionate Care?"
        description="Speak with a care coordinator today and see the same standard of care for your family."
        primaryCta={{ label: "Book Appointment", href: "/appointment" }}
        secondaryCta={{ label: "Call Now", href: phoneHref }}
      />
    </PageLayout>
  );
}
