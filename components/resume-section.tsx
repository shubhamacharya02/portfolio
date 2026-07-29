"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { FileText, Download, ExternalLink, CheckCircle2 } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="py-16 border-t border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 rounded-2xl glass-card border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-1">
                Curriculum Vitae / Resume
              </h2>
              <p className="text-xs text-zinc-400 max-w-lg">
                Detailed technical summary covering AI backend engineering, FastAPI microservice designs, LangGraph orchestration, vector databases, and education.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 mt-3 text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                  <span>Python & FastAPI</span>
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                  <span>LangGraph & LLMs</span>
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                  <span>PostgreSQL & Docker</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-all shadow-md shadow-indigo-600/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View PDF</span>
            </a>

            <a
              href={PERSONAL_INFO.resumePdf}
              download="Shubham_Acharya_AI_Backend_Developer_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-medium text-xs transition-all"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
