"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumb";
import { cn, isInternalHref } from "@/lib/utils";
import type { BreadcrumbItem } from "@/types/navigation";

interface PageHeroCta {
  label: string;
  href: string;
}

interface PageHeroProps {
  /** Renders as the page's single <h1> — every internal page should have exactly one. */
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  /** Path to a real photo once one exists; omit to use the decorative gradient background. */
  backgroundImage?: string;
  badge?: string;
  cta?: PageHeroCta;
  variant?: "light" | "dark";
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
  badge,
  cta,
  variant = "dark",
  className,
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24",
        isDark
          ? "bg-gradient-to-br from-primary via-primary-dark to-[#050B24]"
          : "bg-secondary/40",
        className,
      )}
    >
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0",
              isDark ? "bg-primary-dark/70" : "bg-white/75",
            )}
          />
        </>
      ) : (
        isDark && (
          <>
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 size-[28rem] -translate-y-1/4 translate-x-1/4 rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="bg-primary-light/25 absolute bottom-0 left-0 size-[22rem] -translate-x-1/3 translate-y-1/3 rounded-full blur-3xl"
            />
          </>
        )
      )}

      <Container className="relative flex flex-col items-start gap-5">
        {breadcrumbs && (
          <Breadcrumbs items={breadcrumbs} tone={isDark ? "light" : "default"} />
        )}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" }}
          className="flex flex-col items-start gap-4"
        >
          {badge && (
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase",
                isDark
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-border bg-card text-primary",
              )}
            >
              <span
                className="bg-brand-pink size-1.5 rounded-full"
                aria-hidden="true"
              />
              {badge}
            </span>
          )}

          <h1
            className={cn(
              "font-heading max-w-2xl text-3xl font-bold text-balance sm:text-4xl lg:text-5xl",
              isDark ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={cn(
                "max-w-xl text-balance sm:text-lg",
                isDark ? "text-white/90" : "text-muted-foreground",
              )}
            >
              {subtitle}
            </p>
          )}

          {cta && (
            <Button
              asChild
              size="lg"
              variant={isDark ? "secondary" : "default"}
              className={cn(
                "mt-2 h-11 gap-2 px-6",
                isDark &&
                  "focus-visible:ring-white/70 focus-visible:outline-white",
              )}
            >
              {isInternalHref(cta.href) ? (
                <Link href={cta.href}>
                  {cta.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ) : (
                <a href={cta.href}>
                  {cta.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              )}
            </Button>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
