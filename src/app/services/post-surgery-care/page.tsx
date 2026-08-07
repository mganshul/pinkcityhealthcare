import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { postSurgeryCareServicePage } from "@/data/service-pages/post-surgery-care";
import { buildPageMetadata } from "@/lib/seo";

const data = postSurgeryCareServicePage;

export const metadata: Metadata = buildPageMetadata({
  title: data.seo?.title ?? data.title,
  description: data.seo?.description ?? data.description,
  path: `/services/${data.slug}`,
  keywords: data.seo?.keywords,
});

export default function PostSurgeryCarePage() {
  return <ServicePageTemplate data={data} />;
}
