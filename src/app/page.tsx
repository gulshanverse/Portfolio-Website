"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

// Dynamically import the Canvas container with SSR disabled to prevent node-canvas/window references on the server.
const CanvasContainer = dynamic(() => import("@/components/CanvasContainer"), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="relative min-h-screen selection:bg-cyan-500/30 selection:text-white">
          {/* R3F interactive background */}
          <CanvasContainer />

          {/* Nav */}
          <Navbar />

          {/* Section contents */}
          <main className="relative z-10 max-w-7xl mx-auto">
            <Hero />
            <FeaturedProjects />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Achievements />
            <Certifications />
            <Leadership />
            <Contact />
          </main>

          {/* Premium Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
