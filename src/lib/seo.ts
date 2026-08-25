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

// Homepage <title> — this is what ranks and shows in search results, so it
// leads with the primary local keyword rather than the tagline (the tagline
// isn't rendered anywhere in the UI, only here).
export const defaultTitle = `${siteConfig.name} | Home Healthcare Services in Jaipur`;

// Real photo used as the fallback social share image wherever a page doesn't
// have a more specific one — keeps OG/Twitter cards from showing a blank
// preview. Swap for a dedicated 1200x630 social image if one is ever made.
export const defaultOgImage = {
  url: "/images/about/about-final.png",
  width: 1536,
  height: 1024,
  alt: `The ${siteConfig.name} team`,
};

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
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
    images: [defaultOgImage.url],
  },
};

interface PageMetadataOptions {
  /** Page-specific segment only — the root layout's `title.template` appends " | PinkCity Healthcare". */
  title: string;
  description?: string;
  /** e.g. "/about" — used to build the canonical URL and Open Graph url. */
  path: string;
  keywords?: readonly string[];
  /** Overrides the site default social-share image for this page. */
  image?: typeof defaultOgImage;
}

// Every internal page should export its metadata via this, not hand-roll
// title/OG/Twitter fields — keeps canonical URLs, keyword targeting, and
// social-card formatting consistent site-wide.
export function buildPageMetadata({
  title,
  description = siteConfig.description,
  path,
  keywords = primaryKeywords,
  image = defaultOgImage,
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
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
