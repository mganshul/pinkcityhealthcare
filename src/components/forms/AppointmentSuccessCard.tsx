import Link from "next/link";
import { CheckCircle2, Clock, Home, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { phoneHref, siteConfig, whatsappDigits } from "@/constants/site";

interface AppointmentSuccessCardProps {
  message: string;
}

export function AppointmentSuccessCard({
  message,
}: AppointmentSuccessCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Hi ${siteConfig.name}, I just requested an appointment on your website and wanted to follow up.`
  );

  return (
    <div
      role="status"
      aria-live="polite"
      className="border-border bg-card flex flex-col items-center gap-6 rounded-2xl border p-8 text-center shadow-sm sm:p-10"
    >
      <span className="bg-primary/10 flex size-16 items-center justify-center rounded-full">
        <CheckCircle2 className="text-primary size-9" aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-foreground text-2xl font-bold sm:text-3xl">
          Thank You
        </h2>
        <p className="text-muted-foreground max-w-md text-balance sm:text-lg">
          {message}
        </p>
      </div>

      <dl className="border-border bg-secondary/40 grid w-full max-w-sm grid-cols-1 gap-4 rounded-xl border p-5 text-left sm:grid-cols-2">
        <div className="flex items-start gap-2.5">
          <Clock
            className="text-primary mt-0.5 size-4 shrink-0"
            aria-hidden="true"
          />
          <div>
            <dt className="text-foreground text-sm font-semibold">
              Business Hours
            </dt>
            <dd className="text-muted-foreground text-sm">
              {siteConfig.contact.businessHours}
            </dd>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <Phone
            className="text-primary mt-0.5 size-4 shrink-0"
            aria-hidden="true"
          />
          <div>
            <dt className="text-foreground text-sm font-semibold">
              Emergency Contact
            </dt>
            <dd className="text-muted-foreground text-sm">
              {siteConfig.contact.phone}
            </dd>
          </div>
        </div>
      </dl>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Button asChild size="lg" className="h-11 gap-2 px-6">
          <a href={phoneHref}>
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-11 gap-2 px-6">
          <a
            href={`https://wa.me/${whatsappDigits}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
        </Button>
        <Button asChild size="lg" variant="ghost" className="h-11 gap-2 px-6">
          <Link href="/">
            <Home className="size-4" aria-hidden="true" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
