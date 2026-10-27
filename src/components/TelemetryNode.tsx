import React from 'react';
import AiLogo from '@/components/AiLogo';

interface TelemetryNodeProps {
  onOpenAudit: () => void;
}

export default function TelemetryNode({ onOpenAudit }: TelemetryNodeProps) {
  return (
    <div className="rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-2xl p-6 sm:p-7 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <AiLogo className="w-40 h-40" />
      </div>

      <div className="flex items-center justify-between pb-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <AiLogo className="w-10 h-10" />
          <div>
            <h2 className="text-sm font-bold text-white">Akhila Security Node</h2>
            <p className="text-[11px] text-slate-400">Hyderabad Hub • 9:00 AM – 6:00 PM IST</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
          ACTIVE SHIELD
        </span>
      </div>

      {/* Health Bars */}
      <div className="py-5 space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300">Mail &amp; DNSSEC Record Integrity</span>
            <span className="text-cyan-400 font-mono font-bold">100.0% Valid</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full bg-cyan-400 w-full" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300">Anti-XSS &amp; Input Sanitization Guard</span>
            <span className="text-emerald-400 font-mono font-bold">Armed</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full bg-emerald-400 w-full" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300">Rate Limiter &amp; Honeypot Defense</span>
            <span className="text-indigo-400 font-mono font-bold">Zero Violations</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full bg-indigo-400 w-full" />
          </div>
        </div>
      </div>

      {/* Operational Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
          <span className="text-slate-400 block text-[10px] uppercase font-mono">Office Hours</span>
          <span className="text-sm font-bold text-white">9 AM – 6 PM IST</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
          <span className="text-slate-400 block text-[10px] uppercase font-mono">Mail Channel</span>
          <span className="text-sm font-bold text-cyan-400 truncate block">info@akhilainfotech.com</span>
        </div>
      </div>

      {/* Quick Action: Trigger Security Audit */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">Real-time Header Compliance:</span>
        <button
          onClick={onOpenAudit}
          className="text-xs font-mono text-cyan-300 hover:text-white underline cursor-pointer transition-colors"
        >
          View Audit Report →
        </button>
      </div>
    </div>
  );
}
