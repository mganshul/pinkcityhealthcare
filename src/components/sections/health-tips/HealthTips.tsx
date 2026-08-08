"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { BlogCard } from "@/components/sections/health-tips/BlogCard";
import { getLatestPosts } from "@/data/blogs";
import { fadeUpItemVariants, staggerContainerVariants } from "@/lib/motion";

export function HealthTips() {
  const shouldReduceMotion = useReducedMotion();
  const latestPosts = getLatestPosts(3);

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
        {latestPosts.map((post) => (
          <motion.div key={post.id} variants={fadeUpItemVariants} className="h-full">
            <BlogCard {...post} />
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
        <p className="text-muted-foreground">Want more health tips and guidance?</p>
        <Link
          href="/blog"
          className="text-primary focus-visible:ring-ring inline-flex items-center gap-1.5 rounded-md text-base font-semibold outline-none hover:underline focus-visible:ring-3 focus-visible:ring-offset-2"
        >
          View All Articles
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </motion.div>
    </Section>
  );
}
