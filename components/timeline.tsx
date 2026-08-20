"use client";

import React from "react";
import { TIMELINE_JOURNEY } from "@/data/portfolio-data";
import { CheckCircle2, GitCommit } from "lucide-react";
import { motion } from "framer-motion";

export function Timeline() {
  return (
    <section id="timeline" className="py-16 border-t border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Evolution & Milestones</span>
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-2">
            Experience & Journey
          </h2>
        </div>

        <div className="relative pl-6 md:pl-8 border-l border-zinc-800 space-y-10">
          {TIMELINE_JOURNEY.map((item, idx) => (
            <motion.div
              key={item.period + item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Dot marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors" />

              <div className="p-6 rounded-2xl glass-card border border-zinc-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-indigo-400 font-bold px-2.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">
                    {item.period} ({item.year})
                  </span>
                  <span className="text-xs font-mono text-zinc-400 font-medium">
                    {item.role}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-zinc-800/60">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
