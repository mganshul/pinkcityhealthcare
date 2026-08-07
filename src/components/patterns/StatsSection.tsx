"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { StatCard } from "@/components/sections/statistics/StatCard";
import { fadeUpItemVariants, staggerContainerVariants } from "@/lib/motion";
import type { Statistic } from "@/data/statistics";
import { cn } from "@/lib/utils";

interface StatsSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  stats: Statistic[];
  className?: string;
}

// Generic stats band for any internal page — reuses the homepage's exact
// StatCard component and motion variants so the treatment stays identical
// wherever it appears; only the data differs per page.
export function StatsSection({
  id,
  eyebrow,
  title,
  description,
  stats,
  className,
}: StatsSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id={id} className={cn("bg-secondary/40", className)}>
      {title && (
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      )}
      <motion.div
        variants={staggerContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className={cn(
          "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
          title && "mt-10 lg:mt-14",
        )}
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUpItemVariants} className="h-full">
            <StatCard {...stat} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
