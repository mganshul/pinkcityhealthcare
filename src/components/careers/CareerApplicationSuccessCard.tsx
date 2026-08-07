import Link from "next/link";
import { CheckCircle2, MessageSquare, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CareerApplicationSuccessCardProps {
  message: string;
  onReturnToCareers: () => void;
}

export function CareerApplicationSuccessCard({
  message,
  onReturnToCareers,
}: CareerApplicationSuccessCardProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center gap-6 p-2 text-center sm:p-4"
    >
      <span className="bg-primary/10 flex size-16 items-center justify-center rounded-full">
        <CheckCircle2 className="text-primary size-9" aria-hidden="true" />
      </span>

      <div className="flex flex-col gap-2">
        <h2 className="font-heading text-foreground text-xl font-bold sm:text-2xl">
          Application Submitted Successfully
        </h2>
        <p className="text-muted-foreground max-w-sm text-balance sm:text-base">
          {message}
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Button
          type="button"
          size="lg"
          variant="outline"
          className="h-11 gap-2 px-6"
          onClick={onReturnToCareers}
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          Return to Careers
        </Button>
        <Button asChild size="lg" className="h-11 gap-2 px-6">
          <Link href="/contact">
            <MessageSquare className="size-4" aria-hidden="true" />
            Contact Us
          </Link>
        </Button>
      </div>
    </div>
  );
}
