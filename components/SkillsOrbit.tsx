"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", color: "from-blue-500 to-cyan-500" },
  { name: "React Native", color: "from-purple-500 to-pink-500" },
  { name: "TypeScript", color: "from-blue-600 to-blue-400" },
  { name: "Node.js", color: "from-green-500 to-emerald-500" },
  { name: "MongoDB", color: "from-green-600 to-green-400" },
  { name: "Supabase", color: "from-emerald-500 to-teal-500" },
];

export default function SkillsOrbit() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Core Technologies
          </h2>
          <p className="text-neutral-400 text-lg">
            Expert-level proficiency in modern web and mobile development
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity rounded-xl blur-xl"
                style={{
                  background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              />
              <div className={`relative p-6 bg-gradient-to-br ${skill.color} rounded-xl border border-white/10 backdrop-blur-sm`}>
                <h3 className="text-xl font-bold text-white text-center">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-400">
            + Experience with React, Express, PostgreSQL, Firebase, Socket.io, and more
          </p>
        </motion.div>
      </div>
    </section>
  );
}
