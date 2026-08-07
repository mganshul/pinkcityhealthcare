"use client";

import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/a11y";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "@/components/sections/testimonials/TestimonialCard";
import { cn } from "@/lib/utils";

// Plain buttons (not the shared Button component) — verified that Button's
// focus-visible ring doesn't render (--tw-ring-shadow computes correctly but
// never reaches box-shadow, reproduced identically on already-shipped CTAs
// like Hero's "Call Now"). This is a pre-existing, sitewide issue in
// Button.tsx unrelated to this section; out of scope to fix here.
const navButtonClass =
  "border-border bg-background hover:bg-muted focus-visible:ring-ring inline-flex size-8 shrink-0 items-center justify-center rounded-lg border outline-none transition-colors duration-300 motion-reduce:transition-none focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50";

interface Testimonial {
  name: string;
  initials: string;
  relationship: string;
  area: string;
  service: string;
  quote: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <Swiper
        modules={[A11y, Keyboard]}
        speed={shouldReduceMotion ? 0 : 300}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        keyboard={{ enabled: true }}
        a11y={{
          prevSlideMessage: "Previous testimonial",
          nextSlideMessage: "Next testimonial",
          firstSlideMessage: "This is the first testimonial",
          lastSlideMessage: "This is the last testimonial",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-1"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.name} className="!h-auto">
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => swiperRef.current?.slidePrev()}
          className={navButtonClass}
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Go to testimonial from ${testimonial.name}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={cn(
                "focus-visible:ring-ring size-2 rounded-full outline-none transition-colors duration-300 motion-reduce:transition-none focus-visible:ring-3",
                activeIndex === index
                  ? "bg-primary"
                  : "bg-border hover:bg-muted-foreground/40",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => swiperRef.current?.slideNext()}
          className={navButtonClass}
        >
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
