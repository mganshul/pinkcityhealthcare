import type { Metadata } from "next";
import { Eye, HandHeart, MapPin, ShieldCheck, Zap } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ContentSection } from "@/components/patterns/ContentSection";
import { FAQAccordion } from "@/components/patterns/FAQAccordion";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TrustBadge } from "@/components/common/TrustBadge";
import { ContactForm } from "@/components/forms/ContactForm";
import { BusinessInfoCard } from "@/components/sections/contact/BusinessInfoCard";
import { GoogleMapEmbed } from "@/components/sections/contact/GoogleMapEmbed";
import { contactFaqs } from "@/data/contact-faqs";
import { siteConfig } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with PinkCity Healthcare in Jaipur — call, WhatsApp, or send us a message and our team will respond quickly.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Contact Us"
          subtitle="We're here to help you and your loved ones with compassionate home healthcare services."
          breadcrumbs={[{ label: "Contact Us" }]}
        />
      }
    >
      <ContentSection
        eyebrow="Get In Touch"
        title="Multiple Ways to Reach Our Team"
      >
        <p>
          We respond quickly to every enquiry. As a Jaipur-based team, we
          support families across the city every day, and we&apos;re happy to
          discuss home healthcare support in other cities on request. Whether
          you prefer to call, message us on WhatsApp, or send a note through
          the form below, we&apos;ll get back to you shortly.
        </p>
      </ContentSection>

      <Section id="contact-form">
        <SectionHeader
          eyebrow="Send a Message"
          title="Tell Us How We Can Help"
          align="left"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-12">
          <ContactForm />
          <BusinessInfoCard />
        </div>
      </Section>

      <Section id="map" className="bg-secondary/40">
        <SectionHeader eyebrow="Our Location" title="Find Us in Jaipur" />
        <div className="mt-10">
          <GoogleMapEmbed />
        </div>
      </Section>

      <Section id="contact-faq">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Contacting Us — Common Questions"
        />
        <div className="mt-10">
          <FAQAccordion faqs={contactFaqs} />
        </div>
      </Section>

      <Section id="why-contact-us" className="bg-secondary/40">
        <SectionHeader
          eyebrow="Why Contact Us"
          title={`Reach Out to ${siteConfig.name} With Confidence`}
        />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <TrustBadge icon={Zap} label="Fast Response" />
          <TrustBadge icon={ShieldCheck} label="Verified Healthcare Team" />
          <TrustBadge icon={Eye} label="Transparent Communication" />
          <TrustBadge icon={HandHeart} label="Compassionate Support" />
          <TrustBadge icon={MapPin} label="Jaipur Based" />
        </div>
      </Section>
    </PageLayout>
  );
}
