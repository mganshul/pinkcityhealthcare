import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Home, MessageSquare, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="bg-secondary flex size-20 items-center justify-center rounded-full">
        <SearchX className="text-primary size-10" aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-sm font-semibold tracking-wide uppercase">
          Error 404
        </p>
        <h1 className="font-heading text-foreground text-3xl font-bold sm:text-4xl">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mx-auto max-w-md text-balance">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved. Let&apos;s get you back on track.
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Button asChild size="lg" className="h-11 gap-2 px-6">
          <Link href="/">
            <Home className="size-4" aria-hidden="true" />
            Go Home
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-11 gap-2 px-6">
          <Link href="/appointment">
            <CalendarCheck className="size-4" aria-hidden="true" />
            Book Appointment
          </Link>
        </Button>
        <Button asChild size="lg" variant="ghost" className="h-11 gap-2 px-6">
          <Link href="/contact">
            <MessageSquare className="size-4" aria-hidden="true" />
            Contact Us
          </Link>
        </Button>
      </div>
    </Container>
  );
}
