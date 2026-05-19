'use client';

import { motion } from 'framer-motion';
import { Cloud, Globe, Server, Code2, Sparkles } from 'lucide-react';
import { SectionLabel } from './About';
import { useI18n } from '@/lib/i18n/context';

// Icons matched by index against `dict.skills.groups`. Order in en.ts/es.ts
// MUST match this array.
const icons = [Cloud, Globe, Server, Code2, Sparkles];

export default function Skills() {
  const { dict } = useI18n();
  return (
    <section id="stack" className="py-20 sm:py-24 scroll-mt">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <SectionLabel kicker={dict.skills.section} />
        <h2 className="display mt-5 text-[clamp(2.2rem,4.8vw,4rem)] max-w-[22ch]">
          {dict.skills.headingPart1}
          <span className="text-sky-400">{dict.skills.headingTools}</span>
          {dict.skills.headingPart2}
        </h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dict.skills.groups.map((g, i) => {
            const Icon = icons[i] || Code2;
            return (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card card-accent p-6 group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/25 bg-sky-400/8 text-sky-400 group-hover:bg-sky-400/15 transition">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[16px] font-semibold text-ink-100">{g.name}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="text-[13px] font-mono rounded-md border border-white/8 bg-white/[0.02] px-2.5 py-1 text-ink-300"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
