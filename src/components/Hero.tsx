'use client';

import React from 'react';
import { ShieldCheck, ChevronRight, MailCheck, Lock } from 'lucide-react';
import TelemetryNode from '@/components/TelemetryNode';

interface HeroProps {
  onOpenEmailCheck: () => void;
  onOpenAudit: () => void;
}

export default function Hero({ onOpenEmailCheck, onOpenAudit }: HeroProps) {
  return (
    <section id="home" className="relative bg-gradient-to-b from-[#000d2e] via-[#001447] to-[#000e33] text-white pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#00d2ff]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#0052cc]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052cc]/20 border border-[#0066ff]/40 text-[#38bdf8] text-xs font-semibold whitespace-nowrap">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00d2ff] shrink-0" />
                Zero-Trust Architecture Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00184a]/80 border border-[#002e8a] text-slate-200 text-xs font-mono whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                Security Posture: 99.8%
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              High-Assurance{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93c5fd] to-[#00d2ff]">
                IT Consulting
              </span>{' '}
              &amp; Zero-Trust Engineering.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Akhila Infotech delivers senior-led enterprise IT modernization, cloud defense, and automated email/domain
              verification from Hyderabad, India. Operating Monday–Friday, 9:00 AM – 6:00 PM IST.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0055ff] via-[#0077ff] to-[#00b4ff] hover:from-[#0044ee] hover:to-[#00a0ee] shadow-lg shadow-[#0055ff]/35 transition whitespace-nowrap"
              >
                <span>Schedule Architecture Consultation</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </a>
              <button
                type="button"
                onClick={onOpenEmailCheck}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-[#00184a]/90 hover:bg-[#002875] border border-[#0055ff]/60 text-white shadow-md transition whitespace-nowrap"
              >
                <MailCheck className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Launch Email Security Check</span>
              </button>
            </div>

            {/* Enterprise Ecosystem Certification Pills */}
            <div className="pt-6 border-t border-[#002466]">
              <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-3">
                Hardened Infrastructure &amp; Security Standards
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-medium">
                <span className="px-2.5 py-1 rounded-md bg-[#001552]/80 border border-[#002e8a]/70 flex items-center gap-1.5 whitespace-nowrap">
                  <Lock className="w-3 h-3 text-cyan-400 shrink-0" /> TLS 1.3 Strict
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#001552]/80 border border-[#002e8a]/70 whitespace-nowrap">
                  SPF / DKIM / DMARC
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#001552]/80 border border-[#002e8a]/70 whitespace-nowrap">
                  OWASP Top 10 Guard
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#001552]/80 border border-[#002e8a]/70 whitespace-nowrap">
                  Anti-CSRF Tokens
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#001552]/80 border border-[#002e8a]/70 whitespace-nowrap">
                  ISO 27001 Ready
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Enterprise Architecture & Security Telemetry Card */}
          <div className="lg:col-span-5">
            <TelemetryNode onOpenAudit={onOpenAudit} />
          </div>
        </div>

        {/* Core Impact Metric Cards */}
        <div className="mt-12 lg:mt-14 pt-8 border-t border-[#002466] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl bg-[#001552]/80 border border-[#002e8a]/70 shadow-lg shadow-black/20">
            <div className="text-2xl sm:text-3xl font-extrabold text-white whitespace-nowrap">99.8%</div>
            <div className="text-xs font-semibold text-[#00d2ff] mt-1 whitespace-nowrap">Zero-Trust Posture</div>
            <p className="text-[11px] text-slate-400 mt-0.5">End-to-end sanitized telemetry</p>
          </div>
          <div className="p-4 rounded-xl bg-[#001552]/80 border border-[#002e8a]/70 shadow-lg shadow-black/20">
            <div className="text-2xl sm:text-3xl font-extrabold text-white whitespace-nowrap">40+</div>
            <div className="text-xs font-semibold text-[#00d2ff] mt-1 whitespace-nowrap">Enterprise Migrations</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Zero-loss production rollouts</p>
          </div>
          <div className="p-4 rounded-xl bg-[#001552]/80 border border-[#002e8a]/70 shadow-lg shadow-black/20">
            <div className="text-2xl sm:text-3xl font-extrabold text-white whitespace-nowrap">9AM – 6PM</div>
            <div className="text-xs font-semibold text-[#00d2ff] mt-1 whitespace-nowrap">Principal Desk (IST)</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Hyderabad engineering team</p>
          </div>
          <div className="p-4 rounded-xl bg-[#001552]/80 border border-[#002e8a]/70 shadow-lg shadow-black/20">
            <div className="text-2xl sm:text-3xl font-extrabold text-white whitespace-nowrap">0 ms</div>
            <div className="text-xs font-semibold text-[#00d2ff] mt-1 whitespace-nowrap">Client Bot Exploit Gap</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Anti-CSRF &amp; honeypot enforced</p>
          </div>
        </div>
      </div>
    </section>
  );
}
