import { z } from "zod";
import { emailRegex, phoneRegex } from "@/schemas/shared";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Full name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .max(254, "Email is too long.")
    .regex(emailRegex, "Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .max(20, "Phone number is too long.")
    .optional()
    .refine(
      (value) => !value || phoneRegex.test(value),
      "Enter a valid 10-digit Indian mobile number."
    ),
  subject: z.string().trim().max(150, "Subject is too long.").optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few more details in your message.")
    .max(2000, "Message is too long."),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
