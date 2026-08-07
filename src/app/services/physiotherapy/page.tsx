import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { physiotherapyServicePage } from "@/data/service-pages/physiotherapy";
import { buildPageMetadata } from "@/lib/seo";

const data = physiotherapyServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function PhysiotherapyPage() {
  return <ServicePageTemplate data={data} />;
}
