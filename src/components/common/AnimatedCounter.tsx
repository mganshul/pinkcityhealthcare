"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
}

function formatValue(value: number, prefix: string, suffix: string) {
  return `${prefix}${value.toLocaleString("en-IN")}${suffix}`;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  durationMs = 1800,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-16px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setDisplay(value);
      return;
    }

    let frameId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, shouldReduceMotion, value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {/* Screen readers get the final value immediately; the animated digits are decorative. */}
      <span aria-hidden="true">{formatValue(display, prefix, suffix)}</span>
      <span className="sr-only">{formatValue(value, prefix, suffix)}</span>
    </span>
  );
}
