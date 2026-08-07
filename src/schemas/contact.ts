import { z } from "zod";
import { optionalEmailField, requiredPhoneField } from "@/schemas/shared";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Full name is too long."),
  phone: requiredPhoneField,
  email: optionalEmailField,
  subject: z
    .string()
    .trim()
    .min(3, "Please add a short subject.")
    .max(150, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few more details in your message.")
    .max(2000, "Message is too long."),
  consentToContact: z.boolean().refine((value) => value === true, {
    message:
      "Please confirm you agree to be contacted regarding your enquiry.",
  }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
