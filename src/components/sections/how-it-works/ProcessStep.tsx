"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast: boolean;
}

export function ProcessStep({
  index,
  icon: Icon,
  title,
  description,
  isLast,
}: ProcessStepProps) {
  const shouldReduceMotion = useReducedMotion();
  const stepNumber = index + 1;
  const delay = shouldReduceMotion ? 0 : index * 0.12;
  const lineDelay = shouldReduceMotion ? 0 : delay + 0.2;

  return (
    <motion.li
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
        delay,
      }}
      className="group relative flex gap-5 pb-10 last:pb-0 lg:flex-1 lg:flex-col lg:items-center lg:gap-0 lg:px-4 lg:pb-0 lg:text-center"
    >
      <div className="flex shrink-0 flex-col items-center">
        <span className="bg-secondary group-hover:bg-primary relative flex size-14 items-center justify-center rounded-full transition-colors duration-300 motion-reduce:transition-none">
          <Icon
            className="text-primary size-6 transition-colors duration-300 motion-reduce:transition-none group-hover:text-white"
            aria-hidden="true"
          />
          <span className="border-background bg-primary text-primary-foreground absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full border-2 text-xs font-bold">
            {stepNumber}
          </span>
        </span>

        {!isLast && (
          <motion.span
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              ease: "easeOut",
              delay: lineDelay,
            }}
            className="bg-border mt-2 w-px flex-1 origin-top lg:hidden"
          />
        )}
      </div>

      {!isLast && (
        <motion.span
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            ease: "easeOut",
            delay: lineDelay,
          }}
          className="bg-border absolute top-7 left-1/2 hidden h-px w-full origin-left lg:block"
        />
      )}

      <div className="lg:mt-4">
        <h3 className="font-heading text-foreground text-lg font-semibold">
          {title}
        </h3>
        <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.li>
  );
}
