import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group border-border bg-card flex h-full flex-col gap-4 rounded-xl border p-6 shadow-sm transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-md",
        className,
      )}
    >
      <span className="bg-secondary group-hover:bg-primary flex size-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 motion-reduce:transition-none">
        <Icon
          className="text-primary size-6 transition-colors duration-300 motion-reduce:transition-none group-hover:text-white"
          aria-hidden="true"
        />
      </span>

      <div className="flex flex-col gap-1.5">
        <h3 className="font-heading text-foreground text-lg font-semibold">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
