import { Calendar, Clock, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/data/blogs";

// No /blog or /blog/[slug] route exists yet, so this card is intentionally
// a static preview (not a <Link>) — see Milestone 37's navigation audit.
// If a real blog is built later, re-wrap this in a Link to `/blog/${slug}`.
interface BlogCardProps extends Omit<BlogPost, "id" | "featured" | "slug"> {
  className?: string;
}

function formatPublishDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(isoDate));
}

export function BlogCard({
  title,
  category,
  excerpt,
  readingTime,
  publishDate,
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "border-border bg-card flex h-full flex-col overflow-hidden rounded-xl border shadow-sm",
        className,
      )}
    >
      <div className="bg-muted flex aspect-video items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <ImageIcon
            className="text-muted-foreground/50 size-8"
            aria-hidden="true"
          />
          <span className="text-muted-foreground/70 text-xs font-medium">
            Photo coming soon
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="bg-secondary text-primary w-fit rounded-full px-2.5 py-1 text-xs font-medium">
          {category}
        </span>

        <h3 className="font-heading text-foreground text-lg font-semibold text-balance">
          {title}
        </h3>

        <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
          {excerpt}
        </p>

        <div className="text-muted-foreground flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {readingTime} read
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="size-3.5" aria-hidden="true" />
            <time dateTime={publishDate}>{formatPublishDate(publishDate)}</time>
          </span>
        </div>
      </div>
    </article>
  );
}
