import { BadgeCheck, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  initials: string;
  relationship: string;
  area: string;
  service: string;
  quote: string;
  className?: string;
}

export function TestimonialCard({
  name,
  initials,
  relationship,
  area,
  service,
  quote,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "border-border bg-card flex h-full flex-col gap-4 rounded-xl border p-6 shadow-sm",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          <span className="sr-only">Rated 5 out of 5 stars</span>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              aria-hidden="true"
              className="fill-primary text-primary size-4"
            />
          ))}
        </div>
        <span className="text-muted-foreground flex items-center gap-1 text-xs font-semibold">
          <BadgeCheck
            className="text-brand-green size-3.5"
            aria-hidden="true"
          />
          Verified Patient
        </span>
      </div>

      <span className="bg-secondary text-primary w-fit rounded-full px-2.5 py-1 text-xs font-medium">
        {service}
      </span>

      <blockquote className="text-foreground flex-1 text-sm leading-relaxed">
        “{quote}”
      </blockquote>

      <figcaption className="border-border flex items-center gap-3 border-t pt-4">
        <Avatar size="lg">
          <AvatarFallback className="bg-secondary text-primary font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="text-foreground text-sm font-semibold">{name}</p>
          <p className="text-muted-foreground text-xs">
            {relationship} · {area}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
