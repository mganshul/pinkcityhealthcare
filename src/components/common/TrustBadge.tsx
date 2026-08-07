import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  iconClassName?: string;
}

export function TrustBadge({
  icon: Icon,
  label,
  className,
  iconClassName,
}: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "border-border bg-card/80 text-foreground inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium shadow-sm backdrop-blur-sm",
        className,
      )}
    >
      <Icon
        className={cn("text-primary size-4 shrink-0", iconClassName)}
        aria-hidden="true"
      />
      <span>{label}</span>
    </div>
  );
}
