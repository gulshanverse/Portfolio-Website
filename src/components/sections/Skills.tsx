"use client";

import { motion, type Variants } from "framer-motion";
import { Brain, Code, Server, Database, Cloud, Terminal } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "AI / ML",
    icon: <Brain className="text-cyan-400" size={20} />,
    description: "Deep learning models, neural networks, and computer vision architectures.",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow / Keras", level: 80 },
      { name: "Scikit-Learn", level: 85 },
      { name: "Computer Vision (OpenCV)", level: 80 },
      { name: "NLP & Transformers", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: <Code className="text-purple-400" size={20} />,
    description: "Responsive, premium interactive user interface systems.",
    skills: [
      { name: "Next.js 15 (Turbopack)", level: 85 },
      { name: "React & TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion & Three.js", level: 70 },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="text-emerald-400" size={20} />,
    description: "Scalable server applications and logical API routes.",
    skills: [
      { name: "Python (FastAPI / Flask)", level: 95 },
      { name: "Node.js & Express", level: 80 },
      { name: "REST APIs & GraphQL", level: 85 },
      { name: "C / C++ (Core Systems)", level: 85 },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="text-blue-400" size={20} />,
    description: "Relational, document, and cache storage setups.",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "SQLite", level: 90 },
      { name: "Redis (Caching)", level: 70 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="text-pink-400" size={20} />,
    description: "Containerization, cloud services, and build actions.",
    skills: [
      { name: "Docker", level: 75 },
      { name: "AWS (S3 / EC2)", level: 70 },
      { name: "Vercel / Netlify", level: 90 },
      { name: "GitHub Actions (CI/CD)", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Terminal className="text-orange-400" size={20} />,
    description: "Development environments and command line interfaces.",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Linux / Bash Scripting", level: 80 },
      { name: "ONNX Runtime", level: 75 },
      { name: "Postman / API Testing", level: 85 },
    ],
  },
];

export default function Skills() {
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
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow lights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">Tech Stack</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Skills & Capabilities
          </h2>
          <div className="w-12 h-[2px] bg-cyan-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              className="glass-panel border-zinc-800/60 p-8 rounded-2xl flex flex-col justify-between"
              variants={cardVariants}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                    {category.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{category.title}</h3>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  {category.description}
                </p>

                {/* Skills list */}
                <div className="flex flex-col gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col">
                      <div className="flex items-center justify-between mb-1.5 text-xs font-bold uppercase tracking-wider text-zinc-300">
                        <span>{skill.name}</span>
                        <span className="text-zinc-500">{skill.level}%</span>
                      </div>
                      
                      {/* Bar progress */}
                      <div className="w-full h-[4px] bg-zinc-900 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
