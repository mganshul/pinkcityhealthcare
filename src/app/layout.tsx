import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { LoadingIndicator } from "@/components/layout/LoadingIndicator";
import { FloatingWidgets } from "@/components/common/FloatingWidgets";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pink City Healthcare | Home Healthcare Services in Jaipur",
    template: "%s | Pink City Healthcare",
  },
  description:
    "Professional home healthcare services including nursing staff, elder care, ICU care, physiotherapy, doctor visits, post-surgery care, mother & baby care and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="bg-primary text-primary-foreground focus-visible:ring-ring sr-only z-[100] rounded-lg px-4 py-2 text-sm font-semibold focus:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:ring-3"
        >
          Skip to main content
        </a>

        <Suspense fallback={null}>
          <LoadingIndicator />
        </Suspense>

        <Header />

        <main id="main-content" className="pb-[76px] sm:pb-0">
          {children}
        </main>

        <FloatingWidgets />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
