export type GalleryCategory =
  | "home-nursing"
  | "elder-care"
  | "icu-care"
  | "physiotherapy"
  | "medical-equipment"
  | "training"
  | "community-care";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  description: string;
  /**
   * Short, descriptive stand-in for the real photograph — written so it can
   * become the `alt` text the day this field is swapped for a real
   * `imageUrl` and rendered with next/image. No stock photography is used;
   * every card renders the same "photo coming soon" placeholder box today.
   */
  imagePlaceholder: string;
  featured: boolean;
}

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  "home-nursing": "Home Nursing",
  "elder-care": "Elder Care",
  "icu-care": "ICU Care",
  physiotherapy: "Physiotherapy",
  "medical-equipment": "Medical Equipment",
  training: "Training",
  "community-care": "Community Care",
};

export const galleryFilters: {
  label: string;
  value: GalleryCategory | "all";
}[] = [
  { label: "All", value: "all" },
  { label: "Home Nursing", value: "home-nursing" },
  { label: "Elder Care", value: "elder-care" },
  { label: "ICU Care", value: "icu-care" },
  { label: "Physiotherapy", value: "physiotherapy" },
  { label: "Medical Equipment", value: "medical-equipment" },
  { label: "Training", value: "training" },
  { label: "Community Care", value: "community-care" },
];

// Single source of truth for the /gallery page. Every entry uses a
// placeholder image today (see GalleryCard) — swap imagePlaceholder for a
// real imageUrl per item when photography is available; the card layout
// and aspect ratio are already built to accept that without changes.
export const galleryItems: GalleryItem[] = [
  {
    id: "home-nursing-visit",
    title: "In-Home Nursing Visit",
    category: "home-nursing",
    description:
      "A registered nurse checking vitals and reviewing the day's care plan with a patient at home.",
    imagePlaceholder: "Nurse taking a patient's vitals in a home setting",
    featured: true,
  },
  {
    id: "medication-administration",
    title: "Medication Administration",
    category: "home-nursing",
    description:
      "Careful, on-schedule medication management as part of a patient's daily nursing routine.",
    imagePlaceholder: "Nurse preparing and administering medication",
    featured: false,
  },
  {
    id: "companionship-support",
    title: "Companionship & Daily Support",
    category: "elder-care",
    description:
      "A caregiver assisting an elderly patient with daily routines, conversation, and company.",
    imagePlaceholder: "Caregiver spending time with an elderly patient",
    featured: true,
  },
  {
    id: "assisted-mobility-care",
    title: "Assisted Mobility Care",
    category: "elder-care",
    description:
      "Gentle, hands-on support helping a senior patient move safely around their home.",
    imagePlaceholder: "Caregiver assisting a senior patient with mobility",
    featured: false,
  },
  {
    id: "icu-monitoring",
    title: "ICU-Level Monitoring at Home",
    category: "icu-care",
    description:
      "Continuous, hospital-grade monitoring delivered by a certified ICU care nurse at the bedside.",
    imagePlaceholder: "ICU nurse monitoring equipment beside a patient's bed",
    featured: true,
  },
  {
    id: "critical-care-equipment-setup",
    title: "Critical Care Equipment Setup",
    category: "icu-care",
    description:
      "Our team setting up and calibrating critical care equipment for a home ICU arrangement.",
    imagePlaceholder: "Technician setting up home ICU equipment",
    featured: false,
  },
  {
    id: "guided-mobility-session",
    title: "Guided Mobility Session",
    category: "physiotherapy",
    description:
      "A physiotherapist guiding a patient through mobility exercises during a home visit.",
    imagePlaceholder: "Physiotherapist guiding a patient through an exercise",
    featured: false,
  },
  {
    id: "post-injury-rehabilitation",
    title: "Post-Injury Rehabilitation",
    category: "physiotherapy",
    description:
      "Structured rehabilitation support helping a patient regain strength after an injury.",
    imagePlaceholder: "Physiotherapy session focused on rehabilitation",
    featured: false,
  },
  {
    id: "hospital-bed-setup",
    title: "Hospital Bed Setup",
    category: "medical-equipment",
    description:
      "A home hospital bed being set up and adjusted for a patient's comfort and safety.",
    imagePlaceholder: "Medical equipment team setting up a hospital bed at home",
    featured: false,
  },
  {
    id: "oxygen-concentrator-delivery",
    title: "Oxygen Concentrator Delivery",
    category: "medical-equipment",
    description:
      "Timely delivery and setup of an oxygen concentrator as part of a patient's care plan.",
    imagePlaceholder: "Technician delivering and setting up an oxygen concentrator",
    featured: false,
  },
  {
    id: "caregiver-skills-training",
    title: "Caregiver Skills Training",
    category: "training",
    description:
      "Our caregivers taking part in ongoing skills training to keep every home visit consistent and safe.",
    imagePlaceholder: "Caregivers in a skills training session",
    featured: true,
  },
  {
    id: "cpr-emergency-training",
    title: "CPR & Emergency Response Training",
    category: "training",
    description:
      "Hands-on CPR and emergency response training, part of every caregiver's certification.",
    imagePlaceholder: "Training session on CPR and emergency response",
    featured: false,
  },
  {
    id: "community-health-camp",
    title: "Community Health Camp",
    category: "community-care",
    description:
      "Our team hosting a free community health check-up camp for families in Jaipur.",
    imagePlaceholder: "Community health camp with families being checked up",
    featured: false,
  },
  {
    id: "senior-wellness-outreach",
    title: "Senior Wellness Outreach",
    category: "community-care",
    description:
      "A wellness outreach session focused on senior health awareness in a local neighborhood.",
    imagePlaceholder: "Senior wellness outreach session in the community",
    featured: false,
  },
  {
    id: "home-nursing-family-briefing",
    title: "Family Care Briefing",
    category: "home-nursing",
    description:
      "A nurse walking a patient's family through the day's care plan before starting a visit.",
    imagePlaceholder: "Nurse briefing a patient's family on the care plan",
    featured: false,
  },
  {
    id: "elder-care-mealtime-support",
    title: "Mealtime Support",
    category: "elder-care",
    description:
      "A caregiver assisting an elderly patient with a nutritious, comfortable mealtime.",
    imagePlaceholder: "Caregiver assisting a senior patient during a meal",
    featured: false,
  },
];
