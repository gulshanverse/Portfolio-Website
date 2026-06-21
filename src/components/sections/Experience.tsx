"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle } from "lucide-react";

const EXPERIENCES = [
  {
    role: "AI / ML Team Member",
    company: "Google Developer Groups on Campus (GDGC)",
    period: "Oct 2025 - Present",
    description: "Collaborating with a team of developers to build, test, and optimize AI and ML solutions.",
    points: [
      "Collaborated on designing deep learning models and custom training pipelines using PyTorch, accelerating validation steps by 15%.",
      "Instructed community workshops, hands-on labs, and bootcamps on neural networks and model optimization for 300+ students.",
      "Engineered high-performance classification models and web integration routes for campus developer events.",
      "Ensured strong system throughput by profile-testing inference scripts and adopting best practices in modular OOP."
    ],
    color: "cyan"
  },
  {
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    period: "June 2025 - August 2025",
    description: "Built, evaluated, and deployed data-driven predictive systems and automation models.",
    points: [
      "Developed custom feature-engineering pipelines and regression algorithms in Python, improving classification accuracy metrics by 12%.",
      "Leveraged OpenCV to build real-time visual landmarks detection pipelines, reducing model processing latency to under 50ms.",
      "Optimized model execution benchmarks, handled complex vector mathematics, and streamlined pandas data processing.",
      "Documented technical design workflows and validation criteria to establish strict code deployment standards."
    ],
    color: "purple"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background glow lights */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">My Path</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Work Experience
          </h2>
          <div className="w-12 h-[2px] bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline container */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-32">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="mb-12 last:mb-0 pl-8 md:pl-12 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, x: -35 },
                visible: {
                  opacity: 1,
                  x: 0,
                }
              }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Floating Date (Desktop) */}
              <div className="hidden md:block absolute -left-36 top-1.5 w-28 text-right font-display text-xs font-bold uppercase tracking-wider text-zinc-500">
                {exp.period}
              </div>

              {/* Node Circle */}
              <span className={`absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-2 bg-zinc-950 flex items-center justify-center transition-all duration-300 ${
                exp.color === "cyan" ? "border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]" : "border-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.3)]"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${exp.color === "cyan" ? "bg-cyan-400" : "bg-purple-500"}`} />
              </span>

              {/* Card Container */}
              <div className="glass-panel border-zinc-800/60 p-6 sm:p-8 rounded-2xl">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-zinc-400 mt-1 block">
                      {exp.company}
                    </span>
                  </div>
                  
                  {/* Floating Date (Mobile) */}
                  <div className="md:hidden inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    <Calendar size={12} /> {exp.period}
                  </div>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium">
                  {exp.description}
                </p>

                {/* Sub-bullets */}
                <ul className="flex flex-col gap-3.5">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      <CheckCircle size={15} className={`flex-shrink-0 mt-0.5 ${
                        exp.color === "cyan" ? "text-cyan-400/80" : "text-purple-400/80"
                      }`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
