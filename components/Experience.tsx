'use client';

import { motion } from 'framer-motion';
import { SectionLabel } from './About';
import { useI18n } from '@/lib/i18n/context';

export default function Experience() {
  const { dict } = useI18n();
  return (
    <section id="experience" className="py-20 sm:py-24 scroll-mt">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <SectionLabel kicker={dict.experience.section} />
        <h2 className="display mt-5 text-[clamp(2.2rem,4.8vw,4rem)] max-w-[24ch]">
          {dict.experience.headingPart1}
          <span className="text-sky-400">{dict.experience.headingShipped}</span>
        </h2>

        <ol className="mt-14 relative border-l border-sky-400/20 ml-3 max-w-3xl">
          {dict.experience.roles.map((e, i) => (
            <motion.li
              key={e.role}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="ml-8 pb-14 last:pb-0 relative"
            >
              <span className="absolute -left-[42px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-bg0 border border-sky-400/50">
                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
              </span>
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-[22px] sm:text-[24px] text-ink-100 font-semibold tracking-tight">
                  {e.role}
                </h3>
                <span className="font-mono text-[12px] uppercase tracking-eyebrow text-sky-400">
                  {e.period}
                </span>
              </div>
              <p className="mt-3 text-ink-300 text-[16.5px] leading-[1.7]">{e.summary}</p>
              <ul className="mt-5 space-y-2 text-[15px] text-ink-300">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-[1.7]">
                    <span className="font-mono text-sky-400 mt-[2px] flex-shrink-0">▹</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
