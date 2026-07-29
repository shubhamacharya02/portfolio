"use client";

import React from "react";
import { ENGINEERING_PHILOSOPHY } from "@/data/portfolio-data";
import { ShieldCheck, Cpu, Layers, Quote } from "lucide-react";
import { motion } from "framer-motion";

export function EngineeringPhilosophy() {
  return (
    <section id="philosophy" className="py-16 border-t border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
            Engineering Approach
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-2">
            Engineering Philosophy
          </h2>
        </div>

        {/* Featured Philosophy Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-8 rounded-2xl bg-zinc-900/90 border border-indigo-500/30 relative overflow-hidden mb-10 shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-8 text-indigo-500/10 pointer-events-none">
            <Quote className="w-24 h-24" />
          </div>

          <p className="text-xl sm:text-2xl font-heading font-semibold text-zinc-100 leading-relaxed max-w-4xl relative z-10">
            &ldquo;{ENGINEERING_PHILOSOPHY.statement}&rdquo;
          </p>

          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-xs font-mono text-indigo-300 font-bold">
              SA
            </div>
            <div>
              <span className="text-sm font-medium text-white block">Shubham Acharya</span>
              <span className="text-xs text-zinc-400 font-mono">AI Backend Developer</span>
            </div>
          </div>
        </motion.div>

        {/* 3 Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENGINEERING_PHILOSOPHY.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-xl glass-card border border-zinc-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  {idx === 0 && <Layers className="w-4 h-4" />}
                  {idx === 1 && <Cpu className="w-4 h-4" />}
                  {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                </div>
                <h3 className="text-base font-heading font-bold text-white">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
