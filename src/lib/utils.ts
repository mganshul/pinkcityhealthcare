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
