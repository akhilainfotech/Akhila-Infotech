'use client';

import React from 'react';
import { Cloud, Cpu, Shield, Layers, GitMerge, Compass, ExternalLink } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBlueprint: (key: string) => void;
  onSelectDomain: (domain: string) => void;
}

export default function ServicesSection({
  onOpenBlueprint,
  onSelectDomain,
}: ServicesSectionProps) {
  const services = [
    {
      key: 'cloud',
      icon: Cloud,
      title: 'Cloud Architecture & Migration',
      formDomain: 'Cloud Architecture & Migration',
      desc: 'Target landing zones on AWS, Azure, and Google Cloud with multi-region failover, Kubernetes orchestration, and FinOps cost attribution.',
      bullets: [
        'Zero-downtime workload cutover',
        'Multi-account landing zone governance',
        'FinOps compute optimization',
      ],
    },
    {
      key: 'ai',
      icon: Cpu,
      title: 'Enterprise AI & Automation',
      formDomain: 'Enterprise AI & Automation',
      desc: 'Operationalize private retrieval-augmented LLMs (RAG), vector databases, data lakehouses, and automated RPA business workflows safely.',
      bullets: [
        'Private LLM knowledge engines',
        'Snowflake & Databricks lakehouses',
        'AI governance & privacy guardrails',
      ],
    },
    {
      key: 'security',
      icon: Shield,
      title: 'Zero-Trust Cybersecurity & Compliance',
      formDomain: 'Zero-Trust Cybersecurity & Compliance',
      desc: 'Fortify cloud perimeters with identity micro-segmentation, continuous posture governance, pen-testing, and SOC 2 / ISO 27001 readiness.',
      bullets: [
        'IAM & Okta / Azure AD Zero-Trust',
        'SOC 2 Type II, HIPAA, PCI-DSS',
        'Cloud DevSecOps guardrails',
      ],
    },
    {
      key: 'engineering',
      icon: Layers,
      title: 'Full-Stack Enterprise Engineering',
      formDomain: 'Full-Stack Modernization',
      desc: 'Design and scale mission-critical web platforms, low-latency microservices, GraphQL federations, and distributed asynchronous messaging.',
      bullets: [
        'Microservices architecture (Go, Node, Java)',
        'Event-driven Kafka / RabbitMQ pipelines',
        'API mesh and secure gateway patterns',
      ],
    },
    {
      key: 'devops',
      icon: GitMerge,
      title: 'DevOps & SRE Automation',
      formDomain: 'DevOps/SRE',
      desc: 'Eliminate deployment friction through Terraform IaC, automated GitOps deployment pipelines, OpenTelemetry observability, and chaos testing.',
      bullets: [
        'Terraform & OpenTofu modular IaC',
        'ArgoCD & GitHub Actions CI/CD',
        '24/7 SRE telemetry and auto-remediation',
      ],
    },
    {
      key: 'advisory',
      icon: Compass,
      title: 'Strategic Digital Advisory',
      formDomain: 'Legacy Modernization',
      desc: 'Executive-level guidance for CIOs and technology founders, covering technical M&A due diligence, vendor audits, and legacy modernization roadmaps.',
      bullets: [
        'M&A technology risk evaluation',
        'Legacy monolith decomposition strategy',
        'Enterprise architecture governance',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 bg-grid-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0f2147] bg-indigo-50 border border-indigo-200/60 mb-3 whitespace-nowrap">
            Capabilities &amp; Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Enterprise IT Consulting Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tailored engineering blueprints and advisory designed to resolve scale bottlenecks, modernize legacy debt, and accelerate enterprise velocity.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map(svc => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.key}
                className="rounded-2xl bg-white p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#0f2147] group-hover:bg-[#0f2147] group-hover:text-white transition-colors flex items-center justify-center mb-5 shrink-0 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{svc.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">{svc.desc}</p>
                  <ul className="mt-4 space-y-2 text-xs text-slate-700">
                    {svc.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenBlueprint(svc.key)}
                    className="text-xs font-bold text-[#0f2147] hover:text-indigo-600 inline-flex items-center gap-1 transition whitespace-nowrap"
                  >
                    <span>View Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectDomain(svc.formDomain)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 text-[#0f2147] hover:bg-indigo-100 transition whitespace-nowrap"
                  >
                    Select →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
