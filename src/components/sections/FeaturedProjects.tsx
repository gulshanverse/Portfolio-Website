"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Sparkles, Award } from "lucide-react";

const GithubIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metric: string;
  github: string;
  demo: string;
  glowColor: string;
  visual: React.ReactNode;
}

const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    title: "VeriLex AI",
    subtitle: "AI-Powered Document Verification System",
    description: "An advanced machine learning framework designed to inspect, parse, and verify document authenticity. Detects metadata tampering, analyzes font consistency, and matches structural templates to expose fraudulent modifications.",
    tech: ["PyTorch", "OpenCV", "FastAPI", "NLP", "React"],
    metric: "Exposed tampering under 45ms with 99.4% precision",
    github: "https://github.com/gulshanverse/",
    demo: "https://github.com/gulshanverse/",
    glowColor: "from-cyan-500/20 to-emerald-500/20",
    visual: (
      <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden">
        {/* Abstract scanning document */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))]" />
        <div className="w-2/5 h-3/5 rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 relative flex flex-col justify-between shadow-2xl">
          <div className="space-y-1.5">
            <div className="w-full h-2 bg-cyan-500/20 rounded animate-pulse" />
            <div className="w-4/5 h-2 bg-zinc-800 rounded" />
            <div className="w-5/6 h-2 bg-zinc-800 rounded" />
            <div className="w-2/3 h-2 bg-zinc-800 rounded" />
          </div>
          <div className="flex items-center gap-1.5 mt-auto">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[8px] font-mono tracking-wider text-cyan-400 font-extrabold">VERIFYING...</span>
          </div>
          {/* Scan Line */}
          <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent top-1/2 animate-bounce" />
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "NHIDE 2026",
    subtitle: "High-Performance Neural IDE Integration",
    description: "A specialized development environment wrapper designed to interface local neural suggestion engines with zero-latency file monitoring. Integrates optimized C++ model pipelines into a sleek modern IDE layout.",
    tech: ["C++", "Electron", "React", "ONNX Runtime", "WebSockets"],
    metric: "Achieved sub-10ms neural suggestion latency",
    github: "https://github.com/gulshanverse/",
    demo: "https://github.com/gulshanverse/",
    glowColor: "from-purple-500/20 to-pink-500/20",
    visual: (
      <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden">
        {/* Glowing Neural Network lines */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.15),rgba(255,255,255,0))]" />
        <div className="w-4/5 h-1/2 flex items-center justify-between px-6 relative">
          <div className="w-4 h-4 rounded-full border border-purple-500/50 flex items-center justify-center bg-zinc-900 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          </div>
          {/* Connection line */}
          <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500 to-pink-500 relative">
            <div className="w-2 h-2 rounded-full bg-pink-400 absolute top-1/2 -translate-y-1/2 left-1/3 animate-ping" />
          </div>
          <div className="w-4 h-4 rounded-full border border-pink-500/50 flex items-center justify-center bg-zinc-900 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "AI Job Recommendation Portal",
    subtitle: "Semantic Resume-to-Job Matching System",
    description: "An ML-powered recommendation pipeline utilizing modern Transformer embeddings to perform semantic matching of candidate profiles against large-scale corporate job descriptions.",
    tech: ["Python", "Transformers", "PostgreSQL", "FastAPI", "Tailwind CSS"],
    metric: "Improved alignment by 40% using vector math",
    github: "https://github.com/gulshanverse/",
    demo: "https://github.com/gulshanverse/",
    glowColor: "from-blue-500/20 to-cyan-500/20",
    visual: (
      <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center overflow-hidden">
        {/* Abstract matching network */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))]" />
        <div className="w-1/2 h-1/2 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg border border-blue-500/30 bg-zinc-900 flex items-center justify-center text-[10px] text-blue-400 font-mono font-bold shadow-md">
            R
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg border border-cyan-500/30 bg-zinc-900 flex items-center justify-center text-[10px] text-cyan-400 font-mono font-bold shadow-md">
            J
          </div>
          {/* Bridge connection */}
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-blue-500 via-emerald-500 to-cyan-500" />
          {/* Glowing pulse */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[7px] font-extrabold text-emerald-400 uppercase tracking-widest font-mono">
            96% MATCH
          </div>
        </div>
      </div>
    )
  }
];

export default function FeaturedProjects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="featured-projects" className="py-24 relative overflow-hidden bg-zinc-950/20">
      {/* Background glow visual decorators */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-1.5">
            <Sparkles size={12} className="animate-pulse" /> Recruiter Spotlight
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Featured Projects
          </h2>
          <p className="text-zinc-500 text-sm mt-3 max-w-lg mx-auto font-normal leading-relaxed">
            Cornerstone systems built to address key challenges in artificial intelligence and automation.
          </p>
          <div className="w-12 h-[2px] bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {FEATURED_PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              className="glass-panel border-zinc-800/60 hover:border-zinc-700 rounded-2xl overflow-hidden flex flex-col justify-between group relative transition-all duration-300"
              variants={cardVariants}
            >
              {/* Top Accent Glow Bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.glowColor}`} />

              <div>
                {/* Visual Thumbnail Block */}
                <div className="h-44 w-full border-b border-zinc-900 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                  {project.visual}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Category Badge & Impact Icon */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-extrabold tracking-widest text-cyan-400 uppercase bg-cyan-500/5 px-2.5 py-1 rounded border border-cyan-500/10">
                      AI / ML Portfolio
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-semibold mb-4 uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Impact Metric Banner */}
                  <div className="flex gap-2.5 items-start p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl mb-6">
                    <Award size={15} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold block">Key Achievement</span>
                      <span className="text-xs text-emerald-400 font-bold leading-normal">{project.metric}</span>
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[9px] font-extrabold rounded-md bg-zinc-950 border border-zinc-900 text-zinc-400 uppercase tracking-widest"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom links */}
              <div className="px-6 pb-6 pt-4 sm:px-8 sm:pb-8 border-t border-zinc-900 bg-zinc-900/10 flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                  aria-label={`View code for ${project.title}`}
                >
                  <GithubIcon size={14} /> Source Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors ml-auto"
                  aria-label={`View live demo for ${project.title}`}
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
