import type { ReactNode } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { Section } from "@/components/common/Section";
import { cn } from "@/lib/utils";

interface ImageTextSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  imagePosition?: "left" | "right";
  /** Real photo path in /public, e.g. "/images/about/about-final.png". Omit to keep the "Photo coming soon" placeholder box. */
  image?: string;
  imageAlt?: string;
  className?: string;
}

// Two-column story block (About page's Mission/Vision, a Service page's
// Overview, etc.). No real photography exists in the project yet, so the
// image side uses the same placeholder treatment already established by
// BlogCard/TeamMemberCard — swap in a real <Image> in that slot once
// photography is available.
export function ImageTextSection({
  id,
  eyebrow,
  title,
  children,
  imagePosition = "right",
  image,
  imageAlt = "Photo coming soon",
  className,
}: ImageTextSectionProps) {
  return (
    <Section id={id} className={className}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div
          className={cn(
            "bg-muted relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl",
            imagePosition === "left" && "lg:order-2",
          )}
        >
          {image ? (
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <ImageIcon
                className="text-muted-foreground/50 size-10"
                aria-hidden="true"
              />
              <span className="text-muted-foreground/70 text-xs font-medium">
                {imageAlt}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
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
          <h2 className="font-heading text-foreground text-2xl font-bold text-balance sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <div className="text-muted-foreground flex flex-col gap-4 text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </Section>
  );
}
