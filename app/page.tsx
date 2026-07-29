import React from "react";
import { ToastProvider } from "@/components/ui/toast";
import { CanvasBackground } from "@/components/background/canvas-background";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhatIBuild } from "@/components/what-i-build";
import { EngineeringPhilosophy } from "@/components/engineering-philosophy";
import { SystemDesign } from "@/components/system-design";
import { ProjectsSection } from "@/components/projects-section";
import { Skills } from "@/components/skills";
import { Timeline } from "@/components/timeline";
import { GitHubStats } from "@/components/github-stats";
import { ResumeSection } from "@/components/resume-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <ToastProvider>
      <ScrollProgress />
      <CanvasBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        
        <section id="about" className="py-12 border-t border-zinc-800/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-2xl glass-panel border border-zinc-800/80">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-2">
                Developer Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                About Me
              </h2>
              <p className="text-base text-zinc-300 leading-relaxed max-w-3xl">
                I&apos;m an AI Backend Developer passionate about building intelligent backend systems and Agentic AI applications. 
                I specialize in designing scalable AI workflows, REST APIs, LLM integrations, RAG systems, and workflow orchestration using LangGraph.
                I enjoy turning complex AI ideas into production-ready software.
              </p>
            </div>
          </div>
        </section>

        <WhatIBuild />
        <EngineeringPhilosophy />
        <SystemDesign />
        <ProjectsSection />
        <Skills />
        <Timeline />
        <GitHubStats />
        <ResumeSection />
        <ContactSection />
      </main>

      <Footer />
    </ToastProvider>
  );
}
