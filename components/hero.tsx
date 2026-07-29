"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowRight, FileText, Server, CheckCircle2 } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/icons";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content (Cols 1-7) */}
          <div className="lg:col-span-8">
            


            {/* Main Recruiter Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Building Production-Ready <br className="hidden sm:inline" />
              <span className="text-gradient-primary">AI Backend Systems</span>
            </motion.h1>

            {/* Subtitle Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 mt-4 text-sm font-mono text-indigo-300 font-medium"
            >
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">Agentic AI</span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20">LLM Workflows</span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">FastAPI</span>
              <span>•</span>
              <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20">LangGraph</span>
            </motion.div>

            {/* Immediate Recruiter Explanation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed"
            >
              {PERSONAL_INFO.description}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-200 font-medium text-sm transition-all hover:border-zinc-500"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Resume (PDF)</span>
              </a>

              <div className="flex items-center gap-2 pl-2 border-l border-zinc-800">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Profile Photo Card (Cols 8-12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative group max-w-[280px] w-full">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-lg group-hover:opacity-60 transition duration-500"></div>
              
              <div className="relative p-2.5 rounded-2xl glass-panel border border-zinc-700/60 bg-zinc-950/90 shadow-2xl">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-900">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                <div className="p-3 text-center">
                  <span className="font-heading font-bold text-sm text-white block">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 block mt-0.5">
                    {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Recruiter Fast-Scan Tech Stack Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 pt-8 border-t border-zinc-800/80"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-3">
            <Server className="w-3.5 h-3.5 text-indigo-400" />
            <span>CORE TECHNICAL STACK</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {PERSONAL_INFO.coreTechStack.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-200 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
              >
                <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
