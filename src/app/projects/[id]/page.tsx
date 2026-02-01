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
                      className="flex w-full items-center justify-between rounded-lg bg-color-electric-blue px-5 py-3 text-center font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      Visit Live Site ↗
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-between rounded-lg border border-white/20 bg-transparent px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      View Source Code
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
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
