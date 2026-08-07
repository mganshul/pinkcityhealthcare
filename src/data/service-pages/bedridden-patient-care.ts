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
  Users,
} from "lucide-react";
import type { ServicePageData } from "@/types/service-page";

// TODO: Placeholder content for development. Written to be professional and
// publish-ready, but review and replace with the client's own clinical
// details before this page goes live.
export const bedriddenPatientCareServicePage: ServicePageData = {
  title: "Bedridden Patient Care",
  slug: "bedridden-patient-care",
  description:
    "Our bedridden patient care service supports patients who are unable to move independently — with positioning, hygiene, feeding, and pressure-sore prevention — helping families provide safe, dignified long-term care at home.",
  hero: {
    subtitle:
      "Dedicated, dignified care for patients who need full-time support at home.",
    badge: "Bedridden Patient Care",
  },
  benefits: [
    {
      icon: ShieldCheck,
      title: "Pressure Sore Prevention",
      description:
        "Regular repositioning and skin care to reduce the risk of bedsores.",
    },
    {
      icon: HandHeart,
      title: "Full Hygiene & Feeding Support",
      description:
        "Complete assistance with bathing, grooming, and feeding for patients who can't manage independently.",
    },
    {
      icon: Activity,
      title: "Mobility & Positioning Support",
      description:
        "Safe techniques for repositioning and limited movement to maintain comfort and circulation.",
    },
    {
      icon: Clock,
      title: "Round-the-Clock Availability",
      description:
        "Full-time or shift-based caregiving, built for patients who need continuous support.",
    },
    {
      icon: Users,
      title: "Family Training & Guidance",
      description:
        "We teach family members safe techniques for daily care tasks, building confidence between visits.",
    },
    {
      icon: HandHeart,
      title: "Emotional Comfort & Dignity",
      description:
        "Care delivered with patience and respect, preserving the patient's dignity through every task.",
    },
  ],
  whoNeedsThis: [
    {
      icon: UserRound,
      title: "Long-Term Bedridden Patients",
      description:
        "Patients unable to move independently due to illness, injury, or advanced age.",
    },
    {
      icon: Brain,
      title: "Patients With Severe Cognitive or Physical Decline",
      description:
        "Patients whose condition requires full assistance with all daily activities.",
    },
    {
      icon: HeartHandshake,
      title: "Families Managing Long-Term Home Care",
      description:
        "Families providing long-term care who need trained hands to share the daily responsibility.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book an Appointment",
      description:
        "Share the patient's condition and current level of mobility with us.",
    },
    {
      icon: MessageCircle,
      title: "Free Care Consultation",
      description:
        "A coordinator assesses the patient's care needs, including positioning and feeding requirements.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Caregiver Assigned",
      description:
        "A caregiver experienced in bedridden patient care is matched to the case.",
    },
    {
      icon: HeartHandshake,
      title: "Care Begins at Home",
      description:
        "Full-time or scheduled care begins, with attention to comfort, hygiene, and safety.",
    },
  ],
  faqs: [
    {
      question: "How do you prevent bedsores in long-term bedridden patients?",
      answer:
        "Our caregivers follow a regular repositioning schedule, monitor skin condition closely, and use proper support cushioning to reduce pressure sore risk.",
    },
    {
      question: "Can caregivers manage feeding for patients who can't eat on their own?",
      answer:
        "Yes, caregivers are trained in safe feeding techniques, including for patients with swallowing difficulties, in coordination with any medical guidance provided.",
    },
    {
      question: "Is round-the-clock care available for bedridden patients?",
      answer:
        "Yes, we offer full 24-hour caregiving arrangements as well as scheduled shifts, depending on your family's needs.",
    },
    {
      question: "Do you also provide nursing support alongside bedridden care?",
      answer:
        "Yes, we can combine bedridden patient care with our home nursing service if the patient also needs clinical monitoring or medication management.",
    },
  ],
  relatedServices: [
    "/services/patient-attendant",
    "/services/home-nursing",
    "/services/elder-care",
  ],
  seo: {
    title: "Bedridden Patient Care at Home in Jaipur",
    description:
      "Dedicated bedridden patient care in Jaipur — positioning, hygiene, feeding support, and pressure-sore prevention at home.",
    keywords: [
      "Bedridden Patient Care Jaipur",
      "Bedridden Care at Home Jaipur",
      "Long Term Patient Care Jaipur",
    ],
  },
};
