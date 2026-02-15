"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { 
    name: "Next.js", 
    category: "Frontend",
    gradient: "from-blue-500 to-cyan-500",
    icon: "⚡"
  },
  { 
    name: "React Native", 
    category: "Mobile",
    gradient: "from-purple-500 to-pink-500",
    icon: "📱"
  },
  { 
    name: "TypeScript", 
    category: "Language",
    gradient: "from-blue-600 to-blue-400",
    icon: "🔷"
  },
  { 
    name: "Node.js", 
    category: "Backend",
    gradient: "from-green-500 to-emerald-500",
    icon: "🟢"
  },
  { 
    name: "MongoDB", 
    category: "Database",
    gradient: "from-green-600 to-green-400",
    icon: "🍃"
  },
  { 
    name: "Supabase", 
    category: "Backend",
    gradient: "from-emerald-500 to-teal-500",
    icon: "⚡"
  },
  { 
    name: "GSAP", 
    category: "Animation",
    gradient: "from-indigo-500 to-purple-500",
    icon: "✨"
  },
  { 
    name: "Framer Motion", 
    category: "Animation",
    gradient: "from-pink-500 to-rose-500",
    icon: "🎭"
  },
];

export default function SkillsGlass() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.skill-card');
      
      if (cards) {
        cards.forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            scale: 0.5,
            rotateY: 180,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "top center",
              scrub: 1,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 sm:py-32 md:py-36 lg:py-40 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Core <span className="text-gradient-indigo">Technologies</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Expert-level proficiency in modern web and mobile development stack
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card group will-change-transform"
            >
              <div className="glass-card rounded-2xl p-6 md:p-7 min-h-[200px] h-full hover:scale-105 transition-all duration-500 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col items-center text-center gap-3">
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <h3 className="text-xl font-bold text-gradient-indigo">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                    {skill.category}
                  </span>
                  
                  <div className="w-full h-1 glass-card rounded-full overflow-hidden mt-4">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <p className="text-neutral-400 text-sm">
            + Experience with React, Express, PostgreSQL, Firebase, Socket.io, Redis, and more
          </p>
        </div>
      </div>
    </section>
  );
}
