import { formattedAddress, siteConfig } from "@/constants/site";
import type { LegalPageData } from "@/data/legal/types";

// Placeholder legal content, written to be structurally complete and
// publish-ready — but not a substitute for review by a qualified legal
// professional before this site goes live in production.
export const refundPolicyContent: LegalPageData = {
  title: "Refund Policy",
  description:
    "Learn about Pink City Healthcare's appointment cancellation and refund eligibility, processing time, and how emergency service requests are handled.",
  lastUpdated: "August 10, 2026",
  intro:
    "This Refund Policy explains how appointment cancellations and any related refunds are handled at Pink City Healthcare. It applies alongside our Terms & Conditions.",
  sections: [
    {
      id: "appointment-cancellation",
      title: "Appointment Cancellation",
      paragraphs: [
        "Appointments can be cancelled or rescheduled by contacting our care coordinators directly by phone, WhatsApp, or our contact form. We ask for as much advance notice as possible so caregiver availability can be reallocated to other families.",
      ],
    },
    {
      id: "refund-eligibility",
      title: "Refund Eligibility",
      paragraphs: [
        "Because payment terms are agreed directly with your care coordinator rather than processed through this website, refund eligibility is assessed case by case based on the specific arrangement made for your service.",
      ],
      list: [
        "Cancellations made with reasonable advance notice are generally eligible for a full refund of any amount already paid",
        "Cancellations made after a caregiver has already been assigned or dispatched may be subject to a partial refund",
        "Services already delivered are not eligible for a refund",
      ],
    },
    {
      id: "processing-time",
      title: "Processing Time",
      paragraphs: [
        "Approved refunds are typically processed within 7–10 business days, depending on the original payment method used.",
      ],
    },
    {
      id: "emergency-services",
      title: "Emergency Services",
      paragraphs: [
        "Urgent or emergency care requests are handled with priority and may involve different cancellation and refund considerations given the immediate nature of the care arranged. Our care coordinator will explain the applicable terms at the time of your request.",
      ],
    },
    {
      id: "payment-gateway",
      title: "Payment Gateway",
      paragraphs: [
        "This website does not currently process payments through an online payment gateway — all payments are currently arranged directly with our team. This policy will be updated to reflect the applicable gateway terms if and when online payments are introduced.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        "For any questions about a cancellation or refund, please get in touch with us directly.",
        `Email: ${siteConfig.contact.email}`,
        `Phone: ${siteConfig.contact.phone}`,
        `Address: ${formattedAddress}`,
      ],
    },
  ],
};
