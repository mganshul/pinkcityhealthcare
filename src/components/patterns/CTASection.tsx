import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";
import { cn, isInternalHref } from "@/lib/utils";

interface CTASectionCta {
  label: string;
  href: string;
}

// Internal routes use next/link for client-side navigation; tel:/mailto:/
// external links use a plain <a>, matching Hero/UrgentCareStrip/FinalCTA's
// existing convention.
function CTALink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (isInternalHref(href)) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

interface CTASectionProps {
  id?: string;
  title: string;
  description?: string;
  primaryCta: CTASectionCta;
  secondaryCta?: CTASectionCta;
  variant?: "light" | "dark";
  className?: string;
}

// Generic mid-page conversion banner for internal pages (end of a Service
// page, bottom of a Blog post, etc.). The homepage's own closing section
// (FinalCTA.tsx) is deliberately left separate and untouched — that one is
// homepage-specific copy, not a reusable pattern.
export function CTASection({
  id,
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "dark",
  className,
}: CTASectionProps) {
  const isDark = variant === "dark";
  // --ring (the default focus color) is the same blue as this gradient, so
  // it would be invisible on focus — override to white, same fix as the
  // homepage's FinalCTA section.
  const focusRingOnDark = "focus-visible:ring-white/70 focus-visible:outline-white";

  return (
    <Section
      id={id}
      className={cn(
        isDark
          ? "bg-gradient-to-br from-primary-light via-primary to-primary-dark"
          : "bg-secondary/40",
        className,
      )}
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <h2
          className={cn(
            "font-heading text-2xl font-bold text-balance sm:text-3xl lg:text-4xl",
            isDark ? "text-white" : "text-foreground",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "text-balance sm:text-lg",
              isDark ? "text-white/90" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        )}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            asChild
            size="lg"
            variant={isDark ? "secondary" : "default"}
            className={cn("h-12 gap-2 px-7 text-base", isDark && focusRingOnDark)}
          >
            <CTALink href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </CTALink>
          </Button>
          {secondaryCta && (
            <Button
              asChild
              size="lg"
              variant="outline"
              className={cn(
                "h-12 gap-2 px-7 text-base",
                isDark &&
                  cn(
                    "border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white",
                    focusRingOnDark,
                  ),
              )}
            >
              <CTALink href={secondaryCta.href}>{secondaryCta.label}</CTALink>
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
