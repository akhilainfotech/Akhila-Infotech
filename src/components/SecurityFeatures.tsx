'use client';

import React from 'react';
import { ShieldAlert, Bot, Fingerprint, MailCheck, ArrowRight } from 'lucide-react';

interface SecurityFeaturesProps {
  onOpenEmailCheck: () => void;
}

export default function SecurityFeatures({ onOpenEmailCheck }: SecurityFeaturesProps) {
  return (
    <section id="security-features" className="py-16 sm:py-20 bg-gradient-to-b from-[#000e33] via-[#001242] to-[#000e33] border-b border-[#002466]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#00d2ff] bg-[#001c54]/90 border border-[#0055ff]/40 mb-3 whitespace-nowrap">
            Hardened Architecture
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise Security Features Built-In
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Every client transaction, submission, and corporate channel at Akhila Infotech conforms to modern defensive standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1: Anti-XSS */}
          <div className="p-6 rounded-2xl bg-[#001552]/80 border border-[#002e8a]/80 shadow-lg shadow-black/20 hover:border-[#0066ff]/50 hover:shadow-blue-500/10 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#001c54] text-[#00d2ff] border border-[#003899] flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <ShieldAlert className="w-5 h-5 text-[#00d2ff]" />
              </div>
              <h3 className="text-base font-bold text-white">Anti-XSS &amp; Input Sanitization</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                All text streams are scrubbed of HTML tags, javascript pseudo-protocols, and command injections before memory processing.
              </p>
            </div>
            <div className="pt-4">
              <span className="inline-block font-mono text-[10px] bg-[#000d2b] text-[#7dd3fc] border border-[#002466] px-2 py-0.5 rounded whitespace-nowrap">
                Regex Sanitize: Armed
              </span>
            </div>
          </div>

          {/* Feature 2: Anti-Bot Honeypot */}
          <div className="p-6 rounded-2xl bg-[#001552]/80 border border-[#002e8a]/80 shadow-lg shadow-black/20 hover:border-[#0066ff]/50 hover:shadow-blue-500/10 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#001c54] text-[#00d2ff] border border-[#003899] flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <Bot className="w-5 h-5 text-[#00d2ff]" />
              </div>
              <h3 className="text-base font-bold text-white">Anti-Bot Honeypot &amp; Throttling</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Silent honeypot traps deflect crawler scripts, while client-side cooldown enforces a maximum of 3 submissions per 10 minutes.
              </p>
            </div>
            <div className="pt-4">
              <span className="inline-block font-mono text-[10px] bg-[#000d2b] text-[#7dd3fc] border border-[#002466] px-2 py-0.5 rounded whitespace-nowrap">
                Max 3 Submissions / 10m
              </span>
            </div>
          </div>

          {/* Feature 3: Anti-CSRF */}
          <div className="p-6 rounded-2xl bg-[#001552]/80 border border-[#002e8a]/80 shadow-lg shadow-black/20 hover:border-[#0066ff]/50 hover:shadow-blue-500/10 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#001c54] text-[#00d2ff] border border-[#003899] flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <Fingerprint className="w-5 h-5 text-[#00d2ff]" />
              </div>
              <h3 className="text-base font-bold text-white">Anti-CSRF &amp; Checksums</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Every session initializes a randomized cryptographic nonce and computes an SHA-256 payload checksum before dispatch.
              </p>
            </div>
            <div className="pt-4">
              <span className="inline-block font-mono text-[10px] bg-[#000d2b] text-[#7dd3fc] border border-[#002466] px-2 py-0.5 rounded whitespace-nowrap">
                SHA-256 Checksum Verified
              </span>
            </div>
          </div>

          {/* Feature 4: Email & Domain Verification */}
          <div className="p-6 rounded-2xl bg-[#001552]/80 border border-[#002e8a]/80 shadow-lg shadow-black/20 hover:border-[#0066ff]/50 hover:shadow-blue-500/10 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#001c54] text-[#00d2ff] border border-[#003899] flex items-center justify-center mb-4 shrink-0 shadow-sm">
                <MailCheck className="w-5 h-5 text-[#00d2ff]" />
              </div>
              <h3 className="text-base font-bold text-white">Email &amp; Domain Verification</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Inspect corporate emails for SPF alignment, DMARC p=reject status, MX redundancy, and disposable spam domain blacklists.
              </p>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenEmailCheck}
                className="font-mono text-[10px] text-[#00d2ff] hover:text-white underline flex items-center gap-1 font-bold cursor-pointer whitespace-nowrap"
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
