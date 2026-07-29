"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { useToast } from "./toast";

interface CodeBlockProps {
  title?: string;
  language?: string;
  description?: string;
  code: string;
}

export function CodeBlock({ title, language = "python", description, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    showToast("Code snippet copied", "Copied code to clipboard", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/90 overflow-hidden shadow-2xl my-4">
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/80 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-mono text-zinc-300 font-medium">{title || `Snippet.${language}`}</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider font-mono">
            {language}
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-zinc-400 hover:text-white bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 rounded-lg transition-colors"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400 font-mono">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="font-mono">Copy</span>
            </>
          )}
        </button>
      </div>

      {description && (
        <div className="px-4 py-2 text-xs text-zinc-400 border-b border-zinc-800/40 bg-zinc-900/30">
          {description}
        </div>
      )}

      {/* Code Content */}
      <div className="p-4 overflow-x-auto font-mono text-xs leading-relaxed text-zinc-200 selection:bg-indigo-500/30">
        <pre className="whitespace-pre">
          {code.split("\n").map((line, idx) => (
            <div key={idx} className="table-row">
              <span className="table-cell text-zinc-600 select-none pr-4 text-right w-8 border-r border-zinc-800/60 mr-4">
                {idx + 1}
              </span>
              <span className="table-cell pl-4">
                {formatSyntaxHighlighting(line)}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

// Lightweight syntax highlight styling for Python/FastAPI/LangGraph code
function formatSyntaxHighlighting(line: string) {
  // Keywords
  const keywords = ["def ", "class ", "import ", "from ", "async ", "await ", "return ", "if ", "else:", "for ", "in ", "with ", "as ", "and ", "or ", "not ", "True", "False", "None"];
  
  if (line.trim().startsWith("#")) {
    return <span className="text-zinc-500 italic">{line}</span>;
  }

  if (line.trim().startsWith("@")) {
    return <span className="text-purple-400 font-semibold">{line}</span>;
  }

  return (
    <span>
      {line.split(/(".*?"|'.*?'|\bdef\b|\bclass\b|\bimport\b|\bfrom\b|\basync\b|\bawait\b|\breturn\b|\bif\b|\belse\b)/g).map((part, i) => {
        if (part.startsWith('"') || part.startsWith("'")) {
          return <span key={i} className="text-emerald-400">{part}</span>;
        }
        if (keywords.includes(part + " ") || keywords.includes(part)) {
          return <span key={i} className="text-indigo-400 font-semibold">{part}</span>;
        }
        if (["StateGraph", "FastAPI", "WebSocket", "ChromaDB", "BaseModel", "Field", "AsyncSession"].includes(part)) {
          return <span key={i} className="text-amber-300 font-semibold">{part}</span>;
        }
        return part;
      })}
    </span>
  );
}
