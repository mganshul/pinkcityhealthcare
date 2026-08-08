import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import { termsAndConditionsContent } from "@/data/legal/terms";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: termsAndConditionsContent.title,
  description: termsAndConditionsContent.description,
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return <LegalPageTemplate content={termsAndConditionsContent} />;
}
