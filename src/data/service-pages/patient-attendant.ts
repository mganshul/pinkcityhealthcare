import {
  Activity,
  CalendarCheck,
  Clock,
  HandHeart,
  Heart,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";
import type { ServicePageData } from "@/types/service-page";

// TODO: Placeholder content for development. Written to be professional and
// publish-ready, but review and replace with the client's own clinical
// details before this page goes live.
export const patientAttendantServicePage: ServicePageData = {
  title: "Patient Attendant",
  slug: "patient-attendant",
  description:
    "Our patient attendant service provides trained, non-medical support for day-to-day patient needs — assisting with movement, meals, hygiene, and companionship, so families have reliable help without needing a full clinical nurse.",
  hero: {
    subtitle:
      "Reliable, trained support for daily patient needs — assistance, hygiene, and companionship at home.",
    badge: "Patient Attendant",
  },
  benefits: [
    {
      icon: HandHeart,
      title: "Hands-On Daily Assistance",
      description:
        "Support with movement, meals, hygiene, and general comfort throughout the day.",
    },
    {
      icon: Users,
      title: "Steady Companionship",
      description:
        "A consistent, familiar presence for patients who shouldn't be left alone for long stretches.",
    },
    {
      icon: Clock,
      title: "Flexible Shift Options",
      description:
        "Attendants available for day shifts, night shifts, or full 24-hour coverage.",
    },
    {
      icon: ShieldCheck,
      title: "Background-Verified Attendants",
      description:
        "Every attendant is screened and trained before being placed with a family.",
    },
  ],
  whoNeedsThis: [
    {
      icon: UserRound,
      title: "Patients Needing Daily Assistance",
      description:
        "Patients who are mobile but need help with routine tasks throughout the day.",
    },
    {
      icon: Activity,
      title: "Post-Hospitalization Support",
      description:
        "Patients home from the hospital who need consistent, non-medical help during recovery.",
    },
    {
      icon: Heart,
      title: "Families Needing Overnight Coverage",
      description:
        "Families who need someone present overnight for safety and reassurance.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book an Appointment",
      description:
        "Tell us the patient's daily support needs and preferred shift timing.",
    },
    {
      icon: MessageCircle,
      title: "Free Care Consultation",
      description:
        "A coordinator understands the patient's routine and the kind of support required.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Attendant Assigned",
      description:
        "A trained, background-verified attendant suited to the case is matched to your family.",
    },
    {
      icon: HeartHandshake,
      title: "Support Begins at Home",
      description:
        "The attendant begins assisting with daily needs, with regular coordinator check-ins.",
    },
  ],
  faqs: [
    {
      question: "What's the difference between a patient attendant and a nurse?",
      answer:
        "A patient attendant provides non-medical daily support like mobility assistance and companionship, while a nurse handles clinical tasks like medication and wound care. Many families use both together.",
    },
    {
      question: "Can I book an attendant for just overnight hours?",
      answer:
        "Yes, attendants can be booked for specific shifts, including overnight-only coverage.",
    },
    {
      question: "Are attendants trained to handle patients with limited mobility?",
      answer:
        "Yes, our attendants are trained in safe mobility assistance and transfer techniques for patients with limited movement.",
    },
    {
      question: "Can the attendant also help with light meal preparation?",
      answer:
        "Yes, attendants can help prepare simple meals and assist with feeding if needed.",
    },
  ],
  relatedServices: [
    "/services/home-nursing",
    "/services/elder-care",
    "/services/bedridden-patient-care",
  ],
  seo: {
    title: "Patient Attendant Services in Jaipur",
    description:
      "Trained, background-verified patient attendants in Jaipur — daily assistance, companionship, and flexible shift coverage.",
    keywords: [
      "Patient Attendant Jaipur",
      "Patient Attendant Services Jaipur",
      "Attendant for Patient at Home Jaipur",
    ],
  },
};
