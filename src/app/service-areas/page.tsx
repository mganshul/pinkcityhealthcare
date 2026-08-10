import type { Metadata } from "next";
import {
  BadgeCheck,
  Clock,
  HandHeart,
  MapPin,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ContentSection } from "@/components/patterns/ContentSection";
import { CTASection } from "@/components/patterns/CTASection";
import { FAQAccordion } from "@/components/patterns/FAQAccordion";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TrustBadge } from "@/components/common/TrustBadge";
import { ServiceCard } from "@/components/sections/featured-services/ServiceCard";
import { AreaCard } from "@/components/sections/service-areas/AreaCard";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/service-areas";
import { serviceAreaFaqs } from "@/data/service-area-faqs";
import { phoneHref, siteConfig } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Service Areas",
  description:
    "PinkCity Healthcare provides home healthcare services across Jaipur — including Jhotwara, Vaishali Nagar, Mansarovar, and Malviya Nagar — with support available across India on request.",
  path: "/service-areas",
});

const popularServiceHrefs = [
  "/services/home-nursing",
  "/services/elder-care",
  "/services/icu-care",
  "/services/physiotherapy",
  "/services/post-surgery-care",
  "/services/patient-attendant",
];

const popularServices = popularServiceHrefs
  .map((href) => services.find((service) => service.href === href))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export default function ServiceAreasPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Service Areas"
          subtitle="Professional home healthcare services across Jaipur with support available across India on request."
          breadcrumbs={[{ label: "Service Areas" }]}
        />
      }
    >
      <ContentSection eyebrow="Where We Serve" title="Jaipur First, India on Request">
        <p>
          Jaipur is our primary service area, and it&apos;s where our care
          coordinators and caregivers know the city best — giving families
          across the city a fast, reliable response. Beyond Jaipur, we also
          support families across Rajasthan, and healthcare support can be
          arranged in other cities across India on request.
        </p>
      </ContentSection>

      <Section id="jaipur-areas" className="bg-secondary/40">
        <SectionHeader
          eyebrow="Jaipur Coverage"
          title="Neighborhoods We Regularly Serve"
          description="A sample of the Jaipur localities where our nurses and caregivers are already active — if you don&apos;t see yours listed, reach out and we&apos;ll confirm coverage."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <AreaCard key={area.name} area={area} />
          ))}
        </div>
      </Section>

      <Section id="popular-services">
        <SectionHeader
          eyebrow="Popular Services"
          title="Our Most-Requested Home Healthcare Services"
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popularServices.map((service) => (
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

      <Section id="why-families-choose-us" className="bg-secondary/40">
        <SectionHeader
          eyebrow="Why Families Across Jaipur Choose Us"
          title={`Trusted Home Healthcare Across ${siteConfig.serviceArea.primary}`}
        />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <TrustBadge icon={Zap} label="Fast Response" />
          <TrustBadge icon={ShieldCheck} label="Verified Caregivers" />
          <TrustBadge icon={Clock} label="24×7 Support" />
          <TrustBadge icon={BadgeCheck} label="Transparent Pricing" />
          <TrustBadge icon={MapPin} label="Jaipur Based" />
          <TrustBadge icon={HandHeart} label="Compassionate Care" />
        </div>
      </Section>

      <ContentSection eyebrow="Beyond Jaipur" title="Coverage Beyond Jaipur">
        <p>
          PinkCity Healthcare primarily serves Jaipur, where our full team of
          verified nurses and caregivers is based. For long-term care
          requirements outside the city, support can also be arranged across
          India based on availability — contact our care coordinators to
          discuss your family&apos;s location and needs.
        </p>
      </ContentSection>

      <Section id="service-area-faq" className="bg-secondary/40">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Service Areas — Common Questions"
        />
        <div className="mt-10">
          <FAQAccordion faqs={serviceAreaFaqs} />
        </div>
      </Section>

      <CTASection
        title="Looking for Home Healthcare in Your Area?"
        description="Tell us your location and care needs, and a coordinator will confirm availability for your family."
        primaryCta={{ label: "Book Appointment", href: "/appointment" }}
        secondaryCta={{ label: "Call Now", href: phoneHref }}
      />
    </PageLayout>
  );
}
