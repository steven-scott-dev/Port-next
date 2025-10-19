"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover top-0 left-0 z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center text-white"
      >
        <img src="/images/logo.png" alt="Logo" className="mx-auto mb-6 w-32" />
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Clay Scott
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400">
          Full-Stack Developer • AI Automation Builder
        </p>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent z-5"></div>
    </section>
  );
}
