# Akhila Infotech — Enterprise IT Consulting & Zero-Trust Security Portal

A high-assurance, production-ready enterprise IT consulting and cybersecurity web platform built on the **Vercel Next.js stack** (Next.js 14 App Router, TypeScript, Tailwind CSS, Lucide React).

---

## 🏛️ Company Information
- **Organization**: Akhila Infotech
- **Headquarters**: Hyderabad, India
- **Advisory & Office Hours**: Monday – Friday, 9:00 AM – 6:00 PM (IST)
- **Official Advisory Email**: `info@akhilainfotech.com`
- **Security Posture**: 99.8% Zero-Trust Posture

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom brand palettes & dark theme grid patterns
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment Platform**: [Vercel](https://vercel.com/) with native `vercel.json` security headers

### Directory Layout
```
├── public/
│   └── favicon.svg                  # High-fidelity circular 'Ai' navy monogram
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout, Google Fonts (Inter + JetBrains Mono), SEO metadata
│   │   ├── page.tsx                 # Main Enterprise Landing Page
│   │   ├── globals.css              # Global styles, honeypot classes, grid patterns
│   │   ├── admin/
│   │   │   └── page.tsx             # Dedicated /admin Operations & Telemetry Console
│   │   └── api/
│   │       ├── contact/
│   │       │   └── route.ts         # Consultation submission handler with validation & honeypot check
│   │       └── inspect-domain/
│   │           └── route.ts         # Email & Domain DNSSEC/SPF/DKIM/DMARC inspection API
│   ├── components/
│   │   ├── AiLogo.tsx               # Reusable SVG monogram logo
│   │   ├── TopBar.tsx               # Security status bar, TLS 1.3 badge, operating hours, email copy
│   │   ├── Navbar.tsx               # Sticky glassmorphism header & responsive mobile drawer
│   │   ├── Hero.tsx                 # Hero section, certifications, metrics
│   │   ├── TelemetryNode.tsx        # Live security node card with integrity bars
│   │   ├── SecurityFeatures.tsx     # 4 Hardened defensive capabilities
│   │   ├── ServicesSection.tsx      # 6 Consulting pillars with interactive Blueprint modals
│   │   ├── Methodology.tsx          # 4-step consulting governance framework
│   │   ├── CaseStudies.tsx          # Filterable industry case studies (FinTech, HealthTech, etc.)
│   │   ├── ConsultationForm.tsx     # Validated booking desk with honeypot & mailto fallback
│   │   ├── Footer.tsx               # Corporate footer with Hyderabad HQ details & audit triggers
│   │   └── modals/
│   │       ├── SecurityPortalModal.tsx # Corporate Login (2FA), Email Inspector, Session Telemetry
│   │       ├── BlueprintModal.tsx      # Architecture deliverables & KPIs modal
│   │       ├── AuditModal.tsx          # Security Header Audit Checklist modal
│   │       └── AdminModal.tsx          # Quick /admin gateway modal
│   └── lib/
│       ├── blueprints.ts            # Architectural deliverables & KPI definitions
│       ├── security.ts              # Anti-XSS sanitization, CSRF nonces, rate-limiter
│       └── toast-context.tsx        # Native toast notification system
├── vercel.json                      # Vercel deployment configuration & HSTS/CSP security headers
├── next.config.mjs                  # Next.js security headers & runtime settings
├── tailwind.config.ts               # Brand tokens (#0f2147 navy, deep cyan accents)
└── package.json
```

---

## 🛡️ Built-in Security Features

1. **Anti-XSS Input Sanitization**: Client & server scrubbing of all text streams against script execution and tag injection.
2. **Anti-Bot Honeypot**: Silent honeypot field (`website_url_hp`) detects and drops malicious web scrapers.
3. **Session Rate Limiter**: Client session throttling restricts users to a maximum of 3 inquiries per 10 minutes.
4. **Dynamic CSRF Nonce & Checksum**: Crytographically pseudo-random nonces initialized per session.
5. **Email & Domain DNS Integrity Inspector**: Live simulation and validation of SPF records (`v=spf1`), DKIM 2048-bit RSA alignment, and strict DMARC (`p=reject`).
6. **Hardened HTTP Headers**: Strict HSTS (`max-age=31536000`), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, and `Content-Security-Policy`.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production (Vercel Ready)
```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel

### Option A: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B: Via GitHub / GitLab / Bitbucket
1. Push this repository to GitHub.
2. Import the repository into your [Vercel Dashboard](https://vercel.com/new).
3. The configuration in `vercel.json` and `next.config.mjs` will automatically be detected and optimized for Vercel Edge & Serverless functions.
