"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const fullText = "CLAY SCOTT]";

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 150); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen px-6 md:px-16 bg-black text-white overflow-hidden">
      {/* LEFT SIDE */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:max-w-lg z-10">
        {/* Typewriter name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight flex items-center gap-1">
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

          {/* Cursor blinks during typing only */}
          {!typingDone && (
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block w-[8px] bg-cyan-400 h-[1em] align-middle"
            />
          )}
        </h1>

        {/* Tagline & Button just fade in after typing */}
        {typingDone && (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-md"
            >
              Full-Stack Developer • Smart Digital Solutions • Fast Delivery
            </motion.p>

            <motion.a
              href="#projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="inline-block bg-cyan-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all"
            >
              View My Work
            </motion.a>
          </>
        )}
      </div>

      {/* RIGHT SIDE — Video fades in once typing is done */}
      <motion.div
        className="relative w-full md:w-[35%] h-[40vh] mt-10 md:mt-0 rounded-2xl overflow-hidden border border-neutral-700 shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: typingDone ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
      >
        <motion.video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </motion.div>
    </section>
  );
}
