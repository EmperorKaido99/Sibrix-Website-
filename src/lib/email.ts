const OWNER_EMAIL = "sibusisogoodwill871@gmail.com";

// Note: Resend requires a backend server to send emails securely.
// For now, we'll log the email content and store in database.
// When you deploy, add a serverless function (Vercel/Cloudflare) to send emails.

export async function sendProjectAnalysis(params: {
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  analysis: string;
  conversationSummary: string;
}): Promise<{ success: boolean; error?: string }> {
  // Log for now - in production, this would call a backend API
  console.log("📧 Email to send to:", OWNER_EMAIL);
  console.log("Subject:", `🚀 New Project Inquiry from ${params.clientName}`);
  console.log("Analysis:", params.analysis);
  console.log("---");
  
  // Store in localStorage as backup until backend is set up
  const emails = JSON.parse(localStorage.getItem("sibrix_pending_emails") || "[]");
  emails.push({
    to: OWNER_EMAIL,
    from: params.clientEmail,
    clientName: params.clientName,
    clientPhone: params.clientPhone,
    analysis: params.analysis,
    conversationSummary: params.conversationSummary,
    timestamp: new Date().toISOString(),
  });
  localStorage.setItem("sibrix_pending_emails", JSON.stringify(emails));

  return { success: true };
}

export async function sendClientConfirmation(params: {
  clientEmail: string;
  clientName: string;
}): Promise<{ success: boolean; error?: string }> {
  console.log("📧 Confirmation email to:", params.clientEmail);
  console.log("Client:", params.clientName);
  return { success: true };
}
