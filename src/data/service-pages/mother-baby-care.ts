import {
  Activity,
  Baby,
  CalendarCheck,
  Clock,
  HandHeart,
  Heart,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import type { ServicePageData } from "@/types/service-page";

// TODO: Placeholder content for development. Written to be professional and
// publish-ready, but review and replace with the client's own clinical
// details before this page goes live.
export const motherBabyCareServicePage: ServicePageData = {
  title: "Mother & Baby Care",
  slug: "mother-baby-care",
  description:
    "Our mother and baby care service supports new mothers and newborns in the first delicate weeks after delivery — combining postnatal recovery support for mom with newborn care guidance, so families can settle into this new chapter with confidence.",
  hero: {
    subtitle:
      "Gentle postnatal support for new mothers and newborns, right at home.",
    badge: "Mother & Baby Care",
  },
  benefits: [
    {
      icon: Heart,
      title: "Postnatal Recovery Support",
      description:
        "Help with rest, nutrition, and recovery care for mothers in the weeks after delivery.",
    },
    {
      icon: HandHeart,
      title: "Newborn Care Guidance",
      description:
        "Hands-on support with feeding, bathing, and soothing routines for first-time and experienced parents alike.",
    },
    {
      icon: ShieldCheck,
      title: "Trained Postnatal Caregivers",
      description:
        "Caregivers experienced specifically in postnatal and newborn care, not general nursing duties.",
    },
    {
      icon: Clock,
      title: "Round-the-Clock or Scheduled Support",
      description:
        "Support available for a few hours a day or overnight, depending on what the family needs most.",
    },
  ],
  whoNeedsThis: [
    {
      icon: UserRound,
      title: "First-Time Mothers",
      description:
        "New mothers who want a steady, experienced hand while learning newborn care routines.",
    },
    {
      icon: Baby,
      title: "Families With a Newborn at Home",
      description:
        "Parents needing extra support during the demanding early weeks after birth.",
    },
    {
      icon: Activity,
      title: "Mothers Recovering From C-Section or Delivery",
      description:
        "Mothers who need physical recovery support alongside newborn care responsibilities.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book an Appointment",
      description:
        "Share your due date or delivery date and the kind of support your family needs.",
    },
    {
      icon: MessageCircle,
      title: "Free Care Consultation",
      description:
        "A coordinator discusses your recovery needs and newborn care preferences.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Caregiver Assigned",
      description:
        "An experienced postnatal caregiver is matched to support both mother and baby.",
    },
    {
      icon: HeartHandshake,
      title: "Support Begins at Home",
      description:
        "Care begins at home, adjusting as the mother recovers and the baby settles into routine.",
    },
  ],
  faqs: [
    {
      question: "When should mother and baby care start after delivery?",
      answer:
        "Support can begin as soon as you're home from the hospital, and can continue for as many weeks as your family needs.",
    },
    {
      question: "Do caregivers help with breastfeeding support?",
      answer:
        "Our caregivers can support feeding routines and offer practical guidance, though for medical lactation concerns we recommend also consulting a lactation specialist.",
    },
    {
      question: "Is this service only for first-time mothers?",
      answer:
        "No, many experienced mothers also use this service for extra hands during a demanding recovery period, especially after a C-section or difficult delivery.",
    },
    {
      question:
        "Can the caregiver help with household tasks related to the baby, like laundry or sterilizing bottles?",
      answer:
        "Yes, caregivers can assist with baby-related tasks like bottle sterilizing and baby laundry as part of newborn care support.",
    },
  ],
  relatedServices: ["/services/home-nursing", "/services/patient-attendant"],
  seo: {
    title: "Mother & Baby Care at Home in Jaipur",
    description:
      "Postnatal care for new mothers and newborn support at home in Jaipur — recovery care, feeding guidance, and experienced caregivers.",
    keywords: [
      "Mother and Baby Care Jaipur",
      "Postnatal Care at Home Jaipur",
      "Newborn Care Jaipur",
    ],
  },
};
