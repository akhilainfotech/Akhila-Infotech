'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import AiLogo from '@/components/AiLogo';
import { BLUEPRINTS } from '@/lib/blueprints';

interface BlueprintModalProps {
  blueprintKey: string | null;
  onClose: () => void;
  onSelectDomain: (domain: string) => void;
}

export default function BlueprintModal({
  blueprintKey,
  onClose,
  onSelectDomain,
}: BlueprintModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (blueprintKey) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [blueprintKey, onClose]);

  if (!blueprintKey || !BLUEPRINTS[blueprintKey]) return null;
  const data = BLUEPRINTS[blueprintKey];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm" />
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-7 z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <AiLogo className="w-9 h-9" />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">
                Architecture Blueprint
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5">{data.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-4 text-xs">
          <p className="text-slate-600 leading-relaxed">{data.desc}</p>

          <div>
            <p className="font-bold uppercase text-[10px] text-slate-500 mb-2">Technical Deliverables</p>
            <ul className="space-y-1.5 text-slate-700">
              {data.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase font-mono text-slate-400">Target Outcome</p>
              <p className="text-xs font-bold text-[#0f2147]">{data.kpi}</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectDomain(data.title);
              }}
              className="px-3.5 py-2 rounded-lg text-xs font-bold bg-[#0f2147] text-white hover:bg-slate-900 transition flex items-center gap-1.5"
            >
              <span>Book Service</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
