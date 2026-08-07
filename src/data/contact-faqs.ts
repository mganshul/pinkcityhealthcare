import type { FAQ } from "@/data/faqs";

// Contact-process-focused questions only — deliberately distinct from the
// service/booking-focused FAQ set in src/data/faqs.ts (used on the
// homepage) so the two pages never repeat the same question.
export const contactFaqs: FAQ[] = [
  {
    question: "What are your business hours for contact?",
    answer:
      "Our care coordinators are available 24/7, every day of the week, including holidays. Messages sent outside regular hours are picked up as soon as our team is online.",
  },
  {
    question: "How quickly will I hear back after submitting the form?",
    answer:
      "We aim to respond to every enquiry within a few hours. For a faster response, call or WhatsApp us directly using the numbers on this page.",
  },
  {
    question: "Is the contact form the right way to reach you for an emergency?",
    answer:
      "For urgent or emergency care needs, please call us directly instead of using the form — our phone line is monitored around the clock for the fastest response.",
  },
  {
    question: "Do you respond to enquiries from outside Jaipur?",
    answer:
      "Yes. While Jaipur is our primary service area, we're happy to discuss home healthcare support in other cities on request — just mention your location in your message.",
  },
  {
    question: "Can I contact you with questions before booking a service?",
    answer:
      "Absolutely. Use this form or call us with any questions about our services, pricing, or availability before you decide to book an appointment.",
  },
  {
    question: "What should I include in my message?",
    answer:
      "Let us know what you're enquiring about and the best way to reach you. The more detail you share, the better prepared our team is when we call you back.",
  },
];
