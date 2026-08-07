import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  titleId?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleId,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCentered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2">
          <span
            className="bg-brand-pink size-1.5 rounded-full"
            aria-hidden="true"
          />
          <span className="text-primary text-xs font-semibold tracking-wide uppercase">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        id={titleId}
        className="font-heading text-foreground max-w-2xl text-2xl font-bold text-balance sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground max-w-2xl text-balance sm:text-lg",
            isCentered && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
