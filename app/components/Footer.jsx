"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-10 text-center text-gray-400">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6"
      >
        {/* Logo / Name */}
        <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
          Clay Scott
        </h3>
        <p className="text-gray-500 mb-6">
          Building smart tools with speed, precision, and creativity.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/steven-scott-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:steven.scott.dev@gmail.com"
            className="hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Bottom Line */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Clay Scott — All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
