import { X } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { SocialPlatform } from "@/types/navigation";

type IconProps = SVGProps<SVGSVGElement>;

function Facebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function Instagram(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Google(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
    </svg>
  );
}

function WhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.815.487 3.517 1.338 4.984L2 22l5.164-1.354A9.945 9.945 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.632 0-3.16-.457-4.463-1.249l-.32-.19-3.12.818.833-3.043-.208-.312A8.18 8.18 0 013.8 12c0-4.529 3.671-8.2 8.2-8.2s8.2 3.671 8.2 8.2-3.671 8.2-8.2 8.2z" />
      <path d="M16.223 14.416c-.333-.166-1.966-.97-2.27-1.081-.305-.11-.526-.166-.748.167-.221.332-.856 1.08-1.05 1.302-.193.221-.386.249-.719.083-.332-.167-1.404-.517-2.674-1.65-.988-.882-1.655-1.972-1.849-2.304-.193-.333-.02-.513.146-.679.15-.15.333-.39.499-.585.166-.194.221-.333.332-.554.111-.222.055-.416-.028-.583-.083-.166-.747-1.8-1.024-2.465-.27-.648-.544-.56-.747-.57l-.637-.011c-.221 0-.582.083-.887.416-.305.332-1.163 1.136-1.163 2.77 0 1.635 1.19 3.214 1.356 3.436.166.222 2.343 3.578 5.677 5.017.793.342 1.412.547 1.894.7.796.253 1.52.217 2.093.132.639-.096 1.966-.804 2.243-1.581.277-.777.277-1.443.194-1.582-.083-.138-.305-.221-.638-.387z" />
    </svg>
  );
}

const icons: Record<SocialPlatform, ComponentType<IconProps>> = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: X,
  google: Google,
  whatsapp: WhatsApp,
};

interface SocialIconProps extends IconProps {
  platform: SocialPlatform;
}

export function SocialIcon({ platform, ...props }: SocialIconProps) {
  const Icon = icons[platform];
  return <Icon {...props} />;
}
