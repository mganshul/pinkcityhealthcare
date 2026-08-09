import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site";

interface LogoProps {
  className?: string;
  priority?: boolean;
  /** "white" is the light/transparent mark used over the dark hero; "default" is the full-color mark used on light header backgrounds. */
  variant?: "default" | "white";
}

// Both logo files have real transparent backgrounds, so either renders
// directly on any surface with no backdrop container. They have different
// native aspect ratios, so the logo sits in a fixed-size box (not
// height-only sizing) with object-contain — swapping `variant` changes
// only the image inside that box, never its footprint, so switching logos
// on scroll never shifts surrounding header layout.
const LOGO_SRC: Record<NonNullable<LogoProps["variant"]>, string> = {
  default: "/images/logo/logo.png",
  white: "/images/logo/logo-white-trans.png",
};

function LogoComponent({
  className,
  priority = false,
  variant = "default",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "focus-visible:ring-ring/50 relative inline-flex h-14 w-44 shrink-0 items-center rounded-lg outline-none focus-visible:ring-3 lg:h-16 lg:w-52",
        className,
      )}
    >
      <Image
        src={LOGO_SRC[variant]}
        alt={siteConfig.name}
        fill
        sizes="208px"
        priority={priority}
        className="object-contain object-left"
      />
    </Link>
  );
}

export const Logo = memo(LogoComponent);
