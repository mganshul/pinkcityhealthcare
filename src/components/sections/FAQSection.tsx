import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, type FAQ } from "@/data/faqs";

function faqSlug(question: string) {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function FAQColumn({ items }: { items: FAQ[] }) {
  return (
    <div className="flex flex-col">
      {items.map((faq) => (
        <AccordionItem key={faq.question} value={faqSlug(faq.question)}>
          <AccordionTrigger className="text-foreground py-4 text-base font-semibold hover:no-underline sm:py-5">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-relaxed sm:text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </div>
  );
}

export function FAQSection() {
  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midpoint);
  const rightColumn = faqs.slice(midpoint);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Section id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SectionHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know before booking professional home healthcare services with Pink City Healthcare."
        titleId="faq-heading"
      />

      <Accordion
        type="single"
        collapsible
        className="mt-10 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:mt-14"
      >
        <FAQColumn items={leftColumn} />
        <FAQColumn items={rightColumn} />
      </Accordion>
    </Section>
  );
}
