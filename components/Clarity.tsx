'use client';

/**
 * Microsoft Clarity loader.
 *
 * Injects the Clarity tag only when `CLARITY_PROJECT_ID` is non-empty
 * (set in `lib/site-config.ts`). Until you paste your project ID there,
 * this component renders nothing.
 *
 * Clarity gives you:
 *   - Heatmaps (clicks + scroll depth)
 *   - Session recordings (real visits, playback in dashboard)
 *   - Built-in bot/spam filtering
 *   - Smart Insights (rage clicks, dead clicks, scroll patterns)
 *
 * Dashboard: https://clarity.microsoft.com/projects
 */

import { useEffect } from 'react';
import { CLARITY_PROJECT_ID } from '@/lib/site-config';

export default function Clarity() {
  useEffect(() => {
    if (!CLARITY_PROJECT_ID) return;
    if (document.getElementById('ms-clarity')) return;

    // Standard Microsoft Clarity tag, inlined for static-export friendliness
    (function (c: any, l: Document, a: string, r: string, i: string) {
      c[a] =
        c[a] ||
        function () {
          // eslint-disable-next-line prefer-rest-params
          (c[a].q = c[a].q || []).push(arguments);
        };
      const t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = 'https://www.clarity.ms/tag/' + i;
      t.id = 'ms-clarity';
      const y = l.getElementsByTagName(r)[0];
      y.parentNode!.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID);
  }, []);

  return null;
}
