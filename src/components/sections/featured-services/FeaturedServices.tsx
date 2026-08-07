"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Baby,
  Bandage,
  Heart,
  Home,
  PersonStanding,
} from "lucide-react";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceCard } from "@/components/sections/featured-services/ServiceCard";
import { fadeUpItemVariants, staggerContainerVariants } from "@/lib/motion";

const featuredServices = [
  {
    icon: Home,
    title: "Home Nursing Care",
    description:
      "Professional home nursing services in Jaipur, delivered by verified and compassionate caregivers.",
    href: "/services/home-nursing",
  },
  {
    icon: Heart,
    title: "Elder Care",
    description:
      "Dignified, day-to-day support that helps aging parents live comfortably at home.",
    href: "/services/elder-care",
  },
  {
    icon: Activity,
    title: "ICU Care at Home",
    description:
      "Critical care support in Jaipur from certified ICU-trained nurses, right at your bedside.",
    href: "/services/icu-care",
  },
  {
    icon: PersonStanding,
    title: "Physiotherapy at Home",
    description:
      "Guided rehabilitation and mobility exercises from expert therapists, in the comfort of home.",
    href: "/services/physiotherapy",
  },
  {
    icon: Baby,
    title: "Mother & Baby Care",
    description:
      "Gentle postnatal support for new mothers and newborns during the first critical weeks.",
    href: "/services/mother-baby-care",
  },
  {
    icon: Bandage,
    title: "Post Surgery Care",
    description:
      "Recovery monitoring and wound care in Jaipur homes, guided by experienced nurses.",
    href: "/services/post-surgery-care",
  },
];

export function FeaturedServices() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="featured-services">
      <SectionHeader
        eyebrow="Featured Services"
        title="Home Healthcare Services in Jaipur"
        description="From skilled nursing to post-surgery recovery, explore the care our verified professionals bring to homes across Jaipur."
        titleId="featured-services-heading"
      />

      <motion.div
        variants={staggerContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
      >
        {featuredServices.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUpItemVariants}
            className="h-full"
          >
            <ServiceCard {...service} />
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
        <p className="text-muted-foreground">Need another healthcare service?</p>
        <Link
          href="/services"
          className="text-primary focus-visible:ring-ring inline-flex items-center gap-1.5 rounded-md text-base font-semibold outline-none hover:underline focus-visible:ring-3 focus-visible:ring-offset-2"
        >
          View All Services
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </motion.div>
    </Section>
  );
}
