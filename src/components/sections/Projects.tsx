"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Filter } from "lucide-react";

const GithubIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CATEGORIES = ["All", "AI/ML", "Systems", "Web Dev"];

const PROJECTS = [
  {
    id: 1,
    title: "VeriLex AI",
    subtitle: "AI-Powered Document Verification System",
    description: "An advanced machine learning framework designed to inspect, parse, and verify document authenticity. Detects metadata tampering, analyzes font consistency, and matches structural templates to expose fraudulent modifications.",
    category: "AI/ML",
    tags: ["PyTorch", "OpenCV", "NLP", "FastAPI", "React"],
    metric: "99.4% tampering detection precision",
    github: "https://github.com/gulshanverse/",
    demo: "https://github.com/gulshanverse/",
    gradient: "from-cyan-500 to-emerald-500"
  },
  {
    id: 2,
    title: "NHIDE 2026",
    subtitle: "High-Performance Neural IDE Integration",
    description: "A specialized development environment wrapper designed to interface local neural suggestion engines with zero-latency file monitoring. Integrates optimized C++ model pipelines into a sleek modern IDE layout.",
    category: "Systems",
    tags: ["C++", "Electron", "React", "ONNX Runtime", "WebSockets"],
    metric: "Sub-10ms neural suggestion response",
    github: "https://github.com/gulshanverse/",
    demo: "https://github.com/gulshanverse/",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "DeepGlow Neural Style Transfer",
    subtitle: "High-Fidelity Style Interpolation",
    description: "A research-based style translation system trained on VGG-19 convolutional feature layers. Optimizes content-style losses to apply sophisticated styling to raw photography while preserving edge structure.",
    category: "AI/ML",
    tags: ["PyTorch", "Python", "Streamlit", "VGG-19", "NumPy"],
    metric: "Optimized VGG style loss convergence by 25%",
    github: "https://github.com/gulshanverse/",
    demo: "https://github.com/gulshanverse/",
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    id: 4,
    title: "NeuroVision Biometrics",
    subtitle: "Real-Time Facial Verification Pipeline",
    description: "A low-latency face biometric verification application using MTCNN face detection and FaceNet coordinate embeddings. Achieves rapid verification and classification rates within 45ms.",
    category: "AI/ML",
    tags: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
    metric: "Classification latency reduced to 45ms",
    github: "https://github.com/gulshanverse/",
    demo: "https://github.com/gulshanverse/",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    id: 5,
    title: "CyberStack Analytics",
    subtitle: "ML-Powered Security Dashboard",
    description: "A responsive cybersecurity analytics interface aggregating network packets and classifying anomalous traffic logs using light gradient boosting decision trees.",
    category: "Web Dev",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Scikit-Learn", "FastAPI"],
    metric: "Detects anomalous traffic with 97.8% recall",
    github: "https://github.com/gulshanverse/",
    demo: "https://github.com/gulshanverse/",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">My Work</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Featured Projects
          </h2>
          <div className="w-12 h-[2px] bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Filter Navigation */}
        <div className="flex justify-center items-center gap-3 flex-wrap mb-16">
          <Filter size={15} className="text-zinc-500 mr-1" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${activeFilter === cat
                  ? "bg-cyan-500 text-zinc-950 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                  : "bg-zinc-900/40 text-zinc-400 border-zinc-800/60 hover:text-white hover:border-zinc-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 15 }}
                className="glass-panel border-zinc-800/60 rounded-2xl overflow-hidden flex flex-col justify-between group relative"
              >
                {/* Visual Top Glow bar */}
                <div className={`h-[3px] bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6 sm:p-8">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold tracking-widest text-cyan-400 uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-semibold mb-4 tracking-wide">
                    {project.subtitle}
                  </p>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Impact Metric Banner */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-[10px] text-emerald-400 font-bold tracking-wide mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{project.metric}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-bold rounded bg-zinc-900 border border-zinc-800/80 text-zinc-400 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-6 pb-6 pt-4 sm:px-8 sm:pb-8 border-t border-zinc-900/60 bg-zinc-900/10 flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                  >
                    <GithubIcon size={14} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors ml-auto"
                  >
                    Details <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
