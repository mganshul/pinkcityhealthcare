"use client";

import { useEffect, useState } from "react";

/**
 * Returns whether the page has scrolled past `threshold`, updated via a
 * boolean state flip rather than raw scrollY — consumers only re-render
 * when they actually cross the line, not on every scrolled pixel.
 */
export function useScrollThreshold(threshold: number): boolean {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setIsPast(window.scrollY > threshold);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    setIsPast(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isPast;
}
