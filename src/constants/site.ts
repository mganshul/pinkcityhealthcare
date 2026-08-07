// Single source of truth for all business information. Every component reads
// from this object (or the derived helpers below) rather than hardcoding
// contact/location details — update the client's details only here.
export const siteConfig = {
  name: "Pink City Healthcare",
  shortName: "Pink City Healthcare",
  domain: "pinkcityhealthcare.com",
  url: "https://pinkcityhealthcare.com",
  tagline: "Home Healthcare Services in Jaipur",
  description:
    "Providing professional home healthcare services in Jaipur — including home nursing, elder care, ICU care at home, physiotherapy, post-surgery care, and mother & baby care — with healthcare support available in other cities on request.",
  founder: {
    name: "Mr. Rizwan Khan",
  },
  // Ready for the About page / company-story section — kept here so the
  // wording stays consistent wherever the founder is introduced.
  story:
    "Founded by Mr. Rizwan Khan, Pink City Healthcare was established with a vision to bring compassionate, professional healthcare directly into the homes of families across Jaipur.",
  contact: {
    phone: "+91 8387863344",
    whatsapp: "+91 8387863344",
    email: "help@pinkcityhealthcare.com",
    address: {
      line1: "317, Sanjay Nagar D",
      line2: "Jhotwara",
      city: "Jaipur",
      state: "Rajasthan",
      pincode: "302012",
      country: "India",
    },
    businessHours: "Mon – Sun: 24/7 Available",
  },
  serviceArea: {
    primary: "Jaipur, Rajasthan",
    // The one approved way to talk about coverage outside Jaipur —
    // never market as pan-India.
    coverageNote:
      "Proudly serving families across Jaipur, with healthcare support available in other cities on request.",
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
