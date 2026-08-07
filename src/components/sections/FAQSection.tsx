import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FAQAccordion } from "@/components/patterns/FAQAccordion";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/constants/site";

export function FAQSection() {
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description={`Everything you need to know before booking professional home healthcare services with ${siteConfig.name}.`}
        titleId="faq-heading"
      />

      <FAQAccordion
        faqs={faqs}
        className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:mt-14"
      />
    </Section>
  );
}
