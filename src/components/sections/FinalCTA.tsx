"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { phoneHref, siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

// Focus rings default to --ring (the same blue as this section's gradient),
// which would be invisible against it — overridden to white here, the same
// way Hero/UrgentCareStrip's dark backgrounds need a light focus color.
const focusRingOnGradient =
  "focus-visible:ring-white/70 focus-visible:outline-white";

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="final-cta"
      className="from-primary-light via-primary to-primary-dark relative overflow-hidden bg-gradient-to-br py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 size-[28rem] -translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="bg-brand-pink/10 absolute right-0 bottom-0 size-[24rem] translate-x-1/4 translate-y-1/4 rounded-full blur-3xl"
      />

      <Container className="relative">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center"
        >
          <div className="flex flex-col items-center gap-5">
            <h2 className="font-heading text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
              Compassionate Healthcare Starts With One Conversation
            </h2>
            <p className="text-balance text-white/90 sm:text-lg">
              Whether you need professional nursing care, elderly support,
              post-surgery assistance, or home healthcare guidance, our team is
              here to help.
            </p>
            <p className="text-balance text-white/90 sm:text-lg">
              Speak with our healthcare coordinators today and we&apos;ll help
              you choose the right care plan for your loved one.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className={cn(
                "h-12 gap-2 px-7 text-base shadow-[0_10px_30px_-8px_rgba(255,255,255,0.35)]",
                focusRingOnGradient
              )}
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
              className={cn(
                "h-12 gap-2 border-white/25 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white",
                focusRingOnGradient
              )}
            >
              <a href={phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="flex w-full flex-col items-center gap-4 border-t border-white/15 pt-8 text-sm text-white/85 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-3">
            <a
              href={phoneHref}
              className="flex items-center gap-2 rounded-md transition-colors outline-none hover:text-white focus-visible:ring-3 focus-visible:ring-white/70 focus-visible:outline-white"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 rounded-md transition-colors outline-none hover:text-white focus-visible:ring-3 focus-visible:ring-white/70 focus-visible:outline-white"
            >
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
            <span className="flex items-center gap-2">
              <Clock className="size-4 shrink-0" aria-hidden="true" />
              {siteConfig.contact.businessHours}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              Serving {siteConfig.serviceArea.primary}
            </span>
          </div>

          <p className="text-xs text-white/70">
            {siteConfig.serviceArea.coverageNote}
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
