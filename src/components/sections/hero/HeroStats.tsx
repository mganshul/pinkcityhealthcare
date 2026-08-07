import { AnimatedCounter } from "@/components/common/AnimatedCounter";
import { cn } from "@/lib/utils";

interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

const stats: HeroStat[] = [
  { value: 5000, suffix: "+", label: "Families served" },
  { value: 100, suffix: "+", label: "Qualified nurses" },
  { value: 10, suffix: "+", label: "Years of experience" },
];

interface HeroStatsProps {
  tone?: "light" | "dark";
}

export function HeroStats({ tone = "dark" }: HeroStatsProps) {
  const cardClass =
    tone === "light"
      ? "border-white/15 bg-white/[0.06]"
      : "border-border bg-card";
  const valueClass =
    tone === "light"
      ? "text-white [text-shadow:0_2px_16px_rgba(255,255,255,0.3)]"
      : "text-foreground";
  const labelClass = tone === "light" ? "text-white/85" : "text-muted-foreground";

  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "rounded-xl border px-4 py-3.5 backdrop-blur-sm",
            cardClass,
          )}
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              className={cn(
                "font-heading block text-2xl font-bold sm:text-3xl",
                valueClass,
              )}
            />
            <span
              aria-hidden="true"
              className={cn("mt-0.5 block text-xs sm:text-sm", labelClass)}
            >
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
      <div
        className={cn(
          "rounded-xl border px-4 py-3.5 backdrop-blur-sm",
          cardClass,
        )}
      >
        <dt className="sr-only">Emergency support</dt>
        <dd>
          <span
            className={cn(
              "font-heading block text-2xl font-bold sm:text-3xl",
              valueClass,
            )}
          >
            24×7
          </span>
          <span
            aria-hidden="true"
            className={cn("mt-0.5 block text-xs sm:text-sm", labelClass)}
          >
            Emergency support
          </span>
        </dd>
      </div>
    </dl>
  );
}
