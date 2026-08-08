import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ContentSection } from "@/components/patterns/ContentSection";
import { CTASection } from "@/components/patterns/CTASection";
import { Section } from "@/components/common/Section";
import { LegalSection } from "@/components/legal/LegalSection";
import { TableOfContents } from "@/components/legal/TableOfContents";
import { phoneHref } from "@/constants/site";
import type { LegalPageData } from "@/data/legal/types";

interface LegalPageTemplateProps {
  content: LegalPageData;
}

// The single template behind all three legal pages (Privacy Policy, Terms
// & Conditions, Refund Policy) — mirrors how ServicePageTemplate drives the
// 14 service pages from one shared layout. Each route only supplies its
// own LegalPageData; nothing about the layout is repeated per page.
export function LegalPageTemplate({ content }: LegalPageTemplateProps) {
  const tocItems = content.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));

  return (
    <PageLayout
      hero={
        <PageHero
          title={content.title}
          breadcrumbs={[{ label: content.title }]}
        />
      }
    >
      <ContentSection
        eyebrow={content.title}
        title="Please Read This Policy Carefully"
      >
        <p>{content.intro}</p>
      </ContentSection>

      <Section id="legal-content">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] lg:items-start lg:gap-16">
          <TableOfContents
            items={tocItems}
            className="lg:sticky lg:top-28 lg:order-2"
          />

          <div className="flex flex-col gap-12 lg:order-1">
            <p className="text-muted-foreground text-sm font-medium">
              Last Updated: {content.lastUpdated}
            </p>
            {content.sections.map((section) => (
              <LegalSection key={section.id} {...section} />
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        variant="light"
        title="Questions About This Policy?"
        description="Our team is happy to help clarify anything in this policy."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Call Now", href: phoneHref }}
      />
    </PageLayout>
  );
}
