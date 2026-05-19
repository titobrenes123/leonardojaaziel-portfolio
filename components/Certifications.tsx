'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { certifications } from '@/lib/data';
import { SectionLabel } from './About';

// Color-coded by certification tier — same accent pattern as Google's
// own certification ladder docs: Professional > Associate > Foundational.
const levelTone: Record<string, string> = {
  Professional: 'text-sky-400 border-sky-400/30 bg-sky-400/5',
  Associate: 'text-mint-400 border-mint-400/30 bg-mint-400/5',
  Foundational: 'text-violet-400 border-violet-400/30 bg-violet-400/5',
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-24 scroll-mt">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <SectionLabel kicker="04 // certifications" />
        <h2 className="display mt-5 text-[clamp(2.2rem,4.8vw,4rem)] max-w-[26ch]">
          Certified on the platform <span className="text-sky-400">I build on.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-ink-300 text-[17px] sm:text-[18.5px] leading-[1.7]">
          Four Google Cloud credentials underneath every engagement — covering cloud
          architecture, operations, Workspace administration, and the foundations
          underneath them. Each badge links to its public Credly verification.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {certifications.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="card card-accent p-5 sm:p-6 group flex flex-col"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                <a
                  href={c.credly}
                  target="_blank"
                  rel="noreferrer"
                  className="relative h-20 w-20 sm:h-[88px] sm:w-[88px] flex-shrink-0 rounded-xl overflow-hidden border border-white/8 bg-bg2 transition group-hover:border-sky-400/40"
                  aria-label={`Verify ${c.short} on Credly`}
                >
                  <Image
                    src={c.badge}
                    alt={`${c.short} badge`}
                    width={176}
                    height={176}
                    className="w-full h-full object-contain p-1"
                    unoptimized
                  />
                </a>

                <div className="flex-1 min-w-0 w-full">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold tracking-tight text-ink-100 leading-snug text-[16px] sm:text-[17px]">
                      {c.short}
                    </h3>
                    <span
                      className={`text-[9.5px] sm:text-[10px] font-mono uppercase tracking-eyebrow rounded-md border px-1.5 sm:px-2 py-1 whitespace-nowrap ${levelTone[c.level] || levelTone.Professional}`}
                    >
                      {c.level}
                    </span>
                  </div>
                  <div className="font-mono text-[11.5px] text-ink-400 mt-1">
                    {c.issuer}
                  </div>
                  <p className="mt-3 text-[14.5px] sm:text-[15px] leading-[1.65] text-ink-300">
                    {c.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {c.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] rounded-md border border-white/8 bg-white/[0.02] px-2 py-1 text-ink-300 font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <a
                href={c.credly}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-mono text-sky-400 hover:text-sky-300 transition self-start"
              >
                verify on credly
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
