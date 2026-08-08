import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import { privacyPolicyContent } from "@/data/legal/privacy";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: privacyPolicyContent.title,
  description: privacyPolicyContent.description,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalPageTemplate content={privacyPolicyContent} />;
}
