import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { dementiaCareServicePage } from "@/data/service-pages/dementia-care";
import { buildPageMetadata } from "@/lib/seo";

const data = dementiaCareServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function DementiaCarePage() {
  return <ServicePageTemplate data={data} />;
}
