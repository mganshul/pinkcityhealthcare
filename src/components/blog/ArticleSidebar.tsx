import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate } from "@/lib/utils";
import { getCategoryCounts, type BlogPost } from "@/data/blogs";
import { services } from "@/data/services";

interface ArticleSidebarProps {
  relatedPosts: BlogPost[];
  className?: string;
}

// A handful of services relevant to most articles' readers — not every
// service, to keep the sidebar scannable rather than repeating the full
// 14-item catalog already available on /services.
const popularServiceHrefs = [
  "/services/home-nursing",
  "/services/elder-care",
  "/services/icu-care",
  "/services/physiotherapy",
];

const sidebarCardClassName = "border-border bg-card rounded-xl border p-5 shadow-sm";
const sidebarHeadingClassName =
  "font-heading text-foreground text-sm font-semibold tracking-wide uppercase";

export function ArticleSidebar({ relatedPosts, className }: ArticleSidebarProps) {
  const categoryCounts = getCategoryCounts();
  const popularServices = services.filter((service) =>
    popularServiceHrefs.includes(service.href),
  );

  return (
    <aside className={cn("flex flex-col gap-6", className)}>
      <div className={sidebarCardClassName}>
        <h2 className={sidebarHeadingClassName}>Related Articles</h2>
        <ul className="mt-4 flex flex-col gap-4">
          {relatedPosts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="focus-visible:ring-ring group flex flex-col gap-1 rounded-md outline-none focus-visible:ring-3"
              >
                <span className="text-foreground group-hover:text-primary text-sm leading-snug font-medium transition-colors">
                  {post.title}
                </span>
                <span className="text-muted-foreground text-xs">
                  {formatDate(post.publishDate)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={sidebarCardClassName}>
        <h2 className={sidebarHeadingClassName}>Categories</h2>
        <ul className="mt-4 flex flex-col gap-2.5">
          {categoryCounts.map(({ category, count }) => (
            <li
              key={category}
              className="text-muted-foreground flex items-center justify-between text-sm"
            >
              <span>{category}</span>
              <Badge variant="secondary">{count}</Badge>
            </li>
          ))}
        </ul>
      </div>

      <div className={sidebarCardClassName}>
        <h2 className={sidebarHeadingClassName}>Popular Services</h2>
        <ul className="mt-4 flex flex-col gap-2.5">
          {popularServices.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                {service.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="from-primary-light via-primary to-primary-dark rounded-xl bg-gradient-to-br p-5 text-center text-white shadow-sm">
        <p className="font-heading text-lg font-bold">Need Care at Home?</p>
        <p className="mt-1.5 text-sm text-white/90">
          Book an appointment and our care coordinator will get in touch.
        </p>
        <Link
          href="/appointment"
          className={buttonVariants({
            size: "lg",
            variant: "secondary",
            className: "focus-visible:ring-white/70 focus-visible:outline-white mt-4 w-full",
          })}
        >
          Book Appointment
        </Link>
      </div>
    </aside>
  );
}
