"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TeamMemberCard } from "@/components/sections/care-team/TeamMemberCard";
import { teamMembers } from "@/data/team";
import { siteConfig } from "@/constants/site";
import { fadeUpItemVariants, staggerContainerVariants } from "@/lib/motion";

// Homepage preview only shows the core team — the full roster (including
// any additional staff added later) lives on the dedicated /our-team page.
const HOMEPAGE_TEAM_PREVIEW_COUNT = 4;

export function CareTeam() {
  const shouldReduceMotion = useReducedMotion();
  const previewMembers = teamMembers.slice(0, HOMEPAGE_TEAM_PREVIEW_COUNT);

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
        {previewMembers.map((member) => (
          <motion.div key={member.role} variants={fadeUpItemVariants} className="h-full">
            <TeamMemberCard {...member} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
        className="border-border mx-auto mt-12 flex max-w-2xl flex-col items-center gap-2 border-t pt-8 text-center lg:mt-16"
      >
        <p className="text-foreground text-lg font-medium text-balance sm:text-xl">
          Every healthcare professional at {siteConfig.name} is selected for
          compassion, professionalism, and commitment to patient care.
        </p>
        <Link
          href="/our-team"
          className="text-primary focus-visible:ring-ring inline-flex items-center gap-1.5 rounded-md text-base font-semibold outline-none hover:underline focus-visible:ring-3 focus-visible:ring-offset-2"
        >
          Meet the Full Team
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </motion.div>
    </Section>
  );
}
