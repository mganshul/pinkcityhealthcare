import {
  Activity,
  Bed,
  CalendarCheck,
  HandHeart,
  Heart,
  HeartHandshake,
  MessageCircle,
  Package,
  ShieldCheck,
  Truck,
  UserRound,
  Clock,
} from "lucide-react";
import type { ServicePageData } from "@/types/service-page";

// TODO: Placeholder content for development. Written to be professional and
// publish-ready, but review and replace with the client's own clinical
// details before this page goes live.
export const medicalEquipmentServicePage: ServicePageData = {
  title: "Medical Equipment Rental",
  slug: "medical-equipment",
  description:
    "Recovering at home often means needing the right equipment — a hospital bed, oxygen concentrator, wheelchair, or monitoring device. Our medical equipment rental service delivers, sets up, and maintains this equipment, so your home is ready for the level of care the patient needs.",
  hero: {
    subtitle:
      "Hospital beds, oxygen support, and mobility equipment — delivered and set up at home.",
    badge: "Medical Equipment",
  },
  benefits: [
    {
      icon: Bed,
      title: "Delivered & Set Up for You",
      description:
        "Equipment delivered, assembled, and demonstrated at your home — nothing left for you to figure out alone.",
    },
    {
      icon: ShieldCheck,
      title: "Properly Maintained Equipment",
      description:
        "Every device is checked, cleaned, and functioning correctly before it reaches your home.",
    },
    {
      icon: Clock,
      title: "Short-Term or Long-Term Rental",
      description:
        "Rent equipment for a few weeks of recovery or for extended long-term care needs.",
    },
    {
      icon: HandHeart,
      title: "Guidance on Safe Use",
      description:
        "Clear instructions on operating and maintaining the equipment safely between visits.",
    },
    {
      icon: Package,
      title: "Wide Equipment Selection",
      description:
        "From hospital beds to oxygen concentrators, a full range of equipment to match the patient's care plan.",
    },
    {
      icon: Truck,
      title: "Quick Turnaround Delivery",
      description:
        "Equipment delivered promptly so your home is ready without delaying the patient's care.",
    },
  ],
  whoNeedsThis: [
    {
      icon: UserRound,
      title: "Patients Recovering at Home",
      description:
        "Patients who need a hospital bed, wheelchair, or mobility aid during recovery.",
    },
    {
      icon: Activity,
      title: "Patients Needing Oxygen Support",
      description:
        "Patients prescribed home oxygen therapy following a respiratory condition or procedure.",
    },
    {
      icon: Heart,
      title: "Long-Term or Bedridden Care Setups",
      description:
        "Families setting up a home for ongoing long-term care, not just short-term recovery.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Request Equipment",
      description:
        "Tell us what equipment the patient needs, ideally based on a doctor's recommendation.",
    },
    {
      icon: MessageCircle,
      title: "Confirm Requirements",
      description:
        "Our coordinator confirms specifications, rental duration, and delivery timing.",
    },
    {
      icon: ShieldCheck,
      title: "Equipment Prepared & Delivered",
      description:
        "The equipment is checked, delivered, and set up at your home by our team.",
    },
    {
      icon: HeartHandshake,
      title: "Ongoing Support Provided",
      description:
        "We remain available for maintenance questions or equipment swaps during the rental period.",
    },
  ],
  faqs: [
    {
      question: "What medical equipment can I rent?",
      answer:
        "Common rentals include hospital beds, oxygen concentrators, wheelchairs, walkers, and patient monitors — ask us about specific equipment needs.",
    },
    {
      question: "Is delivery and setup included in the rental?",
      answer:
        "Yes, delivery, setup, and a basic usage demonstration are included with every rental.",
    },
    {
      question: "Can I extend a rental if recovery takes longer than expected?",
      answer:
        "Yes, rentals can be extended — just let us know before the current rental period ends.",
    },
    {
      question: "What happens if the equipment malfunctions during the rental?",
      answer:
        "Contact us and we'll arrange a repair or replacement as quickly as possible.",
    },
  ],
  relatedServices: [
    "/services/icu-care",
    "/services/bedridden-patient-care",
    "/services/home-nursing",
  ],
  seo: {
    title: "Medical Equipment Rental in Jaipur",
    description:
      "Rent hospital beds, oxygen concentrators, wheelchairs, and other medical equipment in Jaipur — delivered, set up, and maintained.",
    keywords: [
      "Medical Equipment Rental Jaipur",
      "Hospital Bed on Rent Jaipur",
      "Oxygen Concentrator Rental Jaipur",
    ],
  },
};
