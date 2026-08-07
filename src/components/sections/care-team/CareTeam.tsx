"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TeamMemberCard } from "@/components/sections/care-team/TeamMemberCard";
import { teamMembers } from "@/data/team";
import { fadeUpItemVariants, staggerContainerVariants } from "@/lib/motion";

export function CareTeam() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="care-team" className="bg-secondary/40">
      <SectionHeader
        eyebrow="Our Team"
        title="Meet Our Care Team"
        description="Our experienced nurses and caregivers are carefully selected, professionally trained, and committed to providing compassionate care in the comfort of your home."
        titleId="care-team-heading"
      />

      <motion.div
        variants={staggerContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
      >
        {teamMembers.map((member) => (
          <motion.div key={member.role} variants={fadeUpItemVariants} className="h-full">
            <TeamMemberCard {...member} />
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
        Every healthcare professional at Pink City Healthcare is selected for
        compassion, professionalism, and commitment to patient care.
      </motion.p>
    </Section>
  );
}
