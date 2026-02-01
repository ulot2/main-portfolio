"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 pt-20 text-center sm:px-10">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white via-white to-cyan-400 sm:text-7xl md:text-8xl pb-2 relative z-10"
      >
        Building Digital Experiences That Matter.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-8 max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed relative z-10"
      >
        Frontend Developer specializing in high-performance web applications,
        modern UI/UX, and clean, scalable code.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="mt-12 flex flex-col items-center gap-6 sm:flex-row relative z-10"
      >
        <button
          onClick={scrollToProjects}
          className="rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] duration-300"
        >
          View Projects
        </button>

        <button
          onClick={scrollToContact}
          className="group flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/5 hover:border-white/20"
        >
          Contact Me
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </motion.div>
    </section>
  );
}
