import {
  Activity,
  CalendarCheck,
  Clock,
  Home,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Users,
} from "lucide-react";
import type { ServicePageData } from "@/types/service-page";

// TODO: Placeholder content for development. Written to be professional and
// publish-ready, but review and replace with the client's own clinical
// details before this page goes live.
export const icuCareServicePage: ServicePageData = {
  title: "ICU Care at Home",
  slug: "icu-care",
  description:
    "Our ICU care at home service brings critical-care-level monitoring and equipment support into your home, managed by ICU-trained nurses — giving families a safe alternative to extended hospital stays for patients who need intensive medical support.",
  hero: {
    subtitle:
      "Hospital-grade critical care support, managed by ICU-trained nurses, inside your own home.",
    badge: "ICU Care at Home",
  },
  benefits: [
    {
      icon: Activity,
      title: "Continuous Vital Monitoring",
      description:
        "Round-the-clock tracking of vitals, oxygen levels, and critical indicators by trained staff.",
    },
    {
      icon: Stethoscope,
      title: "ICU-Trained Nursing Staff",
      description:
        "Nurses experienced in ventilator support, critical monitoring, and emergency response.",
    },
    {
      icon: ShieldCheck,
      title: "Equipment Set Up & Managed",
      description:
        "Medical equipment installed, calibrated, and maintained safely at your home.",
    },
    {
      icon: Clock,
      title: "Rapid Emergency Response",
      description:
        "Clear escalation protocols and 24×7 coordinator support if a patient's condition changes.",
    },
    {
      icon: Users,
      title: "Family Comfort & Reduced Hospital Stress",
      description:
        "Family members can stay close and involved while their loved one receives intensive-level care.",
    },
    {
      icon: Home,
      title: "Personalized Recovery Environment",
      description:
        "Familiar surroundings support the patient's comfort and emotional well-being during critical recovery.",
    },
  ],
  whoNeedsThis: [
    {
      icon: UserRound,
      title: "Patients Stepping Down From Hospital ICU",
      description:
        "Patients cleared for home recovery but still needing intensive monitoring and support.",
    },
    {
      icon: Activity,
      title: "Critical, Long-Term Conditions",
      description:
        "Patients with respiratory, cardiac, or neurological conditions requiring ongoing critical care.",
    },
    {
      icon: HeartHandshake,
      title: "Families Seeking a Hospital Alternative",
      description:
        "Families who want intensive care delivered at home instead of an extended hospital stay.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book a Consultation",
      description:
        "Call us with the patient's current hospital care plan and equipment requirements.",
    },
    {
      icon: MessageCircle,
      title: "Clinical Assessment",
      description:
        "Our team reviews the patient's condition with your hospital's discharge summary to plan the transition.",
    },
    {
      icon: ShieldCheck,
      title: "ICU-Trained Nurse Assigned",
      description:
        "A nurse experienced in critical home care is matched, and equipment is arranged in advance.",
    },
    {
      icon: HeartHandshake,
      title: "Care Begins at Home",
      description:
        "Monitoring and care begin at home, with coordinators on call for any change in condition.",
    },
  ],
  faqs: [
    {
      question: "What equipment can be set up for ICU care at home?",
      answer:
        "Depending on the case, we can arrange oxygen support, ventilators, monitors, and other equipment recommended by the patient's treating doctor.",
    },
    {
      question: "Is ICU care at home safe for critical patients?",
      answer:
        "It can be, when managed by trained staff with the right equipment and clear emergency protocols — our coordinators assess each case individually before recommending home ICU care.",
    },
    {
      question: "What happens if the patient's condition worsens at home?",
      answer:
        "Our nurses are trained to recognize warning signs early, and coordinators are reachable 24×7 to arrange urgent hospital transfer if needed.",
    },
    {
      question: "Do you coordinate with the hospital before discharge?",
      answer:
        "Yes, we review the hospital's care plan and equipment needs so the transition home is smooth and medically consistent.",
    },
  ],
  relatedServices: [
    "/services/home-nursing",
    "/services/physiotherapy",
    "/services/patient-attendant",
  ],
  seo: {
    title: "ICU Care at Home in Jaipur",
    description:
      "Critical care support at home in Jaipur — ICU-trained nurses, equipment setup, and 24×7 monitoring as a safe alternative to extended hospital stays.",
    keywords: ["ICU Care at Home Jaipur", "Critical Care at Home Jaipur", "ICU Nurse Jaipur"],
  },
};
