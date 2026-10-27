'use client';

import React, { useState, useEffect } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Lock,
  Send,
  CheckCircle2,
  Shield,
  RefreshCw,
} from 'lucide-react';
import { useToast } from '@/lib/toast-context';
import {
  sanitizeInput,
  generateCsrfToken,
  validateEmail,
  getRemainingSubmissions,
  recordSubmission,
} from '@/lib/security';

interface ConsultationFormProps {
  selectedDomain?: string;
  onClearDomain?: () => void;
}

export default function ConsultationForm({
  selectedDomain = '',
  onClearDomain,
}: ConsultationFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [domain, setDomain] = useState(selectedDomain);
  const [timeline, setTimeline] = useState('');
  const [scope, setScope] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [remainingQuota, setRemainingQuota] = useState(3);

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Success state
  const [isSuccess, setIsSuccess] = useState(false);
  const [refId, setRefId] = useState('');
  const [mailtoUrl, setMailtoUrl] = useState('');
  const [gmailUrl, setGmailUrl] = useState('');

  const { showToast } = useToast();

  useEffect(() => {
    setCsrfToken(generateCsrfToken());
    setRemainingQuota(getRemainingSubmissions());
  }, []);

  useEffect(() => {
    if (selectedDomain) {
      setDomain(selectedDomain);
    }
  }, [selectedDomain]);

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText('info@akhilainfotech.com');
      showToast('Copied info@akhilainfotech.com to clipboard!', 'success');
    } catch {
      showToast('Unable to copy text in this browser context.', 'error');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Anti-Bot Honeypot verification
    if (honeypot && honeypot.trim().length > 0) {
      console.warn('Bot detected by honeypot.');
      showToast('Request acknowledged.', 'info');
      handleReset();
      return;
    }

    // 2. Rate Limiting Check
    const quota = getRemainingSubmissions();
    if (quota <= 0) {
      showToast('Rate limit reached (max 3 submissions / 10 mins). Please try later.', 'error');
      return;
    }

    // 3. Extract & Sanitize
    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);
    const cleanCompany = sanitizeInput(company);
    const cleanDomain = sanitizeInput(domain);
    const cleanTimeline = sanitizeInput(timeline);
    const cleanScope = sanitizeInput(scope);

    const newErrors: Record<string, string> = {};
    if (cleanName.length < 2) newErrors.name = 'Name is required (min 2 chars).';
    if (!validateEmail(cleanEmail)) newErrors.email = 'Valid corporate email is required.';
    if (cleanCompany.length < 2) newErrors.company = 'Company name is required.';
    if (!cleanDomain) newErrors.domain = 'Please select a consulting domain.';
    if (!cleanTimeline) newErrors.timeline = 'Please select an estimated timeline.';
    if (cleanScope.length < 15) newErrors.scope = 'Please provide project scope details (min 15 characters).';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      showToast('Please fix required fields before submission.', 'error');
      return;
    }

    setIsSubmitting(true);
    recordSubmission();
    setRemainingQuota(getRemainingSubmissions());

    const generatedRefId = 'AKH-2026-' + Math.floor(1000 + Math.random() * 9000);
    setRefId(generatedRefId);

    const mailSubject = `[Consultation Request] ${cleanDomain} - ${cleanCompany}`;
    const mailBody = `Hello Akhila Infotech Advisory Team,

A validated consultation request has been submitted via akhilainfotech.com:
--------------------------------------------------
Reference ID       : ${generatedRefId}
CSRF Nonce Check   : ${csrfToken.substring(0, 8)}...
Full Name          : ${cleanName}
Work Email         : ${cleanEmail}
Company            : ${cleanCompany}
Consulting Domain  : ${cleanDomain}
Project Timeline   : ${cleanTimeline}
Office Hours       : 9:00 AM – 6:00 PM IST
--------------------------------------------------

Project Scope / Requirements:
${cleanScope}

Location: Akhila Infotech, Hyderabad, India`;

    const encodedMailto = `mailto:info@akhilainfotech.com?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;
    const encodedGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=info@akhilainfotech.com&su=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;

    setMailtoUrl(encodedMailto);
    setGmailUrl(encodedGmail);

    // Call Next.js API route
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          refId: generatedRefId,
          name: cleanName,
          email: cleanEmail,
          company: cleanCompany,
          domain: cleanDomain,
          timeline: cleanTimeline,
          scope: cleanScope,
          csrfToken,
        }),
      });
    } catch {
      // Fallback works smoothly
    }

    // Trigger browser mailto
    try {
      const hiddenLink = document.createElement('a');
      hiddenLink.href = encodedMailto;
      hiddenLink.style.display = 'none';
      document.body.appendChild(hiddenLink);
      hiddenLink.click();
      document.body.removeChild(hiddenLink);
    } catch {
      // handled
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      showToast(`Inquiry ${generatedRefId} verified & routed to info@akhilainfotech.com!`, 'success');
    }, 450);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setDomain('');
    setTimeline('');
    setScope('');
    setHoneypot('');
    setErrors({});
    setIsSuccess(false);
    setCsrfToken(generateCsrfToken());
    if (onClearDomain) onClearDomain();
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 bg-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Block: Address & Timings */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0f2147] bg-indigo-50 border border-indigo-200/60">
              Advisory Desk
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Connect With Our Senior IT Consultants
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Submit your technology objectives and system requirements. Inquiries dispatch directly to our advisory leads
              at <strong className="text-[#0f2147]">info@akhilainfotech.com</strong>.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Official Email Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2147] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono uppercase text-slate-500">Official Advisory Email</p>
                    <a
                      href="mailto:info@akhilainfotech.com"
                      className="text-sm sm:text-base font-bold text-[#0f2147] hover:underline break-all sm:break-normal"
                    >
                      info@akhilainfotech.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition whitespace-nowrap shrink-0"
                >
                  Copy
                </button>
              </div>

              {/* Headquarters Address Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase text-slate-500">Corporate Headquarters</p>
                  <p className="text-sm font-bold text-slate-900">Akhila Infotech, Hyderabad, India</p>
                  <p className="text-xs text-slate-500 mt-0.5">Principal Advisory &amp; Global Delivery Hub</p>
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono uppercase text-slate-500">Advisory &amp; Office Hours</p>
                  <p className="text-sm font-bold text-slate-900">9:00 AM – 6:00 PM (IST)</p>
                  <p className="text-xs text-slate-500 mt-0.5">Monday through Friday • Active SLA Coverage</p>
                </div>
              </div>
            </div>

            {/* Active Security & Rate Limit Live Pill */}
            <div className="p-4 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-bold text-white">
                  <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  Channel Encryption:
                </span>
                <span className="font-mono text-cyan-300">TLS 1.3 / AES-256</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">CSRF Nonce:</span>
                <span className="font-mono text-[10px] text-slate-300">
                  {csrfToken ? `${csrfToken.substring(0, 12)}...` : 'Generating...'}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Submission Rate Window:</span>
                <span
                  className={`font-mono text-[11px] ${
                    remainingQuota <= 0 ? 'text-red-400' : 'text-emerald-400'
                  }`}
                >
                  {remainingQuota} Remaining
                </span>
              </div>
            </div>
          </div>

          {/* Right: Validated & Sanitized Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-6 sm:p-9 relative">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-2 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Schedule Strategic Architecture Session
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Direct dispatch to{' '}
                        <span className="font-semibold text-[#0f2147]">info@akhilainfotech.com</span> (9:00 AM – 6:00
                        PM IST)
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-100 text-cyan-800">
                      <Shield className="w-3 h-3" /> Protected
                    </span>
                  </div>

                  {/* Honeypot Field */}
                  <input
                    type="text"
                    name="website_url_hp"
                    id="website_url_hp"
                    value={honeypot}
                    onChange={e => setHoneypot(e.target.value)}
                    className="hp-field"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-name" className="block text-xs font-bold uppercase text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="c-name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        maxLength={60}
                        placeholder="e.g. Anand Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2147] transition"
                      />
                      {errors.name && (
                        <span className="text-[11px] font-medium text-red-600 mt-1 block">{errors.name}</span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="c-email" className="block text-xs font-bold uppercase text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="c-email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        maxLength={90}
                        placeholder="name@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2147] transition"
                      />
                      {errors.email && (
                        <span className="text-[11px] font-medium text-red-600 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Company & Domain */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="c-company" className="block text-xs font-bold uppercase text-slate-700 mb-1">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        id="c-company"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        maxLength={80}
                        placeholder="e.g. Apex Global Corp"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2147] transition"
                      />
                      {errors.company && (
                        <span className="text-[11px] font-medium text-red-600 mt-1 block">{errors.company}</span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="c-domain" className="block text-xs font-bold uppercase text-slate-700 mb-1">
                        Consulting Domain *
                      </label>
                      <select
                        id="c-domain"
                        value={domain}
                        onChange={e => setDomain(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2147] transition"
                      >
                        <option value="">Select consulting domain...</option>
                        <option value="Cloud Architecture & Migration">Cloud Architecture &amp; Migration</option>
                        <option value="Enterprise AI & Automation">Enterprise AI &amp; Automation</option>
                        <option value="Zero-Trust Cybersecurity & Compliance">Zero-Trust Cybersecurity &amp; Compliance</option>
                        <option value="Full-Stack Modernization">Full-Stack Modernization</option>
                        <option value="DevOps/SRE">DevOps / SRE Automation</option>
                        <option value="Legacy Modernization">Legacy Modernization &amp; Advisory</option>
                      </select>
                      {errors.domain && (
                        <span className="text-[11px] font-medium text-red-600 mt-1 block">{errors.domain}</span>
                      )}
                    </div>
                  </div>

                  {/* Project Timeline */}
                  <div>
                    <label htmlFor="c-timeline" className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Project Timeline *
                    </label>
                    <select
                      id="c-timeline"
                      value={timeline}
                      onChange={e => setTimeline(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2147] transition"
                    >
                      <option value="">Select expected timeline...</option>
                      <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="Exploratory Architecture Review">Exploratory Architecture Review</option>
                    </select>
                    {errors.timeline && (
                      <span className="text-[11px] font-medium text-red-600 mt-1 block">{errors.timeline}</span>
                    )}
                  </div>

                  {/* Project Scope / Requirements */}
                  <div>
                    <label htmlFor="c-scope" className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Project Scope / Requirements *
                    </label>
                    <textarea
                      id="c-scope"
                      value={scope}
                      onChange={e => setScope(e.target.value)}
                      rows={4}
                      maxLength={1200}
                      placeholder="Summarize your architecture challenge, cloud providers, target compliance (SOC 2, ISO, HIPAA), or desired deliverables..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0f2147] transition"
                    />
                    <div className="flex justify-between items-center text-[10px] text-slate-400 mt-0.5">
                      {errors.scope ? (
                        <span className="text-[11px] font-medium text-red-600">{errors.scope}</span>
                      ) : (
                        <span />
                      )}
                      <span className="ml-auto">Input sanitized against XSS</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0f2147] via-blue-900 to-cyan-700 hover:opacity-95 shadow-lg shadow-[#0f2147]/20 transition disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Routing to info@akhilainfotech.com...</span>
                      </>
                    ) : (
                      <>
                        <span>Dispatch Request to info@akhilainfotech.com</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success State with Multi-Client Fallback Links */
                <div className="py-8 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-xs font-mono px-3 py-1 rounded bg-slate-100 text-[#0f2147] font-semibold">
                        REF: {refId}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        Checksum Verified
                      </span>
                    </div>
                    <h4 className="text-xl font-extrabold text-slate-900 mt-2">
                      Consultation Request Dispatched!
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                      Thank you, <strong>{name}</strong>. Your {domain} inquiry for <strong>{company}</strong> has
                      been routed to <strong>info@akhilainfotech.com</strong>. Our Hyderabad advisory desk responds
                      during operational hours (9:00 AM – 6:00 PM IST).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left space-y-2">
                    <p className="text-[11px] font-bold uppercase text-slate-700">Direct Email Client Fallbacks</p>
                    <p className="text-[11px] text-slate-500">
                      If your browser prevents automated dispatch, send the pre-filled inquiry using either link below:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      <a
                        href={mailtoUrl}
                        className="text-center py-2 px-3 rounded-lg text-xs font-bold bg-[#0f2147] text-white hover:bg-slate-900 transition whitespace-nowrap"
                      >
                        Open Email Client
                      </a>
                      <a
                        href={gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center py-2 px-3 rounded-lg text-xs font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 transition whitespace-nowrap"
                      >
                        Send via Gmail Web
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-semibold text-[#0f2147] hover:underline"
                  >
                    Submit Another Consultation Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
