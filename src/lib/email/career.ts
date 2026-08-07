import "server-only";
import {
  getEmailFromAddress,
  getEmailTransporter,
} from "@/lib/email/transporter";
import { siteConfig } from "@/constants/site";
import type { CareerApplicationRecord } from "@/lib/supabase/queries/career-applications";

/**
 * Notifies the business inbox of a new job application, including a link
 * to the uploaded resume. Never throws — a failed notification email must
 * never surface as a failed application, the row (and resume) are already
 * safely stored by the time this is called.
 */
export async function sendCareerApplicationAdminNotification(
  application: CareerApplicationRecord
): Promise<void> {
  const transporter = getEmailTransporter();
  if (!transporter) return;

  try {
    await transporter.sendMail({
      from: getEmailFromAddress(),
      to: siteConfig.contact.email,
      subject: `New job application — ${application.position} (${application.full_name})`,
      text: [
        "A new job application was submitted through the website.",
        "",
        `Position: ${application.position}`,
        `Applicant: ${application.full_name}`,
        `Phone: ${application.phone}`,
        `Email: ${application.email}`,
        `Experience: ${application.years_of_experience} years`,
        `Highest qualification: ${application.highest_qualification}`,
        application.current_organization
          ? `Current organization: ${application.current_organization}`
          : null,
        application.preferred_shift
          ? `Preferred shift: ${application.preferred_shift}`
          : null,
        `Location: ${application.city}, ${application.state}`,
        application.message ? `Message: ${application.message}` : null,
        "",
        `Resume: ${application.resume_url}`,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });
  } catch (error) {
    console.error(
      "Failed to send career application admin notification email:",
      error
    );
  }
}

/**
 * Confirms receipt to the applicant — never throws, same reasoning as the
 * admin notification above.
 */
export async function sendCareerApplicationConfirmationEmail(
  application: CareerApplicationRecord
): Promise<void> {
  const transporter = getEmailTransporter();
  if (!transporter) return;

  try {
    await transporter.sendMail({
      from: getEmailFromAddress(),
      to: application.email,
      subject: `We've received your application — ${siteConfig.name}`,
      text: [
        `Hi ${application.full_name},`,
        "",
        `Thank you for applying for the ${application.position} position at ${siteConfig.name}. Our HR team will review your application and contact you if your profile matches our current requirements.`,
        "",
        `Questions in the meantime? Call us at ${siteConfig.contact.phone}.`,
        siteConfig.contact.businessHours,
        "",
        siteConfig.name,
      ].join("\n"),
    });
  } catch (error) {
    console.error(
      "Failed to send career application confirmation email:",
      error
    );
  }
}
