import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT SIDE - Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I’m <span className="text-cyan-400">Clay</span>.
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300">
            I build <span className="text-cyan-300">smart, fast, and futuristic</span> websites.
          </h2>
          <p className="text-gray-400 max-w-md">
            Welcome to my digital playground — where creativity meets code.
          </p>
          <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30">
            Explore My Work
          </button>
        </motion.div>

        {/* RIGHT SIDE - Video */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.2 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="overflow-hidden rounded-2xl shadow-2xl shadow-cyan-500/20"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/sites.mp4" // replace with your actual video file
          ></video>
        </motion.div>
      </div>
    </section>
  );
}
