import type { FAQ } from "@/data/faqs";

// Location-coverage questions only — phrased distinctly from the homepage
// FAQ set (src/data/faqs.ts) and the contact FAQ set (contact-faqs.ts) so
// no question is repeated verbatim across pages.
export const serviceAreaFaqs: FAQ[] = [
  {
    question: "Do you provide services throughout Jaipur?",
    answer:
      "Yes. We regularly serve neighborhoods across Jaipur, including Jhotwara, Vaishali Nagar, Mansarovar, Malviya Nagar, C-Scheme, and many more listed on this page — and we're happy to confirm coverage for your specific locality.",
  },
  {
    question: "How quickly can someone reach my home?",
    answer:
      "In most parts of Jaipur, we can arrange a caregiver visit within a few hours of your call. For urgent or ICU-level needs, our coordinators prioritize same-day placement wherever possible.",
  },
  {
    question: "Do you provide services outside Jaipur?",
    answer:
      "Jaipur is our primary and best-covered service area, but home healthcare support can be arranged in other cities across Rajasthan and India on request — reach out and we'll confirm what's possible for your location.",
  },
  {
    question: "Do you visit nearby towns close to Jaipur?",
    answer:
      "Yes, on request. If your family is just outside Jaipur's city limits, contact our care coordinators and we'll let you know about availability and any additional planning needed.",
  },
  {
    question: "Can I book care from another city for my parents living in Jaipur?",
    answer:
      "Absolutely — many of our bookings come from adult children coordinating care for parents remotely. We keep you updated throughout, even if you're not in Jaipur yourself.",
  },
  {
    question: "Is there an extra charge for areas farther from the city center?",
    answer:
      "Our pricing stays transparent regardless of neighborhood. If a specific location requires special coordination, our team will always explain this clearly before your care plan is confirmed.",
  },
];
