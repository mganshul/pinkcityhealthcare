"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { HeartHandshake, Home as HomeIcon, ShieldCheck } from "lucide-react";
import { TrustBadge } from "@/components/common/TrustBadge";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={containerVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
      className="relative mx-auto aspect-[4/5] w-full max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none"
    >
      {/* Ambient glow accents */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -right-6 size-56 rounded-full bg-white/10 blur-3xl sm:size-72"
      />
      <div
        aria-hidden="true"
        className="bg-primary-light/30 absolute -bottom-8 -left-6 size-48 rounded-full blur-3xl sm:size-64"
      />

      {/* Secondary offset panel — a second, smaller warm-toned frame suggesting a
          companion photograph (e.g. the home environment) sits behind the main one */}
      <motion.div
        variants={itemVariants}
        aria-hidden="true"
        className="absolute top-6 -left-4 hidden h-40 w-32 rotate-[-6deg] overflow-hidden rounded-xl border border-white/30 shadow-md sm:block lg:top-10 lg:-left-8 lg:h-52 lg:w-40"
      >
        <div className="from-brand-pink/25 via-primary-dark/40 to-primary-dark/70 absolute inset-0 bg-gradient-to-br" />
        <HomeIcon
          className="absolute right-3 bottom-3 size-10 text-white/50"
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Main panel — warm, photography-ready frame standing in for a real caregiver
          portrait (decorative only; the floating cards below carry the real content) */}
      <motion.div
        variants={itemVariants}
        aria-hidden="true"
        className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-[28px] shadow-2xl"
      >
        {/* Warm base — simulates natural, warm-lit photography per the site's image strategy */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FBF0E1] via-[#F3DEC2] to-[#E8C6A0]" />

        {/* Soft bokeh accents — one brand-pink spotlight, kept small per the pink-usage rule */}
        <div className="bg-brand-pink/20 absolute top-8 right-6 size-24 rounded-full blur-2xl sm:size-32" />
        <div className="absolute bottom-10 left-6 size-28 rounded-full bg-white/50 blur-2xl sm:size-36" />
        <div className="bg-primary/10 absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:size-52" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #0B3FC4 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="border-primary-dark/15 absolute size-44 rounded-full border sm:size-60" />
        <div className="border-primary-dark/10 absolute size-32 rounded-full border sm:size-44" />

        <HeartHandshake
          className="text-primary-dark/35 relative size-24 sm:size-32"
          strokeWidth={1}
        />
      </motion.div>

      {/* Floating availability card */}
      <motion.div
        variants={itemVariants}
        animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="border-border/60 absolute -right-2 bottom-8 z-20 flex items-center gap-2.5 rounded-xl border bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md sm:-right-6"
      >
        <span className="bg-brand-green inline-flex size-2.5 shrink-0 rounded-full" />
        <div className="leading-tight">
          <p className="text-foreground text-sm font-semibold">Available now</p>
          <p className="text-muted-foreground text-xs">Care coordinators online</p>
        </div>
      </motion.div>

      {/* Floating trust chip */}
      <motion.div
        variants={itemVariants}
        className="absolute top-4 left-2 z-20 sm:top-8 sm:left-0"
      >
        <TrustBadge
          icon={ShieldCheck}
          label="Certified caregivers"
          className="border-white/30 bg-white/95 shadow-lg backdrop-blur-md"
        />
      </motion.div>
    </motion.div>
  );
}
