"use client";

import { useLayoutEffect, useRef, useState } from "react";

/**
 * Nudges an absolutely-positioned element back inside the viewport horizontally.
 * Needed for menus anchored to a trigger that isn't near the viewport edges —
 * the trigger position alone doesn't guarantee the panel fits.
 *
 * Re-measures after the open animation settles (scale/fade-in transforms make
 * the rect measured on mount unreliable) and on resize.
 */
export function useClampToViewport<T extends HTMLElement>(margin = 16) {
  const ref = useRef<T>(null);
  const offsetRef = useRef(0);
  const [offsetX, setOffsetX] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const recalculate = () => {
      const rect = element.getBoundingClientRect();
      const naturalLeft = rect.left - offsetRef.current;
      const naturalRight = rect.right - offsetRef.current;

      let next = 0;
      if (naturalRight > window.innerWidth - margin) {
        next = window.innerWidth - margin - naturalRight;
      } else if (naturalLeft < margin) {
        next = margin - naturalLeft;
      }

      offsetRef.current = next;
      setOffsetX(next);
    };

    recalculate();

    // The open animation (scale/fade) runs on an ancestor (Radix's content
    // panel, not this element), so the rect measured at mount is unreliable
    // until it settles. Listen on `document` since animationend bubbles up
    // through ancestors, not down to us — plus a timeout as a safety net.
    const settleTimeout = setTimeout(recalculate, 350);
    document.addEventListener("animationend", recalculate);
    document.addEventListener("transitionend", recalculate);
    window.addEventListener("resize", recalculate);

    return () => {
      clearTimeout(settleTimeout);
      document.removeEventListener("animationend", recalculate);
      document.removeEventListener("transitionend", recalculate);
      window.removeEventListener("resize", recalculate);
    };
  }, [margin]);

  return { ref, offsetX };
}
