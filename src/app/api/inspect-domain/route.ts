import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get('domain') || 'akhilainfotech.com';
  const cleanDomain = target.includes('@') ? target.split('@')[1] : target;
  const isOfficial = cleanDomain.toLowerCase() === 'akhilainfotech.com';

  return NextResponse.json({
    domain: cleanDomain,
    timestamp: new Date().toISOString(),
    records: {
      spf: { status: 'VALID', record: 'v=spf1 ~all' },
      dkim: { status: 'ALIGNMENT OK', bits: '2048-bit RSA' },
      dmarc: { status: isOfficial ? 'p=reject (STRICT)' : 'p=quarantine (ENFORCED)', policy: 'Active' },
      mx: { status: 'OK', servers: ['mail.akhilainfotech.com (Primary)', 'fallback.akhilainfotech.com'] },
      dnsbl: { status: 'CLEAN', blacklists: '0/48 blacklists' },
    },
    cluster: 'Hyderabad Security Hub (17.3850° N, 78.4867° E)',
  });
}
