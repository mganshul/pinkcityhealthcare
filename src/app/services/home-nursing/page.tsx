import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { homeNursingServicePage } from "@/data/service-pages/home-nursing";
import { buildPageMetadata } from "@/lib/seo";

const data = homeNursingServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function HomeNursingPage() {
  return <ServicePageTemplate data={data} />;
}
