"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiArrowUpRight,
  FiSend,
  FiLoader,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if (form.current) {
      emailjs
        .sendForm(
          "service_f9ydw08",
          "template_bhf3euk",
          form.current,
          "K5gsQAgTkfK2jkwqH",
        )
        .then(() => {
          setLoading(false);
          setStatus("success");
          if (form.current) {
            form.current.reset();
          }
        })
        .catch(() => {
          setLoading(false);
          setStatus("error");
        });
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/toluwalope-adegoke-b441b9380",
      icon: <LuLinkedin />,
    },
    {
      name: "GitHub",
      href: "https://github.com/ulot2",
      icon: <LuGithub />,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/Tolu_dev",
      icon: <FaXTwitter />,
    },
  ];

  return (
    <section className="py-24 bg-black" id="contact">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Simple Text */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white leading-tight">
              Turning "What If" <br />
              <span className="text-gray-500">into "What's Next"</span>
            </h2>
            <p className="text-xl text-gray-400 font-body max-w-md">
              You have the concept. I have the stack. Let's ship it together.
            </p>

            <div className="pt-8">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-600 mb-4 font-mono">
                Connect
              </h3>
              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-gray-400 hover:text-white transition-colors"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a
                href="mailto:tolu.nuell@gmail.com"
                className="flex items-center gap-2 text-xl font-medium text-white hover:text-gray-300 transition-colors"
              >
                tolu.nuell@gmail.com
                <FiArrowUpRight />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-500 mb-2 font-mono"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-gray-800 py-3 text-lg text-white focus:border-white outline-none transition-colors font-body rounded-none"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-500 mb-2 font-mono"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-gray-800 py-3 text-lg text-white focus:border-white outline-none transition-colors font-body rounded-none"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-500 mb-2 font-mono"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-800 py-3 text-lg text-white focus:border-white outline-none transition-colors resize-none font-body rounded-none"
                    placeholder="Write your message..."
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-white text-black text-sm font-bold font-mono tracking-wider hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  {loading ? "SENDING..." : "SEND MESSAGE"}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-green-500 font-mono text-sm"
                    >
                      <FiCheck /> SENT
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-red-500 font-mono text-sm"
                    >
                      <FiAlertCircle /> ERROR
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
