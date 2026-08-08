import { Loader2 } from "lucide-react";

// Every route today is statically prerendered (see `next build` output),
// and the sitewide LoadingIndicator (top progress bar, in the root layout)
// already covers navigation transitions — so this fallback should rarely,
// if ever, actually be shown. It exists as a lightweight safety net for
// any route that becomes dynamic/streaming in the future.
export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-[40vh] items-center justify-center py-24"
    >
      <Loader2
        className="text-primary size-8 animate-spin motion-reduce:animate-none"
        aria-hidden="true"
      />
    </div>
  );
}
