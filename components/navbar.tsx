"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Menu, X, FileText, ExternalLink } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "What I Build", href: "/#what-i-build" },
    { name: "Philosophy", href: "/#philosophy" },
    { name: "System Design", href: "/#system-design" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Timeline", href: "/#timeline" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold text-sm group-hover:border-indigo-400 group-hover:bg-indigo-500/20 transition-all">
                {PERSONAL_INFO.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase() || "SA"}
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm tracking-tight text-zinc-100 group-hover:text-indigo-300 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">{PERSONAL_INFO.title}</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-zinc-400 hover:text-white transition-colors font-medium hover:underline underline-offset-4 decoration-indigo-500/50"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-zinc-800 px-4 py-5 mt-2 bg-[#0A0A0A]/95">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-1"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-indigo-400"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <div className="flex items-center gap-3">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
