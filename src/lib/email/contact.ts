import "server-only";
import {
  getEmailFromAddress,
  getEmailTransporter,
} from "@/lib/email/transporter";
import { siteConfig } from "@/constants/site";
import type { ContactMessageRecord } from "@/lib/supabase/queries/contacts";

/**
 * Notifies the business inbox of a new contact message. Never throws — a
 * failed notification email must never surface as a failed submission, the
 * row is already safely in Postgres by the time this is called.
 */
export async function sendContactAdminNotification(
  contactMessage: ContactMessageRecord
): Promise<void> {
  const transporter = getEmailTransporter();
  if (!transporter) return;

  try {
    await transporter.sendMail({
      from: getEmailFromAddress(),
      to: siteConfig.contact.email,
      subject: `New contact message — ${contactMessage.subject}`,
      text: [
        "A new message was submitted through the website contact form.",
        "",
        `From: ${contactMessage.full_name}`,
        `Phone: ${contactMessage.phone}`,
        contactMessage.email ? `Email: ${contactMessage.email}` : null,
        `Subject: ${contactMessage.subject}`,
        "",
        contactMessage.message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });
  } catch (error) {
    console.error("Failed to send contact admin notification email:", error);
  }
}

/**
 * Confirms receipt to the visitor, only when they provided an email —
 * never throws, same reasoning as the admin notification above.
 */
export async function sendContactConfirmationEmail(
  contactMessage: ContactMessageRecord
): Promise<void> {
  if (!contactMessage.email) return;

  const transporter = getEmailTransporter();
  if (!transporter) return;

  try {
    await transporter.sendMail({
      from: getEmailFromAddress(),
      to: contactMessage.email,
      subject: `We've received your message — ${siteConfig.name}`,
      text: [
        `Hi ${contactMessage.full_name},`,
        "",
        `Thank you for reaching out to ${siteConfig.name}. We've received your message and our team will get back to you shortly at ${contactMessage.phone}.`,
        "",
        `Your subject: ${contactMessage.subject}`,
        "",
        `Need immediate assistance? Call us at ${siteConfig.contact.phone}.`,
        siteConfig.contact.businessHours,
        "",
        siteConfig.name,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Failed to send contact confirmation email:", error);
  }
}
