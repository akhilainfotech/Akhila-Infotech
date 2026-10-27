import React from 'react';

export default function Methodology() {
  const steps = [
    {
      num: '01',
      timing: 'Weeks 1–2',
      title: 'Discovery & Audit',
      desc: 'Deep telemetry inspection across architecture, cloud spend, security posture, and bottlenecks to establish empirical baselines.',
      output: 'Enterprise Maturity Audit',
    },
    {
      num: '02',
      timing: 'Weeks 3–4',
      title: 'Architecture Blueprint',
      desc: 'Creation of vendor-neutral architecture diagrams, threat models, FinOps cost targets, and phased sprint schedules.',
      output: 'Target System Specification',
    },
    {
      num: '03',
      timing: 'Bi-Weekly Sprints',
      title: 'Agile Execution',
      desc: 'Dedicated Akhila engineering pods build and migrate workloads in automated sprints with integrated automated testing.',
      output: 'Production Increments',
    },
    {
      num: '04',
      timing: 'Ongoing SLA',
      title: 'Continuous Optimization',
      desc: 'Continuous SRE observability from Hyderabad, team upskilling, and quarterly FinOps compute rightsizing.',
      output: 'High Availability & Low TCO',
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-[#070f24] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 mb-3">
            Governance &amp; Delivery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            The Akhila 4-Step Consulting Methodology
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            A predictable, transparent framework designed to eliminate delivery risk across multi-quarter modernization projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(step => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-extrabold text-cyan-400">{step.num}</span>
                  <span className="text-[11px] font-mono uppercase bg-slate-800 text-slate-300 px-2.5 py-1 rounded">
                    {step.timing}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
              <p className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-cyan-300 font-mono">
                Output: {step.output}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
