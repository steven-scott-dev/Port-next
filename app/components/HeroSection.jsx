"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen px-6 md:px-16 bg-black text-white overflow-hidden"
    >
      {/* LEFT — LOGO, TEXT, BUTTON */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center md:items-start text-center md:text-left md:max-w-lg z-10"
      >
        <motion.img
  src="/images/logo.png"
  alt="Clay Scott Logo"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="mb-10 w-[320px] md:w-[480px] lg:w-[580px] md:-ml-6 lg:-ml-10"
/>


        <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-md">
          Full-Stack Developer • Smart Tools • Fast Delivery
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px #22d3ee" }}
          className="inline-block bg-cyan-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-300 transition-all"
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* RIGHT SIDE — FRAMED VIDEO */}
<motion.div
  className="relative w-full md:w-[35%] h-[40vh] mt-10 md:mt-0 rounded-2xl overflow-hidden border border-neutral-700 shadow-xl"
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
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
    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</motion.div>npjm 
    </section>
  );
}
