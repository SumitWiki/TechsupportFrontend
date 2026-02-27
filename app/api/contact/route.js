import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { randomBytes } from "crypto";

// Force Node.js runtime — required for nodemailer (not compatible with Edge runtime)
export const runtime = "nodejs";

/** HTML-escape to prevent XSS in email templates */
function esc(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Generates a cryptographically secure case ID like TS4-20260218-A3F7
 */
function generateCaseId() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = randomBytes(3).toString("hex").toUpperCase().slice(0, 4);
  return `TS4-${date}-${rand}`;
}

/**
 * Creates nodemailer transporter using env vars.
 * Supports: Gmail, SMTP, SendGrid, etc.
 */
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, _honey } = body;

    // Honeypot check — bot submissions have this field filled
    if (_honey) {
      return NextResponse.json({ ok: true }); // silently reject
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Length limits
    if (name.length > 150) {
      return NextResponse.json({ error: "Name too long." }, { status: 400 });
    }
    if (message.length > 5000) {
      return NextResponse.json({ error: "Message too long (max 5000 chars)." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ══════════════════════════════════════════════════════════════════════════
    // SAVE TO CRM DATABASE — creates a case/ticket that appears in the CRM dashboard
    // ══════════════════════════════════════════════════════════════════════════
    let crmCaseId = null;
    let crmSaveError = null;
    const crmApiUrl = process.env.CRM_API_URL || process.env.NEXT_PUBLIC_CRM_API_URL;
    
    console.log("📍 CRM_API_URL configured:", crmApiUrl || "❌ NOT SET");
    
    if (crmApiUrl) {
      try {
        console.log(`🔄 Calling CRM API: ${crmApiUrl}/api/cases/contact`);
        const crmResponse = await fetch(`${crmApiUrl}/api/cases/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone: phone || "N/A",
            subject: "Contact Form Submission",
            message,
          }),
        });
        if (crmResponse.ok) {
          const crmData = await crmResponse.json();
          crmCaseId = crmData.caseId;
          console.log(`✅ Case saved to CRM: ${crmCaseId}`);
        } else {
          const errText = await crmResponse.text();
          crmSaveError = `CRM API error (${crmResponse.status}): ${errText}`;
          console.error("❌ CRM API returned error:", crmSaveError);
        }
      } catch (crmErr) {
        crmSaveError = `CRM connection failed: ${crmErr.message}`;
        console.error("❌ Failed to save to CRM:", crmSaveError);
      }
    } else {
      crmSaveError = "CRM_API_URL not configured in environment";
      console.error("❌ CRM_API_URL is not set - tickets will NOT appear in CRM dashboard!");
    }

    // Check email credentials are configured (not placeholder values)
    const smtpUser = process.env.SMTP_USER || "";
    const smtpPass = process.env.SMTP_PASS || "";
    const smtpConfigured =
      smtpUser.length > 0 &&
      smtpPass.length > 0 &&
      !smtpUser.includes("your-") &&
      !smtpPass.includes("your-") &&
      smtpUser.includes("@");

    if (!smtpConfigured) {
      console.warn("SMTP not configured — skipping email send.");
      // Still return success so the form works even without email configured
      const caseId = crmCaseId || generateCaseId();
      return NextResponse.json({ ok: true, caseId, emailSent: false, savedToCRM: !!crmCaseId });
    }

    // Use CRM case ID if available, otherwise generate locally
    const caseId = crmCaseId || generateCaseId();
    const transporter = createTransporter();
    const ownerEmail = process.env.OWNER_EMAIL || process.env.SMTP_USER;
    // Use SMTP_USER as sender — most SMTP servers reject relay from different addresses
    const fromAddress = `TechSupport4 <${process.env.SMTP_USER}>`;
    const replyTo = process.env.SMTP_USER;

    // ── 1. Confirmation email to the customer ──────────────────────────────
    const customerHtml = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1e40af,#4f46e5);padding:32px 40px;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;">TechSupport4</h1>
            <p style="color:#bfdbfe;margin:8px 0 0;font-size:14px;">Remote Tech Support — USA, UK & Canada</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <h2 style="color:#1e293b;font-size:20px;margin:0 0 16px;">We've Received Your Request ✅</h2>
            <p style="color:#475569;font-size:15px;line-height:1.6;margin:0 0 20px;">
              Hi <strong>${esc(name)}</strong>,<br><br>
              Thank you for contacting TechSupport4. Our certified technicians will review your request and get back to you shortly — usually within <strong>30–60 minutes</strong>.
            </p>

            <!-- Case ID box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
              <tr>
                <td style="background:#eff6ff;border:2px solid #bfdbfe;border-radius:10px;padding:20px;text-align:center;">
                  <p style="color:#1e40af;font-size:13px;margin:0 0 6px;text-transform:uppercase;letter-spacing:0.05em;">Your Case Reference Number</p>
                  <p style="color:#1e3a8a;font-size:28px;font-weight:700;font-family:monospace;margin:0;letter-spacing:0.1em;">${esc(caseId)}</p>
                  <p style="color:#64748b;font-size:12px;margin:8px 0 0;">Please keep this for your records. Quote it in any follow-up.</p>
                </td>
              </tr>
            </table>

            <!-- Summary -->
            <p style="color:#475569;font-size:14px;margin:0 0 8px;"><strong>Your submission details:</strong></p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;font-size:14px;margin-bottom:24px;">
              <tr style="background:#f8fafc;">
                <td style="padding:10px 16px;color:#64748b;font-weight:600;width:120px;">Name</td>
                <td style="padding:10px 16px;color:#1e293b;">${esc(name)}</td>
              </tr>
              <tr>
                <td style="padding:10px 16px;color:#64748b;font-weight:600;">Email</td>
                <td style="padding:10px 16px;color:#1e293b;">${esc(email)}</td>
              </tr>
              ${phone ? `<tr style="background:#f8fafc;"><td style="padding:10px 16px;color:#64748b;font-weight:600;">Phone</td><td style="padding:10px 16px;color:#1e293b;">${esc(phone)}</td></tr>` : ""}
              <tr ${phone ? "" : 'style="background:#f8fafc;"'}>
                <td style="padding:10px 16px;color:#64748b;font-weight:600;vertical-align:top;">Issue</td>
                <td style="padding:10px 16px;color:#1e293b;">${esc(message).replace(/\n/g, "<br>")}</td>
              </tr>
            </table>

            <p style="color:#475569;font-size:14px;line-height:1.6;margin:0 0 24px;">
              If you need <strong>immediate assistance</strong>, please call us directly:
            </p>

            <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr>
                <td style="background:#2563eb;border-radius:8px;padding:12px 28px;text-align:center;">
                  <a href="tel:${process.env.NEXT_PUBLIC_PHONE_USA || "+18889501777"}" style="color:#ffffff;text-decoration:none;font-weight:700;font-size:16px;">
                    📞 Call USA: ${process.env.NEXT_PUBLIC_PHONE_DISPLAY || "1-800-555-1234"}
                  </a>
                </td>
              </tr>
            </table>

            <p style="color:#94a3b8;font-size:13px;margin:0;">
              This is an automated confirmation. Please do not reply to this email.<br>
              For enquiries, email us at <a href="mailto:support@techsupport4.com" style="color:#3b82f6;">support@techsupport4.com</a>
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 40px;text-align:center;">
            <p style="color:#94a3b8;font-size:12px;margin:0;">
              © ${new Date().getFullYear()} TechSupport4. All Rights Reserved.<br>
              Independent third-party remote tech support — USA, UK & Canada.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    // ── 2. Notification email to the owner ────────────────────────────────
    const ownerHtml = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:32px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#1e293b;border-radius:10px;overflow:hidden;">
        <tr>
          <td style="background:#dc2626;padding:20px 32px;">
            <h1 style="color:#fff;margin:0;font-size:18px;">🔔 New Contact Submission — TechSupport4</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#cbd5e1;">
              <tr>
                <td style="padding:8px 0;border-bottom:1px solid #334155;font-weight:700;color:#94a3b8;width:110px;">Case ID</td>
                <td style="padding:8px 0;border-bottom:1px solid #334155;color:#60a5fa;font-family:monospace;font-size:16px;font-weight:700;">${esc(caseId)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;border-bottom:1px solid #334155;font-weight:700;color:#94a3b8;">Name</td>
                <td style="padding:8px 0;border-bottom:1px solid #334155;">${esc(name)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;border-bottom:1px solid #334155;font-weight:700;color:#94a3b8;">Email</td>
                <td style="padding:8px 0;border-bottom:1px solid #334155;"><a href="mailto:${esc(email)}" style="color:#60a5fa;">${esc(email)}</a></td>
              </tr>
              ${phone ? `<tr><td style="padding:8px 0;border-bottom:1px solid #334155;font-weight:700;color:#94a3b8;">Phone</td><td style="padding:8px 0;border-bottom:1px solid #334155;">${esc(phone)}</td></tr>` : ""}
              <tr>
                <td style="padding:8px 0;font-weight:700;color:#94a3b8;vertical-align:top;">Message</td>
                <td style="padding:8px 0;white-space:pre-wrap;">${esc(message)}</td>
              </tr>
            </table>
            <p style="color:#64748b;font-size:12px;margin:20px 0 0;">Submitted: ${new Date().toUTCString()}</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

                // Only send emails if CRM API succeeded
if (!crmCaseId) {
  return NextResponse.json(
    { error: crmSaveError || "Failed to save ticket in CRM." },
    { status: 500 }
  );
}

await Promise.all([
  transporter.sendMail({
    from: fromAddress,
    replyTo: replyTo,
    to: email,
    subject: `[${caseId}] We have received your TechSupport4 request`,
    html: customerHtml,
  }),
  transporter.sendMail({
    from: fromAddress,
    replyTo: email,
    to: ownerEmail,
    subject: `[${caseId}] New Contact: ${name} — TechSupport4`,
    html: ownerHtml,
  }),
]);

return NextResponse.json({
  ok: true,
  caseId,
  emailSent: true,
  savedToCRM: true,
});

} catch (error) {
  console.error("Contact API error:", error);
  return NextResponse.json(
    { error: "Internal Server Error" },
    { status: 500 }
  );
}
}