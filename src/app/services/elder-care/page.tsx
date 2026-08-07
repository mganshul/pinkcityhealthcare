import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { elderCareServicePage } from "@/data/service-pages/elder-care";
import { buildPageMetadata } from "@/lib/seo";

const data = elderCareServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function ElderCarePage() {
  return <ServicePageTemplate data={data} />;
}
