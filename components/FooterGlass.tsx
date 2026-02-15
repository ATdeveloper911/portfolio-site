"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./animations/Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function FooterGlass() {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const email = "taimoorvri@gmail.com";
  const githubUrl = "https://github.com/ATdeveloper911";
  const linkedinUrl = "https://www.linkedin.com/in/muhammad-taimoor-79b27638a";

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const targets = contentRef.current
        ? gsap.utils.toArray<HTMLElement>(
            contentRef.current.querySelectorAll("[data-animate]")
          )
        : [];

      if (targets.length === 0) return;

      gsap.fromTo(
        targets,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom-=120",
            end: "top center",
            scrub: 1,
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative py-28 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/10"
    >
      <div ref={contentRef} className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 mb-16 md:mb-20">
          <div className="lg:col-span-7" data-animate>
            <div className="glass-card glass-glow rounded-3xl p-9 md:p-12">
              <div className="flex items-center justify-between gap-6 flex-wrap">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                  Let&apos;s Build Something{" "}
                  <span className="text-gradient-indigo">Exceptional</span>
                </h2>
                <span className="inline-flex items-center gap-2 text-xs font-mono text-neutral-300 glass-card rounded-full px-4 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 animate-pulse" />
                  Available
                </span>
              </div>

              <p className="text-neutral-300/90 text-base sm:text-lg mt-7 leading-relaxed max-w-2xl">
                I design and ship secure, high-performance products—web, mobile, and full-stack.
                If you want a premium build with real engineering behind it, let&apos;s talk.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Magnetic>
                  <a
                    href={`mailto:${email}`}
                    className="group relative px-7 py-4 glass-card rounded-2xl font-semibold overflow-hidden transition-transform hover:scale-[1.03]"
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <IconMail className="h-4 w-4 text-neutral-200" />
                      <span className="text-gradient-indigo">Email Me</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Magnetic>

                <Magnetic>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="px-7 py-4 glass-card rounded-2xl font-semibold hover:scale-[1.03] transition-transform"
                    aria-live="polite"
                  >
                    {copied ? "Copied" : "Copy Email"}
                  </button>
                </Magnetic>

                <Magnetic>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 glass-card rounded-2xl font-semibold hover:scale-[1.03] transition-transform"
                  >
                    <span className="inline-flex items-center gap-2">
                      <IconLinkedIn className="h-4 w-4 text-neutral-200" />
                      LinkedIn
                    </span>
                  </a>
                </Magnetic>

                <Magnetic>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 glass-card rounded-2xl font-semibold hover:scale-[1.03] transition-transform"
                  >
                    <span className="inline-flex items-center gap-2">
                      <IconGitHub className="h-4 w-4 text-neutral-200" />
                      GitHub
                    </span>
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5" data-animate>
            <div className="glass-card rounded-3xl p-9 md:p-12 h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gradient-indigo">
                    Contact
                  </h3>
                  <p className="text-neutral-400 mt-2 text-sm">
                    Reach me directly or jump to a section.
                  </p>
                </div>
                <div className="glass-card rounded-2xl px-4 py-2 text-xs font-mono text-neutral-300">
                  Obsidian Glass
                </div>
              </div>

              <div className="mt-9 glass-card rounded-2xl p-6">
                <p className="text-xs text-neutral-400 font-mono uppercase tracking-wider">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="mt-2 block text-neutral-200 hover:text-white transition-colors font-semibold break-all"
                >
                  {email}
                </a>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-5">
                <a
                  href="#projects"
                  className="glass-card rounded-2xl p-5 text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  <span className="block text-xs text-neutral-400 font-mono uppercase tracking-wider mb-1">Jump</span>
                  Featured Projects
                </a>
                <a
                  href="#skills"
                  className="glass-card rounded-2xl p-5 text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  <span className="block text-xs text-neutral-400 font-mono uppercase tracking-wider mb-1">Jump</span>
                  Skills
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-5 text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  <span className="block text-xs text-neutral-400 font-mono uppercase tracking-wider mb-1">Social</span>
                  LinkedIn
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-5 text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  <span className="block text-xs text-neutral-400 font-mono uppercase tracking-wider mb-1">Social</span>
                  GitHub
                </a>
              </div>

              <div className="mt-9 flex items-center justify-between gap-4">
                <div className="text-xs text-neutral-400 font-mono">
                  Response time: <span className="text-neutral-200">24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 animate-pulse" />
                  <span className="text-xs text-neutral-400 font-mono">Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10" data-animate>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © 2026 Muhammad Taimoor. Crafted with Next.js, GSAP & Framer Motion.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 animate-pulse" />
              <p className="text-neutral-400 text-sm font-mono">Glassmorphism 2.0</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.5 7.5 12 12l5.5-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.5 10v8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.5 6.75h.01"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10.5 18.5V10.9c0-.9.7-1.65 1.6-1.8 1.2-.2 2.4.25 3.1 1.2.3.4.45.9.45 1.4v6.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 20h15A2.5 2.5 0 0 0 22 17.5v-11A2.5 2.5 0 0 0 19.5 4h-15A2.5 2.5 0 0 0 2 6.5v11A2.5 2.5 0 0 0 4.5 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 19.5c-3 .9-3-1.5-4.2-1.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.7 20.2v-2.4c0-.7.25-1.2.65-1.55 2.2-.25 4.5-1.1 4.5-5.1 0-1.15-.4-2.1-1.05-2.85.1-.25.45-1.3-.1-2.7 0 0-.85-.25-2.8 1.05-.8-.2-1.7-.3-2.55-.3-.85 0-1.75.1-2.55.3-1.95-1.3-2.8-1.05-2.8-1.05-.55 1.4-.2 2.45-.1 2.7-.65.75-1.05 1.7-1.05 2.85 0 3.95 2.25 4.85 4.45 5.1.3.25.6.75.6 1.55v2.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
