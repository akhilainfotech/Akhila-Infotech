'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';
import AiLogo from '@/components/AiLogo';
import { useToast } from '@/lib/toast-context';
import { sanitizeInput } from '@/lib/security';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminModal({ isOpen, onClose }: AdminModalProps) {
  const [endpoint, setEndpoint] = useState('/admin');
  const router = useRouter();
  const { showToast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEndpoint = sanitizeInput(endpoint) || '/admin';
    showToast(`Redirecting to ${cleanEndpoint}...`, 'info');
    onClose();
    router.push(cleanEndpoint);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm" />
      <div className="relative w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-7 z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <AiLogo className="w-9 h-9" />
            <div>
              <h3 className="text-base font-bold text-slate-900">Akhila Admin Gateway</h3>
              <p className="text-[11px] text-slate-500">
                Route to Next.js <code className="font-mono text-[#0f2147]">/admin</code> portal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-4 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-700">Cluster Status:</span>
              <span className="font-mono font-bold text-emerald-600">Online (Hyderabad)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-700">Advisory Schedule:</span>
              <span className="font-mono text-slate-900">9:00 AM – 6:00 PM IST</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-700">Audit Status:</span>
              <span className="font-mono text-cyan-700">SOC 2 / ISO 27001 Aligned</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block font-bold uppercase text-[10px] text-slate-600 mb-1">
                Target Endpoint
              </label>
              <input
                type="text"
                value={endpoint}
                onChange={e => setEndpoint(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 font-mono text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2147] transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-[#0f2147] hover:bg-slate-900 transition flex items-center justify-center gap-1.5 shadow-md shadow-[#0f2147]/20"
            >
              <span>Access /admin Endpoint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <p className="text-[11px] text-slate-400 text-center">
            Operations Desk:{' '}
            <a href="mailto:info@akhilainfotech.com" className="text-[#0f2147] font-semibold underline">
              info@akhilainfotech.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
