import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ToastProvider } from '@/lib/toast-context';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0f2147',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Akhila Infotech | Enterprise IT Consulting & Zero-Trust Security',
  description:
    'Akhila Infotech delivers strategic IT consulting, cloud modernization, zero-trust cybersecurity, and enterprise mail integrity checks from Hyderabad, India.',
  keywords: [
    'IT Consulting',
    'Zero-Trust Architecture',
    'Cloud Migration',
    'Enterprise AI',
    'Cybersecurity',
    'Hyderabad IT Consulting',
    'DevOps SRE',
    'SOC 2',
    'ISO 27001',
  ],
  authors: [{ name: 'Akhila Infotech', url: 'https://akhilainfotech.com' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Akhila Infotech | Enterprise IT Consulting & Zero-Trust Security',
    description:
      'Strategic IT consulting, cloud modernization, enterprise AI, and zero-trust cybersecurity from Hyderabad, India.',
    url: 'https://akhilainfotech.com',
    siteName: 'Akhila Infotech',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-white overflow-x-hidden selection:bg-[#0f2147] selection:text-white">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
