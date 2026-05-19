'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Folder } from 'lucide-react';
import { projects } from '@/lib/data';
import { SectionLabel } from './About';
import CountUp from './CountUp';

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 scroll-mt">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <SectionLabel kicker="05 // projects" />

        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <h2 className="display text-[clamp(2.2rem,4.8vw,4rem)] max-w-[22ch]">
            Selected <span className="text-sky-400">work.</span>
          </h2>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-sky-400 text-[clamp(2.4rem,5vw,4rem)] leading-none tabular-nums">
              <CountUp to={80} suffix="+" duration={2000} />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] font-mono uppercase tracking-eyebrow text-ink-400">
                Projects shipped
              </span>
              <span className="text-[11px] font-mono uppercase tracking-eyebrow text-ink-500">
                to date
              </span>
            </div>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-ink-300 text-[16.5px] sm:text-[18px] leading-[1.7]">
          A few engagements that stand out — most of my work is quiet, ongoing
          infrastructure and Workspace administration that never appears on a
          case-study page.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card card-accent p-6 relative overflow-hidden group"
            >
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full opacity-0 group-hover:opacity-20 blur-2xl bg-sky-400 transition-opacity duration-500" />
              <div className="relative flex flex-col h-full">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-400/25 bg-sky-400/8 text-sky-400">
                    <Folder className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-ink-500 group-hover:text-sky-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
                <h3 className="mt-5 font-semibold tracking-tight text-[18px] leading-snug text-ink-100">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-ink-300 flex-1">
                  {p.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] rounded-md border border-white/8 bg-white/[0.02] px-2 py-1 text-ink-400 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
