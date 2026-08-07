import Link from "next/link";
import { memo } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { phoneHref, siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

interface NavCTAProps {
  transparent?: boolean;
  className?: string;
}

function NavCTAComponent({ transparent = false, className }: NavCTAProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        asChild
        variant="outline"
        size="lg"
        className={cn(
          "hidden items-center gap-2 xl:inline-flex",
          transparent &&
            "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white",
        )}
      >
        <a href={phoneHref}>
          <Phone className="size-4" aria-hidden="true" />
          {siteConfig.contact.phone}
        </a>
      </Button>
      <Button asChild size="lg">
        <Link href="/book-appointment">Book Appointment</Link>
      </Button>
    </div>
  );
}

export const NavCTA = memo(NavCTAComponent);
