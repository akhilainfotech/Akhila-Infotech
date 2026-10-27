import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, domain, timeline, scope, honeypot, refId } = body;

    // 1. Honeypot check
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Acknowledged' });
    }

    // 2. Validate required fields
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Valid name required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'Valid corporate email required' }, { status: 400 });
    }

    if (!company || company.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Company name required' }, { status: 400 });
    }

    if (!domain) {
      return NextResponse.json({ success: false, error: 'Domain selection required' }, { status: 400 });
    }

    if (!scope || scope.trim().length < 15) {
      return NextResponse.json({ success: false, error: 'Scope details required (min 15 chars)' }, { status: 400 });
    }

    const referenceId = refId || 'AKH-2026-' + Math.floor(1000 + Math.random() * 9000);

    // In a live production environment with RESEND_API_KEY or SMTP credentials,
    // this would send an email to info@akhilainfotech.com directly.
    console.log(`[Consultation Request Logged] Ref: ${referenceId} | ${domain} | ${company} (${email})`);

    return NextResponse.json({
      success: true,
      refId: referenceId,
      dispatchedTo: 'info@akhilainfotech.com',
      operationalHours: '9:00 AM – 6:00 PM IST',
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
