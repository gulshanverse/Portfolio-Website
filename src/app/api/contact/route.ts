import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "gulshankumaritggv@gmail.com";
const FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

function buildEmailHtml(name: string, email: string, subject: string, message: string): string {
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background-color:#09090b;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#09090b;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#18181b;border-radius:16px;border:1px solid #27272a;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#06b6d4,#8b5cf6);padding:32px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.2em;color:rgba(255,255,255,0.7);text-transform:uppercase;margin-bottom:8px;">Portfolio Contact System</p>
              <h1 style="margin:0;font-size:26px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">New Message Received</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">

              <!-- Sender Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding-bottom:16px;">
                    <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#71717a;margin-bottom:6px;">From</p>
                    <p style="margin:0;font-size:18px;font-weight:700;color:#ffffff;">${name}</p>
                    <a href="mailto:${email}" style="color:#06b6d4;font-size:13px;text-decoration:none;font-weight:500;">${email}</a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #27272a;margin:0 0 28px 0;" />

              <!-- Subject -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="background-color:#09090b;border:1px solid #27272a;border-radius:10px;padding:16px 20px;">
                    <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#71717a;margin-bottom:4px;">Subject</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#e4e4e7;">${subject}</p>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background-color:#09090b;border:1px solid #27272a;border-radius:10px;padding:20px;">
                    <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#71717a;margin-bottom:12px;">Message</p>
                    <p style="margin:0;font-size:14px;line-height:1.75;color:#a1a1aa;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: ${subject}" style="display:inline-block;background:linear-gradient(135deg,#06b6d4,#8b5cf6);color:#ffffff;font-size:14px;font-weight:700;padding:14px 32px;border-radius:50px;text-decoration:none;letter-spacing:0.03em;">
                      Reply to ${name} →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #27272a;margin:0 0 20px 0;" />

              <!-- Timestamp -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:11px;color:#52525b;text-align:center;">
                      📅 Received on <strong style="color:#71717a;">${timestamp} IST</strong>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#09090b;border-top:1px solid #27272a;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#52525b;">
                Sent via <strong style="color:#71717a;">Gulshan Kumar Portfolio</strong> · gulshankumaritggv@gmail.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    // ── Input validation ──────────────────────────────────────────────────────
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (name.trim().length > 100 || subject.trim().length > 200 || message.trim().length > 5000) {
      return NextResponse.json(
        { error: "Input exceeds maximum allowed length." },
        { status: 400 }
      );
    }

    // ── Send email via Resend ─────────────────────────────────────────────────
    const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email.trim(),
      subject: `[Portfolio] ${subject.trim()} — from ${name.trim()}`,
      html: buildEmailHtml(name.trim(), email.trim(), subject.trim(), message.trim()),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
