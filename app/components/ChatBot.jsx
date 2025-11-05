"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showIntro, setShowIntro] = useState(false);

  // 💫 Gentle pulse + intro bubble
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(true);
    }, 2500); // show intro message after 2.5s
    return () => clearTimeout(timer);
  }, []);

  // 💬 Send logic
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
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
    } catch (err) {
      console.error("Chat API error:", err);
    }
  };

  return (
    <div>
      {/* 🧠 Floating Bot + Intro */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
        {/* Intro bubble */}
        <AnimatePresence>
          {showIntro && !chatOpen && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gray-900 text-white px-4 py-3 rounded-2xl shadow-lg border border-cyan-400/40 max-w-[220px]"
            >
              <p className="text-sm leading-snug">
                👋 Hey there! I’m Clay’s AI-powered assistant.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bot icon */}
        <motion.button
          onClick={() => setChatOpen(true)}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
          }}
          className="bg-gray-900 border-2 border-cyan-400 rounded-xl shadow-lg shadow-cyan-500/20 w-16 h-16 flex items-center justify-center"
        >
          <MessageSquare className="text-cyan-400 w-7 h-7" />
        </motion.button>
      </div>

      {/* 💬 Full Chat Window */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 bg-gray-950 border border-cyan-500/40 rounded-2xl shadow-lg shadow-cyan-500/20 w-[340px] max-h-[500px] flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-800 text-cyan-400 font-semibold">
              <span>Clay’s AI Assistant</span>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-400 hover:text-cyan-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
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
    </div>
  );
}
