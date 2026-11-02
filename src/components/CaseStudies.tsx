'use client';

import React, { useState } from 'react';

type Category = 'all' | 'fintech' | 'healthtech' | 'retail' | 'manufacturing';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const cases = [
    {
      id: 'fintech',
      category: 'fintech',
      badge: 'FinTech & Banking',
      badgeClass: 'bg-[#001c54] text-[#00d2ff] border border-[#003899]',
      meta: 'AWS • PCI-DSS 4.0',
      title: 'Distributed Payment Core Modernization',
      desc: 'Re-architected monolithic ledger into active-active Kubernetes microservices, maintaining sub-35ms p99 latency during high-volume festive trading windows.',
      metrics: [
        { val: '99.995%', label: 'Availability', color: 'text-[#00d2ff]' },
        { val: '<35ms', label: 'P99 Latency', color: 'text-emerald-400' },
        { val: '-40%', label: 'Infra Spend', color: 'text-[#38bdf8]' },
      ],
    },
    {
      id: 'healthtech',
      category: 'healthtech',
      badge: 'HealthTech',
      badgeClass: 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60',
      meta: 'Azure • HIPAA / HITRUST',
      title: 'FHIR Clinical Data Lakehouse & Diagnostic Copilot',
      desc: 'Aggregated siloed EHR records across 24 hospitals into an encrypted FHIR platform, deploying an enterprise retrieval-augmented diagnostic engine.',
      metrics: [
        { val: '100%', label: 'Audit Compliance', color: 'text-[#00d2ff]' },
        { val: '3.5 hrs', label: 'Saved/Clinician/Wk', color: 'text-emerald-400' },
        { val: '8M+', label: 'Encrypted Records', color: 'text-[#38bdf8]' },
      ],
    },
    {
      id: 'retail',
      category: 'retail',
      badge: 'Retail & E-Commerce',
      badgeClass: 'bg-[#00184a] text-[#a5b4fc] border border-[#002e8a]',
      meta: 'Google Cloud • Composable',
      title: 'Composable Commerce & Real-Time Inventory Mesh',
      desc: 'Replaced legacy ERP storefront with headless microservices and real-time Kafka event streams across 300+ distribution centers.',
      metrics: [
        { val: '5x', label: 'Peak Scale Elasticity', color: 'text-[#00d2ff]' },
        { val: '+28%', label: 'Conversion Rate', color: 'text-emerald-400' },
        { val: '-30%', label: 'Stockouts', color: 'text-[#38bdf8]' },
      ],
    },
    {
      id: 'manufacturing',
      category: 'manufacturing',
      badge: 'Manufacturing & IIoT',
      badgeClass: 'bg-amber-950/80 text-amber-300 border border-amber-800/60',
      meta: 'Edge Cloud • OT / IT',
      title: 'Smart Factory Telemetry & Predictive Maintenance',
      desc: 'Interconnected 12 manufacturing facilities with edge sensors and automated anomaly detectors, reducing unpredicted factory downtime.',
      metrics: [
        { val: '-36%', label: 'Unplanned Outages', color: 'text-[#00d2ff]' },
        { val: '$6.2M', label: 'Annual OEE Gains', color: 'text-emerald-400' },
        { val: '12 Plants', label: 'Zero-Trust Unified', color: 'text-[#38bdf8]' },
      ],
    },
  ];

  const filteredCases =
    selectedCategory === 'all'
      ? cases
      : cases.filter(c => c.category === selectedCategory);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Sectors' },
    { key: 'fintech', label: 'FinTech' },
    { key: 'healthtech', label: 'HealthTech' },
    { key: 'retail', label: 'Retail' },
    { key: 'manufacturing', label: 'Manufacturing' },
  ];

  return (
    <section id="cases" className="py-20 bg-[#000d2e] border-b border-[#002466]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#00d2ff] bg-[#001c54]/90 border border-[#0055ff]/40 mb-2 whitespace-nowrap">
              Proven Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Solutions &amp; Case Studies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Demonstrated performance impact across demanding industry sectors.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 shrink-0" role="tablist">
            {categories.map(cat => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-sm whitespace-nowrap ${
                  selectedCategory === cat.key
                    ? 'bg-gradient-to-r from-[#0055ff] to-[#0099ff] text-white shadow-md shadow-[#0052cc]/20'
                    : 'bg-[#001c54] text-slate-300 hover:bg-[#002875] hover:text-white border border-[#003399]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {filteredCases.map(item => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#001552]/80 border border-[#002e8a]/80 shadow-lg shadow-black/20 hover:border-[#0066ff]/50 hover:shadow-blue-500/10 hover:shadow-lg transition-all flex flex-col justify-between animate-in fade-in"
            >
              <div>
                <div className="flex justify-between items-center mb-4 gap-2">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase whitespace-nowrap ${item.badgeClass}`}>
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 whitespace-nowrap">{item.meta}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#002466] grid grid-cols-3 gap-2">
                {item.metrics.map((m, idx) => (
                  <div key={idx}>
                    <p className={`text-base sm:text-lg font-extrabold ${m.color} whitespace-nowrap`}>{m.val}</p>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 mt-0.5 truncate">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
