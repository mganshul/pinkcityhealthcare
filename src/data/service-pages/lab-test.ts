import {
  Activity,
  CalendarCheck,
  Clock,
  FlaskConical,
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
export const labTestServicePage: ServicePageData = {
  title: "Lab Test at Home",
  slug: "lab-test",
  description:
    "Getting blood work or a diagnostic test done shouldn't mean sitting in a lab waiting room. Our home lab test service sends a trained technician to collect samples at your house, with reports delivered securely once processed.",
  hero: {
    subtitle:
      "Trained technicians collect samples at home — accurate results without the lab visit.",
    badge: "Lab Test at Home",
  },
  benefits: [
    {
      icon: FlaskConical,
      title: "Wide Range of Tests Covered",
      description:
        "Routine blood work, diabetes panels, and other common diagnostic tests collected at home.",
    },
    {
      icon: ShieldCheck,
      title: "Trained, Verified Technicians",
      description:
        "Sample collection performed by qualified, background-verified lab technicians.",
    },
    {
      icon: Clock,
      title: "Flexible Collection Timing",
      description:
        "Appointments scheduled around your day, including early morning slots for fasting tests.",
    },
    {
      icon: UserRound,
      title: "No Waiting Room Exposure",
      description:
        "Ideal for elderly patients or anyone who should avoid crowded clinical spaces.",
    },
  ],
  whoNeedsThis: [
    {
      icon: Heart,
      title: "Elderly or Immobile Patients",
      description:
        "Patients for whom traveling to a lab is difficult, tiring, or medically inadvisable.",
    },
    {
      icon: Activity,
      title: "Routine Health Monitoring",
      description:
        "Patients tracking a chronic condition who need regular blood work without repeated clinic trips.",
    },
    {
      icon: HeartHandshake,
      title: "Post-Treatment Follow-Up Testing",
      description:
        "Patients whose doctor has requested follow-up labs after a procedure or treatment.",
    },
  ],
  process: [
    {
      icon: CalendarCheck,
      title: "Book a Test",
      description:
        "Tell us which tests are needed, ideally from your doctor's prescription.",
    },
    {
      icon: MessageCircle,
      title: "Confirm Collection Details",
      description:
        "Our coordinator confirms timing and any preparation needed, like fasting.",
    },
    {
      icon: ShieldCheck,
      title: "Technician Visits Your Home",
      description:
        "A verified technician arrives at the scheduled time to collect the sample safely.",
    },
    {
      icon: HeartHandshake,
      title: "Reports Delivered Securely",
      description:
        "Results are processed and shared with you once ready, typically within the standard turnaround time.",
    },
  ],
  faqs: [
    {
      question: "Do I need a doctor's prescription to book a lab test at home?",
      answer:
        "A prescription isn't mandatory for most routine tests, but it helps ensure the right tests are ordered — especially for more specific diagnostic panels.",
    },
    {
      question: "How is the sample kept safe during transport?",
      answer:
        "Samples are collected and transported following standard cold-chain and safety protocols to maintain accuracy.",
    },
    {
      question: "How long does it take to get my results?",
      answer:
        "Turnaround time depends on the specific test, but most routine results are available within 24 to 48 hours.",
    },
    {
      question: "Can I book fasting blood tests for early morning?",
      answer:
        "Yes, early morning slots are available specifically to accommodate fasting test requirements.",
    },
  ],
  relatedServices: ["/services/doctor-visit", "/services/home-nursing"],
  seo: {
    title: "Lab Test at Home in Jaipur",
    description:
      "Book diagnostic and blood tests at home in Jaipur — trained technicians, flexible timing, and secure report delivery.",
    keywords: [
      "Lab Test at Home Jaipur",
      "Blood Test at Home Jaipur",
      "Home Sample Collection Jaipur",
    ],
  },
};
