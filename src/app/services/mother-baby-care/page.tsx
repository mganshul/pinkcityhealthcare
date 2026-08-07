import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { motherBabyCareServicePage } from "@/data/service-pages/mother-baby-care";
import { buildPageMetadata } from "@/lib/seo";

const data = motherBabyCareServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function MotherBabyCarePage() {
  return <ServicePageTemplate data={data} />;
}
