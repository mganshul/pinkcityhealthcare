"use client";

import { useMemo, useState } from "react";
import { FilterPills } from "@/components/common/FilterPills";
import { TestimonialCard } from "@/components/sections/testimonials/TestimonialCard";
import {
  testimonialFilters,
  type Testimonial,
  type TestimonialCategory,
} from "@/data/testimonials";

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
      <FilterPills
        options={testimonialFilters}
        value={activeFilter}
        onChange={setActiveFilter}
        ariaLabel="Filter testimonials by service"
      />

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
