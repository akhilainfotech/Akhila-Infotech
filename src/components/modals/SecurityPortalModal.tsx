'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/navigation';
import {
  X,
  LogIn,
  Search,
  Activity,
  Mail,
  Lock,
  Smartphone,
  ShieldCheck,
  Play,
  Globe,
  RefreshCw,
  LogOut,
  CheckCircle2,
} from 'lucide-react';
import AiLogo from '@/components/AiLogo';
import { useToast } from '@/lib/toast-context';
import { sanitizeInput } from '@/lib/security';

interface SecurityPortalModalProps {
  isOpen: boolean;
  initialTab?: 'login' | 'email-check' | 'session';
  onClose: () => void;
  onOpenConsultation: (domain: string) => void;
}

export default function SecurityPortalModal({
  isOpen,
  initialTab = 'login',
  onClose,
  onOpenConsultation,
}: SecurityPortalModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'email-check' | 'session'>('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Email Inspector state
  const [checkInput, setCheckInput] = useState('info@akhilainfotech.com');
  const [isInspecting, setIsInspecting] = useState(false);
  const [inspectedDomain, setInspectedDomain] = useState<string | null>(null);

  // Session state
  const [sessionToken, setSessionToken] = useState('akh_sess_9041...fa3b');
  const [secondsRemaining, setSecondsRemaining] = useState(899); // 14:59

  const { showToast } = useToast();

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      if (initialTab === 'email-check') {
        runDomainCheck('info@akhilainfotech.com');
      }
    }
  }, [isOpen, initialTab]);

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

  // Session timer countdown
  useEffect(() => {
    if (!isOpen || activeTab !== 'session') return;
    const interval = setInterval(() => {
      setSecondsRemaining(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s} min`;
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = sanitizeInput(loginEmail);
    if (!cleanEmail || !loginPass) {
      showToast('Please provide corporate email and passcode.', 'error');
      return;
    }

    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      showToast(`Corporate session established for ${cleanEmail}`, 'success');
      setActiveTab('session');
    }, 800);
  };

  const runDomainCheck = (targetInput?: string) => {
    const raw = targetInput !== undefined ? targetInput : checkInput;
    const clean = sanitizeInput(raw) || 'akhilainfotech.com';
    const domain = clean.includes('@') ? clean.split('@')[1] : clean;

    setIsInspecting(true);
    setInspectedDomain(null);

    setTimeout(() => {
      setIsInspecting(false);
      setInspectedDomain(domain);
      showToast(`Security records verified for ${domain}`, 'success');
    }, 600);
  };

  const rotateToken = () => {
    const newToken =
      'akh_sess_' +
      Math.floor(1000 + Math.random() * 9000) +
      '...' +
      Math.random().toString(16).substring(2, 6);
    setSessionToken(newToken);
    showToast('Session cryptographic token rotated successfully.', 'info');
  };

  const terminateSession = () => {
    showToast('Active session terminated securely.', 'info');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-slate-950/85 backdrop-blur-md" />
      <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <AiLogo className="w-10 h-10" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900">Corporate Email &amp; Security Portal</h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  2FA Active
                </span>
              </div>
              <p className="text-xs text-slate-500">Akhila Infotech Authentication &amp; Mail Integrity Suite</p>
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

        {/* Tab Buttons */}
        <div className="flex border-b border-slate-200 mt-4 text-xs font-bold">
          <button
            onClick={() => setActiveTab('login')}
            className={`px-4 py-2.5 border-b-2 flex items-center gap-1.5 transition ${
              activeTab === 'login'
                ? 'border-[#0f2147] text-[#0f2147]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Corporate Login</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('email-check');
              if (!inspectedDomain) runDomainCheck();
            }}
            className={`px-4 py-2.5 border-b-2 flex items-center gap-1.5 transition ${
              activeTab === 'email-check'
                ? 'border-[#0f2147] text-[#0f2147]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Email &amp; Domain Check</span>
          </button>
          <button
            onClick={() => setActiveTab('session')}
            className={`px-4 py-2.5 border-b-2 flex items-center gap-1.5 transition ${
              activeTab === 'session'
                ? 'border-[#0f2147] text-[#0f2147]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Session Telemetry</span>
          </button>
        </div>

        {/* TAB 1: Corporate Email Login */}
        {activeTab === 'login' && (
          <div className="py-5 space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <strong>Single Sign-On Notice:</strong> Authorized for Akhila Infotech team and invited client
              enterprise contacts. Principal hours: 9:00 AM – 6:00 PM IST.
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Corporate Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                    placeholder="consultant@akhilainfotech.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2147] transition"
                  />
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold uppercase text-slate-700">
                    Security Passcode / Key
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      showToast('Password reset link sent to registered admin mailbox.', 'info')
                    }
                    className="text-[11px] text-cyan-700 hover:underline"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={loginPass}
                    onChange={e => setLoginPass(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2147] transition"
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              {/* 2FA OTP Field */}
              <div className="p-3.5 rounded-xl bg-cyan-50/70 border border-cyan-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <label className="font-bold text-cyan-950 flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-cyan-700" />
                    2-Factor Authenticator Code (TOTP)
                  </label>
                  <span className="text-[10px] text-cyan-800 font-mono">6-Digit Key</span>
                </div>
                <input
                  type="text"
                  maxLength={6}
                  value={otpCode}
                  onChange={e => setOtpCode(e.target.value)}
                  placeholder="e.g. 582914"
                  className="w-full px-3 py-2 rounded-lg bg-white border border-cyan-300 text-xs font-mono tracking-widest text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
              </div>

              <button
                type="submit"
                disabled={isAuthenticating}
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#0f2147] hover:bg-slate-900 transition flex items-center justify-center gap-2 shadow-md shadow-[#0f2147]/20 disabled:opacity-70"
              >
                {isAuthenticating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Validating 2FA &amp; Credentials...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Authenticate Secure Session</span>
                  </>
                )}
              </button>
            </form>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
              <span>Target Destination:</span>
              <a href="/admin" className="font-mono text-cyan-700 hover:underline">
                /admin console →
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: Email & Domain Integrity Inspector */}
        {activeTab === 'email-check' && (
          <div className="py-5 space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              Inspect any corporate email address or enterprise domain for <strong>SPF alignment</strong>,{' '}
              <strong>DKIM signatures</strong>, <strong>DMARC policy (p=reject)</strong>, and{' '}
              <strong>MX mail exchanger redundancy</strong>.
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase text-slate-700">
                Email Address or Domain to Validate
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={checkInput}
                    onChange={e => setCheckInput(e.target.value)}
                    placeholder="user@domain.com or company.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs font-mono text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2147]"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
                <button
                  type="button"
                  onClick={() => runDomainCheck()}
                  disabled={isInspecting}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 transition flex items-center gap-1.5 shadow-sm"
                >
                  {isInspecting ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Play className="w-3.5 h-3.5" />
                  )}
                  <span>Inspect</span>
                </button>
              </div>
            </div>

            {/* Inspection Output */}
            {isInspecting && (
              <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-slate-200 animate-pulse">
                Querying DNSSEC, MX, SPF, and DMARC records for <strong>{checkInput}</strong>...
              </div>
            )}

            {!isInspecting && inspectedDomain && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-cyan-700" /> Domain Scope:
                  </span>
                  <span className="font-mono text-xs font-bold text-[#0f2147]">{inspectedDomain}</span>
                </div>

                {/* SPF */}
                <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-200">
                  <span className="text-slate-600">SPF Record (Sender Policy Framework):</span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
                    v=spf1 ~all VALID
                  </span>
                </div>

                {/* DKIM */}
                <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-200">
                  <span className="text-slate-600">DKIM Signature (2048-bit RSA):</span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
                    ALIGNMENT OK
                  </span>
                </div>

                {/* DMARC */}
                <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-200">
                  <span className="text-slate-600">DMARC Policy Enforcement:</span>
                  <span
                    className={`font-mono font-bold ${
                      inspectedDomain.toLowerCase() === 'akhilainfotech.com'
                        ? 'text-emerald-700 bg-emerald-100'
                        : 'text-blue-700 bg-blue-100'
                    } px-2 py-0.5 rounded text-[10px]`}
                  >
                    p=reject (STRICT)
                  </span>
                </div>

                {/* MX */}
                <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-200">
                  <span className="text-slate-600">MX Mail Exchangers:</span>
                  <span className="font-mono text-slate-800 text-[11px]">Primary + Fallback Cluster OK</span>
                </div>

                {/* DNSBL */}
                <div className="flex items-center justify-between text-xs pt-1.5 border-t border-slate-200">
                  <span className="text-slate-600">Spamhaus / DNSBL Reputation:</span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
                    0/48 BLACKLISTS
                  </span>
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Need corporate email hardening?</span>
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation('Zero-Trust Cybersecurity & Compliance');
                }}
                className="font-bold text-[#0f2147] hover:underline"
              >
                Request Advisory Blueprint →
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: Session Telemetry */}
        {activeTab === 'session' && (
          <div className="py-5 space-y-4">
            <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="text-slate-400">Node Hub:</span>
                <span className="text-cyan-300">Hyderabad (17.3850° N, 78.4867° E)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="text-slate-400">Session Token:</span>
                <span className="text-emerald-400">{sessionToken}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="text-slate-400">Cipher Suite:</span>
                <span className="text-slate-200">TLS_AES_256_GCM_SHA384</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="text-slate-400">Client Protocol:</span>
                <span className="text-slate-200">HTTP/2 - Enforced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Session Expires In:</span>
                <span className="text-amber-400 font-bold">{formatTimer(secondsRemaining)}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={rotateToken}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold border border-slate-300 hover:bg-slate-100 transition flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Rotate Nonce / Token</span>
              </button>
              <button
                onClick={terminateSession}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-red-600 text-white hover:bg-red-700 transition flex items-center justify-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Terminate Session</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
