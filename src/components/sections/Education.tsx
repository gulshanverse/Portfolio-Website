"use client";

import { motion, type Variants } from "framer-motion";
import { BookOpen, Calendar, Award, GraduationCap } from "lucide-react";

const EDUCATION_DETAILS = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Information Technology",
    institution: "Guru Ghasidas Vishwavidyalaya (A Central University)",
    period: "2024 - 2028",
    gpa: "8.75/10 CGPA (Till 4th Sem)",
    highlights: [
      "Specialization tracks: Advanced Deep Learning, Data Structures & Algorithms, Systems Architecture.",
      "Active organizer and developer for regional student coding networks.",
      "Top performer in core algorithmic and mathematical courses."
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision"
    ],
    color: "cyan"
  }
];

export default function Education() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glow lights */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 z-10 relative">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">Academics</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Education
          </h2>
          <div className="w-12 h-[2px] bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Education Display */}
        <motion.div
          className="flex flex-col gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {EDUCATION_DETAILS.map((edu) => (
            <motion.div
              key={edu.degree}
              className="glass-panel border-zinc-800/60 p-6 sm:p-10 rounded-2xl relative overflow-hidden group"
              variants={cardVariants}
            >
              {/* Decorative Corner Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-500/10 rounded-full blur-[20px] pointer-events-none group-hover:bg-purple-500/20 transition-all duration-300" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-cyan-400 flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-sm">
                      <span className="font-semibold text-zinc-300">{edu.major}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400 italic">{edu.institution}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-1.5 self-start">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800/80 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    <Calendar size={12} /> {edu.period}
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 mt-1">
                    <Award size={13} /> {edu.gpa}
                  </div>
                </div>
              </div>

              {/* Coursework & Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-zinc-900">
                {/* Highlights list */}
                <div className="md:col-span-7 flex flex-col gap-4">
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Award size={15} className="text-cyan-400" /> Academic Highlights
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Coursework */}
                <div className="md:col-span-5 flex flex-col gap-4">
                  <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <BookOpen size={15} className="text-purple-400" /> Key Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 text-xs font-bold rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 uppercase tracking-wide"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
