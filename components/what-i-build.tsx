"use client";

import React from "react";
import { WHAT_I_BUILD } from "@/data/portfolio-data";
import { Bot, Server, BrainCircuit, Check } from "lucide-react";
import { motion } from "framer-motion";

export function WhatIBuild() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-6 h-6 text-indigo-400" />;
      case "Server":
        return <Server className="w-6 h-6 text-purple-400" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-6 h-6 text-indigo-400" />;
      default:
        return <Server className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="what-i-build" className="py-16 border-t border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-2">
              What I Build
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md mt-2 md:mt-0">
            Specialized backend architecture focusing on multi-agent execution, high-concurrency APIs, and production RAG pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHAT_I_BUILD.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card relative group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-300 mb-4 leading-relaxed font-medium">
                  {item.description}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs font-mono text-indigo-300">
                <Check className="w-3.5 h-3.5 text-indigo-400" />
                <span>Production Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
