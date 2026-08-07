"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Baby, Bandage, ClipboardList, Heart, PersonStanding } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PersonaCard } from "@/components/sections/who-we-help/PersonaCard";
import { fadeUpItemVariants, staggerContainerVariants } from "@/lib/motion";

const personas = [
  {
    icon: Heart,
    title: "Elder Care",
    description: "Helping aging parents live comfortably and safely at home.",
    href: "/services/elder-care",
  },
  {
    icon: Bandage,
    title: "Post Surgery Recovery",
    description:
      "Professional recovery care and monitoring after hospital discharge.",
    href: "/services/post-surgery-care",
  },
  {
    icon: Baby,
    title: "New Mothers & Babies",
    description:
      "Safe, compassionate postnatal support for mother and newborn.",
    href: "/services/mother-baby-care",
  },
  {
    icon: PersonStanding,
    title: "Physiotherapy Patients",
    description:
      "Home-based rehabilitation and mobility support from expert therapists.",
    href: "/services/physiotherapy",
  },
  {
    icon: ClipboardList,
    title: "Long-Term Nursing Care",
    description: "Ongoing, verified nursing support for extended care needs.",
    href: "/services/nursing-staff",
  },
];

export function WhoWeHelp() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="who-we-help">
      <SectionHeader
        eyebrow="Who We Help"
        title="Whatever Your Family Needs, We're Here"
        description="Every care journey looks different. Find the kind of support that matches where you are right now."
        titleId="who-we-help-heading"
      />

      <motion.div
        variants={staggerContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 xl:grid-cols-5"
      >
        {personas.map((persona) => (
          <motion.div key={persona.title} variants={fadeUpItemVariants} className="h-full">
            <PersonaCard {...persona} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
