import { formattedAddress, siteConfig } from "@/constants/site";
import type { LegalPageData } from "@/data/legal/types";

// Placeholder legal content, written to be structurally complete and
// publish-ready — but not a substitute for review by a qualified legal
// professional before this site goes live in production.
export const privacyPolicyContent: LegalPageData = {
  title: "Privacy Policy",
  description:
    "Read how PinkCity Healthcare collects, uses, and protects your personal information when you use our website and home healthcare services.",
  lastUpdated: "August 10, 2026",
  intro:
    "This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, book an appointment, or otherwise get in touch with us.",
  sections: [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: [
        "We collect information you choose to share with us directly, primarily through our appointment, contact, and careers forms.",
      ],
      list: [
        "Full name, mobile number, and email address",
        "Home address and city, when required to arrange a home visit",
        "Details about the healthcare service you're requesting",
        "Messages, questions, or additional notes you submit through our forms",
        "For job applicants: work experience, qualifications, and your uploaded resume",
      ],
    },
    {
      id: "how-information-is-used",
      title: "How Information Is Used",
      paragraphs: [
        "We use the information you provide to respond to your enquiry, coordinate the healthcare services you request, and keep you informed about your appointment or application.",
        "We do not sell your personal information, and we do not use it for purposes unrelated to the service you contacted us about.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      paragraphs: [
        "Our website uses only the minimal cookies and local storage required for core functionality, such as remembering your interface preferences. We do not use invasive third-party advertising or tracking cookies.",
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      paragraphs: [
        "Information submitted through our forms is stored using industry-standard infrastructure with access controls that restrict who can view it — only authorized team members can access appointment, contact, and application data.",
        "While we take reasonable technical and organizational measures to protect your data, no method of electronic storage or transmission is completely secure.",
      ],
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      paragraphs: [
        "We rely on trusted third-party providers to operate our website and communicate with you, including database and hosting infrastructure, email delivery services, and WhatsApp messaging. These providers only receive the information necessary to perform their function and are bound by their own privacy and security practices.",
      ],
    },
    {
      id: "whatsapp-communication",
      title: "WhatsApp Communication",
      paragraphs: [
        "Where our website offers a WhatsApp button, clicking it opens a chat through WhatsApp's own service. Any messages you send us this way are handled according to WhatsApp's (Meta's) privacy policy, in addition to this one.",
      ],
    },
    {
      id: "appointment-data",
      title: "Appointment Data",
      paragraphs: [
        "Information submitted through our appointment form — including the patient's name, contact details, preferred date and time, address, and care needs — is used solely to coordinate and deliver the requested home healthcare service, and is retained only as long as necessary for that purpose.",
      ],
    },
    {
      id: "contact-forms",
      title: "Contact Forms",
      paragraphs: [
        "Messages submitted through our contact form are used only to respond to your enquiry. We do not add contact form submissions to a marketing list or share them with third parties for marketing purposes.",
      ],
    },
    {
      id: "email-communication",
      title: "Email Communication",
      paragraphs: [
        "We send transactional emails only — for example, confirming that we've received your appointment request or application. We do not send unsolicited marketing emails without your consent.",
      ],
    },
    {
      id: "user-rights",
      title: "User Rights",
      paragraphs: [
        "You have the right to request access to the personal information we hold about you, to ask us to correct inaccurate information, to request deletion of your data, and to withdraw any consent you've previously given.",
        `To exercise any of these rights, contact us at ${siteConfig.contact.email}.`,
      ],
    },
    {
      id: "policy-updates",
      title: "Policy Updates",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. The latest version will always be posted on this page, along with the date it was last updated.",
      ],
    },
    {
      id: "contact-information",
      title: "Contact Information",
      paragraphs: [
        `If you have any questions about this Privacy Policy or how we handle your information, please reach out to ${siteConfig.name}.`,
        `Email: ${siteConfig.contact.email}`,
        `Phone: ${siteConfig.contact.phone}`,
        `Address: ${formattedAddress}`,
      ],
    },
  ],
};
