"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { StatCard } from "@/components/sections/statistics/StatCard";
import { statistics } from "@/data/statistics";
import { fadeUpItemVariants, staggerContainerVariants } from "@/lib/motion";

export function Statistics() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="statistics" className="bg-secondary">
      <SectionHeader
        eyebrow="Our Impact"
        title="Healthcare Families Trust"
        description="Every family we serve inspires us to deliver compassionate, professional healthcare with consistency and care."
        titleId="statistics-heading"
      />

      <motion.div
        variants={staggerContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
      >
        {statistics.map((stat) => (
          <motion.div key={stat.label} variants={fadeUpItemVariants} className="h-full">
            <StatCard {...stat} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
