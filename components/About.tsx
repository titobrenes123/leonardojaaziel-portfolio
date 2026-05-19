'use client';

import { motion } from 'framer-motion';
import { profile, approach } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 scroll-mt">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <SectionLabel kicker="01 // about" />
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="display mt-5 max-w-[22ch] text-[clamp(2.2rem,4.8vw,4rem)]"
        >
          Engineer first.
          <br />
          <span className="text-sky-400">Consultant second.</span>
        </motion.h2>

        <div className="mt-12 grid lg:grid-cols-[1.5fr_1fr] gap-12">
          <div className="space-y-5 text-ink-300 text-[18px] sm:text-[19px] leading-[1.75] max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              {profile.longBio}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              I work bilingually across <span className="text-ink-100">North America</span>{' '}
              and <span className="text-ink-100">LATAM</span> — diagnosing what&apos;s
              actually broken, fixing it cleanly, and handing back systems that are
              easier to operate than the way I found them.
            </motion.p>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="window"
          >
            <div className="window-bar">
              <div className="traffic">
                <span />
                <span />
                <span />
              </div>
              <span className="tab">profile.yaml</span>
            </div>
            <pre className="code-block px-5 py-5 whitespace-pre-wrap text-[14px] sm:text-[14.5px]">
<span className="c-key">role</span>: <span className="c-str">Cloud Architect · Workspace</span>{'\n'}<span className="c-key">stack</span>: <span className="c-str">GCP · Workspace · Gemini</span>{'\n'}<span className="c-key">location</span>: <span className="c-str">El Salvador</span>{'\n'}<span className="c-key">languages</span>: [<span className="c-str">en</span>, <span className="c-str">es</span>]{'\n'}<span className="c-key">experience</span>: <span className="c-num">5</span>+ <span className="c-com"># years</span>{'\n'}<span className="c-key">projects</span>: <span className="c-num">80</span>+ <span className="c-com"># shipped</span>{'\n'}<span className="c-key">style</span>: <span className="c-str">vibe coder</span> <span className="c-com"># ✨</span>{'\n'}<span className="c-key">status</span>: <span className="c-str">open to engagements</span>
            </pre>
          </motion.aside>
        </div>

        <div className="mt-24">
          <p className="eyebrow"><span className="dot" /> approach</p>
          <h3 className="display mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)] max-w-[22ch]">
            How I work.
          </h3>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {approach.map((p, i) => (
              <motion.article
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card card-accent p-6 relative"
              >
                <p className="font-mono text-[12px] tracking-eyebrow uppercase text-sky-400">
                  {p.n}
                </p>
                <h4 className="mt-3 text-[18px] font-semibold leading-snug text-ink-100">
                  {p.title}
                </h4>
                <p className="mt-3 text-[15px] leading-[1.7] text-ink-300">
                  {p.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ kicker }: { kicker: string }) {
  return (
    <p className="eyebrow">
      <span className="dot" />
      {kicker}
    </p>
  );
}
