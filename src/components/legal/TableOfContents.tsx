import { cn } from "@/lib/utils";

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  className?: string;
}

// Plain anchor links — no client-side state needed, so this stays a Server
// Component. Smooth, reduced-motion-aware scrolling already comes from the
// sitewide `motion-safe:scroll-smooth` rule in globals.css; each
// LegalSection's `scroll-mt` keeps the target clear of the fixed header.
export function TableOfContents({ items, className }: TableOfContentsProps) {
  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        "border-border bg-card rounded-xl border p-5 shadow-sm",
        className
      )}
    >
      <h2 className="font-heading text-foreground text-sm font-semibold tracking-wide uppercase">
        On This Page
      </h2>
      <ul className="mt-4 flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-muted-foreground hover:text-primary hover:bg-secondary focus-visible:ring-ring block rounded-md px-2 py-1.5 text-sm outline-none transition-colors focus-visible:ring-3"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
