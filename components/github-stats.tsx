"use client";

import React, { useEffect, useState } from "react";
import { Star, GitFork, BookOpen, ExternalLink, Calendar, GitCommit } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { Skeleton } from "@/components/ui/skeleton";
import { PERSONAL_INFO } from "@/data/portfolio-data";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export function GitHubStats() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [, setError] = useState<boolean>(false);

  const username =
    process.env.NEXT_PUBLIC_GITHUB_USERNAME ||
    PERSONAL_INFO.github.split("/").filter(Boolean).pop() ||
    "shubhamacharya77";

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!response.ok) {
          throw new Error("GitHub API failed");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, [username]);

  return (
    <section className="py-16 border-t border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>Real-Time GitHub Profile</span>
            </span>
            <h2 className="text-3xl font-heading font-bold text-white mt-2">
              GitHub Activity & Contributions
            </h2>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            <span>View Profile on GitHub (@{username})</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Real GitHub Contribution Activity Graph Card */}
        <div className="p-7 rounded-2xl glass-card border border-zinc-800 mb-10 overflow-hidden">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800/60">
            <div className="flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-wider">
                Contribution Activity Heatmap
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live GitHub Data
            </span>
          </div>

          {/* GitHub Contribution Heatmap SVG Embed */}
          <div className="overflow-x-auto py-3 px-1 flex justify-center bg-zinc-950/60 rounded-xl border border-zinc-900">
            <img
              src={`https://ghchart.rshah.org/10B981/${username}`}
              alt={`${username}'s GitHub Contribution Activity`}
              className="min-w-[650px] w-full max-w-4xl h-auto filter contrast-125"
              loading="lazy"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-400 px-1">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-indigo-400" />
              <span>Past 1 year of commits & pull requests</span>
            </span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-300 transition-colors text-[11px] underline underline-offset-4"
            >
              github.com/{username}
            </a>
          </div>
        </div>

        {/* Repositories Sub-Grid */}
        <div className="mb-4">
          <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            Recent Public Repositories
          </h3>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : repos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl glass-card relative flex flex-col justify-between group hover:border-indigo-500/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-indigo-400">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-base font-heading font-bold text-white group-hover:text-indigo-300 transition-colors truncate max-w-[200px]">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                  </div>

                  <p className="text-xs text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                    {repo.description || "Public repository for AI backend engineering."}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-400">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                      <span>{repo.language}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{repo.forks_count}</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <p className="text-xs font-mono text-zinc-400">GitHub repositories updating.</p>
          </div>
        )}

      </div>
    </section>
  );
}
