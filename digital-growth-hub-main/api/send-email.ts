import { Resend } from "resend";

export const config = {
  runtime: "edge",
};

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = "sibusisogoodwill871@gmail.com";

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Send notification to owner
    await resend.emails.send({
      from: "Sibrix <onboarding@resend.dev>",
      to: OWNER_EMAIL,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a365d; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #d4a853; margin: 0; font-size: 20px;">New Contact Inquiry</h1>
          </div>
          <div style="background: #f8f8f8; padding: 24px; border: 1px solid #e0e0e0;">
            <p style="margin: 0 0 16px;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 16px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
            <div style="background: white; padding: 16px; border-radius: 4px; border-left: 3px solid #d4a853;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <div style="background: #1a365d; padding: 16px; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="color: #ccc; margin: 0; font-size: 12px;">Sibrix — Smart Systems. Built Right.</p>
          </div>
        </div>
      `,
    });

    // Send confirmation to client
    await resend.emails.send({
      from: "Sibrix <onboarding@resend.dev>",
      to: email,
      subject: "We received your message — Sibrix",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a365d; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: #d4a853; margin: 0; font-size: 24px;">Thanks, ${name}!</h1>
          </div>
          <div style="background: #f8f8f8; padding: 24px; border: 1px solid #e0e0e0;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              We've received your inquiry and will be in touch within 24 hours to discuss your project.
            </p>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to reach us at:<br>
              📧 <a href="mailto:sibusisogoodwill871@gmail.com" style="color: #d4a853;">sibusisogoodwill871@gmail.com</a><br>
              📱 <a href="tel:0664040070" style="color: #d4a853;">066 404 0070</a>
            </p>
          </div>
          <div style="background: #1a365d; padding: 16px; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="color: #ccc; margin: 0; font-size: 12px;">Sibrix — Smart Systems. Built Right.</p>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
