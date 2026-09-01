"use client";

import React from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowUp, FileText } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800 bg-[#070707] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
          {/* Brand & Status */}
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-heading font-bold text-lg text-white">{PERSONAL_INFO.name}</span>
            <span className="text-xs font-mono text-zinc-400">
              {PERSONAL_INFO.title} • Agentic AI Engineer
            </span>
          </div>

          {/* Footer Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
            <Link href="/#about" className="hover:text-white transition-colors">About</Link>
            <Link href="/#what-i-build" className="hover:text-white transition-colors">What I Build</Link>
            <Link href="/#philosophy" className="hover:text-white transition-colors">Philosophy</Link>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/#skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white transition-all"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed & Built with Next.js & Tailwind CSS.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a href={PERSONAL_INFO.resumePdf} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Resume">
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
