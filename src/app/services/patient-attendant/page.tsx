import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { patientAttendantServicePage } from "@/data/service-pages/patient-attendant";
import { buildPageMetadata } from "@/lib/seo";

const data = patientAttendantServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function PatientAttendantPage() {
  return <ServicePageTemplate data={data} />;
}
