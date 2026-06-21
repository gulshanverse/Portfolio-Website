"use client";

import { motion, type Variants } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-zinc-950/20">
      {/* Background visual helpers */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10 w-full relative">
        {/* Left side text and actions */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Recruiter Active Status Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-6 self-start shadow-[0_0_15px_rgba(6,182,212,0.05)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Open to AI/ML Internship Opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]"
          >
            Gulshan Kumar
            <br />
            <span className="text-zinc-400 text-3xl sm:text-4xl md:text-5xl font-bold block mt-3">
              AI/ML Engineer <span className="text-zinc-600 font-light">|</span> Full Stack Developer
            </span>
          </motion.h1>

          {/* Intro Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-400 max-w-xl mb-8 leading-relaxed font-normal"
          >
            Building intelligent systems, scalable applications, and practical AI solutions. Specialize in deep learning neural models and robust software architecture.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center mb-8">
            <a
              href="#featured-projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-zinc-950 font-bold hover:bg-cyan-400 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] active:scale-[0.98]"
            >
              View Projects <ArrowRight size={16} />
            </a>

            <a
              href="/Gulshan_Kumar_Resume.pdf"
              download="Gulshan_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-900/60 text-white font-bold hover:border-zinc-700 hover:bg-zinc-900 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
            >
              Download Resume <Download size={16} />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-800/80 bg-zinc-950/20 text-zinc-300 font-bold hover:text-white hover:border-zinc-700 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
            >
              Contact Me <Mail size={16} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-5 pt-4 border-t border-zinc-900/60 max-w-xl">
            <span className="text-xs tracking-widest text-zinc-500 uppercase font-bold">Social handles:</span>
            <div className="flex gap-3">
              <a
                href="https://github.com/gulshanverse"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/25 hover:scale-105 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/gulshan-kumar-yv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/25 hover:scale-105 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:gulshankumaritggv@gmail.com"
                className="p-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/25 hover:scale-105 transition-all duration-300"
                aria-label="Send Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side Profile Image Card */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* Subtle glow effect */}
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 rounded-full blur-[90px] opacity-30 pointer-events-none" />

          {/* Premium Card Frame */}
          <motion.div 
            className="relative group p-[1px] rounded-2xl bg-gradient-to-tr from-zinc-800 via-zinc-800 to-zinc-700 hover:from-cyan-500/50 hover:to-purple-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 w-full max-w-[320px] aspect-square"
            whileHover={{ y: -4 }}
          >
            {/* Inner frame */}
            <div className="bg-zinc-950 p-3 rounded-[15px] overflow-hidden w-full h-full relative">
              <Image
                src="/profile.jpg"
                alt="Gulshan Kumar"
                width={320}
                height={320}
                priority
                className="rounded-xl object-cover object-center w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.01]"
                sizes="(max-width: 640px) 256px, 300px"
                quality={95}
              />
              
              {/* Subtle glass overlay corner tag */}
              <div className="absolute bottom-6 left-6 right-6 px-4 py-2.5 bg-zinc-950/75 backdrop-blur-md border border-zinc-800/80 rounded-xl flex items-center justify-between text-[11px] font-bold text-zinc-400">
                <span>GULSHAN KUMAR</span>
                <span className="text-cyan-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  ACTIVE NOW
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

