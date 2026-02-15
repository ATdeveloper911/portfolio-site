"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./animations/Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function HeroGlass() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = nameRef.current?.querySelectorAll('.char');
      
      if (chars) {
        gsap.from(chars, {
          opacity: 0,
          y: 50,
          rotateX: -90,
          stagger: 0.05,
          duration: 1,
          ease: "back.out(1.7)",
        });
      }

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      });

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (titleRef.current) {
            const progress = self.progress;
            gsap.to(titleRef.current, {
              scale: 1 - progress * 0.3,
              y: progress * -100,
              opacity: 1 - progress * 0.5,
              duration: 0.1,
            });
          }
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const firstName = "MUHAMMAD";
  const lastName = "TAIMOOR";
  
  const firstNameChars = firstName.split('').map((char, i) => (
    <span
      key={`first-${i}`}
      className="char inline-block will-change-transform"
      style={{ transformOrigin: "50% 50% -50px" }}
    >
      {char}
    </span>
  ));
  
  const lastNameChars = lastName.split('').map((char, i) => (
    <span
      key={`last-${i}`}
      className="char inline-block will-change-transform"
      style={{ transformOrigin: "50% 50% -50px" }}
    >
      {char}
    </span>
  ));

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm md:text-base font-mono text-gradient-indigo font-semibold tracking-wider uppercase">
                Software Engineer
              </p>
              
              <h1
                ref={titleRef}
                className="text-[clamp(3rem,8vw,4.5rem)] md:text-[clamp(4rem,7vw,6rem)] lg:text-[clamp(5rem,6vw,7rem)] xl:text-[clamp(6rem,6vw,9rem)] font-black tracking-tight will-change-transform"
              >
                <div ref={nameRef} className="perspective-1000">
                  <div className="flex flex-col leading-[0.9]">
                    <div className="inline-flex flex-nowrap whitespace-nowrap">
                      {firstNameChars}
                    </div>
                    <div className="inline-flex flex-nowrap whitespace-nowrap">
                      {lastNameChars}
                    </div>
                  </div>
                </div>
              </h1>
            </div>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed"
            >
              Architecting production-grade systems with{" "}
              <span className="text-gradient-indigo font-semibold">MERN</span>,{" "}
              <span className="text-gradient-indigo font-semibold">Next.js</span>, and{" "}
              <span className="text-gradient-indigo font-semibold">React Native</span>.
              Specialized in cybersecurity, AI integration, and enterprise architecture.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Magnetic>
                <a
                  href="#projects"
                  className="group relative px-8 py-4 glass-card rounded-xl font-semibold overflow-hidden transition-all hover:scale-105"
                >
                  <span className="relative z-10 text-gradient-indigo">View Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="px-8 py-4 glass-card rounded-xl font-semibold hover:scale-105 transition-all"
                >
                  Get in Touch
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-2xl p-8 font-mono text-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-neutral-400">~/portfolio</span>
              </div>
              
              <div className="space-y-3 text-neutral-300">
                <p>
                  <span className="text-gradient-indigo">$</span> npm run expertise
                </p>
                <p className="text-neutral-500">{">"} Compiling technical stack...</p>
                
                <div className="space-y-2 mt-4">
                  <SkillLine skill="Next.js 15" level="Expert" delay={0.1} />
                  <SkillLine skill="React Native" level="Expert" delay={0.2} />
                  <SkillLine skill="TypeScript" level="Expert" delay={0.3} />
                  <SkillLine skill="Node.js & Express" level="Expert" delay={0.4} />
                  <SkillLine skill="MongoDB & PostgreSQL" level="Expert" delay={0.5} />
                  <SkillLine skill="Supabase & Firebase" level="Expert" delay={0.6} />
                  <SkillLine skill="GSAP & Framer Motion" level="Expert" delay={0.7} />
                </div>
                
                <p className="text-gradient-indigo mt-6 font-semibold">
                  ✓ Ready to build exceptional products
                </p>
                <p className="text-neutral-500">
                  <span className="animate-pulse">▊</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillLine({ skill, level, delay }: { skill: string; level: string; delay: number }) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(lineRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.6,
      delay,
      ease: "power2.out",
    });
  }, [delay]);

  return (
    <div ref={lineRef} className="flex items-center justify-between">
      <span className="text-gradient-indigo">✓ {skill}</span>
      <span className="text-neutral-500 text-xs">[{level}]</span>
    </div>
  );
}
