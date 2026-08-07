import {
  CalendarCheck,
  Clock,
  HandHeart,
  Heart,
  HeartHandshake,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import type { ServicePageData } from "@/types/service-page";

// TODO: Placeholder content for development. Written to be professional and
// publish-ready, but review and replace with the client's own clinical
// details before this page goes live.
export const palliativeCareServicePage: ServicePageData = {
  title: "Palliative Care",
  slug: "palliative-care",
  description:
    "When the goal shifts from cure to comfort, palliative care focuses on managing pain, symptoms, and quality of life for patients with serious or chronic illness — supporting both the patient and the family through a difficult stage, at home.",
  hero: {
    subtitle:
      "Comfort-focused care for serious illness, centered on dignity and quality of life.",
    badge: "Palliative Care",
  },
  benefits: [
    {
      icon: HeartPulse,
      title: "Focused Pain & Symptom Management",
      description:
        "Care centered on comfort — managing pain, breathlessness, and other distressing symptoms.",
    },
    {
      icon: HandHeart,
      title: "Emotional Support for the Family",
      description:
        "Guidance and support for family members navigating a difficult and emotional time.",
    },
    {
      icon: ShieldCheck,
      title: "Experienced, Compassionate Staff",
      description:
        "Caregivers and nurses experienced specifically in palliative and end-of-life care needs.",
    },
    {
      icon: Clock,
      title: "Care That Adapts as Needs Change",
      description:
        "Support adjusted continuously as the patient's condition and comfort needs evolve.",
    },
  ],
  whoNeedsThis: [
    {
      icon: UserRound,
      title: "Patients With Serious or Advanced Illness",
      description:
        "Patients for whom the focus has shifted from treatment to comfort and quality of life.",
    },
    {
      icon: Heart,
      title: "Patients Choosing to Stay at Home",
      description:
        "Patients and families who prefer comfort-focused care in familiar surroundings over a hospital stay.",
    },
    {
      icon: HeartHandshake,
      title: "Families Needing Guidance & Support",
      description:
        "Families who need both hands-on care and emotional support during a difficult time.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book a Consultation",
      description:
        "Share the patient's condition and current care plan with our coordinator.",
    },
    {
      icon: MessageCircle,
      title: "Care Needs Assessment",
      description:
        "A coordinator discusses comfort goals, symptoms, and what matters most to the patient and family.",
    },
    {
      icon: ShieldCheck,
      title: "Care Team Assigned",
      description:
        "Nurses and caregivers experienced in palliative care are matched to support the patient and family.",
    },
    {
      icon: HeartHandshake,
      title: "Comfort-Focused Care Begins",
      description:
        "Care begins at home, centered on the patient's comfort, dignity, and wishes.",
    },
  ],
  faqs: [
    {
      question: "Is palliative care the same as end-of-life care?",
      answer:
        "Palliative care can be part of end-of-life care, but it's also appropriate earlier for anyone with a serious illness who needs symptom and comfort management, regardless of prognosis.",
    },
    {
      question: "Can palliative care be combined with ongoing medical treatment?",
      answer:
        "Yes, palliative care can be provided alongside curative treatment — it focuses on comfort and quality of life at any stage of illness.",
    },
    {
      question: "Do you provide emotional support for family members, not just the patient?",
      answer:
        "Yes, our team offers guidance and support to family members as they navigate caregiving during this time.",
    },
    {
      question: "How is pain management handled at home?",
      answer:
        "Our nurses coordinate with the patient's physician to manage prescribed pain relief and monitor comfort closely.",
    },
  ],
  relatedServices: [
    "/services/home-nursing",
    "/services/bedridden-patient-care",
    "/services/patient-attendant",
  ],
  seo: {
    title: "Palliative Care Services in Jaipur",
    description:
      "Comfort-focused palliative care at home in Jaipur — pain and symptom management, and support for patients and families.",
    keywords: ["Palliative Care Jaipur", "Palliative Care at Home Jaipur", "Comfort Care Jaipur"],
  },
};
