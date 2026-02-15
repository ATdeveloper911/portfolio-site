import Link from "next/link";
import { notFound } from "next/navigation";
import AuroraBackground from "@/components/AuroraBackground";
import NavigationGlass from "@/components/NavigationGlass";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github, Globe, Shield, Zap, TrendingUp, Calendar, Code, Layers, Users, Star, ChevronRight, CheckCircle2, ArrowUpRight } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

function SectionTitle({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      {Icon && <Icon className="w-6 h-6 text-gradient-indigo" />}
      <h2 className="text-2xl md:text-3xl font-black tracking-tight">
        <span className="text-gradient-indigo">{children}</span>
      </h2>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4 text-neutral-300 leading-relaxed">
          <CheckCircle2 className="w-5 h-5 text-gradient-indigo mt-0.5 shrink-0" />
          <span className="flex-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  const caseStudy = project.caseStudy;

  return (
    <main className="min-h-screen text-white relative">
      <AuroraBackground />
      <div className="relative z-10">
        <NavigationGlass />

        <section className="pt-32 md:pt-40 pb-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Header */}
            <div className="mb-12">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-all duration-300 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Projects</span>
                </Link>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center px-4 py-2 glass-card rounded-full text-xs font-mono text-gradient-indigo border border-white/10">
                    <Star className="w-3 h-3 mr-2" />
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
                  <span className="text-gradient-indigo">{project.title}</span>
                </h1>
                <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-4xl mx-auto">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Enhanced Info Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2 glass-card rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-6 h-6 text-gradient-indigo" />
                  <p className="text-[11px] text-neutral-400 font-mono uppercase tracking-widest">
                    Technical Highlight
                  </p>
                </div>
                <p className="text-neutral-200 leading-relaxed text-lg">
                  {project.technicalHighlight}
                </p>
              </div>

              <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-6 h-6 text-gradient-indigo" />
                  <p className="text-[11px] text-neutral-400 font-mono uppercase tracking-widest">
                    Tech Stack
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 glass-card rounded-xl text-sm font-mono text-neutral-200/90 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Features Section */}
            <div className="glass-card rounded-3xl p-10 mb-16 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-6 h-6 text-gradient-indigo" />
                <p className="text-[11px] text-neutral-400 font-mono uppercase tracking-widest">
                  Key Features
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 text-neutral-300 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="leading-relaxed text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {caseStudy ? (
              <div className="space-y-16">
                {/* Key Capabilities */}
                <div className="glass-card rounded-3xl p-10 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <SectionTitle icon={Layers}>Key Capabilities</SectionTitle>
                  <BulletList items={caseStudy.keyCapabilities} />
                </div>

                {/* Reliability & Security */}
                <div className="glass-card rounded-3xl p-10 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <SectionTitle icon={Shield}>Reliability & Security</SectionTitle>
                  <BulletList items={caseStudy.reliabilitySecurity} />
                </div>

                {/* Performance & Scalability */}
                <div className="glass-card rounded-3xl p-10 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <SectionTitle icon={Zap}>Performance & Scalability</SectionTitle>
                  <BulletList items={caseStudy.performanceScalability} />
                </div>

                {/* Roadmap */}
                <div className="glass-card rounded-3xl p-10 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <SectionTitle icon={TrendingUp}>Roadmap</SectionTitle>
                  <BulletList items={caseStudy.roadmap} />
                </div>
              </div>
            ) : (
              <div className="glass-card rounded-3xl p-10 md:p-12 border border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <Calendar className="w-6 h-6 text-gradient-indigo" />
                  <SectionTitle>Case Study</SectionTitle>
                </div>
                <p className="mt-4 text-neutral-300 leading-relaxed text-lg">
                  Detailed case study content is coming soon. Stay tuned for in-depth technical insights and implementation details.
                </p>
              </div>
            )}

            {/* Enhanced Action Buttons */}
            <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/#projects"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-card rounded-2xl font-semibold text-lg hover:scale-[1.02] transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Explore More Projects
              </Link>
              
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-card rounded-2xl font-semibold text-lg hover:scale-[1.02] transition-all duration-300 border border-white/10 hover:border-white/20 bg-gradient-to-r from-indigo-500/10 to-teal-500/10"
              >
                Get in Touch
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            
            {/* Project Links */}
            <div className="mt-12 flex justify-center gap-6">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-xl text-sm font-mono hover:scale-[1.02] transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  <Globe className="w-4 h-4" />
                  Live Demo
                  <ExternalLink className="w-3 h-3" />
                </Link>
              )}
              
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-xl text-sm font-mono hover:scale-[1.02] transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  <Github className="w-4 h-4" />
                  View Source
                  <ExternalLink className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
