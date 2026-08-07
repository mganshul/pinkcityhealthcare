import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { bedriddenPatientCareServicePage } from "@/data/service-pages/bedridden-patient-care";
import { buildPageMetadata } from "@/lib/seo";

const data = bedriddenPatientCareServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function BedriddenPatientCarePage() {
  return <ServicePageTemplate data={data} />;
}
