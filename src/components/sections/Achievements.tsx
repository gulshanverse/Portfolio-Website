"use client";

import { motion, type Variants } from "framer-motion";
import { Award, Code, CheckCircle, Users } from "lucide-react";

const ACHIEVEMENTS = [
  {
    icon: <Code className="text-cyan-400" size={24} />,
    stat: "500+",
    title: "LeetCode & Algorithmic Tasks",
    context: "Data Structures & Algorithms",
    description: "Solved over 500 advanced programming challenges covering complex graphs, dynamic programming, and dynamic systems analysis, establishing a high code-efficiency rating."
  },
  {
    icon: <Award className="text-purple-400" size={24} />,
    stat: "Top 5%",
    title: "Hackathon Innovations",
    context: "NHIDE 2026 & AI Projects",
    description: "Led development of low-latency model inference wrappers under rigorous time bounds, earning top rankings in competitive coding hackathons."
  },
  {
    icon: <Users className="text-emerald-400" size={24} />,
    stat: "1,000+",
    title: "Community Leadership",
    context: "GDGC AI/ML Team Member",
    description: "Delivered technical guides, hands-on model tuning bootcamps, and developer project materials to more than 1,000 campus peers and engineering students."
  }
];

export default function Achievements() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">Milestones</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Key Achievements
          </h2>
          <div className="w-12 h-[2px] bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {ACHIEVEMENTS.map((ach) => (
            <motion.div
              key={ach.title}
              className="glass-panel border-zinc-800/60 p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
              variants={cardVariants}
            >
              {/* Corner Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/10 rounded-full blur-[20px] pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-300" />

              <div>
                {/* Header Icon */}
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl inline-block mb-6">
                  {ach.icon}
                </div>

                {/* Big Stat */}
                <div className="font-display text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">
                  {ach.stat}
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {ach.title}
                </h3>
                
                <span className="text-[10px] font-extrabold tracking-widest text-zinc-500 uppercase block mb-4">
                  {ach.context}
                </span>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {ach.description}
                </p>
              </div>

              {/* Verified badge */}
              <div className="mt-8 pt-4 border-t border-zinc-900/60 flex items-center gap-1.5 text-xs text-emerald-400 font-bold tracking-wide">
                <CheckCircle size={14} /> Verified Accomplishment
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
