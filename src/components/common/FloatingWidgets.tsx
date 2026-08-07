import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { MobileStickyCta } from "@/components/common/MobileStickyCta";

export function FloatingWidgets() {
  return (
    <div role="region" aria-label="Quick actions">
      <WhatsAppButton />
      <MobileStickyCta />
    </div>
  );
}
