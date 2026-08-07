import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { doctorVisitServicePage } from "@/data/service-pages/doctor-visit";
import { buildPageMetadata } from "@/lib/seo";

const data = doctorVisitServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function DoctorVisitPage() {
  return <ServicePageTemplate data={data} />;
}
