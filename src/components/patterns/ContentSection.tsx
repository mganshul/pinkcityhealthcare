import type { ReactNode } from "react";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

interface ContentSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  children: ReactNode;
}

// Generic text-first section for prose content (an About page's Story or
// Mission copy, legal-page bodies, etc.) — keeps body copy inside a
// readable max-width column instead of stretching full-container-width.
export function ContentSection({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  className,
  children,
}: ContentSectionProps) {
  return (
    <Section id={id} className={className}>
      {title && (
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={align}
        />
      )}
      <div className="text-muted-foreground mx-auto mt-8 flex max-w-3xl flex-col gap-4 text-base leading-relaxed">
        {children}
      </div>
    </Section>
  );
}
