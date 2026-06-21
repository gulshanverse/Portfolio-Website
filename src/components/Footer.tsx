"use client";

import { Mail, ArrowUp } from "lucide-react";

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

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950/90 backdrop-blur-xl py-12 text-zinc-400">
      {/* Subtle background glows */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-sm font-medium tracking-wide">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-zinc-500 hover:text-cyan-400 focus:text-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 rounded px-2 py-1 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-900/60 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Branding & Status */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span className="text-white font-semibold text-sm tracking-wide">
                © 2026 Gulshan Kumar
              </span>
              <span className="hidden sm:inline text-zinc-700">•</span>
              <span className="text-zinc-400 text-xs sm:text-sm font-medium tracking-wide">
                AI/ML Engineer • Building Intelligent Systems & Scalable Applications
              </span>
            </div>

            {/* Seeking Opportunities Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/10 text-cyan-400/90 text-xs font-semibold tracking-wide mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Currently Seeking AI/ML Internship Opportunities
            </div>
          </div>

          {/* Right: Social Icons & Scroll to Top */}
          <div className="flex items-center gap-4">
            {/* Github */}
            <a
              href="https://github.com/gulshanverse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900/65 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-cyan-500/30 rounded-xl text-zinc-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/gulshan-kumar-yv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900/65 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-purple-500/30 rounded-xl text-zinc-400 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            {/* Email */}
            <a
              href="mailto:gulshankumaritggv@gmail.com"
              className="p-3 bg-zinc-900/65 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-emerald-500/30 rounded-xl text-zinc-400 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>

            {/* Divider */}
            <div className="h-8 w-[1px] bg-zinc-800/80 mx-1" />

            {/* Scroll to Top */}
            <button
              onClick={handleScrollToTop}
              className="p-3 bg-zinc-900/65 hover:bg-zinc-800/80 border border-zinc-800/80 hover:border-cyan-500/30 rounded-xl text-zinc-400 hover:text-white hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 group"
              aria-label="Scroll to Top"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
