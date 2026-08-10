import { formattedAddress, siteConfig } from "@/constants/site";
import type { LegalPageData } from "@/data/legal/types";

// Placeholder legal content, written to be structurally complete and
// publish-ready — but not a substitute for review by a qualified legal
// professional before this site goes live in production.
export const termsAndConditionsContent: LegalPageData = {
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions that apply to using the PinkCity Healthcare website and booking our home healthcare services.",
  lastUpdated: "August 10, 2026",
  intro:
    "These Terms & Conditions govern your use of our website and the home healthcare services offered by PinkCity Healthcare. By using this website or requesting our services, you agree to the terms below.",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      paragraphs: [
        "By accessing this website, submitting a form, or requesting our services, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions.",
      ],
    },
    {
      id: "medical-disclaimer",
      title: "Medical Disclaimer",
      paragraphs: [
        "The content on this website is provided for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified physician regarding any medical condition.",
        "Our home healthcare services are delivered by trained professionals, but this website itself does not provide emergency medical care. If you or someone you're caring for is experiencing a medical emergency, please call your local emergency services or a hospital immediately.",
      ],
    },
    {
      id: "appointment-booking",
      title: "Appointment Booking",
      paragraphs: [
        "Submitting our appointment form is a request for service, not a confirmed booking. A care coordinator will contact you to confirm availability, discuss your needs, and finalize the details before any service begins.",
      ],
    },
    {
      id: "cancellation",
      title: "Cancellation",
      paragraphs: [
        "You may cancel or reschedule a requested appointment by contacting us directly by phone, WhatsApp, or our contact form. We ask that you provide as much notice as possible so we can reallocate caregiver availability to other families.",
      ],
    },
    {
      id: "payments",
      title: "Payments",
      paragraphs: [
        "Payment terms for our services are discussed and agreed upon directly with your care coordinator. Our website does not currently process online payments.",
      ],
    },
    {
      id: "user-responsibilities",
      title: "User Responsibilities",
      list: [
        "Provide accurate and complete information when submitting any form on this website",
        "Use this website only for lawful purposes",
        "Do not attempt to misuse, disrupt, or gain unauthorized access to any part of this website",
        "Notify us promptly of any change in circumstances relevant to your requested care",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      paragraphs: [
        `All content on this website — including text, graphics, logos, and branding — is the property of ${siteConfig.name} unless otherwise stated, and may not be reproduced or used without our prior written permission.`,
      ],
    },
    {
      id: "website-usage",
      title: "Website Usage",
      paragraphs: [
        "You agree not to use this website in any way that could damage, disable, or impair its functionality, or interfere with any other party's use of it, including through automated scraping or attempted unauthorized access.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      paragraphs: [
        `${siteConfig.name} provides this website and its content on an "as is" basis. While we take care to keep information accurate and our services professional, we do not guarantee that the website will be error-free or uninterrupted, and we are not liable for any indirect or consequential loss arising from its use, to the fullest extent permitted by law.`,
      ],
    },
    {
      id: "changes",
      title: "Changes to These Terms",
      paragraphs: [
        "We may update these Terms & Conditions from time to time. Continued use of this website or our services after any changes constitutes acceptance of the revised terms. The date at the top of this page reflects the most recent update.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        "If you have any questions about these Terms & Conditions, please reach out to us.",
        `Email: ${siteConfig.contact.email}`,
        `Phone: ${siteConfig.contact.phone}`,
        `Address: ${formattedAddress}`,
      ],
    },
  ],
};
