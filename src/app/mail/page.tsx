'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Server,
  Smartphone,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import AiLogo from '@/components/AiLogo';

const TITAN_WEBMAIL_URL = 'https://secureserver.titan.email/mail/';
const AUTHORIZED_EMAIL = 'akhilatechnology@gmail.com';
const AUTHORIZED_PHONE_DIGITS = ['919440539009', '9440539009'];

export default function WebmailLoginPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState('');

  // Privacy protection: ensure any previously cached personal details are purged
  useEffect(() => {
    try {
      localStorage.removeItem('akhila_webmail_user');
      localStorage.removeItem('akhila_webmail_phone');
    } catch {}
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
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

    setIsRedirecting(true);

    const isEmailMatch = cleanEmail === AUTHORIZED_EMAIL;
    const isPhoneMatch = AUTHORIZED_PHONE_DIGITS.includes(digitsOnly);

    if (isEmailMatch && isPhoneMatch) {
      // MATCH -> Connect to webmail without storing personal details
      setTimeout(() => {
        window.location.href = TITAN_WEBMAIL_URL;
      }, 700);
    } else {
      // NO MATCH -> Redirect to Contact Page
      setError('Credentials do not match authorized webmail records. Redirecting to Contact Page...');

      setTimeout(() => {
        window.location.href = '/#contact';
      }, 1200);
    }
  };

  return (
    <div className="min-h-screen bg-[#000d2e] text-slate-100 flex flex-col font-sans selection:bg-[#0055ff] selection:text-white">
      {/* Top Header Bar */}
      <header className="border-b border-[#002466] bg-[#001242]/90 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="shadow-md shadow-[#00184a]/30 ring-1 ring-slate-900/10 rounded-full group-hover:scale-105 transition-transform">
              <AiLogo className="w-10 h-10" />
            </div>
            <div>
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-white block leading-tight">
                AKHILA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0099ff] to-[#00d2ff]">INFOTECH</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#00d2ff] font-semibold">
                Corporate Webmail Gateway
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#001c54] text-[#00d2ff] border border-[#003899]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Titan Email Server Active
            </span>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-[#00d2ff] transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portal</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle background glow accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0055ff]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Left Column: Login Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#001242]/95 border border-[#002e8a] shadow-2xl p-6 sm:p-9 backdrop-blur-xl shadow-blue-950/70">
              {/* Card Header */}
              <div className="pb-6 border-b border-[#002466] mb-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#001c54] text-[#00d2ff] border border-[#003899]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Security Gateway • Titan Webmail
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    secureserver.titan.email
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Verify Credentials to Access Webmail
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
                  Enter authorized email and mobile number to connect to Titan Webmail. Non-matching entries route to the advisory contact desk.
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-red-950/80 border border-red-700/60 text-red-200 text-xs flex items-center gap-2 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Email Address Field */}
                <div>
                  <label htmlFor="wm-email" className="block text-xs font-bold uppercase text-slate-200 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="wm-email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter email address"
                      required
                      autoComplete="username email"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#000d2b] border border-[#002e8a] text-sm text-white placeholder-slate-500 focus:bg-[#001338] focus:border-[#00d2ff] focus:outline-none focus:ring-2 focus:ring-[#0066ff] transition"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="wm-phone" className="block text-xs font-bold uppercase text-slate-200 mb-1.5">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="wm-phone"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="Enter mobile number"
                      required
                      autoComplete="tel"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#000d2b] border border-[#002e8a] text-sm text-white placeholder-slate-500 focus:bg-[#001338] focus:border-[#00d2ff] focus:outline-none focus:ring-2 focus:ring-[#0066ff] transition"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Privacy Safeguard Notice (No persistent storage) */}
                <div className="flex items-center justify-between text-xs pt-1 text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00d2ff]" />
                    Privacy Enforced: No personal details stored
                  </span>
                  <span className="font-mono text-[11px]">Titan Cloud 2FA</span>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isRedirecting}
                  className="w-full mt-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0055ff] via-[#0077ff] to-[#00b4ff] hover:from-[#0044ee] hover:to-[#00a0ee] shadow-lg shadow-[#0055ff]/30 transition flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                >
                  {isRedirecting ? (
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

              {/* Security Banner Footer */}
              <div className="mt-6 pt-4 border-t border-[#002466] flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Protected by End-to-End Mail TLS 1.3
                </span>
                <span>Destination: secureserver.titan.email</span>
              </div>
            </div>
          </div>

          {/* Right Column: Server Details & Helpdesk Support */}
          <div className="lg:col-span-5 space-y-5">
            {/* Server Settings Card */}
            <div className="p-6 rounded-2xl bg-[#001552]/80 border border-[#002e8a]/80 shadow-lg shadow-black/20 space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#002466]">
                <Server className="w-5 h-5 text-[#00d2ff]" />
                <div>
                  <h2 className="text-sm font-bold text-white">Titan Email Server Endpoints</h2>
                  <p className="text-[11px] text-slate-400">Standard client configuration settings</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-[#000d2b] border border-[#002466] flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-200">Webmail Access</p>
                    <p className="font-mono text-[10px] text-slate-400">Browser Console</p>
                  </div>
                  <span className="font-mono text-[11px] text-[#00d2ff] font-semibold">
                    secureserver.titan.email/mail/
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#000d2b] border border-[#002466] flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-200">Incoming Mail (IMAP)</p>
                    <p className="font-mono text-[10px] text-slate-400">Port 993 • SSL/TLS</p>
                  </div>
                  <span className="font-mono text-[11px] text-slate-300">imap.titan.email</span>
                </div>

                <div className="p-3 rounded-xl bg-[#000d2b] border border-[#002466] flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-200">Outgoing Mail (SMTP)</p>
                    <p className="font-mono text-[10px] text-slate-400">Port 465 • SSL/TLS</p>
                  </div>
                  <span className="font-mono text-[11px] text-slate-300">smtp.titan.email</span>
                </div>

                <div className="p-3 rounded-xl bg-[#000d2b] border border-[#002466] flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-200">Incoming Mail (POP3)</p>
                    <p className="font-mono text-[10px] text-slate-400">Port 995 • SSL/TLS</p>
                  </div>
                  <span className="font-mono text-[11px] text-slate-300">pop.titan.email</span>
                </div>
              </div>
            </div>

            {/* Mobile Apps Card */}
            <div className="p-6 rounded-2xl bg-[#001552]/80 border border-[#002e8a]/80 shadow-lg shadow-black/20 space-y-3">
              <div className="flex items-center gap-2.5">
                <Smartphone className="w-5 h-5 text-[#00d2ff]" />
                <div>
                  <h3 className="text-sm font-bold text-white">Access Mail on Mobile</h3>
                  <p className="text-[11px] text-slate-400">Download the Titan Mail App for iOS &amp; Android</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <a
                  href="https://apps.apple.com/app/titan-mail/id1492659353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#001c54] hover:bg-[#002875] border border-[#003899] text-center font-semibold text-slate-200 hover:text-white transition flex items-center justify-center gap-1.5"
                >
                  <span>Apple iOS App</span>
                  <ExternalLink className="w-3 h-3 text-[#00d2ff]" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.titan.mail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#001c54] hover:bg-[#002875] border border-[#003899] text-center font-semibold text-slate-200 hover:text-white transition flex items-center justify-center gap-1.5"
                >
                  <span>Android App</span>
                  <ExternalLink className="w-3 h-3 text-[#00d2ff]" />
                </a>
              </div>
            </div>

            {/* IT Support Contact */}
            <div className="p-5 rounded-2xl bg-[#001338] border border-[#002466] space-y-2 text-xs">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                IT Operations &amp; Support Desk
              </p>
              <p className="text-slate-300 leading-relaxed">
                Need enterprise email provisioning, 2FA reset, or corporate mailbox quota upgrades?
              </p>
              <div className="pt-2 flex items-center justify-between">
                <a
                  href="mailto:info@akhilainfotech.com"
                  className="text-[#00d2ff] hover:underline font-bold font-mono text-xs"
                >
                  info@akhilainfotech.com
                </a>
                <span className="text-[10px] text-slate-400 font-mono">9 AM – 6 PM IST</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#00205c] bg-[#000924] py-6 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Akhila Infotech. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/" className="hover:text-white transition">
              Public Portal
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/#contact" className="hover:text-white transition">
              Contact Desk
            </Link>
            <span className="text-slate-600">•</span>
            <a href="mailto:info@akhilainfotech.com" className="hover:text-white transition">
              Helpdesk
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
