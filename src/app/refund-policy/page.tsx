import type { Metadata } from "next";
import { LegalPageTemplate } from "@/components/legal/LegalPageTemplate";
import { refundPolicyContent } from "@/data/legal/refund";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: refundPolicyContent.title,
  description: refundPolicyContent.description,
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return <LegalPageTemplate content={refundPolicyContent} />;
}
