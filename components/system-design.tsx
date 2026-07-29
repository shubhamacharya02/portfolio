"use client";

import React from "react";
import { SYSTEM_DESIGN_CAPABILITIES } from "@/data/portfolio-data";
import { Network, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function SystemDesign() {
  return (
    <section id="system-design" className="py-16 border-t border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-2">
              <Network className="w-3.5 h-3.5" />
              <span>Architectural Expertise</span>
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-2">
              System Design
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md mt-2 md:mt-0">
            Engineered around state management, database schema design, non-blocking execution, and robust vector retrieval.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SYSTEM_DESIGN_CAPABILITIES.map((capability, idx) => (
            <motion.div
              key={capability}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-indigo-500/40 hover:bg-zinc-900 transition-all flex items-start gap-3 group"
            >
              <div className="w-6 h-6 rounded-md bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5 group-hover:bg-indigo-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <h3 className="text-sm font-heading font-semibold text-zinc-100 group-hover:text-indigo-300 transition-colors">
                  {capability}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout box to project architecture deep dives */}
        <div className="mt-8 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded">
              ARCHITECTURE DIAGRAMS
            </span>
            <span className="text-xs text-zinc-300">
              Explore interactive system architecture flowcharts for Nexus AI & PrepMate AI.
            </span>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 font-semibold hover:underline shrink-0"
          >
            <span>View Architecture Diagrams</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
