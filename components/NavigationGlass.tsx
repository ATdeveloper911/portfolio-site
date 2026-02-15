"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./animations/Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function NavigationGlass() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: "200 top",
        end: "bottom bottom",
        onEnter: () => setIsScrolled(true),
        onLeaveBack: () => setIsScrolled(false),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center">
              <span className="text-xl font-bold text-gradient-indigo">MT</span>
            </div>
            {isScrolled && (
              <span className="hidden md:block text-sm font-mono text-neutral-400 animate-in fade-in slide-in-from-left-4 duration-300">
                Muhammad Taimoor
              </span>
            )}
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#projects"
              className="text-neutral-300 hover:text-white transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-teal-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#skills"
              className="text-neutral-300 hover:text-white transition-colors relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-teal-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contact"
              className="text-neutral-300 hover:text-white transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-teal-500 group-hover:w-full transition-all duration-300" />
            </a>
            <Magnetic>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 glass-card rounded-lg hover:scale-105 transition-all"
              >
                GitHub
              </a>
            </Magnetic>
          </div>

          <button className="md:hidden glass-card p-2 rounded-lg">
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
    </nav>
  );
}
