import React from "react";
import Link from "next/link";
import { ToastProvider } from "@/components/ui/toast";
import { CanvasBackground } from "@/components/background/canvas-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectsSection } from "@/components/projects-section";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata = {
  title: "Projects | Shubham Acharya - AI Backend Developer",
  description: "Explore production AI backend projects, LangGraph multi-agent workflows, RAG systems, and FastAPI services built by Shubham Acharya.",
};

export default function ProjectsPage() {
  return (
    <ToastProvider>
      <CanvasBackground />
      <Navbar />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-indigo-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-1.5 block">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Portfolio Directory</span>
            </span>

            <h1 className="text-4xl font-heading font-extrabold text-white mt-1">
              Production AI & Backend Projects
            </h1>
            <p className="text-sm text-zinc-400 max-w-2xl mt-2 leading-relaxed">
              Every project listed here reflects architectural decisions, real code implementation, state machine management, and production-ready Python backend workflows.
            </p>
          </div>

          <ProjectsSection />

        </div>
      </main>

      <Footer />
    </ToastProvider>
  );
}
