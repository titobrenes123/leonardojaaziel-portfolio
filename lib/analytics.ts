/**
 * Analytics helpers — thin wrapper around gtag.js (loaded by
 * `components/Analytics.tsx`). All functions no-op gracefully when
 * gtag is not available (SSR, before script loads, or user with an
 * ad blocker).
 *
 * Usage:
 *   import { trackEvent } from '@/lib/analytics';
 *   trackEvent('resume_download', { format: 'pdf' });
 *
 * Event naming follows the GA4 convention: `snake_case`, ≤40 chars.
 * Parameters likewise — keep keys short and snake_case.
 */

type GtagFn = (
  command: 'event' | 'config' | 'js' | 'set' | 'consent',
  ...args: unknown[]
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {}
) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}

export function trackPageview(path: string, measurementId?: string) {
  if (typeof window === 'undefined' || !window.gtag) return;
  if (!measurementId) return;
  window.gtag('config', measurementId, { page_path: path });
}
