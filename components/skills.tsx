"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import { Sparkles, Cpu, Cloud, Database, Layout, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-indigo-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 border-t border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
            Technical Competencies
          </span>
          <h2 className="text-3xl font-heading font-bold text-white mt-2">
            Skills & Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 mb-5">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-200 hover:border-indigo-500/40 hover:bg-zinc-800/80 transition-all"
                    >
                      <CheckCircle className="w-3 h-3 text-indigo-400" />
                      <span>{skill.name}</span>
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
