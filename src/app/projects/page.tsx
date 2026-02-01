import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function AllProjects() {
  return (
    <main className="min-h-screen bg-black px-6 pt-32 pb-24 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 sm:text-6xl">
            All Projects
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            A comprehensive archive of my work, experiments, and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <Link
                href={`/projects/${project.id}`}
                className="block relative h-72 w-full overflow-hidden bg-gray-900 group-hover:opacity-90 transition-opacity"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h2 className="mb-3 text-3xl font-bold text-white">
                  <Link
                    href={`/projects/${project.id}`}
                    className="hover:text-color-electric-blue transition-colors"
                  >
                    {project.title}
                  </Link>
                </h2>

                <p className="flex-1 text-gray-400 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-8 flex gap-6">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-base font-semibold text-white transition-colors hover:text-color-electric-blue"
                  >
                    View Details
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-gray-500 transition-colors hover:text-white"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
