'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Mail } from 'lucide-react';
import AiLogo from '@/components/AiLogo';

interface NavbarProps {
  onOpenPortalLogin: () => void;
  onOpenEmailCheck?: () => void;
  onOpenAdmin: () => void;
  onOpenWebmailPrompt?: () => void;
}

export default function Navbar({
  onOpenPortalLogin,
  onOpenEmailCheck,
  onOpenAdmin,
  onOpenWebmailPrompt,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const handleWebmailClick = (e: React.MouseEvent) => {
    if (onOpenWebmailPrompt) {
      e.preventDefault();
      onOpenWebmailPrompt();
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#000d2e]/90 border-b border-[#002466] shadow-lg shadow-black/30 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Company Name */}
          <Link
            href="#home"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
            aria-label="Akhila Infotech Homepage"
          >
            <div className="shadow-md shadow-[#00184a]/20 ring-1 ring-slate-900/10 rounded-full group-hover:scale-105 transition-transform shrink-0">
              <AiLogo className="w-11 h-11 sm:w-12 sm:h-12" />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-none whitespace-nowrap">
                AKHILA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0099ff] to-[#00d2ff]">INFOTECH</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] text-[#00d2ff] mt-1 whitespace-nowrap">
                Enterprise IT Consulting
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <a
              href="#services"
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-300 hover:text-[#00d2ff] hover:bg-[#00184a]/80 transition whitespace-nowrap"
            >
              Services
            </a>
            <a
              href="#security-features"
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-300 hover:text-[#00d2ff] hover:bg-[#00184a]/80 transition whitespace-nowrap"
            >
              Zero-Trust
            </a>
            <a
              href="#methodology"
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-300 hover:text-[#00d2ff] hover:bg-[#00184a]/80 transition whitespace-nowrap"
            >
              Methodology
            </a>
            <a
              href="#cases"
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-300 hover:text-[#00d2ff] hover:bg-[#00184a]/80 transition whitespace-nowrap"
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-300 hover:text-[#00d2ff] hover:bg-[#00184a]/80 transition whitespace-nowrap"
            >
              Contact
            </a>
            <Link
              href="/mail"
              onClick={handleWebmailClick}
              className="px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-300 hover:text-[#00d2ff] hover:bg-[#00184a]/80 transition whitespace-nowrap flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#00d2ff]" />
              <span>Check Mail</span>
            </Link>
          </nav>

          {/* Desktop Action: Webmail Login CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Link
              href="/mail"
              onClick={handleWebmailClick}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-[#0055ff] to-[#0099ff] hover:from-[#0044ee] hover:to-[#0088ee] border border-[#00d2ff]/30 shadow-md shadow-[#0055ff]/25 transition whitespace-nowrap cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#00d2ff]" />
              <span>Webmail Login</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-xl text-slate-200 hover:bg-[#00184a] border border-[#002466] transition shrink-0"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#000d2e]/98 backdrop-blur-xl border-t border-[#002466] shadow-2xl px-4 pt-4 pb-6 space-y-2 animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#001552] border border-[#002e8a] mb-2">
            <div className="flex items-center gap-2.5">
              <AiLogo className="w-8 h-8 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Akhila Infotech</p>
                <p className="text-[10px] text-slate-400">Hours: 9:00 AM – 6:00 PM IST</p>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#001c54] text-[#00d2ff] border border-[#003899] whitespace-nowrap">
              Hyderabad
            </span>
          </div>

          {/* Prominent Check Mail in Mobile Menu */}
          <Link
            href="/mail"
            onClick={e => {
              closeMobile();
              handleWebmailClick(e);
            }}
            className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#0055ff]/25 to-[#0099ff]/25 border border-[#0055ff]/50 text-white font-bold text-sm mb-2 hover:bg-[#0055ff]/35 transition"
          >
            <span className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#00d2ff]" />
              Check Mail (Titan Webmail)
            </span>
            <span className="text-[10px] font-mono text-[#00d2ff] uppercase tracking-wider font-semibold">
              Login →
            </span>
          </Link>

          <a
            href="#services"
            onClick={closeMobile}
            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-[#00184a] hover:text-[#00d2ff]"
          >
            Services
          </a>
          <a
            href="#security-features"
            onClick={closeMobile}
            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-[#00184a] hover:text-[#00d2ff]"
          >
            Zero-Trust &amp; Audit
          </a>
          <a
            href="#methodology"
            onClick={closeMobile}
            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-[#00184a] hover:text-[#00d2ff]"
          >
            Methodology
          </a>
          <a
            href="#cases"
            onClick={closeMobile}
            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-[#00184a] hover:text-[#00d2ff]"
          >
            Case Studies
          </a>
          <a
            href="#contact"
            onClick={closeMobile}
            className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-[#00184a] hover:text-[#00d2ff]"
          >
            Contact &amp; Booking
          </a>

          <div className="pt-3 border-t border-[#002466] grid grid-cols-2 gap-2">
            <Link
              href="/mail"
              onClick={e => {
                closeMobile();
                handleWebmailClick(e);
              }}
              className="w-full text-center py-2.5 text-xs font-bold rounded-lg border border-[#002e8a] bg-[#00184a] text-slate-200 hover:bg-[#002875] hover:text-[#00d2ff] transition flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#00d2ff]" />
              <span>Webmail Login</span>
            </Link>
            <button
              onClick={() => {
                closeMobile();
                onOpenAdmin();
              }}
              className="w-full text-center py-2.5 text-xs font-bold rounded-lg bg-gradient-to-r from-[#0055ff] to-[#0099ff] text-white hover:from-[#0044ee] hover:to-[#0088ee] transition"
            >
              /admin Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
