"use client";

import React from "react";
import { ArrowRight, Cpu, Database, Server, Sparkles, Layout } from "lucide-react";

interface ArchitectureDiagramProps {
  title?: string;
  flow: string[];
  description?: string;
}

export function ArchitectureDiagram({ title = "System Architecture", flow, description }: ArchitectureDiagramProps) {
  const getNodeIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layout className="w-4 h-4 text-amber-400" />;
      case 1:
        return <Server className="w-4 h-4 text-purple-400" />;
      case 2:
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 3:
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
      case 4:
        return <Database className="w-4 h-4 text-cyan-400" />;
      default:
        return <Server className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-5 shadow-2xl my-6">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/60">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">{title}</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          Stateful Pipeline Flow
        </span>
      </div>

      {/* Visual Flow Pipeline */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-3 my-4 overflow-x-auto p-2">
        {flow.map((step, idx) => (
          <React.Fragment key={step}>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-800/80 transition-all w-full lg:w-auto shrink-0 shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                {getNodeIcon(idx)}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Step 0{idx + 1}</span>
                <span className="text-xs font-heading font-semibold text-zinc-200 max-w-[170px] truncate">
                  {step}
                </span>
              </div>
            </div>

            {idx < flow.length - 1 && (
              <div className="hidden lg:flex items-center text-zinc-600 shrink-0">
                <ArrowRight className="w-4 h-4 text-indigo-400 animate-pulse" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {description && (
        <div className="mt-4 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/40 text-xs text-zinc-400 leading-relaxed font-mono">
          <span className="text-indigo-400 font-bold">INFO: </span>
          {description}
        </div>
      )}
    </div>
  );
}
