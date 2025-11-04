"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Auto-open after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      setMessages([
        {
          role: "assistant",
          content: "👋 Hi, I’m Kaden Bot — your smart assistant. How can I help?",
        },
      ]);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: data.reply },
      ]);
  };

  return (
    <div>
      {/* Floating chat button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-cyan-500 text-white p-4 rounded-full shadow-lg hover:bg-cyan-400 transition z-50"
      >
        💬
      </button>

      {/* Chatbot window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-20 right-6 w-80 bg-gray-900 rounded-xl shadow-2xl border border-cyan-500 overflow-hidden z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-cyan-500 text-gray-900 font-bold px-4 py-2">
              <div className="flex items-center gap-2">
                <img
                  src="/images/kaden-bot.png"
                  alt="Kaden Bot"
                  className="w-8 h-8 rounded-full border border-gray-700"
                />
                <span>Kaden Bot</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-xl font-bold">
                ×
              </button>
            </div>

            {/* Chat messages */}
            <div className="h-80 overflow-y-auto bg-gray-800 p-4 space-y-3 text-sm">
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

            {/* Input box */}
            <form onSubmit={sendMessage} className="flex gap-2 p-3 bg-gray-900">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="bg-cyan-400 text-gray-900 px-4 rounded font-bold hover:bg-cyan-500 transition"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
