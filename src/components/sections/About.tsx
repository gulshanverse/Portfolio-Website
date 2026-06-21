"use client";

import { motion, type Variants } from "framer-motion";
import { User, BookOpen, Brain, Terminal } from "lucide-react";
import Image from "next/image";

const HIGHLIGHTS = [
  {
    icon: <Brain className="text-cyan-400" size={24} />,
    title: "AI/ML Focus",
    description: "Specialized in computer vision, natural language processing, and neural network training and optimization.",
  },
  {
    icon: <Terminal className="text-purple-400" size={24} />,
    title: "System Design",
    description: "Experienced in constructing high-speed, highly performant systems and backend web architectures.",
  },
  {
    icon: <BookOpen className="text-emerald-400" size={24} />,
    title: "Continuous Learner",
    description: "Active contributor in developer communities, tracking the latest research in generative AI and deep learning.",
  },
];

export default function About() {
  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Visual glowing meshes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">About Me</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
            The Engineer Behind the Code
          </h2>
          <div className="w-12 h-[2px] bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Profile Image Box */}
          <motion.div
            className="lg:col-span-4 flex justify-center items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <div className="relative group p-[3px] rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-500 shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-500 w-full max-w-[320px] aspect-square">
              {/* Inner container */}
              <div className="bg-zinc-950 p-2 rounded-[13px] overflow-hidden w-full h-full relative">
                <Image
                  src="/profile.jpg"
                  alt="Gulshan Kumar Profile"
                  width={300}
                  height={300}
                  className="rounded-[10px] object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 280px, 300px"
                  quality={95}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Text Intro Box */}
          <motion.div
            className="lg:col-span-8 flex flex-col justify-between glass-panel border-zinc-800/60 p-8 rounded-2xl relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[40px] pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <User size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Gulshan Kumar</h3>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-6 font-normal">
                I am a dedicated AI/ML developer and software engineer with a strong focus on building premium web technologies and training highly accurate neural models. I enjoy solving complex problems at the intersection of deep learning algorithms and scalable architectures.
              </p>

              <p className="text-zinc-400 leading-relaxed mb-6 font-normal">
                Through my participation as an active <strong className="text-zinc-300">AI/ML Team Member at GDGC</strong>, I collaborate on building modern intelligent solutions. My experience ranges from crafting document fraud detection models to constructing optimized desktop systems.
              </p>

              <p className="text-zinc-400 leading-relaxed font-normal">
                I strive to build clean, modular code bases that deliver unmatched user experiences, combined with powerful backend intelligence. I love working in collaborative environments that push technical boundaries.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-zinc-500 font-semibold block uppercase tracking-wider text-[11px]">Location</span>
                <span className="text-zinc-300 font-medium mt-1 block">India</span>
              </div>
              <div>
                <span className="text-zinc-500 font-semibold block uppercase tracking-wider text-[11px]">Primary Role</span>
                <span className="text-zinc-300 font-medium mt-1 block">AI/ML Developer</span>
              </div>
              <div>
                <span className="text-zinc-500 font-semibold block uppercase tracking-wider text-[11px]">Education</span>
                <span className="text-zinc-300 font-medium mt-1 block">Computer Science Engineering</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.title}
              className="glass-panel glass-panel-hover border-zinc-800/60 p-6 rounded-2xl flex gap-5 items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-base mb-1">{item.title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
