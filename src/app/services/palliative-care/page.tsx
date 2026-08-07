import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { palliativeCareServicePage } from "@/data/service-pages/palliative-care";
import { buildPageMetadata } from "@/lib/seo";

const data = palliativeCareServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function PalliativeCarePage() {
  return <ServicePageTemplate data={data} />;
}
