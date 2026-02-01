"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full bg-black py-24 px-6 sm:px-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-color-electric-blue opacity-5 blur-[120px]" />

      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            More than just code. <br />
            <span className="text-gray-500">I build systems.</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              My name is Toluwalope Adegoke,I am a Frontend Developer with a
              passion for building beautiful, responsive, and high-performance
              web applications. With over 2 years of experience, I specialize in
              the React ecosystem, design systems, and bridging the gap between
              design and engineering.
            </p>
            <p>
              I put{" "}
              <strong className="text-white">user experience first</strong> at
              the center of everything I build. Whether improving performance or
              fine-tuning interactions, my aim is to create software that feels
              seamless and intuitive.
            </p>
          </div>

          <div className="mt-8 flex gap-8">
            <div>
              <h4 className="text-4xl font-bold text-color-electric-blue">
                2+
              </h4>
              <span className="text-sm text-gray-400">Years Exp.</span>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-color-neon-purple">10+</h4>
              <span className="text-sm text-gray-400">Projects</span>
            </div>
          </div>
        </motion.div>

        {/* Abstract/Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative h-80 w-80 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 rotate-3 transition-transform hover:rotate-0">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/images/port-img.jpg"
                alt="Toluwalope Adegoke"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
