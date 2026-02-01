import React from "react";

const technologies = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Figma",
];

export default function TechStack() {
  return (
    <section className="flex w-full flex-col items-center justify-center overflow-hidden bg-black py-12">
      <p className="mb-8 text-sm font-semibold uppercase tracking-widest text-gray-500">
        Powering Next-Gen Applications
      </p>

      <div className="relative flex w-full max-w-7xl overflow-hidden">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-black to-transparent"></div>
        {/* Right Fade */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-black to-transparent"></div>

        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {/* Double the list to create seamless loop */}
          {[...technologies, ...technologies, ...technologies].map(
            (tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="mx-8 flex items-center text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-white sm:text-4xl"
              >
                {tech}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
