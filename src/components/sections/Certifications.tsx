"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Calendar, Award } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  link: string;
  emblem: React.ReactNode;
}

const CERTIFICATIONS: Certification[] = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI (via Coursera)",
    date: "Dec 2025",
    credentialId: "COURSERA-DL-987",
    link: "https://coursera.org",
    emblem: (
      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 font-mono font-bold shadow-md shadow-orange-500/5">
        DL
      </div>
    )
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford Online & DeepLearning.AI",
    date: "Aug 2025",
    credentialId: "STAN-ML-102",
    link: "https://coursera.org",
    emblem: (
      <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 font-serif font-black shadow-md shadow-rose-500/5">
        S
      </div>
    )
  },
  {
    title: "Google AI/ML Developer Certification Course",
    issuer: "Google Developer Groups",
    date: "Nov 2025",
    credentialId: "GDG-AI-8839",
    link: "https://developers.google.com",
    emblem: (
      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 font-sans font-bold shadow-md shadow-blue-500/5">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12.24 10.285V13.4h6.887c-.275 1.564-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.155 2.223 15.467 1 12.24 1 5.92 1 1 5.92 1 12.24s4.92 11.24 11.24 11.24c6.6 0 11-4.606 11-11.24 0-.756-.08-1.333-.18-1.955H12.24z"/>
        </svg>
      </div>
    )
  },
  {
    title: "Advanced Data Science with Python",
    issuer: "CodeAlpha Certified",
    date: "Jul 2025",
    credentialId: "CA-DS-774",
    link: "https://codealpha.com",
    emblem: (
      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 font-mono font-bold shadow-md shadow-purple-500/5 text-lg">
        α
      </div>
    )
  }
];

export default function Certifications() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 85, damping: 15 },
    },
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-zinc-950/20">
      {/* Background glow visual lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">Qualifications</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Certifications & Training
          </h2>
          <div className="w-12 h-[2px] bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.title}
              className="glass-panel hover:border-zinc-700/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative group"
              variants={cardVariants}
            >
              {/* Soft background glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-full blur-[20px] transition-opacity pointer-events-none" />

              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      {cert.emblem}
                    </div>
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h3>
                      <span className="text-xs font-semibold text-zinc-400 mt-1 block">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 font-medium mb-6">
                  <div className="flex items-center gap-1.5 uppercase tracking-wider">
                    <Calendar size={12} /> {cert.date}
                  </div>
                  <div className="h-3 w-[1px] bg-zinc-800" />
                  <div>
                    ID: <span className="font-mono text-zinc-400 uppercase">{cert.credentialId}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-zinc-900/60 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-emerald-400/90 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded">
                  <Award size={10} /> Verified Academic
                </span>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-3.5 py-1.5 rounded-xl transition-all duration-300 active:scale-[0.98]"
                >
                  Verify <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
