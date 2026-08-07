import Link from "next/link";
import { ArrowRight, Calendar, Clock, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/data/blogs";

interface BlogCardProps extends Omit<BlogPost, "id" | "featured"> {
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
  slug,
  category,
  excerpt,
  readingTime,
  publishDate,
  className,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group border-border bg-card focus-visible:ring-ring flex h-full flex-col overflow-hidden rounded-xl border shadow-sm outline-none transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-md focus-visible:ring-3 focus-visible:ring-offset-2",
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

        <span className="text-primary mt-1 flex items-center gap-1.5 text-sm font-medium">
          Read Article
          <ArrowRight
            className="size-3.5 transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
