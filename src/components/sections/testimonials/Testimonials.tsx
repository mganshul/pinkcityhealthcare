import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TestimonialsCarousel } from "@/components/sections/testimonials/TestimonialsCarousel";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader
        eyebrow="Testimonials"
        title="What Families Are Saying"
        description="Real experiences from families across Jaipur who trusted us with the people they love most."
        titleId="testimonials-heading"
      />

      <div className="mt-10 lg:mt-14">
        <TestimonialsCarousel testimonials={testimonials} />
      </div>

      <p className="text-foreground mx-auto mt-12 max-w-xl text-center text-lg font-medium text-balance sm:text-xl lg:mt-16">
        Trusted by families across Jaipur for compassionate home healthcare.
      </p>
    </Section>
  );
}
