import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

// Primary keyword focus for on-page SEO — kept here so future per-page
// metadata can extend the same target terms instead of redeclaring them.
export const primaryKeywords = [
  "Home Healthcare Jaipur",
  "Home Nursing Jaipur",
  "Elder Care Jaipur",
  "ICU Care at Home Jaipur",
  "Physiotherapy at Home Jaipur",
] as const;

export const defaultTitle = `${siteConfig.name} | ${siteConfig.tagline}`;

// Shared metadata every page inherits (keywords, canonical base, Open Graph,
// Twitter card). Page-level metadata only needs to override `title` and
// `description` on top of this, not redeclare any of it.
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  keywords: [...primaryKeywords],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
  },
};
