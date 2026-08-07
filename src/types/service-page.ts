import type { LucideIcon } from "lucide-react";
import type { FAQ } from "@/data/faqs";

export interface ServicePageFeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServicePageData {
  title: string;
  /** Matches the slug used in the route (`/services/[slug]`) and in src/data/services.ts. */
  slug: string;
  /** Overview-section paragraph; also the fallback SEO description if `seo.description` isn't set. */
  description: string;
  hero: {
    subtitle: string;
    badge?: string;
  };
  benefits: ServicePageFeatureItem[];
  whoNeedsThis: ServicePageFeatureItem[];
  process: ServicePageFeatureItem[];
  faqs: FAQ[];
  /** Hrefs matching entries in src/data/services.ts — looked up there, not duplicated here. */
  relatedServices: string[];
  seo?: {
    title?: string;
    description?: string;
    keywords?: readonly string[];
  };
}
