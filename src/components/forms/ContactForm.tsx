"use client";

import { useState, useTransition } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ContactSuccessCard } from "@/components/forms/ContactSuccessCard";
import { FormField, fieldA11y } from "@/components/forms/FormField";
import { contactFormSchema, type ContactFormInput } from "@/schemas/contact";
import {
  submitContactAction,
  type ContactActionState,
} from "@/lib/actions/contact";

// Defined here, not in the "use server" actions file — a Server Actions
// module may only export async functions, so the idle initial state lives
// with its only caller instead (see AppointmentForm.tsx for the same
// pattern and why it's necessary).
const initialContactActionState: ContactActionState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [actionState, setActionState] = useState<ContactActionState>(
    initialContactActionState
  );
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      consentToContact: false,
    },
  });

  const onSubmit = handleSubmit((values) => {
    const formData = new FormData();
    formData.set("fullName", values.fullName);
    formData.set("phone", values.phone);
    formData.set("email", values.email ?? "");
    formData.set("subject", values.subject);
    formData.set("message", values.message);
    formData.set("consentToContact", String(values.consentToContact));

    startTransition(async () => {
      const result = await submitContactAction(actionState, formData);
      setActionState(result);

      if (result.status === "success") {
        reset();
        return;
      }

      if (result.fieldErrors) {
        for (const [field, message] of Object.entries(result.fieldErrors)) {
          if (message) {
            setError(field as keyof ContactFormInput, { message });
          }
        }
      }
    });
  });

  if (actionState.status === "success") {
    return <ContactSuccessCard message={actionState.message} />;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      {actionState.status === "error" && !actionState.fieldErrors && (
        <div
          role="alert"
          className="border-destructive/30 bg-destructive/10 text-destructive rounded-lg border px-4 py-3 text-sm"
        >
          {actionState.message}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          id="fullName"
          label="Full Name"
          required
          error={errors.fullName?.message}
        >
          <Input
            {...register("fullName")}
            {...fieldA11y("fullName", errors.fullName?.message, true)}
            autoComplete="name"
            placeholder="e.g. Ramesh Sharma"
          />
        </FormField>

        <FormField
          id="phone"
          label="Mobile Number"
          required
          error={errors.phone?.message}
        >
          <Input
            {...register("phone")}
            {...fieldA11y("phone", errors.phone?.message, true)}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
          />
        </FormField>

        <FormField id="email" label="Email" error={errors.email?.message}>
          <Input
            {...register("email")}
            {...fieldA11y("email", errors.email?.message)}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </FormField>

        <FormField
          id="subject"
          label="Subject"
          required
          error={errors.subject?.message}
        >
          <Input
            {...register("subject")}
            {...fieldA11y("subject", errors.subject?.message, true)}
            placeholder="What is this regarding?"
          />
        </FormField>
      </div>

      <FormField
        id="message"
        label="Message"
        required
        error={errors.message?.message}
      >
        <Textarea
          {...register("message")}
          {...fieldA11y("message", errors.message?.message, true)}
          rows={5}
          placeholder="Tell us how we can help you or your loved ones."
        />
      </FormField>

      <Controller
        control={control}
        name="consentToContact"
        render={({ field }) => (
          <div className="flex flex-col gap-1.5">
            <div className="flex items-start gap-3">
              <Checkbox
                id="consentToContact"
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                aria-invalid={errors.consentToContact ? true : undefined}
                aria-required="true"
                aria-describedby={
                  errors.consentToContact ? "consentToContact-error" : undefined
                }
                className="mt-0.5"
              />
              <Label
                htmlFor="consentToContact"
                className="text-muted-foreground font-normal"
              >
                I agree to be contacted regarding my enquiry.
                <span className="text-destructive" aria-hidden="true">
                  {" "}
                  *
                </span>
              </Label>
            </div>
            {errors.consentToContact && (
              <p
                id="consentToContact-error"
                role="alert"
                className="text-destructive text-sm"
              >
                {errors.consentToContact.message}
              </p>
            )}
          </div>
        )}
      />

      <Button
        type="submit"
        size="lg"
        disabled={isPending}
        aria-busy={isPending}
        className="h-12 gap-2 text-base"
      >
        {isPending && (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        )}
        {isPending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
