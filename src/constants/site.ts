// TODO: Replace placeholder contact details with the client's real business information.
export const siteConfig = {
  name: "Pink City Healthcare",
  shortName: "Pink City Healthcare",
  domain: "pinkcityhealthcare.com",
  url: "https://pinkcityhealthcare.com",
  tagline: "Professional Home Healthcare Services",
  description:
    "Providing professional healthcare services at home including nursing staff, elder care, ICU care, physiotherapy, doctor visits, post-surgery care, mother & baby care, attendants and medical equipment.",
  contact: {
    phone: "+91 00000 00000",
    whatsapp: "+91 00000 00000",
    email: "info@pinkcityhealthcare.com",
    address: {
      line1: "Address line 1",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302001",
      country: "India",
    },
    businessHours: "Mon – Sun: 24/7 Available",
  },
  social: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    youtube: "",
  },
} as const;

// Centralized so tel:/wa.me href formatting isn't re-derived at every call site.
export const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`;
export const whatsappDigits = siteConfig.contact.whatsapp.replace(/\D/g, "");
