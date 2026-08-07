"use client";

import {
  CalendarCheck,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProcessTimeline } from "@/components/patterns/ProcessTimeline";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book an Appointment",
    description:
      "Call us or submit an appointment request online. Our care coordinator will understand your healthcare needs.",
  },
  {
    icon: MessageCircle,
    title: "Free Care Consultation",
    description:
      "Our healthcare expert discusses the patient's condition and recommends the most suitable care plan.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Nurse Assigned",
    description:
      "A qualified and background-verified nurse or caregiver is assigned based on your medical requirements.",
  },
  {
    icon: HeartHandshake,
    title: "Care Begins at Home",
    description:
      "Professional healthcare services begin at your home with continuous support from our team.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeader
        eyebrow="Our Process"
        title="How It Works"
        description="Getting professional healthcare at home is simple. From your first call to ongoing care, our team guides you through every step."
        titleId="how-it-works-heading"
      />

      <ProcessTimeline steps={steps} />
    </Section>
  );
}
