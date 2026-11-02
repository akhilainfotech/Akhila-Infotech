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
      <div className="relative w-full max-w-md rounded-2xl bg-[#001242] border border-[#002e8a] shadow-2xl shadow-blue-950/80 text-white p-6 sm:p-7 z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-[#002466]">
          <div className="flex items-center gap-3">
            <AiLogo className="w-9 h-9" />
            <div>
              <h3 className="text-base font-bold text-white">Akhila Admin Gateway</h3>
              <p className="text-[11px] text-slate-300">
                Route to Next.js <code className="font-mono text-[#00d2ff]">/admin</code> portal
              </p>
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

        <div className="py-4 space-y-4 text-xs">
          <div className="p-3.5 rounded-xl bg-[#001552]/80 border border-[#002e8a]/70 space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-200">Cluster Status:</span>
              <span className="font-mono font-bold text-emerald-600">Online (Hyderabad)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-200">Advisory Schedule:</span>
              <span className="font-mono text-white">9:00 AM – 6:00 PM IST</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-200">Audit Status:</span>
              <span className="font-mono text-[#00d2ff]">SOC 2 / ISO 27001 Aligned</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block font-bold uppercase text-[10px] text-slate-300 mb-1">
                Target Endpoint
              </label>
              <input
                type="text"
                value={endpoint}
                onChange={e => setEndpoint(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#000d2b] border border-[#002e8a] font-mono text-xs text-white placeholder-slate-400 focus:bg-[#001338] focus:border-[#00d2ff] focus:outline-none focus:ring-2 focus:ring-[#0066ff] transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0055ff] to-[#0099ff] hover:from-[#0044ee] hover:to-[#0088ee] transition flex items-center justify-center gap-1.5 shadow-md shadow-[#0055ff]/25 text-white"
            >
              <span>Access /admin Endpoint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          <p className="text-[11px] text-slate-400 text-center">
            Operations Desk:{' '}
            <a href="mailto:info@akhilainfotech.com" className="text-[#00d2ff] font-semibold underline">
              info@akhilainfotech.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
