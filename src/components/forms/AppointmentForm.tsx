"use client";

import { useEffect, useState, useTransition, type ReactNode } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppointmentSuccessCard } from "@/components/forms/AppointmentSuccessCard";
import {
  appointmentFormSchema,
  type AppointmentFormInput,
} from "@/schemas/appointment";
import {
  submitAppointmentAction,
  type AppointmentActionState,
} from "@/lib/actions/appointment";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const serviceOptions = services.map((service) => ({
  slug: service.href.replace("/services/", ""),
  label: service.label,
}));

// Defined here, not in the "use server" actions file — a Server Actions
// module may only export async functions, so the idle initial state lives
// with its only caller instead.
const initialAppointmentActionState: AppointmentActionState = {
  status: "idle",
  message: "",
};

function fieldA11y(id: string, error?: string, required?: boolean) {
  return {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    "aria-required": required ? true : undefined,
  } as const;
}

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}

function FormField({
  id,
  label,
  required,
  error,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label htmlFor={id}>
        {label}
        {required && (
          <span className="text-destructive" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-destructive text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

export function AppointmentForm() {
  const [actionState, setActionState] = useState<AppointmentActionState>(
    initialAppointmentActionState
  );
  const [isPending, startTransition] = useTransition();
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  // Computed after mount (not during render) so the server-rendered HTML
  // and the client's first render match — "today" depends on the visitor's
  // clock, not the page's static build time.
  useEffect(() => {
    setMinDate(new Date().toISOString().slice(0, 10));
  }, []);

  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors },
  } = useForm<AppointmentFormInput>({
    resolver: zodResolver(appointmentFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      serviceSlug: "",
      preferredDate: "",
      preferredTime: "",
      patientAge: undefined,
      address: "",
      city: "Jaipur",
      message: "",
      consentToContact: false,
    },
  });

  const onSubmit = handleSubmit((values) => {
    const formData = new FormData();
    formData.set("fullName", values.fullName);
    formData.set("phone", values.phone);
    formData.set("email", values.email ?? "");
    formData.set("serviceSlug", values.serviceSlug);
    formData.set("preferredDate", values.preferredDate);
    formData.set("preferredTime", values.preferredTime);
    formData.set(
      "patientAge",
      values.patientAge === undefined ? "" : String(values.patientAge)
    );
    formData.set("address", values.address);
    formData.set("city", values.city);
    formData.set("message", values.message ?? "");
    formData.set("consentToContact", String(values.consentToContact));

    startTransition(async () => {
      const result = await submitAppointmentAction(actionState, formData);
      setActionState(result);

      if (result.status === "success") {
        reset();
        return;
      }

      if (result.fieldErrors) {
        for (const [field, message] of Object.entries(result.fieldErrors)) {
          if (message) {
            setError(field as keyof AppointmentFormInput, { message });
          }
        }
      }
    });
  });

  if (actionState.status === "success") {
    return <AppointmentSuccessCard message={actionState.message} />;
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
          label="Patient Name"
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
          id="serviceSlug"
          label="Service Required"
          required
          error={errors.serviceSlug?.message}
        >
          <Controller
            control={control}
            name="serviceSlug"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger
                  {...fieldA11y(
                    "serviceSlug",
                    errors.serviceSlug?.message,
                    true
                  )}
                  className="w-full"
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((service) => (
                    <SelectItem key={service.slug} value={service.slug}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </FormField>

        <FormField
          id="preferredDate"
          label="Preferred Date"
          required
          error={errors.preferredDate?.message}
        >
          <Input
            {...register("preferredDate")}
            {...fieldA11y("preferredDate", errors.preferredDate?.message, true)}
            type="date"
            min={minDate}
          />
        </FormField>

        <FormField
          id="preferredTime"
          label="Preferred Time"
          required
          error={errors.preferredTime?.message}
        >
          <Input
            {...register("preferredTime")}
            {...fieldA11y("preferredTime", errors.preferredTime?.message, true)}
            type="time"
          />
        </FormField>

        <FormField
          id="patientAge"
          label="Patient Age"
          error={errors.patientAge?.message}
        >
          <Input
            {...register("patientAge", {
              setValueAs: (value: string) =>
                value === "" ? undefined : Number(value),
            })}
            {...fieldA11y("patientAge", errors.patientAge?.message)}
            type="number"
            inputMode="numeric"
            min={0}
            max={120}
            placeholder="e.g. 68"
          />
        </FormField>

        <FormField id="city" label="City" required error={errors.city?.message}>
          <Input
            {...register("city")}
            {...fieldA11y("city", errors.city?.message, true)}
            autoComplete="address-level2"
          />
        </FormField>
      </div>

      <FormField
        id="address"
        label="Full Address"
        required
        error={errors.address?.message}
      >
        <Textarea
          {...register("address")}
          {...fieldA11y("address", errors.address?.message, true)}
          autoComplete="street-address"
          rows={3}
          placeholder="House/flat number, street, locality, landmark"
        />
      </FormField>

      <FormField
        id="message"
        label="Additional Notes"
        error={errors.message?.message}
      >
        <Textarea
          {...register("message")}
          {...fieldA11y("message", errors.message?.message)}
          rows={3}
          placeholder="Anything else that would help us prepare — medical condition, mobility needs, etc."
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
                I agree to be contacted regarding my appointment.
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
        {isPending ? "Submitting…" : "Request Appointment"}
      </Button>
    </form>
  );
}
