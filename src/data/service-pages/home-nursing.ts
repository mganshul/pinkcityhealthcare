import {
  Activity,
  CalendarCheck,
  Clock,
  Heart,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";
import type { ServicePageData } from "@/types/service-page";

// TODO: Placeholder content for development. Written to be professional and
// publish-ready, but review and replace with the client's own clinical
// details before this page goes live.
export const homeNursingServicePage: ServicePageData = {
  title: "Home Nursing Care",
  slug: "home-nursing",
  description:
    "Our home nursing service brings qualified, background-verified nurses directly to your family's home for everything from daily medical support to post-illness recovery — so your loved one gets hospital-standard care without leaving the comfort of home.",
  hero: {
    subtitle:
      "Skilled, compassionate nursing care in the comfort of your own home — available across Jaipur.",
    badge: "Home Nursing",
  },
  benefits: [
    {
      icon: Clock,
      title: "Care On Your Schedule",
      description:
        "Nursing visits arranged around your family's routine — daily, weekly, or around the clock.",
    },
    {
      icon: ShieldCheck,
      title: "Verified, Trained Nurses",
      description:
        "Every nurse is background-checked and experienced in home-based patient care.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Care Plans",
      description:
        "Each care plan is built around the patient's specific condition, not a generic checklist.",
    },
    {
      icon: Stethoscope,
      title: "Ongoing Medical Monitoring",
      description:
        "Vitals, medication schedules, and recovery progress tracked and reported clearly.",
    },
  ],
  whoNeedsThis: [
    {
      icon: UserRound,
      title: "Recovering From Illness or Surgery",
      description:
        "Patients who need professional monitoring and support during recovery at home.",
    },
    {
      icon: Heart,
      title: "Elderly Family Members",
      description:
        "Seniors who need regular medical attention but prefer staying at home.",
    },
    {
      icon: Activity,
      title: "Managing a Chronic Condition",
      description:
        "Patients who need consistent, skilled care for an ongoing health condition.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book an Appointment",
      description:
        "Call us or request nursing care online — tell us about the patient's condition.",
    },
    {
      icon: MessageCircle,
      title: "Free Care Consultation",
      description:
        "A care coordinator understands the specific nursing needs and recommends a plan.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Nurse Assigned",
      description:
        "A qualified, background-verified nurse suited to the case is matched to your family.",
    },
    {
      icon: HeartHandshake,
      title: "Care Begins at Home",
      description:
        "Nursing care starts at your home, with ongoing coordination and support.",
    },
  ],
  faqs: [
    {
      question: "What does a home nursing visit typically include?",
      answer:
        "A home nursing visit typically covers vital sign monitoring, medication administration, wound care if needed, and a general health assessment — tailored to what the patient's doctor has recommended.",
    },
    {
      question: "Can I book a nurse for just a few hours a day?",
      answer:
        "Yes. Home nursing can be arranged for a few hours a day, a full shift, or round-the-clock care, depending on what the patient needs.",
    },
    {
      question: "Are your home nursing staff qualified for post-surgery care?",
      answer:
        "Yes, our nurses are trained and experienced in post-surgical monitoring, wound care, and recovery support.",
    },
    {
      question: "How is a nurse matched to my case?",
      answer:
        "Our care coordinator reviews the patient's condition and matches a nurse with relevant clinical experience — not just the next available person.",
    },
  ],
  relatedServices: [
    "/services/elder-care",
    "/services/post-surgery-care",
    "/services/patient-attendant",
  ],
  seo: {
    title: "Home Nursing Care in Jaipur",
    description:
      "Professional, background-verified home nursing care in Jaipur — flexible scheduling, personalized care plans, and 24×7 support.",
    keywords: ["Home Nursing Jaipur", "Home Nurse Jaipur", "Nursing Care at Home"],
  },
};
