import nodemailer from "nodemailer";

// Sends contact form submissions through the Sibrix xneelo mailbox over SMTP.
// Configure in Vercel → Project → Settings → Environment Variables:
//   SMTP_HOST  e.g. smtp.yourdomain.co.za (or the xneelo server name from konsoleH)
//   SMTP_PORT  465 (SSL/TLS, xneelo's recommended setting)
//   SMTP_USER  the full mailbox address, e.g. info@yourdomain.co.za
//   SMTP_PASS  the mailbox password
//   CONTACT_TO optional, where enquiries are delivered (defaults to SMTP_USER)

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("Contact form: SMTP environment variables are not configured");
    return json({ error: "Email is not configured" }, 503);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  const name = String(body.name ?? "").trim().slice(0, 200);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const phone = String(body.phone ?? "").trim().slice(0, 50);
  const message = String(body.message ?? "").trim().slice(0, 5000);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return json({ error: "Name, a valid email and a message are required" }, 400);
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const inbox = CONTACT_TO || SMTP_USER;
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    message: escapeHtml(message).replace(/\n/g, "<br>"),
  };

  try {
    // Enquiry to the Sibrix mailbox; replying goes straight to the client.
    await transporter.sendMail({
      from: `"Sibrix Website" <${SMTP_USER}>`,
      to: inbox,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2a44;">
          <h2 style="margin: 0 0 16px;">New website enquiry</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safe.name}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
          <p style="margin: 0 0 16px;"><strong>Phone:</strong> ${safe.phone || "-"}</p>
          <div style="padding: 16px; background: #f6f4ef; border-left: 3px solid #d4a853;">${safe.message}</div>
        </div>
      `,
    });

    // Confirmation to the client. Failure here shouldn't fail the enquiry.
    try {
      await transporter.sendMail({
        from: `"Sibrix" <${SMTP_USER}>`,
        to: email,
        replyTo: inbox,
        subject: "We received your message - Sibrix",
        text: `Hi ${name},\n\nThanks for contacting Sibrix. We've received your enquiry and will be in touch within 24 hours.\n\nSibrix`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2a44;">
            <p>Hi ${safe.name},</p>
            <p>Thanks for contacting Sibrix. We've received your enquiry and will be in touch within 24 hours.</p>
            <p>Sibrix</p>
          </div>
        `,
      });
    } catch (err) {
      console.error("Contact form: confirmation email failed", err);
    }

    return json({ success: true });
  } catch (err) {
    console.error("Contact form: failed to send enquiry", err);
    return json({ error: "Failed to send message" }, 502);
  }
}
