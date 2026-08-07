import {
  Activity,
  Brain,
  CalendarCheck,
  Clock,
  HandHeart,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import type { ServicePageData } from "@/types/service-page";

// TODO: Placeholder content for development. Written to be professional and
// publish-ready, but review and replace with the client's own clinical
// details before this page goes live.
export const dementiaCareServicePage: ServicePageData = {
  title: "Dementia Care",
  slug: "dementia-care",
  description:
    "Caring for a loved one with dementia takes patience, structure, and specialized understanding — not just supervision. Our dementia care service provides trained caregivers who know how to support memory loss, confusion, and behavioral changes with consistency and calm.",
  hero: {
    subtitle:
      "Specialized, patient caregivers trained to support families through dementia care.",
    badge: "Dementia Care",
  },
  benefits: [
    {
      icon: Brain,
      title: "Trained in Dementia-Specific Care",
      description:
        "Caregivers understand memory loss, confusion, and behavioral changes — not general elder care alone.",
    },
    {
      icon: ShieldCheck,
      title: "Consistent Routines & Safety",
      description:
        "Structured daily routines and a safe home environment to reduce confusion and anxiety.",
    },
    {
      icon: HandHeart,
      title: "Patient, Calm Communication",
      description:
        "Caregivers trained to communicate gently, without frustration, even on difficult days.",
    },
    {
      icon: Clock,
      title: "Flexible, Ongoing Support",
      description:
        "Support scheduled around the patient's needs, from daytime supervision to full-time care.",
    },
  ],
  whoNeedsThis: [
    {
      icon: UserRound,
      title: "Patients With Early to Moderate Dementia",
      description:
        "Patients who need supervision and support but are still able to engage in daily routines.",
    },
    {
      icon: HeartHandshake,
      title: "Families Feeling Stretched Thin",
      description:
        "Family caregivers who need trained support to share the emotional and physical demands of dementia care.",
    },
    {
      icon: Activity,
      title: "Patients With Wandering or Safety Risks",
      description:
        "Patients whose condition includes safety concerns like wandering or forgetting essential tasks.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book an Appointment",
      description:
        "Share the patient's diagnosis stage and current daily routine with us.",
    },
    {
      icon: MessageCircle,
      title: "Free Care Consultation",
      description:
        "A coordinator discusses the patient's specific behavioral and safety needs.",
    },
    {
      icon: ShieldCheck,
      title: "Caregiver Matched",
      description:
        "A caregiver trained in dementia care and suited to the patient's personality is assigned.",
    },
    {
      icon: HeartHandshake,
      title: "Care Begins at Home",
      description:
        "Support begins with a focus on routine, safety, and calm, consistent companionship.",
    },
  ],
  faqs: [
    {
      question:
        "Are your caregivers specifically trained in dementia care, not just general elder care?",
      answer:
        "Yes, our dementia caregivers receive specific training in memory care techniques, communication approaches, and safety management for dementia patients.",
    },
    {
      question: "How do caregivers handle confusion or agitation?",
      answer:
        "Caregivers are trained to respond calmly, redirect gently, and avoid confrontation — techniques specifically suited to dementia care.",
    },
    {
      question: "Can dementia care include help with medication reminders?",
      answer:
        "Yes, caregivers can support medication reminders as part of the daily routine, alongside supervision and companionship.",
    },
    {
      question: "Is overnight dementia care available for wandering risks?",
      answer:
        "Yes, we can arrange overnight or full-time supervision for patients with wandering or nighttime safety concerns.",
    },
  ],
  relatedServices: [
    "/services/elder-care",
    "/services/patient-attendant",
    "/services/home-nursing",
  ],
  seo: {
    title: "Dementia Care Services in Jaipur",
    description:
      "Specialized dementia and memory care at home in Jaipur — trained caregivers, structured routines, and patient, calm support.",
    keywords: ["Dementia Care Jaipur", "Memory Care at Home Jaipur", "Dementia Caregiver Jaipur"],
  },
};
