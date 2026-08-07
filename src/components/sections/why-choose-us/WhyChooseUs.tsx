"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  ClipboardCheck,
  Clock,
  IndianRupee,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FeatureCard } from "@/components/sections/why-choose-us/FeatureCard";
import { siteConfig } from "@/constants/site";
import { fadeUpItemVariants, staggerContainerVariants } from "@/lib/motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified & Background-Checked Nurses",
    description:
      "Every caregiver is police-verified and background-checked before they're matched to your family.",
  },
  {
    icon: Clock,
    title: "24×7 Emergency Support",
    description:
      "Care coordinators are reachable around the clock — nights, weekends, and holidays included.",
  },
  {
    icon: Award,
    title: "Experienced Healthcare Professionals",
    description:
      "Our nurses and therapists bring years of hands-on clinical experience to every home visit.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalized Home Care Plans",
    description:
      "No two families are alike — every care plan is built around your specific needs and schedule.",
  },
  {
    icon: MapPinned,
    title: "Fast Response Across Jaipur",
    description:
      "Local coordinators mean a caregiver can typically be matched within hours, not days.",
  },
  {
    icon: IndianRupee,
    title: "Transparent & Affordable Care",
    description:
      "Clear, upfront pricing with no hidden fees — you always know what you're paying for.",
  },
];

export function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="why-choose-us">
      <SectionHeader
        eyebrow="Why Choose Us"
        title={`Why Families Choose ${siteConfig.name}`}
        description="Six reasons families across Jaipur trust us with the people they love most."
        titleId="why-choose-us-heading"
      />

      <motion.div
        variants={staggerContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={fadeUpItemVariants}
            className="h-full"
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
        className="text-foreground border-border mx-auto mt-12 max-w-2xl border-t pt-8 text-center text-lg font-medium text-balance sm:text-xl lg:mt-16"
      >
        Trusted by thousands of families across Jaipur for compassionate,
        professional home healthcare.
      </motion.p>
    </Section>
  );
}
