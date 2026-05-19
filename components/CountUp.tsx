'use client';

/**
 * Count-up number that animates from 0 → `to` the first time it enters
 * the viewport.
 *
 *   - `useInView` from Framer Motion fires once when the element is
 *     within the viewport rect inset by 80px from the bottom — this gives
 *     a small lead so the animation starts as the stat scrolls into the
 *     comfortable reading area, not the moment it crosses the fold.
 *   - The interpolation uses easeOutCubic (`1 - (1-t)³`) so the count
 *     decelerates as it approaches the final value — feels less mechanical
 *     than a linear ramp.
 *   - Users with `prefers-reduced-motion: reduce` get the final value
 *     immediately, no rAF loop.
 *
 * Suffix is appended verbatim (e.g. `+`) so "80+" reads naturally during
 * the animation: 0, 1, 2, ... 80 → renders 0+, 1+, ..., 80+.
 */

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function CountUp({ to, suffix = '', duration = 1500, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (typeof window === 'undefined') return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setValue(to);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
