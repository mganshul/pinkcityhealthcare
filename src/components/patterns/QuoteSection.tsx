import { Quote } from "lucide-react";
import { Section } from "@/components/common/Section";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface QuoteSectionProps {
  id?: string;
  quote: string;
  attributionName: string;
  attributionRole?: string;
  initials?: string;
  className?: string;
}

// Pull-quote block — a founder statement, mission line, or featured
// testimonial (About page's Founder section, etc.).
export function QuoteSection({
  id,
  quote,
  attributionName,
  attributionRole,
  initials,
  className,
}: QuoteSectionProps) {
  return (
    <Section id={id} className={className}>
      <figure className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <Quote className="text-primary/30 size-10" aria-hidden="true" />
        <blockquote className="font-heading text-foreground text-xl leading-snug text-balance sm:text-2xl">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <figcaption className="flex items-center gap-3">
          {initials && (
            <Avatar size="lg">
              <AvatarFallback className="bg-secondary text-primary font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
          )}
          <div className={cn("text-left", !initials && "text-center")}>
            <p className="text-foreground text-sm font-semibold">
              {attributionName}
            </p>
            {attributionRole && (
              <p className="text-muted-foreground text-xs">{attributionRole}</p>
            )}
          </div>
        </figcaption>
      </figure>
    </Section>
  );
}
