import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { medicalEquipmentServicePage } from "@/data/service-pages/medical-equipment";
import { buildPageMetadata } from "@/lib/seo";

const data = medicalEquipmentServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function MedicalEquipmentPage() {
  return <ServicePageTemplate data={data} />;
}
