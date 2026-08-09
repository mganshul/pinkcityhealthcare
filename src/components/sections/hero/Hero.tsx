"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  BadgeCheck,
  CalendarCheck,
  Clock,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { TrustBadge } from "@/components/common/TrustBadge";
import { HeroStats } from "@/components/sections/hero/HeroStats";
import { HeroVisual } from "@/components/sections/hero/HeroVisual";
import { phoneHref } from "@/constants/site";

const trustBadges = [
  { icon: ShieldCheck, label: "Verified nurses" },
  { icon: BadgeCheck, label: "Background-checked staff" },
  { icon: Clock, label: "24×7 support" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="from-primary via-primary-dark relative overflow-hidden bg-gradient-to-br to-[#1a0512] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 size-[32rem] translate-x-1/4 -translate-y-1/4 rounded-full bg-white/10 blur-3xl lg:size-[40rem]"
      />
      <div
        aria-hidden="true"
        className="bg-primary-light/25 absolute bottom-0 left-0 size-[26rem] -translate-x-1/3 translate-y-1/3 rounded-full blur-3xl"
      />

      <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          className="flex flex-col items-start gap-6 lg:gap-7"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2"
          >
            <span
              className="bg-brand-pink shadow-brand-pink/50 size-2 rounded-full shadow-[0_0_8px_2px]"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold tracking-wide text-white/90 uppercase">
              Home Healthcare · Jaipur
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-2xl text-4xl leading-[1.05] font-bold text-balance text-white sm:text-5xl lg:text-6xl"
          >
            Home Healthcare Services in Jaipur, By Verified Professionals
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-lg text-lg text-balance text-white/90"
          >
            Skilled nurses, caregivers, and therapists trained for ICU support,
            post-surgery recovery, physiotherapy, and elder care — matched to
            your family within 24 hours.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 gap-2 px-7 text-base shadow-[0_10px_30px_-8px_rgba(255,255,255,0.35)]"
            >
              <Link href="/appointment">
                <CalendarCheck className="size-4" aria-hidden="true" />
                Book Appointment
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 gap-2 border-white/25 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <a href={phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2.5"
          >
            {trustBadges.map((badge) => (
              <TrustBadge
                key={badge.label}
                icon={badge.icon}
                label={badge.label}
                className="border-white/20 bg-white/10 text-white backdrop-blur-sm"
                iconClassName="text-white"
              />
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full border-t border-white/15 pt-6"
          >
            <HeroStats tone="light" />
          </motion.div>
        </motion.div>

        <HeroVisual />
      </Container>
    </section>
  );
}
