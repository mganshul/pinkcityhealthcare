import type { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  description: string;
  className?: string;
}

export function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  description,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "group border-border bg-card flex h-full flex-col items-center gap-3 rounded-2xl border p-6 text-center shadow-md transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-lg sm:p-8",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="bg-secondary group-hover:bg-primary flex size-14 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 motion-reduce:transition-none"
      >
        <Icon className="text-primary size-7 transition-colors duration-300 motion-reduce:transition-none group-hover:text-white" />
      </span>

      <AnimatedCounter
        value={value}
        suffix={suffix}
        className="font-heading text-foreground block text-4xl font-bold sm:text-5xl"
      />

      <h3 className="font-heading text-foreground text-base font-semibold">
        {label}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
