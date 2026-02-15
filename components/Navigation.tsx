"use client";
import { motion } from "framer-motion";
import Magnetic from "./animations/Magnetic";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-xl font-bold font-mono"
            whileHover={{ scale: 1.05 }}
          >
            MT<span className="text-blue-400">.</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#projects"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <Magnetic>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
              >
                GitHub
              </a>
            </Magnetic>
          </div>

          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
