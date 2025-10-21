"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";



const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);


export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { error } = await supabase.from("messages").insert([form]);
    if (error) {
      console.error(error);
      setStatus("❌ Error saving message.");
      return;
    }

    // Optional: Notify route if you added email notifications
    await fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).catch(() => {});

    setStatus("✅ Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-4">
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        rows="5"
        className="p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
        required
      />
      <button
        type="submit"
        className="bg-cyan-400 text-gray-900 font-bold py-3 px-6 rounded hover:bg-cyan-500 transition-colors"
      >
        Send Message
      </button>
      {status && <p className="text-center text-sm text-gray-300 mt-2">{status}</p>}
    </form>
  );
}
