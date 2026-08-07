import {
  Activity,
  Baby,
  Bandage,
  Bed,
  BedDouble,
  Brain,
  FlaskConical,
  Heart,
  HeartPulse,
  Home,
  PersonStanding,
  Stethoscope,
  Syringe,
  UserRound,
} from "lucide-react";
import type { ServiceNavItem } from "@/types/navigation";

// Canonical service catalog — the single source of truth for every service
// name, slug, description, and icon. Other lists (nav menu, footer, future
// service pages) should import and reuse this rather than redeclaring it.
export const services: ServiceNavItem[] = [
  {
    label: "Home Nursing Care",
    href: "/services/home-nursing",
    description: "Skilled nursing care in the comfort of your home",
    icon: Home,
  },
  {
    label: "Elder Care",
    href: "/services/elder-care",
    description: "Compassionate, dignified care for senior citizens",
    icon: Heart,
  },
  {
    label: "ICU Care at Home",
    href: "/services/icu-care",
    description: "Critical care support with certified ICU nurses",
    icon: Activity,
  },
  {
    label: "Physiotherapy at Home",
    href: "/services/physiotherapy",
    description: "Recovery and mobility care from expert therapists",
    icon: PersonStanding,
  },
  {
    label: "Mother & Baby Care",
    href: "/services/mother-baby-care",
    description: "Postnatal support for new mothers and newborns",
    icon: Baby,
  },
  {
    label: "Post Surgery Care",
    href: "/services/post-surgery-care",
    description: "Recovery care and monitoring after surgery",
    icon: Bandage,
  },
  {
    label: "Patient Attendant",
    href: "/services/patient-attendant",
    description: "Trained attendants for daily patient assistance",
    icon: UserRound,
  },
  {
    label: "Doctor Visit at Home",
    href: "/services/doctor-visit",
    description: "On-demand consultations with qualified doctors",
    icon: Stethoscope,
  },
  {
    label: "Medical Equipment Rental",
    href: "/services/medical-equipment",
    description: "Rental & delivery of home medical equipment",
    icon: Bed,
  },
  {
    label: "Lab Test at Home",
    href: "/services/lab-test",
    description: "Sample collection and diagnostics at home",
    icon: FlaskConical,
  },
  {
    label: "Injection at Home",
    href: "/services/injection-at-home",
    description: "Safe, professional injection administration",
    icon: Syringe,
  },
  {
    label: "Palliative Care",
    href: "/services/palliative-care",
    description: "Comfort-focused care for serious or chronic illness",
    icon: HeartPulse,
  },
  {
    label: "Dementia Care",
    href: "/services/dementia-care",
    description: "Specialized, patient support for memory-related conditions",
    icon: Brain,
  },
  {
    label: "Bedridden Patient Care",
    href: "/services/bedridden-patient-care",
    description: "Full-time care and monitoring for bedridden patients",
    icon: BedDouble,
  },
];
