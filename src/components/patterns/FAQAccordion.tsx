import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/data/faqs";
import { cn } from "@/lib/utils";

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

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

// Shared two-column accordion + FAQPage JSON-LD — used by the homepage FAQ
// section and every service page. One FAQ rendering implementation, many
// different data sets, so the interaction/animation/accessibility behavior
// (keyboard nav, reduced motion) stays identical everywhere it appears.
export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Accordion
        type="single"
        collapsible
        className={cn("grid grid-cols-1 gap-x-10 sm:grid-cols-2", className)}
      >
        <FAQColumn items={leftColumn} />
        <FAQColumn items={rightColumn} />
      </Accordion>
    </>
  );
}
