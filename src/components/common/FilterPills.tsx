"use client";

import { cn } from "@/lib/utils";

interface FilterOption<T extends string> {
  label: string;
  value: T;
}

interface FilterPillsProps<T extends string> {
  options: FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel: string;
  className?: string;
}

// Generic client-side toggle-pill filter — used wherever a page offers a
// single-select category filter over an already-loaded list (testimonials,
// gallery, ...). One implementation of the aria-pressed toggle-group
// pattern, reused with different option sets instead of each page
// re-implementing its own pill buttons.
export function FilterPills<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  className,
}: FilterPillsProps<T>) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        "flex flex-wrap items-center justify-center gap-2.5",
        className
      )}
    >
      {options.map((option) => {
        const isActive = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              "focus-visible:ring-ring rounded-full border px-4 py-2 text-sm font-medium outline-none transition-colors duration-300 motion-reduce:transition-none focus-visible:ring-3 focus-visible:ring-offset-2",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:bg-secondary"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
