import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  formattedAddress,
  googleMapsHref,
  phoneHref,
  siteConfig,
  whatsappDigits,
} from "@/constants/site";

const whatsappMessage = encodeURIComponent(
  `Hi ${siteConfig.name}, I'd like to know more about your home healthcare services.`
);

const rows = [
  { icon: Phone, label: "Phone", value: siteConfig.contact.phone },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.contact.whatsapp,
  },
  { icon: Mail, label: "Email", value: siteConfig.contact.email },
  { icon: MapPin, label: "Address", value: formattedAddress },
  {
    icon: Clock,
    label: "Business Hours",
    value: siteConfig.contact.businessHours,
  },
  {
    icon: Navigation,
    label: "Coverage Area",
    value: `${siteConfig.serviceArea.primary} — ${siteConfig.serviceArea.coverageNote}`,
  },
] as const;

export function BusinessInfoCard() {
  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle className="font-heading text-lg">
          Business Information
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <dl className="flex flex-col gap-4">
          {rows.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="bg-secondary flex size-9 shrink-0 items-center justify-center rounded-full">
                <Icon className="text-primary size-4" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                  {label}
                </dt>
                <dd className="text-foreground text-sm font-medium">{value}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-2.5">
          <Button asChild className="h-11 gap-2">
            <a href={phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </a>
          </Button>
          <Button asChild variant="outline" className="h-11 gap-2">
            <a
              href={`https://wa.me/${whatsappDigits}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" className="h-11 gap-2">
            <a href={googleMapsHref} target="_blank" rel="noopener noreferrer">
              <MapPin className="size-4" aria-hidden="true" />
              Get Directions
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
