import {
  Activity,
  CalendarCheck,
  Clock,
  HandHeart,
  HeartHandshake,
  MessageCircle,
  Pill,
  ShieldCheck,
  UserRound,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import type { ServicePageData } from "@/types/service-page";

// TODO: Placeholder content for development. Written to be professional and
// publish-ready, but review and replace with the client's own clinical
// details before this page goes live.
export const elderCareServicePage: ServicePageData = {
  title: "Elder Care",
  slug: "elder-care",
  description:
    "Our elder care service provides dignified, day-to-day support for seniors at home — from mobility assistance to companionship — helping aging parents stay safe, comfortable, and independent without leaving the home they know.",
  hero: {
    subtitle:
      "Compassionate daily support that helps seniors live safely and comfortably at home.",
    badge: "Elder Care",
  },
  benefits: [
    {
      icon: HandHeart,
      title: "Dignified Daily Support",
      description:
        "Help with mobility, hygiene, and daily routines delivered with patience and respect.",
    },
    {
      icon: ShieldCheck,
      title: "Fall & Safety Monitoring",
      description:
        "Caregivers trained to reduce fall risk and respond quickly if something goes wrong.",
    },
    {
      icon: Users,
      title: "Companionship That Matters",
      description:
        "Regular company and conversation, not just task-based care — loneliness is a health issue too.",
    },
    {
      icon: Clock,
      title: "Flexible Visit Schedules",
      description:
        "From a few hours a day to full-time live-in support, arranged around your family's needs.",
    },
    {
      icon: Pill,
      title: "Medication & Appointment Reminders",
      description:
        "Gentle reminders that help seniors stay on track with medications and doctor appointments.",
    },
    {
      icon: UtensilsCrossed,
      title: "Nutritious Meal Support",
      description:
        "Help with meal planning and preparation to support proper nutrition and hydration.",
    },
  ],
  whoNeedsThis: [
    {
      icon: UserRound,
      title: "Seniors Living Alone",
      description:
        "Older adults who need daily check-ins and support but want to remain independent at home.",
    },
    {
      icon: Activity,
      title: "Managing Age-Related Conditions",
      description:
        "Seniors managing arthritis, limited mobility, or other ongoing age-related health needs.",
    },
    {
      icon: HeartHandshake,
      title: "Families Living Out of Town",
      description:
        "Adult children who can't be physically present but want a trusted, verified presence for their parents.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book an Appointment",
      description:
        "Call us or request elder care online and tell us about your parent's daily needs.",
    },
    {
      icon: MessageCircle,
      title: "Free Care Consultation",
      description:
        "A care coordinator learns about your parent's routine, health, and personality to find the right match.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Caregiver Assigned",
      description:
        "A background-verified, experienced elder caregiver is matched based on your parent's needs.",
    },
    {
      icon: HeartHandshake,
      title: "Care Begins at Home",
      description:
        "Daily support begins, with regular updates so you always know how your parent is doing.",
    },
  ],
  faqs: [
    {
      question: "Can elder care include help with bathing and dressing?",
      answer:
        "Yes, our caregivers assist with bathing, dressing, grooming, and other daily living activities while respecting your parent's dignity and preferences.",
    },
    {
      question: "Do you provide overnight or live-in elder care?",
      answer:
        "Yes, we offer flexible arrangements including overnight support and full-time live-in caregivers, depending on what your family needs.",
    },
    {
      question: "What if my parent needs medical monitoring, not just daily support?",
      answer:
        "If ongoing medical monitoring is needed, we can pair elder care with our home nursing service for combined support.",
    },
    {
      question: "How do you choose the right caregiver for my parent?",
      answer:
        "We consider your parent's personality, routine, and specific needs — not just availability — when matching a caregiver.",
    },
  ],
  relatedServices: [
    "/services/home-nursing",
    "/services/patient-attendant",
    "/services/dementia-care",
  ],
  seo: {
    title: "Elder Care Services in Jaipur",
    description:
      "Compassionate, verified elder care at home in Jaipur — daily support, companionship, and safety monitoring for aging parents.",
    keywords: ["Elder Care Jaipur", "Senior Care at Home Jaipur", "Elderly Caregiver Jaipur"],
  },
};
