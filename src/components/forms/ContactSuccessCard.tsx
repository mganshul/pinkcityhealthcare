import Link from "next/link";
import { CalendarCheck, CheckCircle2, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { phoneHref, siteConfig } from "@/constants/site";

interface ContactSuccessCardProps {
  message: string;
}

export function ContactSuccessCard({ message }: ContactSuccessCardProps) {
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
          Message Received
        </h2>
        <p className="text-muted-foreground max-w-md text-balance sm:text-lg">
          {message}
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Button asChild size="lg" variant="ghost" className="h-11 gap-2 px-6">
          <Link href="/">
            <Home className="size-4" aria-hidden="true" />
            Return Home
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-11 gap-2 px-6">
          <Link href="/appointment">
            <CalendarCheck className="size-4" aria-hidden="true" />
            Book Appointment
          </Link>
        </Button>
        <Button asChild size="lg" className="h-11 gap-2 px-6">
          <a href={phoneHref}>
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
        </Button>
      </div>

      <p className="text-muted-foreground text-xs">{siteConfig.contact.businessHours}</p>
    </div>
  );
}
