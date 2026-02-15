"use client";
import Magnetic from "./animations/Magnetic";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-neutral-400 text-lg mb-8">
              Available for freelance projects and full-time opportunities.
              Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            <div className="flex gap-4">
              <Magnetic>
                <a
                  href="mailto:your.email@example.com"
                  className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
                >
                  Email Me
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  LinkedIn
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-neutral-400 mb-2">
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <a
                    href="#projects"
                    className="block text-neutral-300 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-neutral-300 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-neutral-300 hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © 2026 Muhammad Taimoor. Built with Next.js 15 & Framer Motion.
          </p>
          <p className="text-neutral-400 text-sm font-mono">
            Designed for performance & wonder ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
