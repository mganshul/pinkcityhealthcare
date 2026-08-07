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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CareerApplicationSuccessCard } from "@/components/careers/CareerApplicationSuccessCard";
import { FormField, fieldA11y } from "@/components/forms/FormField";
import {
  careerApplicationFormSchema,
  preferredShifts,
  type CareerApplicationFormInput,
} from "@/schemas/career-application";
import {
  submitCareerApplicationAction,
  type CareerApplicationActionState,
} from "@/lib/actions/career-application";

// Defined here, not in the "use server" actions file — a Server Actions
// module may only export async functions, so the idle initial state lives
// with its only caller instead (see AppointmentForm.tsx/ContactForm.tsx for
// the same pattern).
const initialCareerApplicationActionState: CareerApplicationActionState = {
  status: "idle",
  message: "",
};

const shiftLabels: Record<(typeof preferredShifts)[number], string> = {
  morning: "Morning",
  evening: "Evening",
  night: "Night",
  flexible: "Flexible",
};

interface CareerApplicationFormProps {
  position: string;
  onReturnToCareers: () => void;
}

export function CareerApplicationForm({
  position,
  onReturnToCareers,
}: CareerApplicationFormProps) {
  const [actionState, setActionState] = useState<CareerApplicationActionState>(
    initialCareerApplicationActionState
  );
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<CareerApplicationFormInput>({
    resolver: zodResolver(careerApplicationFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      position,
      yearsOfExperience: undefined,
      currentOrganization: "",
      highestQualification: "",
      preferredShift: undefined,
      city: "Jaipur",
      state: "Rajasthan",
      message: "",
      resume: undefined,
      consentToContact: false,
    },
  });

  const onSubmit = handleSubmit((values) => {
    const formData = new FormData();
    formData.set("fullName", values.fullName);
    formData.set("phone", values.phone);
    formData.set("email", values.email);
    formData.set("position", values.position);
    formData.set("yearsOfExperience", String(values.yearsOfExperience));
    formData.set("currentOrganization", values.currentOrganization ?? "");
    formData.set("highestQualification", values.highestQualification);
    formData.set("preferredShift", values.preferredShift ?? "");
    formData.set("city", values.city);
    formData.set("state", values.state);
    formData.set("message", values.message ?? "");
    formData.set("resume", values.resume);
    formData.set("consentToContact", String(values.consentToContact));

    startTransition(async () => {
      const result = await submitCareerApplicationAction(actionState, formData);
      setActionState(result);

      if (result.status === "success") {
        return;
      }

      if (result.fieldErrors) {
        for (const [field, message] of Object.entries(result.fieldErrors)) {
          if (message) {
            setError(field as keyof CareerApplicationFormInput, { message });
          }
        }
      }
    });
  });

  if (actionState.status === "success") {
    return (
      <CareerApplicationSuccessCard
        message={actionState.message}
        onReturnToCareers={onReturnToCareers}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {actionState.status === "error" && !actionState.fieldErrors && (
        <div
          role="alert"
          className="border-destructive/30 bg-destructive/10 text-destructive rounded-lg border px-4 py-3 text-sm"
        >
          {actionState.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
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
            placeholder="e.g. Priya Sharma"
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

        <FormField
          id="email"
          label="Email"
          required
          error={errors.email?.message}
        >
          <Input
            {...register("email")}
            {...fieldA11y("email", errors.email?.message, true)}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </FormField>

        <FormField id="position" label="Position Applying For" required>
          <Input
            {...register("position")}
            id="position"
            readOnly
            aria-readonly="true"
            className="bg-secondary/50 cursor-not-allowed"
          />
        </FormField>

        <FormField
          id="yearsOfExperience"
          label="Years of Experience"
          required
          error={errors.yearsOfExperience?.message}
        >
          <Input
            {...register("yearsOfExperience", {
              setValueAs: (value: string) =>
                value === "" ? undefined : Number(value),
            })}
            {...fieldA11y(
              "yearsOfExperience",
              errors.yearsOfExperience?.message,
              true
            )}
            type="number"
            inputMode="numeric"
            min={0}
            max={60}
            placeholder="e.g. 3"
          />
        </FormField>

        <FormField
          id="currentOrganization"
          label="Current Organization"
          error={errors.currentOrganization?.message}
        >
          <Input
            {...register("currentOrganization")}
            {...fieldA11y(
              "currentOrganization",
              errors.currentOrganization?.message
            )}
            placeholder="Optional"
          />
        </FormField>

        <FormField
          id="highestQualification"
          label="Highest Qualification"
          required
          error={errors.highestQualification?.message}
        >
          <Input
            {...register("highestQualification")}
            {...fieldA11y(
              "highestQualification",
              errors.highestQualification?.message,
              true
            )}
            placeholder="e.g. B.Sc Nursing"
          />
        </FormField>

        <FormField
          id="preferredShift"
          label="Preferred Shift"
          error={errors.preferredShift?.message}
        >
          <Controller
            control={control}
            name="preferredShift"
            render={({ field }) => (
              <Select
                value={field.value ?? ""}
                onValueChange={(value) =>
                  field.onChange(
                    value as CareerApplicationFormInput["preferredShift"]
                  )
                }
              >
                <SelectTrigger
                  {...fieldA11y("preferredShift", errors.preferredShift?.message)}
                  className="w-full"
                >
                  <SelectValue placeholder="Select a shift (optional)" />
                </SelectTrigger>
                <SelectContent>
                  {preferredShifts.map((shift) => (
                    <SelectItem key={shift} value={shift}>
                      {shiftLabels[shift]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </FormField>

        <FormField id="city" label="City" required error={errors.city?.message}>
          <Input
            {...register("city")}
            {...fieldA11y("city", errors.city?.message, true)}
            autoComplete="address-level2"
          />
        </FormField>

        <FormField
          id="state"
          label="State"
          required
          error={errors.state?.message}
        >
          <Input
            {...register("state")}
            {...fieldA11y("state", errors.state?.message, true)}
            autoComplete="address-level1"
          />
        </FormField>
      </div>

      <FormField
        id="message"
        label="Additional Message"
        error={errors.message?.message}
      >
        <Textarea
          {...register("message")}
          {...fieldA11y("message", errors.message?.message)}
          rows={3}
          placeholder="Anything else you'd like us to know."
        />
      </FormField>

      <Controller
        control={control}
        name="resume"
        render={({ field: { onChange, onBlur, name, ref } }) => (
          <FormField
            id="resume"
            label="Resume"
            required
            error={errors.resume?.message}
          >
            <Input
              type="file"
              id="resume"
              name={name}
              ref={ref}
              onBlur={onBlur}
              onChange={(event) => onChange(event.target.files?.[0])}
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              aria-invalid={errors.resume ? true : undefined}
              aria-describedby={
                errors.resume ? "resume-error resume-hint" : "resume-hint"
              }
              aria-required="true"
            />
            <p id="resume-hint" className="text-muted-foreground text-xs">
              PDF, DOC, or DOCX. Maximum 5 MB.
            </p>
          </FormField>
        )}
      />

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
                I agree to be contacted regarding my application.
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
        {isPending ? "Submitting…" : "Submit Application"}
      </Button>
    </form>
  );
}
