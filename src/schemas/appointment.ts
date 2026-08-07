import { z } from "zod";
import { services } from "@/data/services";
import { optionalEmailField, requiredPhoneField } from "@/schemas/shared";

// Services live in code (src/data/services.ts), not the database, so there
// is no DB foreign key to lean on — this Set is the actual guardrail against
// a booking being submitted for a service that doesn't exist on the site.
const validServiceSlugs = new Set(
  services.map((service) => service.href.replace("/services/", ""))
);

const dateOnlyRegex = /^\d{4}-\d{2}-\d{2}$/;
const timeOnlyRegex = /^([01]\d|2[0-3]):[0-5]\d$/;

export const appointmentFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter the patient's full name.")
    .max(120, "Full name is too long."),
  phone: requiredPhoneField,
  email: optionalEmailField,
  serviceSlug: z
    .string()
    .trim()
    .min(1, "Please select a service.")
    .refine(
      (value) => validServiceSlugs.has(value),
      "Please select a valid service."
    ),
  preferredDate: z
    .string()
    .trim()
    .regex(dateOnlyRegex, "Enter a date in YYYY-MM-DD format.")
    .refine((value) => !Number.isNaN(Date.parse(value)), "Enter a valid date.")
    .refine((value) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return new Date(value) >= today;
    }, "Preferred date cannot be in the past."),
  preferredTime: z
    .string()
    .trim()
    .regex(timeOnlyRegex, "Enter a valid time (HH:MM)."),
  patientAge: z
    .number()
    .int("Age must be a whole number.")
    .min(0, "Age cannot be negative.")
    .max(120, "Enter a valid age.")
    .optional(),
  address: z
    .string()
    .trim()
    .min(10, "Please share the full address for the home visit.")
    .max(500, "Address is too long."),
  city: z
    .string()
    .trim()
    .min(2, "City is required.")
    .max(100, "City is too long."),
  message: z.string().trim().max(1000, "Message is too long.").optional(),
  consentToContact: z.boolean().refine((value) => value === true, {
    message:
      "Please confirm you agree to be contacted regarding your appointment.",
  }),
});

export type AppointmentFormInput = z.infer<typeof appointmentFormSchema>;
