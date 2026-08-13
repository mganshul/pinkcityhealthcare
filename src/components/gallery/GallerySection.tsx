"use client";

import Image from "next/image";
import { useMemo, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FilterPills } from "@/components/common/FilterPills";
import { GalleryCard, categoryIcons } from "@/components/gallery/GalleryCard";
import {
  galleryFilters,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";

const navButtonClass =
  "border-border bg-background hover:bg-muted focus-visible:ring-ring inline-flex size-9 shrink-0 items-center justify-center rounded-lg border outline-none transition-colors duration-300 motion-reduce:transition-none focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50";

interface GallerySectionProps {
  items: GalleryItem[];
}

export function GallerySection({ items }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory | "all">(
    "all"
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [items, activeFilter]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;
  const ActiveIcon = activeItem ? categoryIcons[activeItem.category] : null;

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function showPrevious() {
    setLightboxIndex((current) => {
      if (current === null || filteredItems.length === 0) return current;
      return (current - 1 + filteredItems.length) % filteredItems.length;
    });
  }

  function showNext() {
    setLightboxIndex((current) => {
      if (current === null || filteredItems.length === 0) return current;
      return (current + 1) % filteredItems.length;
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  }

  return (
    <div>
      <FilterPills
        options={galleryFilters}
        value={activeFilter}
        onChange={setActiveFilter}
        ariaLabel="Filter gallery by category"
      />

      {filteredItems.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {filteredItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              onOpen={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground mt-10 text-center">
          No gallery images for this category yet — check back soon.
        </p>
      )}

      <Dialog
        open={activeItem !== null}
        onOpenChange={(open) => !open && closeLightbox()}
      >
        <DialogContent
          onKeyDown={handleKeyDown}
          className="max-h-[90vh] overflow-y-auto sm:max-w-2xl"
        >
          {activeItem && (
            <>
              <DialogHeader>
                <DialogTitle>{activeItem.title}</DialogTitle>
                <DialogDescription>{activeItem.description}</DialogDescription>
              </DialogHeader>

              <div className="bg-muted relative flex aspect-video items-center justify-center overflow-hidden rounded-lg">
                {activeItem.image ? (
                  <Image
                    src={activeItem.image}
                    alt={activeItem.imageAlt ?? activeItem.title}
                    fill
                    sizes="(min-width: 640px) 672px, 100vw"
                    className="object-cover"
                  />
                ) : (
                  ActiveIcon && (
                    <div className="flex flex-col items-center gap-2">
                      <ActiveIcon
                        className="text-muted-foreground/50 size-14"
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground/70 text-sm font-medium">
                        {activeItem.imagePlaceholder ?? "Photo coming soon"}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={showPrevious}
                  disabled={filteredItems.length < 2}
                  className={navButtonClass}
                >
                  <ChevronLeft className="size-4" aria-hidden="true" />
                </button>
                <p aria-live="polite" className="text-muted-foreground text-sm">
                  {lightboxIndex !== null ? lightboxIndex + 1 : 0} of{" "}
                  {filteredItems.length}
                </p>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={showNext}
                  disabled={filteredItems.length < 2}
                  className={navButtonClass}
                >
                  <ChevronRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
