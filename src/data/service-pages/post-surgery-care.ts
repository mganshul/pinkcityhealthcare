import {
  Activity,
  Bandage,
  CalendarCheck,
  Clock,
  Heart,
  HeartHandshake,
  MessageCircle,
  PersonStanding,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import type { ServicePageData } from "@/types/service-page";

// TODO: Placeholder content for development. Written to be professional and
// publish-ready, but review and replace with the client's own clinical
// details before this page goes live.
export const postSurgeryCareServicePage: ServicePageData = {
  title: "Post Surgery Care",
  slug: "post-surgery-care",
  description:
    "Our post surgery care service supports patients through recovery at home with wound care, medication management, and mobility support — helping reduce complications and hospital readmissions after a procedure.",
  hero: {
    subtitle:
      "Guided recovery support at home after surgery, from wound care to mobility.",
    badge: "Post Surgery Care",
  },
  benefits: [
    {
      icon: Bandage,
      title: "Professional Wound Care",
      description:
        "Dressing changes and wound monitoring to reduce infection risk during recovery.",
    },
    {
      icon: Clock,
      title: "Medication & Schedule Management",
      description:
        "Timely medication administration and reminders, tracked and reported clearly.",
    },
    {
      icon: PersonStanding,
      title: "Guided Mobility Support",
      description:
        "Safe assistance getting up, moving, and following any physiotherapy recommendations.",
    },
    {
      icon: ShieldCheck,
      title: "Early Complication Detection",
      description:
        "Trained caregivers who can spot early signs of infection or complications and act quickly.",
    },
  ],
  whoNeedsThis: [
    {
      icon: UserRound,
      title: "Recently Discharged Patients",
      description:
        "Patients sent home after surgery who need monitored recovery support.",
    },
    {
      icon: Activity,
      title: "Major Surgery Recovery",
      description:
        "Patients recovering from orthopedic, cardiac, or abdominal surgery needing close attention.",
    },
    {
      icon: Heart,
      title: "Elderly Post-Surgical Patients",
      description:
        "Older patients who need extra support and monitoring during a more delicate recovery.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book an Appointment",
      description:
        "Share your surgeon's discharge instructions and recovery timeline with us.",
    },
    {
      icon: MessageCircle,
      title: "Free Care Consultation",
      description:
        "Our coordinator reviews the surgical procedure and recommended aftercare with you.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Nurse Assigned",
      description:
        "A nurse experienced in post-surgical recovery is matched to the patient's specific procedure.",
    },
    {
      icon: HeartHandshake,
      title: "Recovery Support Begins at Home",
      description:
        "Wound care, medication, and mobility support begin, following your surgeon's plan.",
    },
  ],
  faqs: [
    {
      question: "How soon after surgery can care start at home?",
      answer:
        "Care can typically begin the same day as hospital discharge — we coordinate timing around your surgeon's release.",
    },
    {
      question: "Can you follow a specific surgeon's post-op instructions?",
      answer:
        "Yes, our nurses follow the discharge plan and aftercare instructions provided by your surgeon or hospital.",
    },
    {
      question: "How long does post surgery care typically continue?",
      answer:
        "It depends on the procedure — some patients need a few days of support, others need several weeks. We adjust as recovery progresses.",
    },
    {
      question: "Do you help with physiotherapy after surgery too?",
      answer:
        "We can coordinate with our physiotherapy service if your recovery plan includes rehabilitation exercises.",
    },
  ],
  relatedServices: [
    "/services/physiotherapy",
    "/services/home-nursing",
    "/services/patient-attendant",
  ],
  seo: {
    title: "Post Surgery Care at Home in Jaipur",
    description:
      "Professional post-surgery recovery care in Jaipur — wound care, medication management, and mobility support at home.",
    keywords: [
      "Post Surgery Care Jaipur",
      "Post Operative Care at Home Jaipur",
      "Surgery Recovery Care Jaipur",
    ],
  },
};
