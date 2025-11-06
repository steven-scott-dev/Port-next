"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const fullText = "CLAY SCOTT]";

  // ⌨️ Typewriter effect
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
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen px-6 md:px-16 bg-black text-white overflow-hidden">
      {/* LEFT SIDE */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:max-w-lg z-10">
        {/* Typing name */}
        <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight flex items-center gap-1">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
            className="flex flex-col items-center md:items-start"
          >
            <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-md">
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

      {/* RIGHT SIDE — Overlapping photos */}
{typingDone && (
  <motion.div
    className="relative w-full md:w-[55%] h-[55vh] mt-10 md:mt-0 flex items-center justify-center overflow-visible"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
    {[
      // Slight vertical curve + wider fan
      { src: "/images/hero/pic1.png", x: -180, y: 40, rotate: -12, z: 1, scale: 0.92 },
      { src: "/images/hero/pic2.png", x: -60, y: 10, rotate: -5,  z: 2, scale: 0.96 },
      { src: "/images/hero/pic3.png", x: 80,  y: -10, rotate: 4,  z: 3, scale: 1.0 },
      { src: "/images/hero/pic4.png", x: 200, y: -30, rotate: 10, z: 4, scale: 1.05 },
    ].map((box, i) => (
      <motion.div
        key={i}
        className="absolute w-[42%] h-[58%] rounded-xl shadow-2xl border border-black/20 overflow-hidden"
        style={{
          zIndex: box.z,
          backgroundImage: `url(${box.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{
          opacity: 0,
          x: 300,
          y: 80,
          rotate: 20,
          scale: 0.6,
        }}
        animate={{
          opacity: 1,
          x: box.x,
          y: box.y,
          rotate: box.rotate,
          scale: box.scale,
        }}
        transition={{
          delay: 0.8 + i * 0.8,   // slower stagger between each
          duration: 1.8,          // slower overall animation
          type: "spring",
          stiffness: 70,          // gentler bounce
          damping: 14,
        }}
      />
    ))}
  </motion.div>
)}

    </section>
  );
}
