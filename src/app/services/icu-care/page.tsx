import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { icuCareServicePage } from "@/data/service-pages/icu-care";
import { buildPageMetadata } from "@/lib/seo";

const data = icuCareServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function IcuCarePage() {
  return <ServicePageTemplate data={data} />;
}
