'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Key, ShieldCheck, ArrowRight, Menu, X } from 'lucide-react';
import AiLogo from '@/components/AiLogo';

interface NavbarProps {
  onOpenPortalLogin: () => void;
  onOpenEmailCheck: () => void;
  onOpenAdmin: () => void;
}

export default function Navbar({
  onOpenPortalLogin,
  onOpenEmailCheck,
  onOpenAdmin,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Company Name */}
          <Link
            href="#home"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
            aria-label="Akhila Infotech Homepage"
          >
            <div className="shadow-md shadow-[#0f2147]/20 ring-1 ring-slate-900/10 rounded-full group-hover:scale-105 transition-transform shrink-0">
              <AiLogo className="w-11 h-11 sm:w-12 sm:h-12" />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0f2147] leading-none whitespace-nowrap">
                AKHILA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600">INFOTECH</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 mt-1 whitespace-nowrap">
                Enterprise IT Consulting &amp; Security
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <a
              href="#services"
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#0f2147] hover:bg-slate-100/80 transition whitespace-nowrap"
            >
              Services
            </a>
            <a
              href="#security-features"
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#0f2147] hover:bg-slate-100/80 transition whitespace-nowrap"
            >
              Zero-Trust
            </a>
            <a
              href="#methodology"
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#0f2147] hover:bg-slate-100/80 transition whitespace-nowrap"
            >
              Methodology
            </a>
            <a
              href="#cases"
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#0f2147] hover:bg-slate-100/80 transition whitespace-nowrap"
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-700 hover:text-[#0f2147] hover:bg-slate-100/80 transition whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onOpenPortalLogin}
              className="inline-flex items-center gap-1.5 px-3 py-2 xl:px-3.5 xl:py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition focus:outline-none shrink-0 whitespace-nowrap"
              title="Corporate Email Login & Inspection"
            >
              <Key className="w-3.5 h-3.5 text-[#0f2147] shrink-0" />
              <span className="whitespace-nowrap">Portal Login</span>
            </button>

            <button
              type="button"
              onClick={onOpenEmailCheck}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 xl:px-3.5 xl:py-2.5 rounded-xl text-xs font-bold text-cyan-900 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 transition shrink-0 whitespace-nowrap"
              title="Verify Domain & Email Security Records"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
              <span className="whitespace-nowrap">Verify Mailbox</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 xl:gap-2 px-3.5 xl:px-4 py-2 xl:py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0f2147] via-blue-900 to-cyan-700 hover:opacity-95 shadow-md shadow-[#0f2147]/20 transition shrink-0 whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 border border-slate-200 transition shrink-0"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl shadow-xl px-4 pt-4 pb-6 space-y-2 animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-2">
            <div className="flex items-center gap-2.5">
              <AiLogo className="w-8 h-8 shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#0f2147]">Akhila Infotech</p>
                <p className="text-[10px] text-slate-500">Hours: 9:00 AM – 6:00 PM IST</p>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 whitespace-nowrap">
              Hyderabad
            </span>
          </div>

          <a
            href="#services"
            onClick={closeMobile}
            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Services
          </a>
          <a
            href="#security-features"
            onClick={closeMobile}
            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Zero-Trust &amp; Audit
          </a>
          <a
            href="#methodology"
            onClick={closeMobile}
            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Methodology
          </a>
          <a
            href="#cases"
            onClick={closeMobile}
            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Case Studies
          </a>
          <a
            href="#contact"
            onClick={closeMobile}
            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            Contact &amp; Booking
          </a>

          <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                closeMobile();
                onOpenPortalLogin();
              }}
              className="w-full text-center py-2.5 text-xs font-bold rounded-lg border border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200 transition"
            >
              Email &amp; Login Portal
            </button>
            <button
              onClick={() => {
                closeMobile();
                onOpenAdmin();
              }}
              className="w-full text-center py-2.5 text-xs font-bold rounded-lg bg-[#0f2147] text-white hover:bg-slate-900 transition"
            >
              /admin Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
