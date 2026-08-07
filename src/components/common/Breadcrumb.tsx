import { Fragment } from "react";
import Link from "next/link";
import {
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { siteConfig } from "@/constants/site";
import type { BreadcrumbItem as BreadcrumbItemType } from "@/types/navigation";

interface BreadcrumbsProps {
  items: BreadcrumbItemType[];
  className?: string;
  /** "light" reads on dark/colored backgrounds — e.g. inside a dark PageHero. */
  tone?: "default" | "light";
}

export function Breadcrumbs({ items, className, tone = "default" }: BreadcrumbsProps) {
  const trail = [{ label: "Home", href: "/" }, ...items];
  const isLight = tone === "light";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${siteConfig.url}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BreadcrumbRoot className={className}>
        <BreadcrumbList className={isLight ? "text-white/70" : undefined}>
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <Fragment key={item.label}>
                <BreadcrumbItem>
                  {isLast || !item.href ? (
                    <BreadcrumbPage className={isLight ? "text-white" : undefined}>
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      asChild
                      className={isLight ? "hover:text-white" : undefined}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </BreadcrumbRoot>
    </>
  );
}
