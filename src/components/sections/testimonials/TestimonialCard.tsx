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
  /** 1–5; defaults to 5 so existing callers that don't pass it are unchanged. */
  rating?: number;
  /** "large" is used for a page's curated Featured Testimonials, "default" everywhere else. */
  size?: "default" | "large";
  className?: string;
}

export function TestimonialCard({
  name,
  initials,
  relationship,
  area,
  service,
  quote,
  rating = 5,
  size = "default",
  className,
}: TestimonialCardProps) {
  const isLarge = size === "large";

  return (
    <figure
      className={cn(
        "border-border bg-card flex h-full flex-col gap-4 rounded-xl border shadow-sm",
        isLarge ? "gap-5 p-8 sm:p-10" : "p-6",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          <span className="sr-only">Rated {rating} out of 5 stars</span>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              aria-hidden="true"
              className={cn(
                "size-4",
                i < rating
                  ? "fill-primary text-primary"
                  : "fill-muted text-muted"
              )}
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

      <blockquote
        className={cn(
          "text-foreground flex-1 leading-relaxed",
          isLarge ? "text-base sm:text-lg" : "text-sm"
        )}
      >
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
