"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Mail, MapPin, Copy, Check, ExternalLink, Send } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/icons";
import { useToast } from "@/components/ui/toast";
import { motion } from "framer-motion";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    showToast("Email Copied!", PERSONAL_INFO.email, "success");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 border-t border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
            Let&apos;s Build Production AI Systems
          </h2>
          <p className="text-sm text-zinc-300 mt-3 leading-relaxed">
            I am currently open to full-time roles, contract backend projects, and agentic AI system architectural discussions. Feel free to reach out via email or connect on LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Email Card with 1-Click Copy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl glass-card relative flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-1">Direct Email</h3>
              <p className="text-xs font-mono text-zinc-400 truncate mb-4">{PERSONAL_INFO.email}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-medium transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
              
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                title="Send Email"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="p-6 rounded-2xl glass-card relative flex flex-col justify-between group hover:border-indigo-500/40"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-1">LinkedIn Profile</h3>
              <p className="text-xs font-mono text-zinc-400 mb-4">/in/shubham-acharya</p>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-indigo-400 font-semibold group-hover:text-indigo-300">
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl glass-card relative flex flex-col justify-between group hover:border-indigo-500/40"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                <GitHubIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-1">GitHub Repositories</h3>
              <p className="text-xs font-mono text-zinc-400 mb-4">@shubham-acharya</p>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-indigo-400 font-semibold group-hover:text-indigo-300">
              <span>Explore Repositories</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </motion.a>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-6 rounded-2xl glass-card relative flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-1">Location</h3>
              <p className="text-xs font-mono text-zinc-300 mb-4">{PERSONAL_INFO.location}</p>
            </div>


          </motion.div>

        </div>

      </div>
    </section>
  );
}
