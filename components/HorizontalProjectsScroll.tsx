"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import Magnetic from "./animations/Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalProjectsScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    const ctx = gsap.context(() => {
      const horizontalTween = gsap.to(scrollContainer, {
        x: () => -(scrollContainer.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          id: "horizontal-scroll",
          trigger: section,
          start: "top top",
          end: () => `+=${scrollContainer.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const cards = scrollContainer.querySelectorAll(".project-card");
      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.9,
          rotateY: -35,
          transformOrigin: "50% 50%",
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalTween,
            start: "left 85%",
            end: "center 55%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);
  const cardsCount = featuredProjects.length + 1;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex flex-col"
    >
      <div className="px-6 md:px-12 lg:px-24 pt-24 pb-10 shrink-0">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Featured <span className="text-gradient-indigo">Projects</span>
        </h2>
        <p className="text-neutral-400 text-lg max-w-xl">
          Scroll to explore production-grade applications
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex items-center gap-8 px-6 md:px-12 lg:px-24 flex-1"
        style={{ width: `${cardsCount * 500}px` }}
      >
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-card flex-shrink-0 w-[450px] h-[540px] will-change-transform"
          >
            <div className="glass-card rounded-2xl p-8 h-full flex flex-col relative group hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="inline-flex items-center px-4 py-1.5 glass-card rounded-full text-xs font-mono text-gradient-indigo">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    Featured
                  </span>
                </div>

                <h3 className="text-3xl font-black leading-tight tracking-tight mb-3">
                  <span className="text-gradient-indigo">{project.title}</span>
                </h3>

                <p className="text-neutral-300/90 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="glass-card rounded-xl p-4 mb-6">
                  <p className="text-[11px] text-neutral-400 mb-2 font-mono uppercase tracking-widest">
                    Technical Highlight
                  </p>
                  <p className="text-sm text-neutral-200 leading-relaxed line-clamp-3">
                    {project.technicalHighlight}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 glass-card rounded-lg text-xs font-mono text-neutral-200/90"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 text-xs text-neutral-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-auto space-y-4">
                  <div className="space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-gradient-indigo text-xs mt-1">✓</span>
                        <span className="text-xs text-neutral-400 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Magnetic>
                    <Link
                      href={`/projects/${project.id}`}
                      className="w-full py-3.5 glass-card rounded-xl font-semibold text-sm hover:bg-white/5 transition-all group-hover:scale-105 inline-flex items-center justify-center"
                    >
                      <span className="inline-flex items-center justify-center gap-2 text-gradient-indigo">
                        Explore Project
                        <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">→</span>
                      </span>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="project-card flex-shrink-0 w-[400px] h-[540px] flex items-center justify-center will-change-transform">
          <div className="glass-card rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient-indigo">
              Want to See More?
            </h3>
            <p className="text-neutral-400 mb-6">
              Check out all {projects.length}+ projects
            </p>
            <Magnetic>
              <button className="px-8 py-4 glass-card rounded-xl font-semibold hover:scale-105 transition-all">
                View All Projects
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
