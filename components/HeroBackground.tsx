'use client';

/**
 * Hero background — an interactive Canvas 2D particle network.
 *
 * Each frame:
 *   1. Each particle is gently pulled toward the pointer (inverse-distance
 *      force, capped at `MOUSE_RADIUS`).
 *   2. Velocity is damped, then position integrates with a tiny random
 *      brownian nudge so the field never settles into a static lattice.
 *   3. Particles within `LINK_DIST` of each other draw a connecting line
 *      with alpha proportional to proximity → looks like a neural network.
 *   4. Particles within `MOUSE_RADIUS` of the pointer also link to the
 *      pointer with a brighter line + radial glow.
 *
 * Performance discipline:
 *   - `IntersectionObserver` pauses the rAF loop when the hero scrolls off
 *     screen so the rest of the page doesn't pay for it on long mobile pages.
 *   - DPR is clamped to 2 so 3× retina screens don't tank framerate.
 *   - Particle/link counts are halved on `max-width: 768px`.
 *   - Pointer interactivity is disabled on touch devices (`hover: hover` is
 *     false) — finger-tracking via `pointermove` would feel laggy and weird.
 *   - `prefers-reduced-motion`: renders one static frame and stops.
 */

import { useEffect, useRef } from 'react';

type P = { x: number; y: number; vx: number; vy: number; r: number };

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Accessibility + capability gates
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canHover = window.matchMedia('(hover: hover)').matches;
    const isSmall = window.matchMedia('(max-width: 768px)').matches;

    // Tuned for ~60fps on mid-range hardware. Bumping COUNT past ~120
    // on desktop tips into noticeable jank because the link-drawing
    // step is O(n²).
    const COUNT = isSmall ? 36 : 90;
    const LINK_DIST = isSmall ? 90 : 140;
    const MOUSE_RADIUS = isSmall ? 0 : 200;

    let raf = 0;
    let running = true;
    let particles: P[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const dpr = () => Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const d = dpr();
      canvas!.width = Math.max(1, Math.floor(rect.width * d));
      canvas!.height = Math.max(1, Math.floor(rect.height * d));
      ctx!.setTransform(d, 0, 0, d, 0, 0);
    }

    function seed() {
      const rect = canvas!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 0.9 + Math.random() * 1.1,
      }));
    }

    function step() {
      if (!running) return;
      const rect = canvas!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx!.clearRect(0, 0, w, h);

      // Update
      for (const p of particles) {
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_RADIUS * MOUSE_RADIUS && d2 > 1) {
            const d = Math.sqrt(d2);
            const force = ((MOUSE_RADIUS - d) / MOUSE_RADIUS) * 0.035;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }
        p.vx *= 0.965;
        p.vy *= 0.965;
        p.x += p.vx + (Math.random() - 0.5) * 0.04;
        p.y += p.vy + (Math.random() - 0.5) * 0.04;
        if (p.x < -20) p.x = w + 20;
        else if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        else if (p.y > h + 20) p.y = -20;
      }

      // Particle-to-particle links
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const t = 1 - Math.sqrt(d2) / LINK_DIST;
            ctx!.strokeStyle = `rgba(56, 189, 248, ${t * 0.18})`;
            ctx!.lineWidth = 0.55;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // Cursor links
      if (mouse.active) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_RADIUS * MOUSE_RADIUS) {
            const t = 1 - Math.sqrt(d2) / MOUSE_RADIUS;
            ctx!.strokeStyle = `rgba(125, 211, 252, ${t * 0.55})`;
            ctx!.lineWidth = 0.85;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
          }
        }
      }

      // Nodes
      for (const p of particles) {
        let near = false;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          if (dx * dx + dy * dy < MOUSE_RADIUS * MOUSE_RADIUS) near = true;
        }
        ctx!.fillStyle = near ? 'rgba(125, 211, 252, 0.95)' : 'rgba(148, 163, 184, 0.42)';
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, near ? p.r + 0.8 : p.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Cursor glow
      if (mouse.active) {
        const g = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 80);
        g.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
        g.addColorStop(0.5, 'rgba(56, 189, 248, 0.08)');
        g.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(mouse.x, mouse.y, 80, 0, Math.PI * 2);
        ctx!.fill();

        ctx!.fillStyle = 'rgba(125, 211, 252, 1)';
        ctx!.beginPath();
        ctx!.arc(mouse.x, mouse.y, 2.6, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(step);
    }

    function onMove(e: PointerEvent) {
      if (!canHover) return;
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active =
        mouse.x >= 0 && mouse.x <= rect.width && mouse.y >= 0 && mouse.y <= rect.height;
    }
    function onLeave() {
      mouse.active = false;
    }

    let resizeRaf = 0;
    function onResize() {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        resize();
        seed();
      });
    }

    // Pause when out of view (perf on mobile scroll)
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !running) {
            running = true;
            step();
          } else if (!entry.isIntersecting && running) {
            running = false;
            cancelAnimationFrame(raf);
          }
        },
        { threshold: 0 }
      );
      observer.observe(canvas);
    }

    resize();
    seed();
    if (!reduced) step();
    else {
      // Static render once for reduced-motion users
      step();
      running = false;
      cancelAnimationFrame(raf);
    }

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    window.addEventListener('resize', onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      cancelAnimationFrame(resizeRaf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('resize', onResize);
      observer?.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
