import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { phoneHref } from "@/constants/site";

export function MobileStickyCta() {
  return (
    <div
      className="border-border bg-background/95 fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t p-3 backdrop-blur-md sm:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Button asChild size="lg" variant="outline" className="flex-1 gap-2">
        <a href={phoneHref}>
          <Phone className="size-4" aria-hidden="true" />
          Call Now
        </a>
      </Button>
      <Button asChild size="lg" className="flex-1 gap-2">
        <Link href="/appointment">
          <CalendarCheck className="size-4" aria-hidden="true" />
          Book Appointment
        </Link>
      </Button>
    </div>
  );
}
