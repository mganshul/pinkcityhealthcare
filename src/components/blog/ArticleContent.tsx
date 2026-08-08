import { Info, Lightbulb, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogContentBlock } from "@/data/blogs";

interface ArticleContentProps {
  blocks: BlogContentBlock[];
  className?: string;
}

const calloutConfig = {
  info: {
    icon: Info,
    className: "border-primary/25 bg-primary/5",
    iconClassName: "text-primary",
  },
  tip: {
    icon: Lightbulb,
    className: "border-brand-pink/30 bg-brand-pink/5",
    iconClassName: "text-brand-pink",
  },
  warning: {
    icon: TriangleAlert,
    className: "border-destructive/30 bg-destructive/5",
    iconClassName: "text-destructive",
  },
} as const;

// Renders a post's `content` block array — the same renderer backs every
// article, so heading hierarchy, spacing, and typography stay identical no
// matter which post is being read. Pure function of data: swapping the
// data source for Supabase later requires no change here.
export function ArticleContent({ blocks, className }: ArticleContentProps) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            const Tag = block.level === 3 ? "h3" : "h2";
            return (
              <Tag
                key={index}
                className={cn(
                  "font-heading text-foreground font-bold text-balance",
                  block.level === 3 ? "mt-2 text-lg sm:text-xl" : "mt-4 text-xl sm:text-2xl",
                )}
              >
                {block.text}
              </Tag>
            );
          }

          case "paragraph":
            return (
              <p key={index} className="text-muted-foreground text-base leading-relaxed">
                {block.text}
              </p>
            );

          case "list": {
            const ListTag = block.style === "ordered" ? "ol" : "ul";
            return (
              <ListTag
                key={index}
                className={cn(
                  "text-muted-foreground flex flex-col gap-2 pl-5 text-base leading-relaxed",
                  block.style === "ordered" ? "list-decimal" : "list-disc",
                )}
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ListTag>
            );
          }

          case "quote":
            return (
              <blockquote
                key={index}
                className="border-primary bg-secondary/40 text-foreground rounded-r-lg border-l-4 py-3 pl-5 text-base leading-relaxed italic"
              >
                <p>&ldquo;{block.text}&rdquo;</p>
                {block.attribution && (
                  <footer className="text-muted-foreground mt-2 text-sm font-medium not-italic">
                    — {block.attribution}
                  </footer>
                )}
              </blockquote>
            );

          case "table":
            return (
              <div
                key={index}
                className="border-border overflow-x-auto rounded-xl border"
              >
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary/60">
                    <tr>
                      {block.headers.map((header) => (
                        <th
                          key={header}
                          scope="col"
                          className="text-foreground px-4 py-3 font-semibold"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-border divide-y">
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="text-muted-foreground px-4 py-3"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "callout": {
            const { icon: Icon, className: variantClassName, iconClassName } =
              calloutConfig[block.variant ?? "info"];
            return (
              <div
                key={index}
                className={cn("flex gap-3 rounded-xl border p-4", variantClassName)}
              >
                <Icon className={cn("mt-0.5 size-5 shrink-0", iconClassName)} aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  {block.title && (
                    <p className="text-foreground text-sm font-semibold">{block.title}</p>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed">{block.text}</p>
                </div>
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
