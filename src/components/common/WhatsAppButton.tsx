"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappDigits } from "@/constants/site";

const PING_DURATION_MS = 6000;

export function WhatsAppButton() {
  const shouldReduceMotion = useReducedMotion();
  const [showPing, setShowPing] = useState(true);

  useEffect(() => {
    if (shouldReduceMotion) {
      setShowPing(false);
      return;
    }
    const timeout = setTimeout(() => setShowPing(false), PING_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [shouldReduceMotion]);

  const message = encodeURIComponent(
    `Hi ${siteConfig.name}, I'd like to know more about your home healthcare services.`,
  );

  return (
    <motion.a
      href={`https://wa.me/${whatsappDigits}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.3,
        delay: shouldReduceMotion ? 0 : 0.5,
      }}
      className="fixed right-4 bottom-20 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      {showPing && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      )}
      <MessageCircle className="relative size-7" aria-hidden="true" />
    </motion.a>
  );
}
