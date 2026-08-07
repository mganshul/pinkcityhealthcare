import {
  Activity,
  CalendarCheck,
  Clock,
  HandHeart,
  Heart,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Syringe,
  UserRound,
} from "lucide-react";
import type { ServicePageData } from "@/types/service-page";

// TODO: Placeholder content for development. Written to be professional and
// publish-ready, but review and replace with the client's own clinical
// details before this page goes live.
export const injectionAtHomeServicePage: ServicePageData = {
  title: "Injection at Home",
  slug: "injection-at-home",
  description:
    "Some treatments simply require a professional injection — insulin, vitamin B12, IV medication, or a prescribed course of shots. Our injection at home service sends a trained nurse to administer it safely and correctly, without a clinic visit for something routine.",
  hero: {
    subtitle:
      "Safe, professional injection administration by a trained nurse, at home.",
    badge: "Injection at Home",
  },
  benefits: [
    {
      icon: Syringe,
      title: "Trained Nursing Staff Only",
      description:
        "Every injection is administered by a qualified nurse, never an untrained caregiver.",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic, Safe Technique",
      description:
        "Proper sterile technique and safe disposal of needles and medical waste.",
    },
    {
      icon: Clock,
      title: "Quick, Scheduled Visits",
      description:
        "Short, focused visits timed to your prescribed dosage schedule — no waiting room needed.",
    },
    {
      icon: HandHeart,
      title: "Reassuring for Anxious Patients",
      description:
        "A calmer experience for patients who find clinical settings stressful, especially children and elderly patients.",
    },
  ],
  whoNeedsThis: [
    {
      icon: Activity,
      title: "Patients on Regular Injection Schedules",
      description:
        "Patients managing diabetes, vitamin deficiencies, or other conditions needing routine injections.",
    },
    {
      icon: UserRound,
      title: "Post-Discharge Medication Courses",
      description:
        "Patients prescribed a short course of injections as part of hospital discharge instructions.",
    },
    {
      icon: Heart,
      title: "Elderly or Mobility-Limited Patients",
      description:
        "Patients for whom a clinic visit just for an injection is an unnecessary burden.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book an Appointment",
      description:
        "Share the prescribed medication and injection schedule with us.",
    },
    {
      icon: MessageCircle,
      title: "Confirm Prescription Details",
      description:
        "Our coordinator confirms the medication, dosage, and frequency from your prescription.",
    },
    {
      icon: ShieldCheck,
      title: "Nurse Assigned",
      description:
        "A qualified nurse is scheduled to visit at the times matching your prescribed schedule.",
    },
    {
      icon: HeartHandshake,
      title: "Injection Administered at Home",
      description:
        "The nurse administers the injection safely, following proper hygiene and disposal practices.",
    },
  ],
  faqs: [
    {
      question: "Do you administer insulin injections?",
      answer:
        "Yes, our nurses are experienced in administering insulin and other routine prescribed injections.",
    },
    {
      question: "Is a prescription required to book this service?",
      answer:
        "Yes, a valid prescription is needed so the nurse can confirm the correct medication and dosage before administering it.",
    },
    {
      question: "Can you provide a recurring injection schedule, like a weekly course?",
      answer:
        "Yes, we can arrange recurring visits to match a prescribed injection course of any duration.",
    },
    {
      question: "How is used medical waste disposed of?",
      answer:
        "Nurses follow standard safe-disposal protocols for needles and other medical waste after every visit.",
    },
  ],
  relatedServices: ["/services/home-nursing", "/services/doctor-visit"],
  seo: {
    title: "Injection at Home in Jaipur",
    description:
      "Safe, professional injection administration at home in Jaipur by trained nurses — insulin, vitamin, and prescribed medication injections.",
    keywords: [
      "Injection at Home Jaipur",
      "Home Injection Service Jaipur",
      "Nurse for Injection Jaipur",
    ],
  },
};
