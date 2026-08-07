import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ContentSection } from "@/components/patterns/ContentSection";
import { CTASection } from "@/components/patterns/CTASection";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceCard } from "@/components/sections/featured-services/ServiceCard";
import { services } from "@/data/services";
import { phoneHref, siteConfig } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Healthcare Services",
  description:
    "Explore all 14 home healthcare services from Pink City Healthcare — nursing, elder care, ICU care at home, physiotherapy, and more across Jaipur.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Healthcare Services"
          subtitle="Professional home healthcare services designed to meet every stage of patient care."
          breadcrumbs={[{ label: "Services" }]}
        />
      }
    >
      <ContentSection title="Care Built Around Your Family, Not a Package">
        <p>
          Home healthcare brings hospital-quality medical support directly
          into your family&apos;s living room — no waiting rooms, no
          unfamiliar surroundings. We proudly serve families across{" "}
          {siteConfig.serviceArea.primary}, matching each one with a care
          plan built around their specific needs rather than a
          one-size-fits-all package.
        </p>
      </ContentSection>

      <Section id="all-services">
        <SectionHeader
          eyebrow="All Services"
          title="Every Way We Support Your Family"
          description="From short-term recovery support to long-term nursing care, here's everything we offer."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.href}
              title={service.label}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </Section>

      <ContentSection eyebrow="How We Help" title="The Same Simple Process, Every Time">
        <p>
          Every service starts the same way: you book an appointment, our
          care coordinator understands your needs in a free consultation, a
          verified nurse or caregiver is assigned, and care begins at your
          home — usually within 24 hours.
        </p>
      </ContentSection>

      <ContentSection
        eyebrow="Need Help Choosing?"
        title="Not Sure Which Service Is Right?"
        className="bg-secondary/40"
      >
        <p>
          Many families aren&apos;t sure which service fits their situation —
          and that&apos;s expected. Our healthcare coordinators are trained
          to listen to your patient&apos;s condition and recommend the right
          service, whether that&apos;s a single service or a combination of
          several.
        </p>
      </ContentSection>

      <CTASection
        title="Ready to Get the Right Care for Your Family?"
        description="Speak with a care coordinator today and we'll help you choose the right service."
        primaryCta={{ label: "Book Appointment", href: "/book-appointment" }}
        secondaryCta={{ label: "Call Now", href: phoneHref }}
      />
    </PageLayout>
  );
}
