import { Mail, MessageCircle } from "lucide-react";
import { SocialIcon } from "@/components/common/SocialIcon";

interface ShareButtonsProps {
  url: string;
  title: string;
}

// Plain share-intent links — no clipboard API, no client component. Reuses
// SocialIcon (the same Facebook/X marks used in the Footer) instead of
// redrawing brand icons here.
export function ShareButtons({ url, title }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: <MessageCircle className="size-4" aria-hidden="true" />,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <SocialIcon platform="twitter" className="size-4" />,
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <SocialIcon platform="facebook" className="size-4" />,
    },
    {
      label: "Share via Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: <Mail className="size-4" aria-hidden="true" />,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-foreground text-sm font-semibold">Share:</span>
      <ul className="flex items-center gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              className="border-border bg-card text-muted-foreground hover:bg-primary hover:text-primary-foreground focus-visible:ring-ring flex size-9 items-center justify-center rounded-full border outline-none transition-colors focus-visible:ring-3 focus-visible:ring-offset-2"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
