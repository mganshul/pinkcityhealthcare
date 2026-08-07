"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";

export function ScrollToTop() {
  const visible = useScrollThreshold(480);
  const shouldReduceMotion = useReducedMotion();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="bg-primary text-primary-foreground fixed bottom-20 left-4 z-40 flex size-11 items-center justify-center rounded-full shadow-lg hover:bg-primary/90 sm:bottom-6 sm:left-6"
        >
          <ArrowUp className="size-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
