import {
  Activity,
  Bandage,
  CalendarCheck,
  Clock,
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
export const physiotherapyServicePage: ServicePageData = {
  title: "Physiotherapy at Home",
  slug: "physiotherapy",
  description:
    "Our home physiotherapy service brings licensed therapists to your doorstep for guided rehabilitation exercises, pain management, and mobility training — helping patients recover strength and movement without the difficulty of traveling to a clinic.",
  hero: {
    subtitle:
      "Guided rehabilitation exercises and mobility training from licensed therapists, at home.",
    badge: "Physiotherapy",
  },
  benefits: [
    {
      icon: PersonStanding,
      title: "Personalized Exercise Plans",
      description:
        "Rehabilitation routines built around the patient's specific injury or condition, not a generic worksheet.",
    },
    {
      icon: Activity,
      title: "Progress Tracked Every Session",
      description:
        "Therapists monitor range of motion and strength gains, adjusting the plan as recovery progresses.",
    },
    {
      icon: Clock,
      title: "Sessions That Fit Your Routine",
      description:
        "Therapy scheduled around the patient's energy levels and daily routine, not a clinic's opening hours.",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Experienced Therapists",
      description:
        "Every therapist is qualified and experienced in home-based rehabilitation, not just clinical settings.",
    },
  ],
  whoNeedsThis: [
    {
      icon: Bandage,
      title: "Recovering From Orthopedic Surgery",
      description:
        "Patients rebuilding strength and mobility after joint replacement, fracture repair, or similar procedures.",
    },
    {
      icon: UserRound,
      title: "Living With Chronic Pain or Stiffness",
      description:
        "Patients managing arthritis, back pain, or reduced mobility who benefit from consistent guided movement.",
    },
    {
      icon: HeartHandshake,
      title: "Stroke or Neurological Recovery",
      description:
        "Patients rebuilding motor function and independence after a stroke or neurological event.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book an Appointment",
      description:
        "Tell us about the patient's injury, surgery, or condition needing rehabilitation.",
    },
    {
      icon: MessageCircle,
      title: "Free Care Consultation",
      description:
        "A coordinator reviews any doctor's referral and the patient's mobility goals.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Therapist Assigned",
      description:
        "A licensed physiotherapist experienced with the patient's condition is matched to the case.",
    },
    {
      icon: HeartHandshake,
      title: "Sessions Begin at Home",
      description:
        "Guided exercises begin at home, with the plan adjusted as strength and mobility improve.",
    },
  ],
  faqs: [
    {
      question: "Do I need a doctor's referral for home physiotherapy?",
      answer:
        "A referral isn't required, but if your doctor has given specific instructions, our therapists will incorporate them into the treatment plan.",
    },
    {
      question: "How many physiotherapy sessions will my recovery need?",
      answer:
        "It depends on the condition — some patients need a short course of sessions, others need ongoing therapy over weeks. Your therapist will outline a plan after the first visit.",
    },
    {
      question:
        "Can physiotherapy help with chronic back or joint pain, not just injury recovery?",
      answer:
        "Yes, physiotherapy is also used for managing chronic pain, stiffness, and mobility issues, not only post-injury recovery.",
    },
    {
      question: "What should I have ready before the first session?",
      answer:
        "Just a comfortable space to move in and any relevant medical reports or doctor's notes, if available.",
    },
  ],
  relatedServices: [
    "/services/post-surgery-care",
    "/services/elder-care",
    "/services/home-nursing",
  ],
  seo: {
    title: "Physiotherapy at Home in Jaipur",
    description:
      "Licensed home physiotherapy in Jaipur — personalized rehabilitation exercises, pain management, and mobility training.",
    keywords: [
      "Physiotherapy at Home Jaipur",
      "Home Physiotherapist Jaipur",
      "Rehabilitation at Home Jaipur",
    ],
  },
};
