'use client';

import React from 'react';
import { ShieldAlert, Bot, Fingerprint, MailCheck, ArrowRight } from 'lucide-react';

interface SecurityFeaturesProps {
  onOpenEmailCheck: () => void;
}

export default function SecurityFeatures({ onOpenEmailCheck }: SecurityFeaturesProps) {
  return (
    <section id="security-features" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-900 bg-cyan-100 border border-cyan-200 mb-3 whitespace-nowrap">
            Hardened Architecture
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Security Features Built-In
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Every client transaction, submission, and corporate channel at Akhila Infotech conforms to modern defensive standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1: Anti-XSS */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0f2147] text-white flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <ShieldAlert className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Anti-XSS &amp; Input Sanitization</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                All text streams are scrubbed of HTML tags, javascript pseudo-protocols, and command injections before memory processing.
              </p>
            </div>
            <div className="pt-4">
              <span className="inline-block font-mono text-[10px] bg-slate-200/90 text-slate-800 px-2 py-0.5 rounded whitespace-nowrap">
                Regex Sanitize: Armed
              </span>
            </div>
          </div>

          {/* Feature 2: Anti-Bot Honeypot */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0f2147] text-white flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Anti-Bot Honeypot &amp; Throttling</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Silent honeypot traps deflect crawler scripts, while client-side cooldown enforces a maximum of 3 submissions per 10 minutes.
              </p>
            </div>
            <div className="pt-4">
              <span className="inline-block font-mono text-[10px] bg-slate-200/90 text-slate-800 px-2 py-0.5 rounded whitespace-nowrap">
                Max 3 Submissions / 10m
              </span>
            </div>
          </div>

          {/* Feature 3: Anti-CSRF */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0f2147] text-white flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <Fingerprint className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Anti-CSRF &amp; Checksums</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Every session initializes a randomized cryptographic nonce and computes an SHA-256 payload checksum before dispatch.
              </p>
            </div>
            <div className="pt-4">
              <span className="inline-block font-mono text-[10px] bg-slate-200/90 text-slate-800 px-2 py-0.5 rounded whitespace-nowrap">
                SHA-256 Checksum Verified
              </span>
            </div>
          </div>

          {/* Feature 4: Email & Domain Verification */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0f2147] text-white flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <MailCheck className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Email &amp; Domain Verification</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Inspect corporate emails for SPF alignment, DMARC p=reject status, MX redundancy, and disposable spam domain blacklists.
              </p>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenEmailCheck}
                className="font-mono text-[10px] text-cyan-700 hover:text-cyan-900 underline flex items-center gap-1 font-bold cursor-pointer whitespace-nowrap"
              >
                <span>Launch Inspector</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
