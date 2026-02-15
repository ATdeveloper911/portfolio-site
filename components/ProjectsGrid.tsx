"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "./animations/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import Magnetic from "./animations/Magnetic";

export default function ProjectsGrid() {
  const featuredProjects = getFeaturedProjects();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="min-h-screen py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            A selection of production-grade applications showcasing expertise in
            security, AI integration, and enterprise systems.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="text-xs font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                  <p className="text-neutral-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs text-neutral-400 mb-2 font-semibold">
                      Technical Highlight:
                    </p>
                    <p className="text-xs text-neutral-300 line-clamp-2">
                      {project.technicalHighlight}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-neutral-800 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs text-neutral-400">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-4">
                    <Magnetic>
                      <button className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-sm font-semibold">
                        View Details
                      </button>
                    </Magnetic>
                  </div>
                </div>
              </ProjectCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Magnetic>
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors">
              View All Projects
            </button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
