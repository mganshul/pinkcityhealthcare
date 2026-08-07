"use client";

import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Logo";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavCTA } from "@/components/layout/NavCTA";
import { Container } from "@/components/common/Container";
import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import { cn } from "@/lib/utils";

const TRANSPARENT_ROUTES = new Set(["/"]);

export function Header() {
  const pathname = usePathname();
  const isScrolled = useScrollThreshold(24);
  const transparent = TRANSPARENT_ROUTES.has(pathname) && !isScrolled;
  const hasTransparentHero = TRANSPARENT_ROUTES.has(pathname);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 motion-reduce:transition-none",
          transparent
            ? "bg-transparent"
            : "bg-background/95 border-border/80 border-b shadow-md backdrop-blur-md",
        )}
      >
        <Container className="flex h-16 items-center justify-between lg:h-20">
          <Logo variant={transparent ? "light" : "default"} />

          <div className="flex items-center gap-3">
            <DesktopNav transparent={transparent} />
            <NavCTA transparent={transparent} className="hidden lg:flex" />
            <MobileNav transparent={transparent} />
          </div>
        </Container>
      </header>
      {!hasTransparentHero && <div className="h-16 lg:h-20" aria-hidden="true" />}
    </>
  );
}
