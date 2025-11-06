"use client";
import { motion } from "framer-motion";

const ICONS = [
  {
    name: "JavaScript",
    svg: (
      <svg viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6 text-yellow-400">
        <path d="M0 32v448h448V32H0zm243.8 364c0 44.2-26.2 64.3-64.4 64.3-34.5 0-54.4-17.9-64.7-39.6l35.1-21.2c6.8 12 13 22.1 27.9 22.1 14.3 0 23.3-5.6 23.3-27.5V240h43v156zm101.3 63.9c-39.9 0-65.7-19-78.3-43.8l35.2-20.3c9.2 15 21.2 26.1 42.4 26.1 17.8 0 29.3-8.9 29.3-21.2 0-14.8-11.7-20-31.4-28.7l-10.8-4.6c-31.2-13.3-51.9-30-51.9-65.3 0-32.5 24.8-57.3 63.5-57.3 27.6 0 47.5 9.6 61.7 34.6l-33.8 21.7c-7.5-13.3-15.6-18.5-27.9-18.5-12.7 0-20.8 8.1-20.8 18.5 0 12.9 8.1 18.1 26.9 26l10.8 4.6c36.7 15.8 57.4 32 57.4 68.4 0 39.1-30.8 60.4-72.7 60.4z" />
      </svg>
    ),
  },
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7 text-cyan-400">
        <circle cx="12" cy="12" r="1.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
        <path d="M11.572 0c-6.379 0-11.572 5.193-11.572 11.572 0 6.379 5.193 11.572 11.572 11.572 6.379 0 11.572-5.193 11.572-11.572C23.144 5.193 17.951 0 11.572 0zM11.572 1.846c5.377 0 9.727 4.35 9.727 9.727 0 2.267-0.764 4.356-2.034 6.022l-12.933-15.436c1.745-0.823 3.663-1.313 5.24-1.313zM1.85 11.572c0-2.256 0.744-4.341 1.996-6.005l12.916 15.419c-1.74 0.812-3.64 1.286-5.19 1.286-5.377 0-9.722-4.35-9.722-9.727z" />
      </svg>
    ),
  },
  {
    name: "HTML",
    svg: (
      <svg viewBox="0 0 384 512" fill="currentColor" className="w-7 h-7 text-orange-500">
        <path d="M0 32l34.9 395.8L191.5 480l156.2-52.2L384 32H0zm308.2 143.2H125.9l4.1 47.4h174.1l-12.6 140.8-99.6 27.5-99.7-27.5-6.8-76.3h48.8l3.5 39.3 54.2 14.7 54.3-14.7 6-66.9H89.8L77.8 79.4h229.4l1 11.4z" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-sky-400 fill-current">
        <path d="M24 12c-7.333 0-12 3.667-14 11 2.667-3.667 5.667-5 9-4 1.957.586 3.342 2.097 4.929 3.785C26.57 24.77 29.433 28 34 28c7.333 0 12-3.667 14-11-2.667 3.667-5.667 5-9 4-1.957-.586-3.342-2.097-4.929-3.785C31.43 15.23 28.567 12 24 12z" />
      </svg>
    ),
  },
  {
    name: "SQL",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-fuchsia-400">
        <ellipse cx="32" cy="12" rx="20" ry="8" fill="none" />
        <path d="M12 12v20c0 4 8 8 20 8s20-4 20-8V12" />
        <path d="M12 32v20c0 4 8 8 20 8s20-4 20-8V32" />
      </svg>
    ),
  },
];

export default function FloatingIcons() {
  const radius = 130;

  return (
    <div className="relative w-full md:w-[50%] h-[60vh] mt-10 md:mt-0 flex items-center justify-center overflow-visible">
      {/* soft gradient aura */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-transparent rounded-full blur-2xl" />

      {/* central orb */}
      <div className="absolute w-32 h-32 rounded-full bg-gray-900/70 border border-white/10 backdrop-blur-md shadow-[0_0_40px_10px_rgba(56,189,248,0.4)] flex items-center justify-center text-cyan-400 font-bold text-2xl">
        KCG
      </div>

      {/* orbit ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
        className="absolute"
      >
        {ICONS.map((icon, i) => {
          const angle = (i / ICONS.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-400/20 shadow-[0_0_25px_4px_rgba(34,211,238,0.6)] hover:shadow-[0_0_35px_10px_rgba(34,211,238,0.8)] transition-all duration-500 animate-pulse">
                {icon.svg}
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
