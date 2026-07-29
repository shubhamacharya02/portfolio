"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/portfolio-data";
import { ArrowRight, Sparkles, Layers, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 border-t border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Production Systems</span>
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-2">
            Featured Projects
          </h2>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 rounded-2xl glass-card relative flex flex-col justify-between group"
            >
              <div>
                {/* Project Screenshot Container */}
                {project.image && (
                  <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6 bg-zinc-950 border border-zinc-800">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Top Bar Badge & Title */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
                    {project.category}
                  </span>

                  {project.slug === "nexus-ai" && (
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold flex items-center gap-1">
                      ⭐ Hero Project
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-zinc-400 mt-1 mb-4 font-medium">
                  {project.heroTagline}
                </p>

                <p className="text-xs text-zinc-300 leading-relaxed mb-5 line-clamp-3">
                  {project.overview}
                </p>

                {/* Architecture Pipeline Flow Preview */}
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 mb-5 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-zinc-400 text-[10px] mb-1.5 uppercase font-bold">
                    <Layers className="w-3 h-3 text-indigo-400" />
                    <span>Architecture Preview</span>
                  </div>
                  <div className="text-zinc-300 truncate">
                    {project.architecture.flow.join(" → ")}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Links */}
              <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-indigo-400 hover:text-indigo-300 group/link"
                >
                  <span>Read Full Deep-Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all font-semibold"
                      title="Live Application Demo"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
