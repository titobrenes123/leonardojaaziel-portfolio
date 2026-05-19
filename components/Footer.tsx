import { Sparkles, MapPin, Github, Linkedin } from 'lucide-react';
import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative mt-16 sm:mt-24 border-t border-white/5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Brand block */}
          <div>
            <h3 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-bold tracking-tight leading-[1.02] text-ink-100">
              Leonardo <span className="text-sky-400">Jaaziel</span>.
            </h3>
            <p className="mt-5 max-w-md text-[16px] sm:text-[17px] leading-[1.7] text-ink-300">
              Crafted with care in El Salvador. Shipped to wherever your cloud
              happens to live. Open to new architectures, migrations, and the
              occasional 3&nbsp;a.m. deliverability fire.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/8 px-3 py-1.5 text-[11px] font-mono uppercase tracking-eyebrow text-sky-400">
                <Sparkles className="h-3 w-3" />
                Vibe Coder
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-mono uppercase tracking-eyebrow text-ink-300">
                Google Cloud Architect
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-mono uppercase tracking-eyebrow text-ink-300">
                <MapPin className="h-3 w-3" />
                El Salvador · LATAM
              </span>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10.5px] font-mono uppercase tracking-eyebrow text-ink-400">
                Reach me
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 inline-flex items-center text-[17px] sm:text-[19px] font-semibold tracking-tight text-ink-100 hover:text-sky-400 transition"
              >
                {profile.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 bg-white/[0.02] text-ink-300 hover:text-sky-400 hover:border-sky-400/40 transition"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/8 bg-white/[0.02] text-ink-300 hover:text-sky-400 hover:border-sky-400/40 transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="font-mono text-[11.5px] sm:text-[12px] uppercase tracking-eyebrow text-ink-400">
            <span className="text-ink-500">&copy;</span> {new Date().getFullYear()}{' '}
            <span className="text-ink-300">Leonardo Jaaziel</span>
            <span className="mx-2 text-ink-600">/</span>
            All systems his own
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-ink-500">
            <span className="hidden md:inline">handcrafted with</span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition"
            >
              Next.js
            </a>
            <span className="text-ink-600">·</span>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition"
            >
              Tailwind
            </a>
            <span className="text-ink-600">·</span>
            <a
              href="https://www.framer.com/motion/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition"
            >
              Motion
            </a>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-ink-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint-400 animate-pulseDot" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
