import { Resend } from "resend";

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
}

export default async function handler(req: any, res: any) {
  // Enable CORS headers for development/preview
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const body: ContactRequestBody =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return res.status(400).json({
        error:
          "Missing required fields. Name, email, and message are required.",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

    if (!apiKey || !receiverEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_RECEIVER_EMAIL environment variable.");
      return res.status(500).json({
        error: "Server configuration error: Required environment variables are missing.",
      });
    }

    const targetEmail: string = receiverEmail;

    const resend = new Resend(apiKey);

    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const formattedDate = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const data = await resend.emails.send({
      from: "John Mark's Portfolio <onboarding@resend.dev>",
      to: [targetEmail],
      replyTo: email,
      subject: `New message from ${name} via your portfolio!`,
      text: `> sys.incoming_transmission()\n\nFrom: ${name} (${email})\nTime: ${formattedDate}\n\nMessage:\n${message}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Message from ${escapeHtml(name)}</title>
  <style>
    :root {
      color-scheme: light dark;
      supported-color-schemes: light dark;
    }
    @media (prefers-color-scheme: dark) {
      .bg-wrapper { background-color: #0a0a0d !important; }
      .card-window { background-color: #121218 !important; border-color: #00ff66 !important; box-shadow: 6px 6px 0px #00ff66 !important; }
      .title-bar { background-color: #181920 !important; border-bottom-color: #00ff66 !important; }
      .title-text { color: #00ff66 !important; }
      .card-title { color: #00ff66 !important; }
      .card-subtitle { color: #a1a1aa !important; }
      .label-text { color: #00ff66 !important; }
      .val-text { color: #f5f5f0 !important; }
      .msg-content { background-color: #181920 !important; border-color: #27272a !important; color: #f5f5f0 !important; }
      .footer-text { color: #71717a !important; border-top-color: #27272a !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 24px 12px; background-color: #f5f5f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;" class="bg-wrapper">
  <div style="max-width: 580px; margin: 0 auto;">
    
    <!-- Top System Tag -->
    <div style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12px; color: #008844; font-weight: bold; letter-spacing: 1.5px; margin-bottom: 12px;">
      &gt; sys.incoming_transmission()
    </div>

    <!-- Retro Window Card with 3D Drop Shadow -->
    <div class="card-window" style="background-color: #ffffff; border: 2px solid #1a1a24; border-radius: 4px; box-shadow: 6px 6px 0px #1a1a24; overflow: hidden;">
      
      <!-- Window Title Bar -->
      <div class="title-bar" style="background-color: #e8e8e3; border-bottom: 2px solid #1a1a24; padding: 10px 16px;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
          <tr>
            <td style="width: 50px; vertical-align: middle;">
              <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: rgb(255,95,87); margin-right: 4px;"></span>
              <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: rgb(254,188,46); margin-right: 4px;"></span>
              <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: rgb(40,200,64);"></span>
            </td>
            <td style="text-align: left; vertical-align: middle;">
            </td>
          </tr>
        </table>
      </div>

      <!-- Card Body -->
      <div style="padding: 24px;">
        
        <!-- Header badge -->
        <div style="margin-bottom: 20px; border-bottom: 2px dashed #e4e4e7; padding-bottom: 16px;">
          <h2 class="card-title" style="margin: 0 0 6px 0; font-size: 20px; color: #1a1a24; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-weight: bold;">
            💬 You've got a new message!
          </h2>
          <p class="card-subtitle" style="margin: 0; font-size: 13px; color: #666666;">
            Sent by a visitor (or a bot lol) via your portfolio website contact form.
          </p>
        </div>

        <!-- Sender Info Fields -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%; margin-bottom: 20px;">
          <tr>
            <td style="padding-bottom: 12px; vertical-align: top; width: 110px;">
              <span class="label-text" style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 11px; font-weight: bold; color: #1a1a24; text-transform: uppercase; letter-spacing: 1px;">
                SENDER:
              </span>
            </td>
            <td style="padding-bottom: 12px; vertical-align: top;">
              <span class="val-text" style="font-size: 14px; font-weight: 600; color: #1a1a24;">
                ${escapeHtml(name)}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 12px; vertical-align: top;">
              <span class="label-text" style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 11px; font-weight: bold; color: #1a1a24; text-transform: uppercase; letter-spacing: 1px;">
                EMAIL:
              </span>
            </td>
            <td style="padding-bottom: 12px; vertical-align: top;">
              <a href="mailto:${escapeHtml(email)}" style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 13px; font-weight: bold; color: #008844; text-decoration: underline;">
                ${escapeHtml(email)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="vertical-align: top;">
              <span class="label-text" style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 11px; font-weight: bold; color: #1a1a24; text-transform: uppercase; letter-spacing: 1px;">
                TIMESTAMP:
              </span>
            </td>
            <td style="vertical-align: top;">
              <span class="val-text" style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12px; color: #555555;">
                ${formattedDate}
              </span>
            </td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="margin-top: 16px;">
          <div class="label-text" style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 11px; font-weight: bold; color: #1a1a24; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
            MESSAGE PAYLOAD:
          </div>
          <div class="msg-content" style="background-color: #f8f8f5; border: 2px solid #1a1a24; border-radius: 4px; padding: 16px; font-size: 14px; line-height: 1.6; color: #1a1a24; white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
${escapeHtml(message)}
          </div>
        </div>

        <!-- Action Quick Reply Button -->
        <div style="margin-top: 24px; text-align: center;">
          <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent("Re: " + name + " - John Mark Gatche Portfolio")}" style="display: inline-block; background-color: #1a1a24; color: #00ff66; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 13px; font-weight: bold; text-decoration: none; padding: 12px 24px; border: 2px solid #1a1a24; border-radius: 3px; box-shadow: 3px 3px 0px #00ff66;">
            Reply to ${escapeHtml(name)} &rarr;
          </a>
        </div>

        <!-- Footer -->
        <div class="footer-text" style="margin-top: 28px; padding-top: 16px; border-top: 1px solid #e4e4e7; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 11px; color: #999999; text-align: center;">
          Sent directly from John Mark Gatche's Portfolio Website
        </div>

      </div>
    </div>
  </div>
</body>
</html>
      `,
    });

    if ((data as any).error) {
      console.error("Resend API error:", (data as any).error);
      return res.status(500).json({
        error:
          (data as any).error.message || "Failed to send email via Resend.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
      id: data.data?.id,
    });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return res.status(500).json({
      error:
        error?.message ||
        "An unexpected error occurred while sending the email.",
    });
  }
}
