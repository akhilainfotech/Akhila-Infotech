'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Mail,
  Phone,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  AlertCircle,
} from 'lucide-react';
import AiLogo from '@/components/AiLogo';
import { useToast } from '@/lib/toast-context';

const TITAN_WEBMAIL_URL = 'https://secureserver.titan.email/mail/';
const AUTHORIZED_EMAIL = 'akhilatechnology@gmail.com';
const AUTHORIZED_PHONE_DIGITS = ['919440539009', '9440539009'];

interface WebmailPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WebmailPromptModal({ isOpen, onClose }: WebmailPromptModalProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Privacy safeguard: clear any previously cached personal details
      try {
        localStorage.removeItem('akhila_webmail_user');
        localStorage.removeItem('akhila_webmail_phone');
      } catch {}
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    const cleanPhone = phone.trim();
    const digitsOnly = cleanPhone.replace(/\D/g, '');

    if (!cleanEmail) {
      setError('Please enter your email address.');
      return;
    }

    if (!cleanPhone) {
      setError('Please enter your phone number.');
      return;
    }

    setIsVerifying(true);

    const isEmailMatch = cleanEmail === AUTHORIZED_EMAIL;
    const isPhoneMatch = AUTHORIZED_PHONE_DIGITS.includes(digitsOnly);

    if (isEmailMatch && isPhoneMatch) {
      // MATCH -> Connect to webmail
      showToast('Credentials verified! Connecting to Titan Webmail...', 'success');

      setTimeout(() => {
        window.location.href = TITAN_WEBMAIL_URL;
      }, 700);
    } else {
      // NOT A MATCH -> Open Contact Page
      setError('Credentials do not match authorized records. Redirecting to Contact Page...');
      showToast('Credentials did not match. Opening Contact Page...', 'error');

      setTimeout(() => {
        setIsVerifying(false);
        onClose();
        const contactElem = document.getElementById('contact');
        if (contactElem) {
          contactElem.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = '/#contact';
        }
      }, 1200);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-slate-950/85 backdrop-blur-md" />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-md rounded-2xl bg-[#001242] border border-[#002e8a] shadow-2xl shadow-blue-950/90 p-6 sm:p-7 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#002466]">
          <div className="flex items-center gap-3">
            <AiLogo className="w-10 h-10" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Webmail Access Verification</h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#001c54] text-[#00d2ff] border border-[#003899]">
                  Security Gate
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                Akhila Infotech • <code className="text-[#00d2ff] font-mono">secureserver.titan.email</code>
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

        {/* Informational Prompt Banner */}
        <div className="my-4 p-3 rounded-xl bg-[#001552]/80 border border-[#002e8a]/70 text-xs text-slate-200 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
          <p>
            Please enter your registered <strong>Email Address</strong> and <strong>Phone Number</strong> to connect to Titan Webmail.
          </p>
        </div>

        {/* Verification Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {error && (
            <div className="p-2.5 rounded-lg bg-red-950/80 border border-red-700/60 text-red-200 text-xs flex items-center gap-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Email Address */}
          <div>
            <label className="block font-bold uppercase text-[10px] text-slate-300 mb-1">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#000d2b] border border-[#002e8a] text-xs font-mono text-white placeholder-slate-500 focus:bg-[#001338] focus:border-[#00d2ff] focus:outline-none focus:ring-2 focus:ring-[#0066ff] transition"
              />
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-bold uppercase text-[10px] text-slate-300 mb-1">
              Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Enter mobile number"
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#000d2b] border border-[#002e8a] text-xs font-mono text-white placeholder-slate-500 focus:bg-[#001338] focus:border-[#00d2ff] focus:outline-none focus:ring-2 focus:ring-[#0066ff] transition"
              />
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          {/* Privacy Note */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-0.5">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00d2ff]" />
              Privacy Protected: No personal details stored
            </span>
            <span className="font-mono">Titan Cloud 2FA</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isVerifying}
            className="w-full py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#0055ff] via-[#0077ff] to-[#00b4ff] hover:from-[#0044ee] hover:to-[#00a0ee] transition flex items-center justify-center gap-2 shadow-md shadow-[#0055ff]/30 disabled:opacity-70 cursor-pointer"
          >
            {isVerifying ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Verifying Credentials...</span>
              </>
            ) : (
              <>
                <span>Connect to Titan Webmail</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
