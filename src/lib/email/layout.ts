import "server-only";
import { siteConfig, formattedAddress, phoneHref } from "@/constants/site";

/**
 * Escapes user-submitted text before it's interpolated into an HTML email —
 * form fields (name, subject, message, ...) are never trusted markup.
 */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Converts escaped plain text into HTML paragraphs that preserve line breaks. */
export function escapeHtmlWithBreaks(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

interface EmailLayoutOptions {
  /** Hidden preview text shown next to the subject line in most inboxes. */
  previewText: string;
  /** Trusted inner HTML — build it with the escape helpers above. */
  bodyHtml: string;
}

const LOGO_URL = `${siteConfig.url}/images/logo/logo-white-trans.png`;

/**
 * Shared branded wrapper for every transactional email — table-based layout
 * with inlined styles, since HTML email clients (Outlook desktop especially)
 * don't reliably support external stylesheets, flexbox, or grid.
 */
export function renderEmailLayout({
  previewText,
  bodyHtml,
}: EmailLayoutOptions): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>${escapeHtml(siteConfig.name)}</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f5; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0; mso-hide:all;">
      ${escapeHtml(previewText)}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background-color:#ffffff; border:1px solid #e2e8f0; border-radius:12px; overflow:hidden;">
            <tr>
              <td style="background-color:#d6127a; padding:28px 32px; text-align:center;">
                <img
                  src="${LOGO_URL}"
                  alt="${escapeHtml(siteConfig.name)}"
                  width="170"
                  style="display:block; margin:0 auto; width:170px; max-width:100%; height:auto; border:0;"
                />
              </td>
            </tr>
            <tr>
              <td style="padding:36px 32px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="background-color:#f4f4f5; border-top:1px solid #e2e8f0; padding:24px 32px; text-align:center;">
                <p style="margin:0; font-size:13px; line-height:1.7; color:#64748b;">
                  <strong style="color:#1f2937;">${escapeHtml(siteConfig.name)}</strong><br>
                  ${escapeHtml(formattedAddress)}<br>
                  <a href="${phoneHref}" style="color:#d6127a; text-decoration:none;">${escapeHtml(siteConfig.contact.phone)}</a>
                  &nbsp;&middot;&nbsp;
                  <a href="mailto:${siteConfig.contact.email}" style="color:#d6127a; text-decoration:none;">${escapeHtml(siteConfig.contact.email)}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function renderButton(href: string, label: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0">
  <tr>
    <td style="border-radius:8px; background-color:#d6127a;">
      <a href="${escapeHtml(href)}" style="display:inline-block; padding:13px 28px; font-size:14px; font-weight:600; color:#ffffff; text-decoration:none; border-radius:8px;">
        ${escapeHtml(label)}
      </a>
    </td>
  </tr>
</table>`;
}
