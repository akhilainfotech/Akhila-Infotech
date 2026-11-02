'use client';

import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-slate-950/85 backdrop-blur-md" />
      <div className="relative w-full max-w-lg rounded-2xl bg-[#001242] border border-[#002e8a] shadow-2xl shadow-blue-950/80 text-white p-6 sm:p-7 z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-[#002466]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Security Header Audit Checklist</h3>
              <p className="text-[11px] text-slate-300">Akhila Infotech Enterprise Standards</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-[#001c54] transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-3 text-xs">
          <div className="p-3 rounded-xl bg-[#001552]/80 border border-[#002e8a]/70 flex items-center justify-between">
            <div>
              <p className="font-bold text-white">Strict-Transport-Security (HSTS)</p>
              <p className="font-mono text-[10px] text-slate-400">max-age=31536000; includeSubDomains; preload</p>
            </div>
            <span className="font-mono text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">
              PASSED
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#001552]/80 border border-[#002e8a]/70 flex items-center justify-between">
            <div>
              <p className="font-bold text-white">X-Frame-Options</p>
              <p className="font-mono text-[10px] text-slate-400">DENY (Clickjacking Mitigation)</p>
            </div>
            <span className="font-mono text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">
              PASSED
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#001552]/80 border border-[#002e8a]/70 flex items-center justify-between">
            <div>
              <p className="font-bold text-white">X-Content-Type-Options</p>
              <p className="font-mono text-[10px] text-slate-400">nosniff</p>
            </div>
            <span className="font-mono text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">
              PASSED
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#001552]/80 border border-[#002e8a]/70 flex items-center justify-between">
            <div>
              <p className="font-bold text-white">Content-Security-Policy (CSP)</p>
              <p className="font-mono text-[10px] text-slate-400">default-src &apos;self&apos;; script-src &apos;self&apos; &apos;unsafe-inline&apos;</p>
            </div>
            <span className="font-mono text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">
              PASSED
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#001552]/80 border border-[#002e8a]/70 flex items-center justify-between">
            <div>
              <p className="font-bold text-white">Cross-Site Scripting Guard</p>
              <p className="font-mono text-[10px] text-slate-400">Client-side DOM sanitization &amp; Token Checksum</p>
            </div>
            <span className="font-mono text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">
              ACTIVE
            </span>
          </div>
        </div>

        <div className="pt-2 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#00184a] text-white hover:bg-slate-900 transition"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
}
