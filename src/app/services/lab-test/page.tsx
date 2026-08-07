import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { labTestServicePage } from "@/data/service-pages/lab-test";
import { buildPageMetadata } from "@/lib/seo";

const data = labTestServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function LabTestPage() {
  return <ServicePageTemplate data={data} />;
}
