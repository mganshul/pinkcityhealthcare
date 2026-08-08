import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Internal routes ("/about") should use next/link; tel:/mailto:/external
 * hrefs should use a plain <a> so the browser handles them natively. */
export function isInternalHref(href: string) {
  return href.startsWith("/");
}

/** Formats an ISO date string ("2026-07-28") for display — shared by every
 * blog card, article meta row, and sidebar so date formatting stays
 * identical everywhere it appears. */
export function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(isoDate));
}
