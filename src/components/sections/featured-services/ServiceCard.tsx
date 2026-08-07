import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group border-border bg-card focus-visible:ring-ring flex h-full flex-col gap-3.5 rounded-xl border p-6 shadow-sm outline-none transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-md focus-visible:ring-3 focus-visible:ring-offset-2",
        className,
      )}
    >
      <span className="bg-secondary group-hover:bg-primary flex size-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 motion-reduce:transition-none">
        <Icon
          className="text-primary size-6 transition-colors duration-300 motion-reduce:transition-none group-hover:text-white"
          aria-hidden="true"
        />
      </span>

      <div className="flex flex-1 flex-col gap-1.5">
        <h3 className="font-heading text-foreground text-lg font-semibold">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <span className="text-primary mt-auto flex items-center gap-1.5 text-sm font-semibold">
        Learn More
        <ArrowRight
          className="size-3.5 transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
