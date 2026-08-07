import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { services } from "@/data/navigation";
import { phoneHref, siteConfig } from "@/constants/site";
import { useClampToViewport } from "@/hooks/useClampToViewport";

export function MegaMenu() {
  const { ref, offsetX } = useClampToViewport<HTMLDivElement>(16);

  return (
    <div
      ref={ref}
      style={offsetX ? { transform: `translateX(${offsetX}px)` } : undefined}
      className="flex w-[92vw] max-w-3xl overflow-hidden rounded-xl shadow-lg lg:w-[820px]"
    >
      <ul className="grid flex-1 grid-cols-2 gap-x-2 gap-y-1 p-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <li key={service.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={service.href}
                  className="group flex items-start gap-3 rounded-lg p-2.5"
                >
                  <span className="bg-secondary text-primary flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-4.5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-foreground text-sm font-semibold">
                      {service.label}
                    </span>
                    <span className="text-muted-foreground text-xs text-balance">
                      {service.description}
                    </span>
                  </span>
                </Link>
              </NavigationMenuLink>
            </li>
          );
        })}
      </ul>

      <div className="from-primary to-primary via-primary-light flex w-64 shrink-0 flex-col justify-between bg-gradient-to-br p-6 text-white">
        <div>
          <p className="text-xs font-semibold tracking-wide text-white/90 uppercase">
            Need help choosing?
          </p>
          <p className="font-heading mt-2 text-lg font-bold text-balance">
            Talk to our care coordinator
          </p>
          <p className="mt-2 text-sm text-white/90">
            We&apos;ll match you with the right caregiver within 24 hours.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href={phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-white"
          >
            <Phone className="size-4" aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
          <NavigationMenuLink asChild>
            <Link
              href="/services"
              className="text-primary inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/90"
            >
              View all services
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </NavigationMenuLink>
        </div>
      </div>
    </div>
  );
}
