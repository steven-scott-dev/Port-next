import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const { messages } = await req.json();

  const systemPrompt = {
    role: "system",
    content: `You are Clay Scott’s personal AI assistant.
You know about his portfolio, projects (Noir and Gold, Elite Cuts, Urban Table),
and you help answer questions conversationally.`,
  };

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [systemPrompt, ...messages],
    temperature: 0.8,
  });

  const reply = response.choices[0]?.message?.content;
  return NextResponse.json({ reply });
}
