import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-md w-full p-8 rounded-2xl glass-panel border border-zinc-800 text-center relative z-10 shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto mb-6">
          <Terminal className="w-7 h-7" />
        </div>

        <span className="text-xs font-mono px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20 font-bold uppercase tracking-wider">
          ERROR 404
        </span>

        <h1 className="text-3xl font-heading font-extrabold text-white mt-3">
          Route Not Found
        </h1>

        <p className="text-xs text-zinc-400 font-mono mt-3 leading-relaxed">
          The requested path does not exist or has been relocated within the AI backend system graph.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-all shadow-lg shadow-indigo-600/25"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
