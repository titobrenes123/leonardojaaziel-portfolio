'use client';

/**
 * Firebase-aware Google Analytics 4 loader.
 *
 * Reads the Firebase auto-config exposed by Firebase Hosting at
 * `/__/firebase/init.json`. When Google Analytics is enabled on the
 * Firebase project, that endpoint includes a `measurementId` field
 * (e.g. `G-XXXXXXXXXX`). This component:
 *
 *   1. Fetches the config on mount (client-only — `'use client'`).
 *   2. If a measurementId is present, injects gtag.js and configures
 *      a GA4 pageview with IP anonymization.
 *   3. If Analytics is not enabled (no measurementId), no-ops silently.
 *
 * This means the static export ships without a hardcoded GA ID — you
 * enable Analytics once in the Firebase Console and the site auto-picks
 * it up on the next visit without a rebuild.
 *
 * Privacy:
 *   - `anonymize_ip: true` (drops the last octet on Google's side
 *     before storage). Reasonable default for portfolio traffic.
 *   - No PII is sent in custom events — see `lib/analytics.ts`.
 *
 * Bundle cost: <2 KB minified. gtag.js itself loads async from
 * googletagmanager.com.
 */

import { useEffect } from 'react';

type FirebaseAutoConfig = {
  measurementId?: string;
  projectId?: string;
};

export default function Analytics() {
  useEffect(() => {
    let cancelled = false;

    fetch('/__/firebase/init.json', { cache: 'no-store' })
      .then((r) => (r.ok ? (r.json() as Promise<FirebaseAutoConfig>) : null))
      .then((cfg) => {
        if (cancelled || !cfg?.measurementId) return;
        if (window.gtag) return; // already loaded
        loadGtag(cfg.measurementId);
      })
      .catch(() => {
        // Silent — analytics is best-effort, not critical path
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}

function loadGtag(measurementId: string) {
  // dataLayer must exist before gtag is invoked
  window.dataLayer = window.dataLayer || [];
  // Define gtag as a thin push wrapper — what Google's official snippet does
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    send_page_view: true,
  });

  // Inject the gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}
