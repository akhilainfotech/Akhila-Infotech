'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Mail } from 'lucide-react';
import AiLogo from '@/components/AiLogo';
import { useToast } from '@/lib/toast-context';

interface FooterProps {
  onOpenPortalLogin: () => void;
  onOpenEmailCheck: () => void;
  onOpenAudit: () => void;
  onOpenAdmin: () => void;
  onSelectDomain: (domain: string) => void;
}

export default function Footer({
  onOpenPortalLogin,
  onOpenEmailCheck,
  onOpenAudit,
  onOpenAdmin,
  onSelectDomain,
}: FooterProps) {
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText('info@akhilainfotech.com');
      showToast('Copied info@akhilainfotech.com to clipboard!', 'success');
    } catch {
      showToast('Unable to copy text in this browser context.', 'error');
    }
  };

  return (
    <footer className="bg-[#070f24] text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Details */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#home" className="flex items-center gap-3">
              <AiLogo className="w-10 h-10" />
              <div>
                <span className="text-base font-extrabold tracking-tight text-white block">AKHILA INFOTECH</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Enterprise IT Consulting</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-xs">
              Architecting scalable multi-cloud infrastructure, governing enterprise AI workflows, and enforcing zero-trust
              cybersecurity from Hyderabad, India.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Akhila Infotech, Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>
                  Hours: <strong>9:00 AM – 6:00 PM IST</strong>
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <a href="mailto:info@akhilainfotech.com" className="text-cyan-400 hover:underline font-semibold break-all sm:break-normal">
                    info@akhilainfotech.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[10px] bg-slate-800 hover:bg-slate-700 px-2 py-0.5 rounded text-slate-300 transition"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">IT Solutions</p>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectDomain('Cloud Architecture & Migration')}
                  className="hover:text-white transition text-left"
                >
                  Cloud Migration &amp; Landing Zones
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDomain('Enterprise AI & Automation')}
                  className="hover:text-white transition text-left"
                >
                  Private Enterprise LLMs &amp; RAG
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDomain('Zero-Trust Cybersecurity & Compliance')}
                  className="hover:text-white transition text-left"
                >
                  Zero-Trust IAM &amp; SOC 2 Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDomain('Full-Stack Modernization')}
                  className="hover:text-white transition text-left"
                >
                  Monolith to Microservices
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDomain('DevOps/SRE')}
                  className="hover:text-white transition text-left"
                >
                  Terraform IaC &amp; GitOps CI/CD
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Security Tools */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">Security Tools</p>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenPortalLogin} className="hover:text-cyan-300 transition text-left">
                  Corporate Email Login
                </button>
              </li>
              <li>
                <button onClick={onOpenEmailCheck} className="hover:text-cyan-300 transition text-left">
                  Email &amp; Domain Check
                </button>
              </li>
              <li>
                <button onClick={onOpenAudit} className="hover:text-cyan-300 transition text-left">
                  Security Header Audit
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmin} className="text-cyan-400 hover:text-cyan-300 font-mono">
                  /admin portal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Operational Statement */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">Operational SLA</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Akhila Infotech provides principal advisory during business hours (9:00 AM – 6:00 PM IST) with guaranteed
              response times under 4 hours for enterprise retainers.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[11px] font-mono text-slate-300">Hyderabad Hub: Online</span>
            </div>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 Akhila Infotech. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={onOpenAudit} className="hover:text-slate-300 transition">
              Security Headers
            </button>
            <button
              onClick={() => showToast('Zero-Trust Architecture active (SOC 2, GDPR, ISO 27001 aligned).', 'info')}
              className="hover:text-slate-300 transition"
            >
              Privacy Charter
            </button>
            <button onClick={onOpenAdmin} className="text-cyan-400 hover:text-cyan-300 font-mono">
              Admin Gateway
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
