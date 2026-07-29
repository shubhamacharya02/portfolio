import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/portfolio-data";
import { ToastProvider } from "@/components/ui/toast";
import { CanvasBackground } from "@/components/background/canvas-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { CodeBlock } from "@/components/ui/code-block";
import { GitHubIcon } from "@/components/ui/icons";
import { ArrowLeft, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Code2, Layers, Cpu } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — AI Backend Architecture & Deep Dive`,
    description: project.heroTagline,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <ToastProvider>
      <CanvasBackground />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-indigo-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects</span>
            </Link>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
                {project.category}
              </span>
              {project.isFeatured && (
                <span className="text-xs font-mono uppercase px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
                  Featured Case Study
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg font-mono text-indigo-300 mt-2 font-medium">
              {project.heroTagline}
            </p>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-all shadow-md shadow-emerald-600/25 font-mono"
                >
                  <span>Live Application Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-medium text-xs transition-all font-mono"
                >
                  <GitHubIcon className="w-4 h-4 text-indigo-400" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Screenshot Banner */}
          {project.image && (
            <div className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden mb-10 bg-zinc-950 border border-zinc-800 shadow-2xl">
              <Image
                src={project.image}
                alt={`${project.title} UI screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-cover object-top"
                priority
              />
            </div>
          )}

          <hr className="border-zinc-800/80 my-10" />

          {/* Structured Deep-Dive Narrative */}
          <div className="space-y-12">
            
            {/* 1. Overview */}
            <section className="p-8 rounded-2xl glass-card border border-zinc-800">
              <h2 className="text-xl font-heading font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                Overview
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* 2. Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="p-7 rounded-2xl bg-red-500/5 border border-red-500/20">
                <h3 className="text-base font-heading font-bold text-red-300 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  The Problem
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </section>

              <section className="p-7 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                <h3 className="text-base font-heading font-bold text-emerald-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-emerald-400" />
                  The Solution
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </section>
            </div>

            {/* 3. System Architecture Diagram */}
            <section className="p-8 rounded-2xl glass-card border border-zinc-800">
              <h2 className="text-xl font-heading font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                System Architecture & Flow
              </h2>
              <p className="text-xs text-zinc-400 mb-4">
                Detailed data flow and step-by-step state transition pipeline.
              </p>

              <ArchitectureDiagram
                title={project.architecture.title}
                flow={project.architecture.flow}
                description={project.architecture.description}
              />
            </section>

            {/* 4. Tech Stack */}
            <section className="p-8 rounded-2xl glass-card border border-zinc-800">
              <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-indigo-300 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* 5. Key Features */}
            <section className="p-8 rounded-2xl glass-card border border-zinc-800">
              <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span className="text-xs text-zinc-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Code Snippets */}
            {project.codeSnippets.length > 0 && (
              <section className="p-8 rounded-2xl glass-card border border-zinc-800">
                <h2 className="text-xl font-heading font-bold text-white mb-2 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-indigo-400" />
                  Code Snippets & Implementation
                </h2>
                <p className="text-xs text-zinc-400 mb-4">
                  Actual production code snippets demonstrating state machine nodes, async routing, and vector retrieval.
                </p>

                <div className="space-y-6">
                  {project.codeSnippets.map((snippet) => (
                    <CodeBlock
                      key={snippet.title}
                      title={snippet.title}
                      language={snippet.language}
                      description={snippet.description}
                      code={snippet.code}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* 7. Challenges & How I Solved Them */}
            <section className="p-8 rounded-2xl glass-card border border-zinc-800">
              <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                Engineering Challenges & Solutions
              </h2>
              <div className="space-y-4">
                {project.challenges.map((c, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
                    <p className="text-xs font-semibold text-amber-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      Challenge: {c.challenge}
                    </p>
                    <p className="text-xs text-zinc-300 leading-relaxed font-mono pl-3 border-l-2 border-indigo-500">
                      Solution: {c.howSolved}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. What I Learned */}
            <section className="p-8 rounded-2xl glass-card border border-zinc-800">
              <h2 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                Key Architectural Takeaways
              </h2>
              <ul className="space-y-2">
                {project.whatILearned.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Bottom Back Button */}
          <div className="mt-12 pt-8 border-t border-zinc-800 flex items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-all"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>View Source Code on GitHub</span>
              </a>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </ToastProvider>
  );
}
