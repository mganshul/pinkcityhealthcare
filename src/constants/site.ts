// Single source of truth for all business information. Every component reads
// from this object (or the derived helpers below) rather than hardcoding
// contact/location details — update the client's details only here.
export const siteConfig = {
  name: "PinkCity Healthcare",
  shortName: "PinkCity Healthcare",
  domain: "pinkcityhealthcare.com",
  url: "https://pinkcityhealthcare.com",
  tagline: "Compassionate Healthcare at Home",
  description:
    "Providing professional home healthcare services in Jaipur — including home nursing, elder care, ICU care at home, physiotherapy, post-surgery care, and mother & baby care — with healthcare support available in other cities on request.",
  founder: {
    name: "Mr. Rizwan Khan",
  },
  // Leadership team, alongside the founder above — kept here so the Our
  // Team page (and anywhere else leadership is introduced) reads from one
  // source instead of hardcoding the name.
  director: {
    name: "Mrs. Naziya Khan",
  },
  // Ready for the About page / company-story section — kept here so the
  // wording stays consistent wherever the founder is introduced.
  story:
    "Founded by Mr. Rizwan Khan, PinkCity Healthcare was established with a vision to bring compassionate, professional healthcare directly into the homes of families across Jaipur.",
  contact: {
    phone: "+91 8387863344",
    whatsapp: "+91 8387863344",
    email: "help@pinkcityhealthcare.com",
    // Founder's personal inbox — also copied on every admin form
    // notification (see adminNotificationRecipients below), but never used
    // as a customer-facing reply address.
    founderEmail: "mohmmadrizwankhansk@gmail.com",
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
    // Secondary coverage only — Jaipur must always stay the primary
    // marketing focus, this is a supporting "on request" note, not a
    // pan-India headline.
    coverageNote: "Support available across India on request.",
  },
  // Real profile URLs — centralized here so every link (header, footer,
  // future pages) updates in one place if an account changes.
  social: {
    facebook: "https://www.facebook.com/pinkcityhealthcare",
    instagram: "https://www.instagram.com/pinkcity.healthcare",
    google: "https://share.google/OhIIf0w065enDgetF",
    whatsapp: "https://wa.me/918387863344",
  },
} as const;

// Every "new contact message / appointment / job application" admin
// notification goes to all of these — the business inbox plus the
// founder's personal email — so it's defined once and reused across
// src/lib/email/{contact,appointment,career}.ts rather than duplicated.
export const adminNotificationRecipients = [
  siteConfig.contact.email,
  siteConfig.contact.founderEmail,
];

// Centralized so tel:/wa.me href formatting isn't re-derived at every call site.
export const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`;
export const whatsappDigits = siteConfig.contact.whatsapp.replace(/\D/g, "");

// Single formatted address string — the Footer, Contact page business card,
// and Google Maps links/embeds all read from this instead of re-joining
// siteConfig.contact.address fields independently.
export const formattedAddress = `${siteConfig.contact.address.line1}, ${siteConfig.contact.address.line2}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.state} ${siteConfig.contact.address.pincode}`;

// Includes the business name (not just the address) so the map pin resolves
// to the right place rather than just a street segment.
export const googleMapsQuery = encodeURIComponent(
  `${siteConfig.name}, ${formattedAddress}`
);
export const googleMapsHref = `https://www.google.com/maps/search/?api=1&query=${googleMapsQuery}`;
