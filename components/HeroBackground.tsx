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
 *   4. Particles within `MOUSE_RADIUS` of the pointer link to the pointer
 *      with a brighter line + radial glow.
 *
 * Performance discipline (tuned to keep INP / main-thread time low):
 *   - Runs at 60 FPS for a smooth field. The heavy lifting is kept cheap
 *     by the batched-draw strategy below rather than by throttling frames.
 *   - Lines are drawn in alpha BUCKETS: instead of one beginPath()/stroke()
 *     per segment (hundreds of GPU calls), segments are grouped into a few
 *     Path2D objects by proximity and stroked once each. Same look, ~99%
 *     fewer stroke calls.
 *   - Nodes are filled in two passes (far / near) instead of per-node.
 *   - `IntersectionObserver` pauses the loop when the hero scrolls off
 *     screen so the rest of the page never pays for it.
 *   - DPR clamped to 2; particle/link counts scale down on small screens.
 *   - Pointer interactivity is disabled on touch devices (`hover: hover`).
 *   - `prefers-reduced-motion`: renders one static frame and stops.
 */

import { useEffect, useRef } from 'react';

type P = { x: number; y: number; vx: number; vy: number; r: number };

const FPS = 60;
const FRAME_MS = 1000 / FPS;
const LINK_BUCKETS = 4; // alpha quantization for batched line strokes

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

    // Counts trimmed from the previous 90/36 to cut per-frame work without
    // visibly thinning the field.
    const COUNT = isSmall ? 28 : 70;
    const LINK_DIST = isSmall ? 90 : 125;
    const MOUSE_RADIUS = isSmall ? 0 : 200;
    const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
    const MOUSE_RADIUS_SQ = MOUSE_RADIUS * MOUSE_RADIUS;

    let raf = 0;
    let running = true;
    let lastFrame = 0;
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

    function render() {
      const rect = canvas!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx!.clearRect(0, 0, w, h);

      // --- Update positions ---
      for (const p of particles) {
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_RADIUS_SQ && d2 > 1) {
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

      // --- Particle-to-particle links, batched into alpha buckets ---
      const linkPaths = Array.from({ length: LINK_BUCKETS }, () => new Path2D());
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST_SQ) {
            const t = 1 - Math.sqrt(d2) / LINK_DIST; // 0..1 (closer = brighter)
            const bucket = Math.min(LINK_BUCKETS - 1, (t * LINK_BUCKETS) | 0);
            const path = linkPaths[bucket];
            path.moveTo(a.x, a.y);
            path.lineTo(b.x, b.y);
          }
        }
      }
      ctx!.lineWidth = 0.55;
      for (let k = 0; k < LINK_BUCKETS; k++) {
        const alpha = ((k + 0.5) / LINK_BUCKETS) * 0.18;
        ctx!.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx!.stroke(linkPaths[k]);
      }

      // --- Cursor links (few; one batched path) ---
      if (mouse.active) {
        const cursorPath = new Path2D();
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          if (dx * dx + dy * dy < MOUSE_RADIUS_SQ) {
            cursorPath.moveTo(p.x, p.y);
            cursorPath.lineTo(mouse.x, mouse.y);
          }
        }
        ctx!.strokeStyle = 'rgba(125, 211, 252, 0.32)';
        ctx!.lineWidth = 0.85;
        ctx!.stroke(cursorPath);
      }

      // --- Nodes: two fill passes (far, then near) ---
      const farPath = new Path2D();
      const nearPath = new Path2D();
      for (const p of particles) {
        let near = false;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          if (dx * dx + dy * dy < MOUSE_RADIUS_SQ) near = true;
        }
        const target = near ? nearPath : farPath;
        const r = near ? p.r + 0.8 : p.r;
        target.moveTo(p.x + r, p.y);
        target.arc(p.x, p.y, r, 0, Math.PI * 2);
      }
      ctx!.fillStyle = 'rgba(148, 163, 184, 0.42)';
      ctx!.fill(farPath);
      ctx!.fillStyle = 'rgba(125, 211, 252, 0.95)';
      ctx!.fill(nearPath);

      // --- Cursor glow ---
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
    }

    function loop(now: number) {
      if (!running) return;
      raf = requestAnimationFrame(loop);
      // Frame-rate cap: skip frames that arrive sooner than FRAME_MS.
      if (now - lastFrame < FRAME_MS) return;
      lastFrame = now;
      render();
    }

    function start() {
      lastFrame = 0;
      raf = requestAnimationFrame(loop);
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

    // Pause when out of view (perf on long scrolls)
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !running) {
            running = true;
            start();
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
    if (!reduced) {
      start();
    } else {
      // Static single frame for reduced-motion users
      render();
      running = false;
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
