'use client';

/**
 * Google Analytics 4 loader.
 *
 * Reads the Measurement ID from `lib/site-config.ts`. If it's empty,
 * the component no-ops. If set, it injects gtag.js, configures GA4
 * with IP anonymization, and lets `lib/analytics.ts` push events.
 *
 * Privacy:
 *   - `anonymize_ip: true` drops the last octet server-side
 *   - No PII in custom events (see `lib/analytics.ts`)
 *
 * Bundle cost: <1 KB minified. gtag.js loads async from googletagmanager.com.
 */

import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '@/lib/site-config';

export default function Analytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    if (window.gtag) return; // already loaded

    // dataLayer must exist before gtag is invoked
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      send_page_view: true,
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);
  }, []);

  return null;
}
