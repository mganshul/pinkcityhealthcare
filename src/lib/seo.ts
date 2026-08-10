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

interface PageMetadataOptions {
  /** Page-specific segment only — the root layout's `title.template` appends " | PinkCity Healthcare". */
  title: string;
  description?: string;
  /** e.g. "/about" — used to build the canonical URL and Open Graph url. */
  path: string;
  keywords?: readonly string[];
}

// Every internal page should export its metadata via this, not hand-roll
// title/OG/Twitter fields — keeps canonical URLs, keyword targeting, and
// social-card formatting consistent site-wide.
export function buildPageMetadata({
  title,
  description = siteConfig.description,
  path,
  keywords = primaryKeywords,
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: [...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
