"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Noir and Gold",
    desc: "A high-end apparel store blending luxury style with sleek UX design.",
    img: "/images/noir.png",
    link: "https://goldnoir.netlify.app/",
  },
  {
    title: "Elite Cuts Barbershop",
    desc: "Modern barbershop site with booking and sleek animations.",
    img: "/images/elitecuts.png",
    link: "https://barberssite.netlify.app/",
  },
  {
    title: "Urban Table",
    desc: "Restaurant site with modern UI, menu preview, and online reservations.",
    img: "/images/urban.png",
    link: "https://restaurantssite.netlify.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-gray-950 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-cyan-400">Featured</span> Projects
        </h2>
        <p className="text-gray-400">
          High-end businesses I’ve built websites for, blending style and functionality.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 border border-transparent hover:border-cyan-500 transition-all duration-500"
          >
            {/* ⛰️ Pan + Zoom Image */}
            <div className="overflow-hidden h-56 rounded-t-2xl relative">
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1, x: 0, y: 0 }}
                animate={{ scale: 1.15, x: 10, y: 10 }}
                transition={{
                  duration: 15,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* 📄 Text Block */}
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-2 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition">
                {project.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
