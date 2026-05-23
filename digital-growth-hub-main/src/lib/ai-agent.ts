import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const SYSTEM_PROMPT = `You are a Solutions Architect at Sibrix, a company that builds websites, AI solutions, and business automation systems.

Your role is to:
1. Analyze client inquiries and understand their needs
2. If the inquiry lacks important details, ask clarifying questions (max 3 questions at a time)
3. Once you have enough information, provide a project breakdown

When analyzing, consider:
- What type of solution they need (website, e-commerce, automation, AI, mobile app)
- Their business size and industry
- Budget expectations
- Timeline requirements
- Technical complexity

Response format:
- If MORE INFO NEEDED: Start with "QUESTIONS:" followed by numbered questions
- If READY TO ANALYZE: Start with "ANALYSIS:" followed by the breakdown

For the analysis, include:
1. **Project Summary** - Brief overview
2. **Recommended Package** - Starter, Business Suite, or Enterprise
3. **Key Features Needed** - Bullet list
4. **Estimated Timeline** - Realistic timeframe
5. **Technical Requirements** - What we'll build
6. **Next Steps** - How to proceed

Be professional, helpful, and thorough. Speak directly to the potential client.`;

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface AgentResponse {
  message: string;
  needsMoreInfo: boolean;
  isComplete: boolean;
}

export async function analyzeInquiry(
  messages: Message[],
  initialInquiry?: { name: string; email: string; phone?: string; message: string }
): Promise<AgentResponse> {
  const conversationMessages: { role: "system" | "user" | "assistant"; content: string }[] = [
    { role: "system", content: SYSTEM_PROMPT },
  ];

  // Add initial context if this is the first message
  if (initialInquiry && messages.length === 0) {
    const contextMessage = `New inquiry from:
Name: ${initialInquiry.name}
Email: ${initialInquiry.email}
Phone: ${initialInquiry.phone || "Not provided"}

Their message:
"${initialInquiry.message}"

Please analyze this inquiry and either ask clarifying questions or provide a full project breakdown.`;
    
    conversationMessages.push({ role: "user", content: contextMessage });
  } else {
    // Add conversation history
    messages.forEach((msg) => {
      conversationMessages.push({ role: msg.role, content: msg.content });
    });
  }

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: conversationMessages,
    temperature: 0.7,
    max_tokens: 1500,
  });

  const content = response.choices[0]?.message?.content || "";
  
  const needsMoreInfo = content.toUpperCase().startsWith("QUESTIONS:");
  const isComplete = content.toUpperCase().startsWith("ANALYSIS:");

  return {
    message: content,
    needsMoreInfo,
    isComplete,
  };
}

export function formatAnalysisForEmail(
  clientInfo: { name: string; email: string; phone?: string },
  conversation: Message[],
  finalAnalysis: string
): string {
  return `
# New Project Inquiry - Sibrix

## Client Information
- **Name:** ${clientInfo.name}
- **Email:** ${clientInfo.email}
- **Phone:** ${clientInfo.phone || "Not provided"}

## Conversation History
${conversation.map((m) => `**${m.role === "user" ? "Client" : "AI Architect"}:** ${m.content}`).join("\n\n")}

## Final Analysis
${finalAnalysis}

---
*Processed by Sibrix AI Solutions Architect*
  `.trim();
}
