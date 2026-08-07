import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TestimonialsCarousel } from "@/components/sections/testimonials/TestimonialsCarousel";

const testimonials = [
  {
    name: "Priya S.",
    initials: "PS",
    relationship: "Daughter of patient",
    area: "Vaishali Nagar",
    service: "Elder Care",
    quote:
      "My mother needed someone she could trust with her daily routine, not just her medicine schedule. The caregiver they sent understood that from day one — she still calls to check on her on days she isn't scheduled.",
  },
  {
    name: "Ramesh K.",
    initials: "RK",
    relationship: "Son of patient",
    area: "Mansarovar",
    service: "Post Surgery Care",
    quote:
      "After my father's knee surgery, we had no idea how to manage the recovery at home. The nurse who came was patient with all our questions and caught a wound issue early that our surgeon later said mattered a lot.",
  },
  {
    name: "Anjali M.",
    initials: "AM",
    relationship: "Wife of patient",
    area: "Malviya Nagar",
    service: "Physiotherapy",
    quote:
      "My husband was reluctant to do his physiotherapy exercises until his therapist figured out how to make him actually look forward to the sessions. Small thing, but it changed everything for his recovery.",
  },
  {
    name: "Suresh P.",
    initials: "SP",
    relationship: "Son of patient",
    area: "Jhotwara",
    service: "ICU Care at Home",
    quote:
      "Moving my mother's ICU care home instead of keeping her in the hospital felt risky at first. The team walked us through exactly what equipment and monitoring would be in place before we agreed to anything.",
  },
  {
    name: "Neha T.",
    initials: "NT",
    relationship: "New mother",
    area: "C-Scheme",
    service: "Mother & Baby Care",
    quote:
      "First-time mothers get a lot of advice nobody asked for. What I needed was someone who'd actually done this before, sitting next to me at 3am. That's what I got.",
  },
  {
    name: "Vikram J.",
    initials: "VJ",
    relationship: "Son of patient",
    area: "Vidhyadhar Nagar",
    service: "Home Nursing",
    quote:
      "My father lives alone, and I live in another city. Having a nurse who checks in on him daily and actually calls me if something feels off has genuinely changed how I sleep at night.",
  },
];

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
