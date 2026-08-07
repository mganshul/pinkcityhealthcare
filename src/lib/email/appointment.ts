import "server-only";
import {
  getEmailFromAddress,
  getEmailTransporter,
} from "@/lib/email/transporter";
import { siteConfig } from "@/constants/site";
import { services } from "@/data/services";
import type { AppointmentRecord } from "@/lib/supabase/queries/appointments";

function getServiceLabel(serviceSlug: string): string {
  const service = services.find(
    (item) => item.href === `/services/${serviceSlug}`
  );
  return service?.label ?? serviceSlug;
}

/**
 * Notifies the business inbox of a new appointment request. Never throws —
 * a failed notification email must never surface as a failed booking, the
 * row is already safely in Postgres by the time this is called.
 */
export async function sendAppointmentAdminNotification(
  appointment: AppointmentRecord
): Promise<void> {
  const transporter = getEmailTransporter();
  if (!transporter) return;

  try {
    await transporter.sendMail({
      from: getEmailFromAddress(),
      to: siteConfig.contact.email,
      subject: `New appointment request — ${appointment.full_name}`,
      text: [
        "A new appointment request was submitted on the website.",
        "",
        `Patient: ${appointment.full_name}`,
        `Phone: ${appointment.phone}`,
        appointment.email ? `Email: ${appointment.email}` : null,
        appointment.patient_age
          ? `Patient age: ${appointment.patient_age}`
          : null,
        `Service: ${getServiceLabel(appointment.service_slug)}`,
        `Preferred date: ${appointment.preferred_date}`,
        `Preferred time: ${appointment.preferred_time}`,
        `City: ${appointment.city}`,
        `Address: ${appointment.address}`,
        appointment.message ? `Additional notes: ${appointment.message}` : null,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });
  } catch (error) {
    console.error(
      "Failed to send appointment admin notification email:",
      error
    );
  }
}

/**
 * Confirms receipt to the visitor, only when they provided an email —
 * never throws, same reasoning as the admin notification above.
 */
export async function sendAppointmentConfirmationEmail(
  appointment: AppointmentRecord
): Promise<void> {
  if (!appointment.email) return;

  const transporter = getEmailTransporter();
  if (!transporter) return;

  try {
    await transporter.sendMail({
      from: getEmailFromAddress(),
      to: appointment.email,
      subject: `We've received your appointment request — ${siteConfig.name}`,
      text: [
        `Hi ${appointment.full_name},`,
        "",
        `Thank you for requesting ${getServiceLabel(appointment.service_slug)} with ${siteConfig.name}. Our care coordinator will call you shortly at ${appointment.phone} to confirm the details.`,
        "",
        `Requested date: ${appointment.preferred_date}`,
        `Requested time: ${appointment.preferred_time}`,
        "",
        `Need immediate assistance? Call us at ${siteConfig.contact.phone}.`,
        siteConfig.contact.businessHours,
        "",
        siteConfig.name,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Failed to send appointment confirmation email:", error);
  }
}
