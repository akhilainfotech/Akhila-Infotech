'use client';

import React from 'react';
import { Clock, MapPin, Mail, ShieldAlert, ShieldCheck } from 'lucide-react';
import { useToast } from '@/lib/toast-context';

interface TopBarProps {
  onOpenEmailCheck: () => void;
  onOpenAdmin: () => void;
}

export default function TopBar({ onOpenEmailCheck, onOpenAdmin }: TopBarProps) {
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText('info@akhilainfotech.com');
      showToast('Copied info@akhilainfotech.com to clipboard!', 'success');
    } catch {
      showToast('Unable to copy text in this browser context.', 'error');
    }
  };

  return (
    <div className="bg-[#070f24] text-slate-300 border-b border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        {/* Left: Operational Security Status, Hours & Location */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-semibold border border-emerald-500/20 whitespace-nowrap text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            TLS 1.3 Active
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="inline-flex items-center gap-1.5 text-slate-200 font-medium whitespace-nowrap text-[11px] sm:text-xs">
            <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Hours: <strong className="text-white">9:00 AM – 6:00 PM (IST)</strong></span>
          </span>
          <span className="hidden md:inline text-slate-700">|</span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300 whitespace-nowrap text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Hyderabad, India</span>
          </span>
        </div>

        {/* Right: Official Email + Email Check Portal & Admin */}
        <div className="flex items-center gap-3 sm:gap-3.5 ml-auto">
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <a
              href="mailto:info@akhilainfotech.com"
              className="hover:text-cyan-300 transition-colors font-medium text-slate-200 whitespace-nowrap text-[11px] sm:text-xs"
            >
              info@akhilainfotech.com
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700 transition whitespace-nowrap"
              title="Quick Copy Email"
            >
              Copy
            </button>
          </div>
          <span className="text-slate-700">|</span>
          <button
            onClick={onOpenEmailCheck}
            className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-mono text-[11px] font-semibold transition-colors bg-cyan-950/60 hover:bg-cyan-900/80 px-2 py-0.5 rounded border border-cyan-700/50 whitespace-nowrap shadow-sm"
          >
            <ShieldAlert className="w-3 h-3 text-cyan-400 shrink-0" />
            <span>Email Check</span>
          </button>
          <button
            onClick={onOpenAdmin}
            className="inline-flex items-center gap-1 text-slate-300 hover:text-cyan-300 font-mono text-[11px] font-semibold transition-colors whitespace-nowrap"
          >
            <ShieldCheck className="w-3 h-3 text-cyan-400 shrink-0" />
            <span>/admin</span>
          </button>
        </div>
      </div>
    </div>
  );
}
