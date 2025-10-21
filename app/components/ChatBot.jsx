"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // 👇 Add an intro message when opened for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "👋 Hi there! I’m Clay’s AI-powered full-stack engineer assistant. Ask me about his projects, tech stack, or what makes his work unique.",
        },
      ]);
    }
  }, [isOpen]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
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
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-gray-900 border-2 border-cyan-400 rounded-xl shadow-lg shadow-cyan-500/20 w-16 h-16 flex items-center justify-center"
      >
        {isOpen ? (
          <X className="text-cyan-400 w-7 h-7" />
        ) : (
          <MessageSquare className="text-cyan-400 w-7 h-7" />
        )}
      </motion.button>

      {/* Popup Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 bg-gray-950 border border-cyan-500/40 rounded-2xl shadow-lg shadow-cyan-500/20 w-[340px] max-h-[500px] flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-800 text-cyan-400 font-semibold">
              <span>AI Assistant</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-cyan-300"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg ${
                    m.role === "user"
                      ? "bg-cyan-600/30 text-right"
                      : "bg-gray-800 text-left"
                  }`}
                >
                  {m.content}
                </div>
              ))}
            </div>

            <form
              onSubmit={sendMessage}
              className="p-3 border-t border-gray-800 flex gap-2"
            >
              <input
                className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-cyan-400 text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
              />
              <button
                type="submit"
                className="bg-cyan-400 text-gray-900 px-3 rounded font-bold hover:bg-cyan-300 transition-colors text-sm"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
