import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, Project } from "@/data/projects";

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetails(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const projectId = parseInt(params.id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  // Helper to safely access project (TypeScript check)
  const p = project as Project;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation Bar Placeholder (or Back Button) */}
      <div className="absolute top-0 left-0 w-full p-6 z-50">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
        >
          ← All Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden lg:h-[70vh]">
        {/* Background Image / Blur */}
        <div className="absolute inset-0">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-cover opacity-60 blur-sm scale-105"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-end pb-20 px-6 sm:px-12">
          <div className="mx-auto max-w-7xl w-full">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl mb-6">
              {p.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {p.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Main Description */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-bold text-white">Overview</h2>
              <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                {p.fullDescription.split("\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar / Actions */}
            <div className="space-y-8 rounded-2xl border border-white/10 bg-white/5 p-8 h-fit glass-panel">
              {/* Category */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Category
                </h3>
                <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
                  {p.category}
                </span>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {p.features?.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                  Project Links
                </h3>
                <div className="flex flex-col gap-4">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-between rounded-lg bg-color-electric-blue px-5 py-3 text-center font-semibold text-white transition-opacity hover:opacity-90 shadow-lg shadow-blue-500/20"
                    >
                      Visit Live Site ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {(p.image2 || p.image3) && (
            <div className="mt-24">
              <h3 className="mb-10 text-3xl font-bold text-white">Gallery</h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {p.image2 && (
                  <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-black md:h-[500px] group">
                    {/* Blurred Background */}
                    <Image
                      src={p.image2}
                      alt={`${p.title} screenshot 1`}
                      fill
                      className="object-cover blur-2xl opacity-40"
                    />
                    {/* Main Image */}
                    <div className="absolute inset-4 sm:inset-8">
                      <div className="relative h-full w-full">
                        <Image
                          src={p.image2}
                          alt={`${p.title} screenshot 1`}
                          fill
                          className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {p.image3 && (
                  <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-black md:h-[500px] group">
                    {/* Blurred Background */}
                    <Image
                      src={p.image3}
                      alt={`${p.title} screenshot 2`}
                      fill
                      className="object-cover blur-2xl opacity-40"
                    />
                    {/* Main Image */}
                    <div className="absolute inset-4 sm:inset-8">
                      <div className="relative h-full w-full">
                        <Image
                          src={p.image3}
                          alt={`${p.title} screenshot 2`}
                          fill
                          className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
