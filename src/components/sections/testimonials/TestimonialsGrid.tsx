"use client";

import { useMemo, useState } from "react";
import { TestimonialCard } from "@/components/sections/testimonials/TestimonialCard";
import {
  testimonialFilters,
  type Testimonial,
  type TestimonialCategory,
} from "@/data/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

export function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  const [activeFilter, setActiveFilter] = useState<TestimonialCategory | "all">(
    "all"
  );

  const filteredTestimonials = useMemo(() => {
    if (activeFilter === "all") return testimonials;
    return testimonials.filter((item) => item.category === activeFilter);
  }, [testimonials, activeFilter]);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter testimonials by service"
        className="flex flex-wrap items-center justify-center gap-2.5"
      >
        {testimonialFilters.map((filter) => {
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "focus-visible:ring-ring rounded-full border px-4 py-2 text-sm font-medium outline-none transition-colors duration-300 motion-reduce:transition-none focus-visible:ring-3 focus-visible:ring-offset-2",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:bg-secondary"
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {filteredTestimonials.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground mt-10 text-center">
          No testimonials for this service yet — check back soon.
        </p>
      )}
    </div>
  );
}
