import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ImageIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/data/blogs";

interface FeaturedArticleCardProps {
  post: BlogPost;
}

// The single large hero card on /blog (Section 2 of the listing page) — a
// distinct layout from BlogCard's grid tile, not a size variant of it,
// since the two need a genuinely different structure (horizontal, larger
// image, author byline, button-style CTA).
export function FeaturedArticleCard({ post }: FeaturedArticleCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group border-border bg-card focus-visible:ring-ring grid overflow-hidden rounded-2xl border shadow-sm outline-none transition-shadow duration-300 hover:shadow-md focus-visible:ring-3 focus-visible:ring-offset-2 md:grid-cols-2"
    >
      {post.featuredImage ? (
        <div className="bg-muted relative aspect-video overflow-hidden md:aspect-auto">
          <Image
            src={post.featuredImage}
            alt={post.featuredImagePlaceholder}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="bg-muted flex aspect-video items-center justify-center md:aspect-auto">
          <div className="flex flex-col items-center gap-2">
            <ImageIcon className="text-muted-foreground/50 size-10" aria-hidden="true" />
            <span className="text-muted-foreground/70 text-xs font-medium">
              Photo coming soon
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="bg-secondary text-primary w-fit rounded-full px-2.5 py-1 text-xs font-medium">
            {post.category}
          </span>
          <span className="text-primary text-xs font-semibold tracking-wide uppercase">
            Featured Article
          </span>
        </div>

        <h2 className="font-heading text-foreground text-2xl font-bold text-balance sm:text-3xl">
          {post.title}
        </h2>

        <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

        <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-xs">
          <span>{post.author.role}</span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden="true" />
            {post.readingTime} read
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="size-3.5" aria-hidden="true" />
            <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
          </span>
        </div>

        <span className={buttonVariants({ size: "lg", className: "mt-2 w-fit gap-2" })}>
          Read Article
          <ArrowRight
            className="size-4 transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
