import type { LegalSectionData } from "@/data/legal/types";

// Renders one section of a legal page from data — the same component
// backs every section on every legal page, so heading structure, spacing,
// and typography stay identical no matter which policy is being read.
// scroll-mt offsets the anchor target below the fixed site header so a
// Table of Contents (or #hash) link doesn't scroll the heading out of view.
export function LegalSection({ id, title, paragraphs, list }: LegalSectionData) {
  return (
    <section id={id} className="scroll-mt-24 lg:scroll-mt-28">
      <h2 className="font-heading text-foreground text-xl font-bold sm:text-2xl">
        {title}
      </h2>
      <div className="text-muted-foreground mt-4 flex flex-col gap-4 text-sm leading-relaxed sm:text-base">
        {paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        {list && (
          <ul className="flex list-disc flex-col gap-2 pl-5">
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
