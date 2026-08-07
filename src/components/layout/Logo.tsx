import Link from "next/link";
import { memo } from "react";
import { HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

function LogoComponent({ className, variant = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-heading focus-visible:ring-ring/50 flex items-center gap-2 rounded-lg text-lg font-bold tracking-tight outline-none focus-visible:ring-3",
        variant === "light" ? "text-white" : "text-foreground",
        className,
      )}
    >
      <span className="bg-primary text-primary-foreground flex size-9 shrink-0 items-center justify-center rounded-xl">
        <HeartPulse className="size-5" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        Pink City
        <span className="text-brand-pink">.</span>
        <span
          className={cn(
            "block text-xs font-medium tracking-wide",
            variant === "light" ? "text-white/90" : "text-muted-foreground",
          )}
        >
          {siteConfig.tagline}
        </span>
      </span>
    </Link>
  );
}

export const Logo = memo(LogoComponent);
