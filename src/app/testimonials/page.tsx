import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { CTASection } from "@/components/patterns/CTASection";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Statistics } from "@/components/sections/statistics/Statistics";
import { TestimonialCard } from "@/components/sections/testimonials/TestimonialCard";
import { TestimonialsGrid } from "@/components/sections/testimonials/TestimonialsGrid";
import { testimonials } from "@/data/testimonials";
import { phoneHref, siteConfig, whatsappDigits } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Patient & Family Testimonials",
  description:
    "Read what families across Jaipur say about their experience with Pink City Healthcare's home nursing, elder care, ICU care, and physiotherapy services.",
  path: "/testimonials",
});

const featuredTestimonials = testimonials.filter((item) => item.isFeatured);

const shareExperienceWhatsappMessage = encodeURIComponent(
  `Hi ${siteConfig.name}, I'd like to share feedback about my experience with your care team.`
);

export default function TestimonialsPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Patient & Family Testimonials"
          subtitle="Read what families across Jaipur say about their experience with Pink City Healthcare."
          breadcrumbs={[{ label: "Testimonials" }]}
        />
      }
    >
      <Section id="featured-testimonials">
        <SectionHeader
          eyebrow="Featured Stories"
          title="Families Share Their Experience"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              {...testimonial}
              size="large"
            />
          ))}
        </div>
      </Section>

      <Section id="all-testimonials" className="bg-secondary/40">
        <SectionHeader
          eyebrow="All Testimonials"
          title="More Stories From Families We've Served"
          description="Filter by service to read experiences most relevant to your family's needs."
        />
        <div className="mt-10">
          <TestimonialsGrid testimonials={testimonials} />
        </div>
      </Section>

      <Statistics />

      <CTASection
        id="share-your-experience"
        variant="light"
        title="Had a Great Experience With Us?"
        description="We'd love to hear about it. Reach out and share your feedback with our care team."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{
          label: "WhatsApp Us",
          href: `https://wa.me/${whatsappDigits}?text=${shareExperienceWhatsappMessage}`,
        }}
      />

      <CTASection
        title="Experience Compassionate Care at Home"
        description="Join the families across Jaipur who trust Pink City Healthcare for professional, compassionate home healthcare."
        primaryCta={{ label: "Book Appointment", href: "/appointment" }}
        secondaryCta={{ label: "Call Now", href: phoneHref }}
      />
    </PageLayout>
  );
}
