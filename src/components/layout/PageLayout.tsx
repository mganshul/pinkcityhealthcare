import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  /** Typically a <PageHero>, rendered full-bleed above the content area. */
  hero?: ReactNode;
  /** Optional side column (e.g. category filters on a blog listing). Switches
   * the content area into a two-column grid; omit for a full-width page. */
  sidebar?: ReactNode;
  /**
   * Page content. Without a sidebar, pass a stack of <Section>-based blocks
   * (the pattern components in `src/components/patterns/`, or homepage
   * sections) — each already provides its own container and vertical
   * rhythm (`py-16 sm:py-20 lg:py-24`), matching the homepage exactly, so
   * this wrapper must not add a second one. With a sidebar, pass plain
   * content (not full-bleed Sections) since it renders inside one shared
   * Container/grid instead.
   */
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

// Reused by every internal page for consistent hero + content structure.
// Not responsible for metadata (each page exports its own via
// `buildPageMetadata` in `src/lib/seo.ts`) or scroll position (Next.js's
// App Router already resets scroll on navigation) — this component is
// visual chrome only.
export function PageLayout({
  hero,
  sidebar,
  children,
  className,
  containerClassName,
}: PageLayoutProps) {
  return (
    <div className={className}>
      {hero}

      {sidebar ? (
        <Container
          className={cn(
            "grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_320px] lg:gap-16 lg:py-24",
            containerClassName,
          )}
        >
          <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">
            {children}
          </div>
          <aside className="flex flex-col gap-6">{sidebar}</aside>
        </Container>
      ) : (
        <div className="flex flex-col">{children}</div>
      )}
    </div>
  );
}
