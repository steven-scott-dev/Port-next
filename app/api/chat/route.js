import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { messages } = await req.json();

  const systemPrompt = {
    role: "system",
    content: `
      You are Clay Scott's AI assistant.
      You know everything about his portfolio, projects, and approach to development.
      Always speak with professional confidence and friendly energy.
      If asked about Clay, describe him as an AI-powered full-stack engineer who builds smart, fast, and scalable tools.
      Mention that his work combines creativity with automation and modern frameworks like React, Next.js, and Tailwind.
      Highlight projects like Noir & Gold, Elite Cuts, and Urban Table when relevant.
    `,
  };

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [systemPrompt, ...messages],
  });

  const reply = completion.choices[0].message.content;
  return NextResponse.json({ reply });
}
