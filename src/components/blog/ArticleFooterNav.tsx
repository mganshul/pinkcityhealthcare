import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blogs";

interface ArticleFooterNavProps {
  previous: BlogPost | null;
  next: BlogPost | null;
}

const linkClassName =
  "group border-border bg-card focus-visible:ring-ring flex flex-col gap-1.5 rounded-xl border p-5 shadow-sm outline-none transition-colors duration-300 motion-reduce:transition-none hover:bg-secondary/40 focus-visible:ring-3 focus-visible:ring-offset-2";

export function ArticleFooterNav({ previous, next }: ArticleFooterNavProps) {
  if (!previous && !next) return null;

  return (
    <nav aria-label="Article navigation" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {previous ? (
        <Link href={`/blog/${previous.slug}`} className={linkClassName}>
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            Previous Article
          </span>
          <span className="text-foreground group-hover:text-primary text-sm leading-snug font-semibold transition-colors">
            {previous.title}
          </span>
        </Link>
      ) : (
        <div aria-hidden="true" />
      )}

      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className={`${linkClassName} items-end text-right`}
        >
          <span className="text-muted-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
            Next Article
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </span>
          <span className="text-foreground group-hover:text-primary text-sm leading-snug font-semibold transition-colors">
            {next.title}
          </span>
        </Link>
      ) : (
        <div aria-hidden="true" />
      )}
    </nav>
  );
}
