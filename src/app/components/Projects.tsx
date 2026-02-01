"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion, useInView, Variants } from "framer-motion";

// Configuration for the Bento Grid layout (First 4 items)
const bentoConfig = [
  {
    className: "col-span-1 row-span-1 md:col-span-2 md:row-span-2", // Large Item (Top Left)
    gradient: "from-blue-500/20 to-cyan-400/20",
  },
  {
    className: "col-span-1 row-span-1", // Standard Item (Top Right 1)
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    className: "col-span-1 row-span-1", // Standard Item (Top Right 2)
    gradient: "from-emerald-400/20 to-teal-500/20",
  },
  {
    className: "col-span-1 row-span-1 md:col-span-2", // Wide Item (Bottom)
    gradient: "from-orange-400/20 to-red-500/20",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  // Display only the first 4 projects to fit the Bento Grid
  const featuredProjects = projects.slice(0, 4);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="bg-black py-24 px-6 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-lg text-gray-400"
          >
            A collection of projects where design meets robust engineering.
          </motion.p>
        </div>

        {/* Bento Grid Layout - Style #21 */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 auto-rows-[250px] gap-4 md:grid-cols-4 md:auto-rows-[300px]"
        >
          {featuredProjects.map((project, index) => {
            const config = bentoConfig[index] || {
              className: "col-span-1",
              gradient: "from-gray-500/20 to-gray-600/20",
            };

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={config.className}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className={`group relative block h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10`}
                >
                  {/* Dual-Layer Image Approach: Blurred BG + Contained FG */}
                  <div className="absolute inset-0 z-0 h-full w-full bg-black">
                    {/* Layer 1: Blurred Background Fill */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover blur-2xl opacity-50"
                    />
                    {/* Colorful Gradient Accent on Background only */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${config.gradient} mix-blend-overlay opacity-100`}
                    />

                    {/* Layer 2: Sharp Contained Image */}
                    <div className="absolute inset-0 p-6 sm:p-8">
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain object-top drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Text Readability Gradient (Bottom Only) */}
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent z-10" />
                  </div>

                  <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        {project.technologies.slice(0, 2).map(
                          (
                            tech,
                            i, // Show fewer tags on preview
                          ) => (
                            <span
                              key={i}
                              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md"
                            >
                              {tech}
                            </span>
                          ),
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-300 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Arrow Icon Reveal */}
                    <div className="absolute top-6 right-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-5 w-5 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Projects Button */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-3.5 text-base font-bold text-black transition-transform hover:scale-105 hover:bg-gray-100"
          >
            View All Projects
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
