import { ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ContentSection } from "@/components/patterns/ContentSection";
import { CTASection } from "@/components/patterns/CTASection";
import { ProcessTimeline } from "@/components/patterns/ProcessTimeline";
import { FAQAccordion } from "@/components/patterns/FAQAccordion";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TrustBadge } from "@/components/common/TrustBadge";
import { FeatureCard } from "@/components/sections/why-choose-us/FeatureCard";
import { ServiceCard } from "@/components/sections/featured-services/ServiceCard";
import { services } from "@/data/services";
import { phoneHref, siteConfig } from "@/constants/site";
import type { ServicePageData } from "@/types/service-page";

interface ServicePageTemplateProps {
  data: ServicePageData;
}

// Everything a service page needs beyond content lives here — every one of
// the 14 services should only ever need a data file in
// src/data/service-pages/, never a new page-level component.
export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const relatedServices = services.filter((service) =>
    data.relatedServices.includes(service.href),
  );

  return (
    <PageLayout
      hero={
        <PageHero
          title={data.title}
          subtitle={data.hero.subtitle}
          badge={data.hero.badge}
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: data.title },
          ]}
        />
      }
    >
      <ContentSection title="Overview">
        <p>{data.description}</p>
      </ContentSection>

      <Section id="benefits" className="bg-secondary/40">
        <SectionHeader eyebrow="Benefits" title={`Benefits of ${data.title}`} />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {data.benefits.map((benefit) => (
            <FeatureCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </Section>

      <Section id="who-needs-this">
        <SectionHeader
          eyebrow="Who Needs This"
          title={`Who Needs ${data.title}?`}
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {data.whoNeedsThis.map((persona) => (
            <FeatureCard key={persona.title} {...persona} />
          ))}
        </div>
      </Section>

      <Section id="process" className="bg-secondary/40">
        <SectionHeader eyebrow="Our Process" title={`How ${data.title} Works`} />
        <ProcessTimeline steps={data.process} />
      </Section>

      <Section id="why-choose-us">
        <SectionHeader eyebrow="Why Choose Us" title={`Why Choose ${siteConfig.name}`} />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <TrustBadge icon={ShieldCheck} label="Verified & Background-Checked" />
          <TrustBadge icon={Clock} label="24×7 Support" />
          <TrustBadge icon={BadgeCheck} label="Transparent Pricing" />
        </div>
      </Section>

      <Section id="faq">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" />
        <FAQAccordion faqs={data.faqs} className="mt-10 lg:mt-14" />
      </Section>

      {relatedServices.length > 0 && (
        <Section id="related-services">
          <SectionHeader eyebrow="Related Services" title="You May Also Need" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {relatedServices.map((service) => (
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
      )}

      <CTASection
        title={`Ready to Book ${data.title}?`}
        description="Speak with a care coordinator today and we'll help you get started."
        primaryCta={{ label: "Book Appointment", href: "/book-appointment" }}
        secondaryCta={{ label: "Call Now", href: phoneHref }}
      />
    </PageLayout>
  );
}
