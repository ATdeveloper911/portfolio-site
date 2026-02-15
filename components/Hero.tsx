"use client";
import { TextScramble } from "./animations/TextScramble";
import Magnetic from "./animations/Magnetic";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-6"
        >
          <div className="space-y-2">
            <p className="text-neutral-400 text-sm md:text-base font-mono">
              {">"} Software Engineer
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <TextScramble text="Muhammad Taimoor" />
            </h1>
          </div>

          <p className="text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed">
            Building production-grade applications with{" "}
            <span className="text-blue-400 font-semibold">MERN</span>,{" "}
            <span className="text-blue-400 font-semibold">Next.js</span>, and{" "}
            <span className="text-blue-400 font-semibold">React Native</span>.
            Specialized in security, AI integration, and enterprise systems.
          </p>

          <div className="flex gap-4 pt-4">
            <Magnetic>
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
              >
                View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Get in Touch
              </a>
            </Magnetic>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-md bg-neutral-900 border border-white/10 rounded-xl p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-neutral-400">terminal</span>
            </div>
            <div className="space-y-2 text-neutral-300">
              <p>
                <span className="text-green-400">$</span> npm run dev
              </p>
              <p className="text-neutral-500">
                {">"} Compiling skills...
              </p>
              <p className="text-blue-400">
                ✓ Next.js 15 <span className="text-neutral-500">[Expert]</span>
              </p>
              <p className="text-blue-400">
                ✓ React Native <span className="text-neutral-500">[Expert]</span>
              </p>
              <p className="text-blue-400">
                ✓ TypeScript <span className="text-neutral-500">[Expert]</span>
              </p>
              <p className="text-blue-400">
                ✓ Node.js & Express <span className="text-neutral-500">[Expert]</span>
              </p>
              <p className="text-blue-400">
                ✓ MongoDB & PostgreSQL <span className="text-neutral-500">[Expert]</span>
              </p>
              <p className="text-blue-400">
                ✓ Supabase & Firebase <span className="text-neutral-500">[Expert]</span>
              </p>
              <p className="text-green-400 mt-4">
                ✓ Ready to build amazing products
              </p>
              <p className="text-neutral-500">
                <span className="animate-pulse">▊</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
