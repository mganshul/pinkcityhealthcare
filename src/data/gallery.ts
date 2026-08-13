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
   * Short, descriptive stand-in for the real photograph — becomes the
   * fallback "photo coming soon" caption for entries that don't have a real
   * `image` yet. Omit once `image` is set.
   */
  imagePlaceholder?: string;
  /** Real photo path in /public, e.g. "/images/gallery/Elder-care.jpg". Omit to keep the "Photo coming soon" placeholder box. */
  image?: string;
  /** Descriptive alt text for the real photo — required alongside `image`. */
  imageAlt?: string;
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

// Single source of truth for the /gallery page. Training and Community Care
// have no real photos yet — their filter pills stay listed above (via
// galleryFilters) and simply show zero results until entries are added here.
export const galleryItems: GalleryItem[] = [
  {
    id: "elder-care-at-home",
    title: "Compassionate Elder Care at Home",
    category: "elder-care",
    description:
      "Personalized assistance and companionship to help seniors feel comfortable, supported, and cared for at home.",
    image: "/images/gallery/Elder-care.jpg",
    imageAlt: "Elder care and daily assistance provided at home",
    featured: true,
  },
  {
    id: "daily-support-assisted-care",
    title: "Daily Support & Assisted Care",
    category: "home-nursing",
    description:
      "Compassionate at-home support with meals, personal assistance, and everyday care for elderly patients.",
    image: "/images/gallery/Home-Nursing.jpg",
    imageAlt: "Caregiver providing daily support to an elderly patient at home",
    featured: true,
  },
  {
    id: "professional-nursing-care",
    title: "Professional Nursing Care",
    category: "home-nursing",
    description:
      "Skilled nursing support delivered with attention to patient comfort, hygiene, and safety.",
    image: "/images/gallery/Home-Nursing2.jpg",
    imageAlt: "Nurse providing professional patient care at home",
    featured: false,
  },
  {
    id: "patient-care-clinical-assistance",
    title: "Patient Care & Clinical Assistance",
    category: "home-nursing",
    description:
      "Trained healthcare support focused on safe, attentive, and compassionate patient care.",
    image: "/images/gallery/Home-Nursing3.jpg",
    imageAlt: "Healthcare professional providing patient care",
    featured: false,
  },
  {
    id: "bedside-nursing-care",
    title: "Compassionate Bedside Nursing Care",
    category: "home-nursing",
    description:
      "Attentive nursing support focused on patient comfort, observation, and safe bedside care at home.",
    image: "/images/gallery/Home-Nursing4.jpg",
    imageAlt: "Nurse providing attentive bedside care to a patient",
    featured: false,
  },
  {
    id: "in-home-nursing-support",
    title: "In-Home Nursing Support",
    category: "home-nursing",
    description:
      "Professional nursing assistance delivered in the comfort of home, with a focus on patient safety, comfort, and continuity of care.",
    image: "/images/gallery/Home-nursing-care.jpg",
    imageAlt: "Professional home nursing care for a patient",
    featured: false,
  },
  {
    id: "patient-monitoring-clinical-care",
    title: "Patient Monitoring & Clinical Care",
    category: "icu-care",
    description:
      "Professional nursing care with vital-sign monitoring and clinical assistance for patients requiring closer observation.",
    image: "/images/gallery/ICU-care.jpg",
    imageAlt: "Nurse monitoring a patient's vital signs during care",
    featured: true,
  },
  {
    id: "clinical-nursing-feeding-support",
    title: "Clinical Nursing & Feeding Support",
    category: "icu-care",
    description:
      "Professional nursing support for patients requiring specialized clinical care and feeding assistance.",
    image: "/images/gallery/ICU-care1.jpg",
    imageAlt: "Nurse providing clinical patient care and feeding support",
    featured: false,
  },
  {
    id: "critical-care-nursing-support",
    title: "Critical Care Nursing Support",
    category: "icu-care",
    description:
      "Dedicated nursing assistance for patients requiring close monitoring and specialized critical care support at home.",
    image: "/images/gallery/ICU-care2.jpg",
    imageAlt: "Nurse providing critical care support to a patient",
    featured: false,
  },
  {
    id: "patient-monitoring-oxygen-support",
    title: "Patient Monitoring & Oxygen Support",
    category: "medical-equipment",
    description:
      "Essential medical equipment including patient monitoring and oxygen support for home-based care.",
    image: "/images/gallery/medical-equipment1.jpg",
    imageAlt: "Patient monitoring and oxygen equipment for home healthcare",
    featured: true,
  },
  {
    id: "hospital-bed-for-home-care",
    title: "Hospital Bed for Home Care",
    category: "medical-equipment",
    description:
      "Hospital-style patient bed designed to provide comfort, positioning, and safer care in a home environment.",
    image: "/images/gallery/medical-equipment3.jpg",
    imageAlt: "Hospital bed for home healthcare and patient care",
    featured: false,
  },
  {
    id: "medical-equipment-for-home-care",
    title: "Medical Equipment for Home Care",
    category: "medical-equipment",
    description:
      "Essential healthcare equipment designed to support safe, comfortable, and effective patient care at home.",
    image: "/images/gallery/medical-equipment2.jpg",
    imageAlt: "Medical equipment used for home healthcare",
    featured: false,
  },
  {
    id: "physiotherapy-mobility-support",
    title: "Physiotherapy & Mobility Support",
    category: "physiotherapy",
    description:
      "Personalized exercises and guided movement to support strength, mobility, balance, and recovery.",
    image: "/images/gallery/physiotherapist.jpg",
    imageAlt: "Physiotherapist assisting a patient with mobility exercises",
    featured: true,
  },
];
