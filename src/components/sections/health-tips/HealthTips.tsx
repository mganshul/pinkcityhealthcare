"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { BlogCard } from "@/components/sections/health-tips/BlogCard";
import { blogPosts } from "@/data/blogs";
import { fadeUpItemVariants, staggerContainerVariants } from "@/lib/motion";

export function HealthTips() {
  const shouldReduceMotion = useReducedMotion();
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);

  return (
    <Section id="health-tips">
      <SectionHeader
        eyebrow="Resources"
        title="Health Tips & Resources"
        description="Explore expert advice, practical healthcare guides, and home care tips to help your family make informed healthcare decisions."
        titleId="health-tips-heading"
      />

      <motion.div
        variants={staggerContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8"
      >
        {featuredPosts.map((post) => (
          <motion.div key={post.id} variants={fadeUpItemVariants} className="h-full">
            <BlogCard {...post} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
