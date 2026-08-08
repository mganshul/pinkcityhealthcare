"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled route error:", error);
  }, [error]);

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <span className="bg-destructive/10 flex size-20 items-center justify-center rounded-full">
        <AlertTriangle className="text-destructive size-10" aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-2">
        <p className="text-destructive text-sm font-semibold tracking-wide uppercase">
          Something Went Wrong
        </p>
        <h1 className="font-heading text-foreground text-3xl font-bold sm:text-4xl">
          We Hit an Unexpected Error
        </h1>
        <p className="text-muted-foreground mx-auto max-w-md text-balance">
          Something didn&apos;t load correctly. Please try again, or head
          back home if the problem continues.
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Button
          type="button"
          size="lg"
          onClick={() => reset()}
          className="h-11 gap-2 px-6"
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          Try Again
        </Button>
        <Button asChild size="lg" variant="outline" className="h-11 gap-2 px-6">
          <Link href="/">
            <Home className="size-4" aria-hidden="true" />
            Go Home
          </Link>
        </Button>
      </div>
    </Container>
  );
}
