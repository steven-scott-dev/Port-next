"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const fullText = "CLAY SCOTT]";

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-10 lg:px-14 bg-black text-white overflow-hidden">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:max-w-xl lg:max-w-2xl z-10 h-full space-y-6">
        {/* Typing name */}
        <h1 className="text-5xl md:text-7xl font-light tracking-tight flex items-center gap-1 whitespace-nowrap">
          <span>
            {displayedText.split("").map((char, i) => {
              if (char === "]") {
                return (
                  <span key={i} className="text-[#0040B8] ml-1">
                    {char}
                  </span>
                );
              } else if (i >= 5 && i <= 9) {
                return (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-[#00C9FF] via-[#1BA3F2] to-[#0066FF] bg-clip-text text-transparent"
                  >
                    {char}
                  </span>
                );
              } else {
                return <span key={i}>{char}</span>;
              }
            })}
          </span>

          {/* Blinking cursor */}
          {!typingDone && (
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block w-[8px] bg-cyan-400 h-[1em] align-middle"
            />
          )}
        </h1>

        {/* Text + Button */}
        {typingDone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center md:items-start space-y-6"
          >
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md">
              Full-Stack Developer • Smart Digital Solutions • Fast Delivery
            </p>

            <a
              href="#projects"
              className="inline-block bg-cyan-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all"
            >
              View My Work
            </a>
          </motion.div>
        )}
      </div>

      {/* RIGHT SIDE — Floating Icons */}
      <div className="relative md:-ml-8 lg:-ml-12 w-full md:w-[60%] lg:w-[65%] h-[65vh] flex items-center justify-center overflow-visible">
        <FloatingIcons />
      </div>
    </section>
  );
}
