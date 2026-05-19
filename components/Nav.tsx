'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const links = [
  { href: '#about', label: 'About', id: 'about', n: '01' },
  { href: '#stack', label: 'Stack', id: 'stack', n: '02' },
  { href: '#experience', label: 'Experience', id: 'experience', n: '03' },
  { href: '#certifications', label: 'Certifications', id: 'certifications', n: '04' },
  { href: '#projects', label: 'Projects', id: 'projects', n: '05' },
  { href: '#contact', label: 'Contact', id: 'contact', n: '06' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Active section observer.
  //
  // The asymmetric rootMargin (`-35% top, -55% bottom`) effectively defines
  // a horizontal "active zone" band centered slightly above the viewport
  // midline. A section is considered "in view" only when its content
  // crosses that band — this avoids the active link flickering between
  // two sections when one is mostly leaving and another is barely entering.
  //
  // When multiple sections satisfy the band (rare, on tall viewports), we
  // pick the one highest on screen — the one the user is most likely
  // currently reading.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const handleLink = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open
          ? 'backdrop-blur-md bg-bg0/80 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-5 sm:px-6 lg:px-10 py-4 sm:py-5">
        {/* Brand */}
        <a
          href="#top"
          onClick={handleLink}
          className="group flex flex-col leading-tight transition"
          aria-label="Leonardo Gonzalez — home"
        >
          <span className="text-[16px] sm:text-[17px] font-semibold tracking-tight text-ink-100 group-hover:text-sky-400 transition-colors">
            Leonardo Gonzalez
          </span>
          <span className="text-[10px] sm:text-[10.5px] font-mono tracking-eyebrow text-ink-400 uppercase">
            Cloud Architect
          </span>
        </a>

        {/* Center links — desktop */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2 text-sm">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[13px] transition-colors ${
                    isActive
                      ? 'text-ink-100'
                      : 'text-ink-400 hover:text-ink-100'
                  }`}
                >
                  <span className={`font-mono text-[10.5px] ${isActive ? 'text-sky-400' : 'text-sky-400/60'}`}>
                    {l.n}
                  </span>
                  <span>{l.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-md bg-white/[0.04] border border-white/8 -z-10"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={() => {
              trackEvent('cta_click', { location: 'nav', target: 'hire_me' });
              handleLink();
            }}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-b from-sky-400 to-sky-500 px-3.5 sm:px-4 py-2 text-[12.5px] sm:text-[13px] font-semibold text-bg0 shadow-[0_8px_24px_rgba(56,189,248,0.25)] hover:shadow-[0_12px_36px_rgba(56,189,248,0.4)] hover:-translate-y-px transition-all group"
          >
            Hire Me
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-ink-200 hover:text-sky-400 hover:border-sky-400/40 transition"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-white/5 bg-bg0/95 backdrop-blur-md"
          >
            <ul className="mx-auto max-w-[1240px] px-5 py-2">
              {links.map((l) => {
                const isActive = active === l.id;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={handleLink}
                      className={`flex items-center gap-3 py-3 border-b border-white/5 last:border-b-0 text-[15px] transition-colors ${
                        isActive ? 'text-sky-400' : 'text-ink-200 hover:text-sky-400'
                      }`}
                    >
                      <span className="font-mono text-[11px] tracking-eyebrow text-sky-400/70 w-7">
                        {l.n}
                      </span>
                      <span className="font-medium">{l.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
