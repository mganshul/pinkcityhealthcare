import { googleMapsQuery, siteConfig } from "@/constants/site";

// Key-less embed (google.com/maps?...&output=embed) — no Maps JavaScript
// API key required, unlike an interactive embed.
export function GoogleMapEmbed() {
  return (
    <div className="border-border relative aspect-[4/3] w-full overflow-hidden rounded-2xl border shadow-sm sm:aspect-[16/9]">
      <iframe
        title={`${siteConfig.name} location on Google Maps`}
        src={`https://www.google.com/maps?q=${googleMapsQuery}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full border-0"
      />
    </div>
  );
}
