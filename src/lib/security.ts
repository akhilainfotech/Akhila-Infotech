export function sanitizeInput(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '') // Strip HTML tags
    .replace(/javascript:/gi, '') // Strip script schemes
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/on\w+=/gi, '') // Strip onload= etc
    .trim();
}

export function generateCsrfToken(): string {
  if (typeof window === 'undefined') {
    return 'akh_token_' + Math.random().toString(36).substring(2, 15);
  }
  const arr = new Uint8Array(16);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, b => b.toString(16).padStart(2, '0')).join('');
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

const RATE_LIMIT_KEY = 'akhila_submit_timestamps';
const MAX_SUBMISSIONS = 3;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

export function getRemainingSubmissions(): number {
  if (typeof window === 'undefined') return MAX_SUBMISSIONS;
  const now = Date.now();
  let stamps: number[] = [];
  try {
    stamps = JSON.parse(sessionStorage.getItem(RATE_LIMIT_KEY) || '[]');
  } catch {
    stamps = [];
  }
  stamps = stamps.filter(t => now - t < WINDOW_MS);
  sessionStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(stamps));
  return Math.max(0, MAX_SUBMISSIONS - stamps.length);
}

export function recordSubmission(): void {
  if (typeof window === 'undefined') return;
  const now = Date.now();
  let stamps: number[] = [];
  try {
    stamps = JSON.parse(sessionStorage.getItem(RATE_LIMIT_KEY) || '[]');
  } catch {
    stamps = [];
  }
  stamps.push(now);
  sessionStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(stamps));
}
