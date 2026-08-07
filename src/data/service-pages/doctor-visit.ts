import {
  Activity,
  CalendarCheck,
  Clock,
  HandHeart,
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
export const doctorVisitServicePage: ServicePageData = {
  title: "Doctor Visit at Home",
  slug: "doctor-visit",
  description:
    "When a hospital trip isn't practical, a qualified doctor can come to you. Our home doctor visit service connects patients with licensed physicians for consultations, diagnosis, and treatment guidance — all without leaving home.",
  hero: {
    subtitle:
      "Licensed doctors available for consultations, diagnosis, and treatment guidance — at home.",
    badge: "Doctor Visit",
  },
  benefits: [
    {
      icon: Stethoscope,
      title: "Licensed Physicians On Call",
      description:
        "Consultations with qualified doctors experienced in home-based patient assessment.",
    },
    {
      icon: Clock,
      title: "Same-Day Availability",
      description:
        "Appointments arranged quickly for non-emergency medical concerns, often the same day.",
    },
    {
      icon: ShieldCheck,
      title: "Proper Diagnosis & Guidance",
      description:
        "A thorough in-person assessment, not a rushed phone consultation, before any treatment decision.",
    },
    {
      icon: HandHeart,
      title: "Comfortable, Familiar Setting",
      description:
        "Patients — especially elderly or anxious ones — are examined in a setting where they feel at ease.",
    },
  ],
  whoNeedsThis: [
    {
      icon: UserRound,
      title: "Patients With Limited Mobility",
      description:
        "Patients for whom a trip to the clinic is physically difficult or exhausting.",
    },
    {
      icon: Activity,
      title: "Managing a New or Ongoing Symptom",
      description:
        "Patients who need a doctor's assessment without waiting for a clinic appointment slot.",
    },
    {
      icon: Heart,
      title: "Elderly Patients Avoiding Crowded Clinics",
      description:
        "Seniors who are safer and more comfortable being examined at home than in a waiting room.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book an Appointment",
      description:
        "Tell us the patient's symptoms or the reason for the consultation.",
    },
    {
      icon: MessageCircle,
      title: "Free Care Consultation",
      description:
        "A coordinator understands the concern and identifies the right kind of doctor for the visit.",
    },
    {
      icon: ShieldCheck,
      title: "Doctor Matched to the Case",
      description:
        "A licensed physician suited to the patient's condition is scheduled for a home visit.",
    },
    {
      icon: HeartHandshake,
      title: "Consultation Happens at Home",
      description:
        "The doctor examines the patient at home and provides diagnosis and next steps.",
    },
  ],
  faqs: [
    {
      question: "What kind of medical concerns can a home doctor visit address?",
      answer:
        "Home doctor visits cover general consultations, common illnesses, chronic condition check-ins, and follow-up assessments — for medical emergencies, please go directly to a hospital.",
    },
    {
      question: "Can the doctor prescribe medication during a home visit?",
      answer:
        "Yes, the visiting doctor can assess the patient and prescribe medication where clinically appropriate, the same as an in-clinic consultation.",
    },
    {
      question: "How is a home doctor visit different from a video consultation?",
      answer:
        "A home visit includes a hands-on physical examination, which a video call can't provide — useful when a proper diagnosis needs more than a conversation.",
    },
    {
      question: "Can I request a specific type of doctor for the visit?",
      answer:
        "Let us know the nature of the concern when booking, and our coordinator will match a doctor with relevant experience where possible.",
    },
  ],
  relatedServices: [
    "/services/lab-test",
    "/services/home-nursing",
    "/services/physiotherapy",
  ],
  seo: {
    title: "Doctor Visit at Home in Jaipur",
    description:
      "Book a licensed doctor for a home consultation in Jaipur — diagnosis, treatment guidance, and follow-up care without a clinic visit.",
    keywords: [
      "Doctor at Home Jaipur",
      "Home Doctor Visit Jaipur",
      "Doctor Consultation at Home Jaipur",
    ],
  },
};
