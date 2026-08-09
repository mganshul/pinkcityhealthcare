import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/common/Container";
import { SocialIcon } from "@/components/common/SocialIcon";
import { googleMapsHref, phoneHref, siteConfig } from "@/constants/site";
import { footerQuickLinks, legalLinks, services } from "@/data/navigation";
import type { SocialPlatform } from "@/types/navigation";

const socialPlatforms = [
  "facebook",
  "instagram",
  "google",
  "whatsapp",
] as const satisfies SocialPlatform[];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/70">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="flex flex-col gap-4 lg:col-span-4">
          <Logo variant="white" />
          <p className="max-w-xs text-sm leading-relaxed">
            {siteConfig.description}
          </p>
          <ul className="mt-2 flex items-center gap-3">
            {socialPlatforms.map((platform) => (
              <li key={platform}>
                <a
                  href={siteConfig.social[platform] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${platform}`}
                  className="text-background hover:bg-primary hover:text-primary-foreground flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors"
                >
                  <SocialIcon platform={platform} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Quick links" className="lg:col-span-3">
          <h3 className="font-heading text-background text-sm font-semibold tracking-wide uppercase">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="lg:col-span-3">
          <h3 className="font-heading text-background text-sm font-semibold tracking-wide uppercase">
            Our Services
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="hover:text-background transition-colors"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <h3 className="font-heading text-background text-sm font-semibold tracking-wide uppercase">
            Contact
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <a
                href={phoneHref}
                className="hover:text-background flex items-start gap-2.5 transition-colors"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-background flex items-start gap-2.5 transition-colors"
              >
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={googleMapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background flex items-start gap-2.5 transition-colors"
              >
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>
                  {siteConfig.contact.address.line1},{" "}
                  {siteConfig.contact.address.line2},{" "}
                  {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.state}{" "}
                  {siteConfig.contact.address.pincode}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {siteConfig.contact.businessHours}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center gap-3 py-6 text-xs sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
