import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { injectionAtHomeServicePage } from "@/data/service-pages/injection-at-home";
import { buildPageMetadata } from "@/lib/seo";

const data = injectionAtHomeServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function InjectionAtHomePage() {
  return <ServicePageTemplate data={data} />;
}
