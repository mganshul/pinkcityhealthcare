"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";
import { phoneHref } from "@/constants/site";

export function UrgentCareStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="urgent-care" className="bg-primary-dark py-6 sm:py-7 lg:py-8">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
        className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
      >
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10"
          >
            <Phone className="size-5 text-white" />
          </span>
          <div>
            <h2 className="text-base font-semibold text-white sm:text-lg">
              Need urgent home healthcare today?
            </h2>
            <p className="mt-1 max-w-xl text-sm text-white/85 sm:text-base">
              Our care coordinators are available 24×7 for ICU care,
              post-surgery support, oxygen assistance, and emergency nursing —
              speak to someone in minutes, no forms required.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:shrink-0">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 gap-2 px-6 text-base"
            >
              <a href={phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 gap-2 border-white/25 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/appointment">Book Appointment</Link>
            </Button>
          </div>
          <p className="flex items-center gap-1.5 text-xs text-white/80 sm:ml-1">
            <Clock className="size-3.5 shrink-0" aria-hidden="true" />
            Avg. response in under 15 minutes
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
