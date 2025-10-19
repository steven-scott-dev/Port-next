"use client";
import { useState } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, userMessage] }),
    });

    const data = await res.json();
    if (data?.reply)
      setMessages((msgs) => [...msgs, { role: "assistant", content: data.reply }]);
  };

  return (
    <div className="max-w-2xl mx-auto my-20 bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">AI Assistant</h2>
      <div className="h-80 overflow-y-auto bg-gray-800 rounded-lg p-4 mb-4 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg ${
              m.role === "user"
                ? "bg-cyan-600/30 text-right"
                : "bg-gray-700 text-left"
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-3">
        <input
          className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-cyan-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button
          type="submit"
          className="bg-cyan-400 text-gray-900 px-5 rounded font-bold hover:bg-cyan-500 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
