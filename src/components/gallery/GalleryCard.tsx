import {
  Activity,
  Bed,
  GraduationCap,
  Heart,
  Home,
  PersonStanding,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  galleryCategoryLabels,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";

export const categoryIcons: Record<GalleryCategory, LucideIcon> = {
  "home-nursing": Home,
  "elder-care": Heart,
  "icu-care": Activity,
  physiotherapy: PersonStanding,
  "medical-equipment": Bed,
  training: GraduationCap,
  "community-care": Users,
};

interface GalleryCardProps {
  item: GalleryItem;
  onOpen: () => void;
}

export function GalleryCard({ item, onOpen }: GalleryCardProps) {
  const Icon = categoryIcons[item.category];

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View image: ${item.title}`}
      className="group border-border bg-card focus-visible:ring-ring flex h-full flex-col overflow-hidden rounded-xl border text-left shadow-sm outline-none transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-1 hover:shadow-md focus-visible:ring-3 focus-visible:ring-offset-2"
    >
      {/* Fixed aspect-ratio box so swapping this placeholder for a real
          next/image later (with fill + object-cover) needs no layout change. */}
      <div className="bg-muted relative flex aspect-square items-center justify-center overflow-hidden">
        <Badge variant="secondary" className="absolute top-3 left-3">
          {galleryCategoryLabels[item.category]}
        </Badge>
        <div className="flex flex-col items-center gap-2">
          <Icon
            className="text-muted-foreground/50 size-10 transition-transform duration-300 motion-reduce:transition-none group-hover:scale-105"
            aria-hidden="true"
          />
          <span className="text-muted-foreground/70 text-xs font-medium">
            Photo coming soon
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <h3 className="font-heading text-foreground text-base font-semibold">
          {item.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </button>
  );
}
