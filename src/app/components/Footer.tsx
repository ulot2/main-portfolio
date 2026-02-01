"use client";
import React from "react";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-gray-500 font-mono text-sm">
          &copy; {currentYear} Toluwalope Adegoke. All rights reserved.
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-white font-mono text-sm hover:text-gray-300 transition-colors"
        >
          BACK TO TOP
          <FiArrowUp className="transition-transform group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
