import { MapPin } from "lucide-react";
import type { ServiceArea } from "@/data/service-areas";
import { cn } from "@/lib/utils";

interface AreaCardProps {
  area: ServiceArea;
  className?: string;
}

export function AreaCard({ area, className }: AreaCardProps) {
  return (
    <div
      className={cn(
        "border-border bg-card flex h-full flex-col gap-3.5 rounded-xl border p-6 shadow-sm",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="bg-secondary flex size-10 shrink-0 items-center justify-center rounded-full">
          <MapPin className="text-primary size-4.5" aria-hidden="true" />
        </span>
        <h3 className="font-heading text-foreground text-lg font-semibold">
          {area.name}
        </h3>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed">
        {area.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2 pt-1">
        {area.availableServices.map((service) => (
          <li
            key={service}
            className="bg-secondary text-foreground rounded-full px-2.5 py-1 text-xs font-medium"
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}
