export type TestimonialCategory =
  | "home-nursing"
  | "elder-care"
  | "icu-care"
  | "physiotherapy"
  | "post-surgery"
  | "patient-attendant"
  | "other";

export interface Testimonial {
  name: string;
  initials: string;
  relationship: string;
  area: string;
  service: string;
  category: TestimonialCategory;
  quote: string;
  rating: number;
  isFeatured: boolean;
}

// Single source of truth for every testimonial shown on the site — the
// homepage carousel (Testimonials.tsx) and the /testimonials page both read
// from here instead of keeping their own copies.
export const testimonials: Testimonial[] = [
  {
    name: "Priya S.",
    initials: "PS",
    relationship: "Daughter of patient",
    area: "Vaishali Nagar",
    service: "Elder Care",
    category: "elder-care",
    quote:
      "My mother needed someone she could trust with her daily routine, not just her medicine schedule. The caregiver they sent understood that from day one — she still calls to check on her on days she isn't scheduled.",
    rating: 5,
    isFeatured: true,
  },
  {
    name: "Ramesh K.",
    initials: "RK",
    relationship: "Son of patient",
    area: "Mansarovar",
    service: "Post Surgery Care",
    category: "post-surgery",
    quote:
      "After my father's knee surgery, we had no idea how to manage the recovery at home. The nurse who came was patient with all our questions and caught a wound issue early that our surgeon later said mattered a lot.",
    rating: 5,
    isFeatured: true,
  },
  {
    name: "Anjali M.",
    initials: "AM",
    relationship: "Wife of patient",
    area: "Malviya Nagar",
    service: "Physiotherapy",
    category: "physiotherapy",
    quote:
      "My husband was reluctant to do his physiotherapy exercises until his therapist figured out how to make him actually look forward to the sessions. Small thing, but it changed everything for his recovery.",
    rating: 4,
    isFeatured: false,
  },
  {
    name: "Suresh P.",
    initials: "SP",
    relationship: "Son of patient",
    area: "Jhotwara",
    service: "ICU Care at Home",
    category: "icu-care",
    quote:
      "Moving my mother's ICU care home instead of keeping her in the hospital felt risky at first. The team walked us through exactly what equipment and monitoring would be in place before we agreed to anything.",
    rating: 5,
    isFeatured: false,
  },
  {
    name: "Neha T.",
    initials: "NT",
    relationship: "New mother",
    area: "C-Scheme",
    service: "Mother & Baby Care",
    category: "other",
    quote:
      "First-time mothers get a lot of advice nobody asked for. What I needed was someone who'd actually done this before, sitting next to me at 3am. That's what I got.",
    rating: 5,
    isFeatured: false,
  },
  {
    name: "Vikram J.",
    initials: "VJ",
    relationship: "Son of patient",
    area: "Vidhyadhar Nagar",
    service: "Home Nursing",
    category: "home-nursing",
    quote:
      "My father lives alone, and I live in another city. Having a nurse who checks in on him daily and actually calls me if something feels off has genuinely changed how I sleep at night.",
    rating: 5,
    isFeatured: true,
  },
  {
    name: "Meena D.",
    initials: "MD",
    relationship: "Daughter of patient",
    area: "Jagatpura",
    service: "Patient Attendant",
    category: "patient-attendant",
    quote:
      "We needed someone to help with my father's daily needs while I was at work. His attendant is punctual, gentle, and treats him with real dignity — not just as a task to complete.",
    rating: 5,
    isFeatured: false,
  },
  {
    name: "Arjun B.",
    initials: "AB",
    relationship: "Son of patient",
    area: "Raja Park",
    service: "Elder Care",
    category: "elder-care",
    quote:
      "My grandmother is particular about her routine, and I was worried a stranger wouldn't have the patience for it. Her caregiver learned her habits within the first week and now she looks forward to their time together.",
    rating: 5,
    isFeatured: false,
  },
  {
    name: "Kavita R.",
    initials: "KR",
    relationship: "Daughter of patient",
    area: "Tonk Road",
    service: "ICU Care at Home",
    category: "icu-care",
    quote:
      "Bringing ICU-level care home for my mother felt overwhelming to plan. The nurse explained every piece of equipment and never made us feel like we were asking too many questions.",
    rating: 4,
    isFeatured: false,
  },
];

export const testimonialFilters: {
  label: string;
  value: TestimonialCategory | "all";
}[] = [
  { label: "All", value: "all" },
  { label: "Home Nursing", value: "home-nursing" },
  { label: "Elder Care", value: "elder-care" },
  { label: "ICU Care", value: "icu-care" },
  { label: "Physiotherapy", value: "physiotherapy" },
  { label: "Post Surgery", value: "post-surgery" },
  { label: "Patient Attendant", value: "patient-attendant" },
];
