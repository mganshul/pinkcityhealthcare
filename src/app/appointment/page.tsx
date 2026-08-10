import type { Metadata } from "next";
import {
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  Clock,
  HandHeart,
  HeartHandshake,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ContentSection } from "@/components/patterns/ContentSection";
import {
  ProcessTimeline,
  type ProcessStepData,
} from "@/components/patterns/ProcessTimeline";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TrustBadge } from "@/components/common/TrustBadge";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { NeedImmediateAssistanceCard } from "@/components/sections/appointment/NeedImmediateAssistanceCard";
import { siteConfig } from "@/constants/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Book an Appointment",
  description:
    "Request professional home healthcare services from PinkCity Healthcare in Jaipur — fill out the appointment form and our care coordinator will contact you shortly.",
  path: "/appointment",
});

const reassurancePoints = [
  "We review every request personally — no automated queue.",
  "A care coordinator calls your family to understand your needs.",
  "We confirm service availability for your preferred date and location.",
  "There's no obligation after your enquiry — it's simply a conversation.",
];

const appointmentProcessSteps: ProcessStepData[] = [
  {
    icon: ClipboardList,
    title: "Submit Request",
    description:
      "Fill out the appointment form with your care needs and preferred timing.",
  },
  {
    icon: Search,
    title: "Coordinator Reviews",
    description:
      "A care coordinator reviews your request and checks service availability.",
  },
  {
    icon: Phone,
    title: "We Call You",
    description:
      "We call to confirm details and answer any questions you have.",
  },
  {
    icon: HeartHandshake,
    title: "Care Begins",
    description: "Your care plan is finalized and support begins at home.",
  },
];

export default function AppointmentPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Book an Appointment"
          subtitle="Request professional home healthcare services from PinkCity Healthcare."
          breadcrumbs={[{ label: "Book an Appointment" }]}
        />
      }
    >
      <ContentSection
        eyebrow="Before You Begin"
        title="What Happens After You Submit"
      >
        <p>
          Requesting an appointment is simple, and there&apos;s no obligation —
          it&apos;s just the first step toward getting your family the right
          care.
        </p>
        <ul className="mx-auto flex max-w-xl flex-col gap-3 text-left">
          {reassurancePoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2
                className="text-primary mt-0.5 size-5 shrink-0"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </ContentSection>

      <Section id="appointment-form">
        <SectionHeader
          eyebrow="Appointment Request"
          title="Tell Us About the Care You Need"
          align="left"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-12">
          <AppointmentForm />
          <NeedImmediateAssistanceCard />
        </div>
      </Section>

      <Section id="what-happens-next" className="bg-secondary/40">
        <SectionHeader
          eyebrow="What Happens Next"
          title="From Request to Care, in Four Steps"
        />
        <ProcessTimeline steps={appointmentProcessSteps} />
      </Section>

      <Section id="why-families-trust-us">
        <SectionHeader
          eyebrow="Why Families Trust Us"
          title={`Why Families Trust ${siteConfig.name}`}
        />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <TrustBadge icon={ShieldCheck} label="Verified Staff" />
          <TrustBadge icon={BadgeCheck} label="Transparent Pricing" />
          <TrustBadge icon={Clock} label="24×7 Support" />
          <TrustBadge icon={MapPin} label="Jaipur Based" />
          <TrustBadge icon={HandHeart} label="Compassionate Care" />
        </div>
      </Section>
    </PageLayout>
  );
}
