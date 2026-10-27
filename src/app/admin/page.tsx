'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Activity,
  Users,
  AlertTriangle,
  ArrowLeft,
  Mail,
  Lock,
  Clock,
  MapPin,
  CheckCircle2,
  RefreshCw,
  LogOut,
  Filter,
} from 'lucide-react';
import AiLogo from '@/components/AiLogo';

export default function AdminPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'new' | 'reviewed'>('all');

  const inquiries = [
    {
      id: 'AKH-2026-9041',
      name: 'Vikram Malhotra',
      email: 'v.malhotra@zenithpay.io',
      company: 'ZenithPay Systems',
      domain: 'Zero-Trust Cybersecurity & Compliance',
      timeline: 'Immediate (Next 30 Days)',
      date: '2026-10-27 16:45 IST',
      status: 'NEW',
    },
    {
      id: 'AKH-2026-8812',
      name: 'Dr. Aruna R.',
      email: 'aruna@medlinkhealth.in',
      company: 'MedLink Healthcare Hub',
      domain: 'Enterprise AI & Automation',
      timeline: '1 - 3 Months',
      date: '2026-10-27 14:20 IST',
      status: 'REVIEWED',
    },
    {
      id: 'AKH-2026-7934',
      name: 'Rohan Deshmukh',
      email: 'rohan.d@omnicart.com',
      company: 'OmniCart Logistics',
      domain: 'Cloud Architecture & Migration',
      timeline: 'Immediate (Next 30 Days)',
      date: '2026-10-27 11:05 IST',
      status: 'REVIEWED',
    },
    {
      id: 'AKH-2026-6420',
      name: 'Priya Nambiar',
      email: 'p.nambiar@apexindustrial.org',
      company: 'Apex Industrial IIoT',
      domain: 'DevOps/SRE',
      timeline: '3 - 6 Months',
      date: '2026-10-26 17:30 IST',
      status: 'NEW',
    },
  ];

  const securityEvents = [
    { time: '18:12 IST', event: 'Anti-bot honeypot triggered & discarded payload', ip: '103.22.201.14', level: 'DEFENSE' },
    { time: '17:55 IST', event: 'Email domain audit completed for info@akhilainfotech.com (SPF/DMARC 100%)', ip: 'Node-Hyd', level: 'INFO' },
    { time: '17:30 IST', event: 'Session token rotated for authorized consultant', ip: '182.74.12.98', level: 'AUTH' },
    { time: '16:45 IST', event: 'Consultation request REF: AKH-2026-9041 verified and routed to info@akhilainfotech.com', ip: '14.139.12.4', level: 'SUCCESS' },
    { time: '15:10 IST', event: 'TLS 1.3 Strict handshake verified on edge node', ip: 'Edge-In-Hyd', level: 'INFO' },
  ];

  const filteredInquiries = activeFilter === 'all' 
    ? inquiries 
    : inquiries.filter(i => i.status.toLowerCase() === activeFilter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#0f2147] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#070f24] border-b border-slate-800 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-semibold border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Node: Hyderabad Core Active
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Hours: 9:00 AM – 6:00 PM IST
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>Channel: info@akhilainfotech.com</span>
            <Link
              href="/"
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Admin Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <AiLogo className="w-10 h-10" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-white tracking-tight">Akhila Admin Operations Console</h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300">
                  v2.4 Live
                </span>
              </div>
              <p className="text-xs text-slate-400">Zero-Trust Telemetry &amp; Consultation Inbound Desk</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Exit Console</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono uppercase">Consultation Inquiries</span>
              <Mail className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-3xl font-extrabold text-white mt-2">48</p>
            <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <span>↑ +12%</span>
              <span className="text-slate-500">vs last week</span>
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono uppercase">Bot Traps Discarded</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-3xl font-extrabold text-white mt-2">1,240</p>
            <p className="text-[11px] text-slate-400 mt-1">Honeypot &amp; Rate-Limiting armed</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono uppercase">Node SLA Availability</span>
              <Activity className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-3xl font-extrabold text-white mt-2">99.98%</p>
            <p className="text-[11px] text-emerald-400 mt-1">Zero downtime recorded</p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono uppercase">Primary Hub</span>
              <MapPin className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-2xl font-extrabold text-white mt-2">Hyderabad, IN</p>
            <p className="text-[11px] text-slate-400 mt-1">Principal Advisory Hours Active</p>
          </div>
        </div>

        {/* Inquiries Management Section */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden">
          <div className="p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-white">Received Consultation Requests</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Inquiries dispatched to <span className="text-cyan-400 font-mono">info@akhilainfotech.com</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </span>
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  activeFilter === 'all'
                    ? 'bg-[#0f2147] text-white border border-cyan-500/30'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter('new')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  activeFilter === 'new'
                    ? 'bg-[#0f2147] text-white border border-cyan-500/30'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                New
              </button>
              <button
                onClick={() => setActiveFilter('reviewed')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                  activeFilter === 'reviewed'
                    ? 'bg-[#0f2147] text-white border border-cyan-500/30'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Reviewed
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/60 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                <tr>
                  <th className="px-5 py-3">Reference ID</th>
                  <th className="px-5 py-3">Client / Company</th>
                  <th className="px-5 py-3">Domain</th>
                  <th className="px-5 py-3">Timeline</th>
                  <th className="px-5 py-3">Timestamp (IST)</th>
                  <th className="px-5 py-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredInquiries.map(item => (
                  <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-3.5 font-mono text-cyan-300 font-semibold">{item.id}</td>
                    <td className="px-5 py-3.5">
                      <div className="font-bold text-white">{item.name}</div>
                      <div className="text-[11px] text-slate-400">{item.company} • {item.email}</div>
                    </td>
                    <td className="px-5 py-3.5 text-slate-200">{item.domain}</td>
                    <td className="px-5 py-3.5 font-mono text-[11px] text-slate-400">{item.timeline}</td>
                    <td className="px-5 py-3.5 font-mono text-[11px] text-slate-400">{item.date}</td>
                    <td className="px-5 py-3.5 text-right">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold ${
                          item.status === 'NEW'
                            ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security Event Stream & Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800 p-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                Live Security &amp; Audit Log
              </h3>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                Real-Time Stream
              </span>
            </div>

            <div className="mt-4 space-y-3 font-mono text-xs">
              {securityEvents.map((ev, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 font-semibold">{ev.time}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                        {ev.level}
                      </span>
                    </div>
                    <p className="text-slate-300 font-sans text-xs">{ev.event}</p>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono shrink-0">{ev.ip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Admin Actions */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 pb-4 border-b border-slate-800">
              <Lock className="w-4 h-4 text-cyan-400" />
              Administrative Actions
            </h3>

            <div className="space-y-2.5 text-xs">
              <button
                onClick={() => alert('Initiating cryptographic key renewal for Hyderabad Edge nodes...')}
                className="w-full text-left p-3 rounded-xl bg-slate-950 hover:bg-slate-800/60 border border-slate-800 transition flex items-center justify-between"
              >
                <div>
                  <p className="font-bold text-white">Rotate Edge Nonce &amp; Keys</p>
                  <p className="text-[11px] text-slate-400">Force token cycle across active client portals</p>
                </div>
                <RefreshCw className="w-4 h-4 text-cyan-400" />
              </button>

              <button
                onClick={() => alert('Mail routing operational: Verified recipient info@akhilainfotech.com (9 AM – 6 PM IST)')}
                className="w-full text-left p-3 rounded-xl bg-slate-950 hover:bg-slate-800/60 border border-slate-800 transition flex items-center justify-between"
              >
                <div>
                  <p className="font-bold text-white">Test Mail Inbound Gateway</p>
                  <p className="text-[11px] text-slate-400">Direct test ping to info@akhilainfotech.com</p>
                </div>
                <Mail className="w-4 h-4 text-emerald-400" />
              </button>

              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/60 text-xs text-cyan-200">
                <p className="font-bold mb-1">Corporate Contact Reminder:</p>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Headquarters: Akhila Infotech, Hyderabad, India. Operating schedule is Monday to Friday, 9:00 AM – 6:00 PM IST.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
