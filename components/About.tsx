'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n/context';

export default function About() {
  const { dict } = useI18n();
  return (
    <section id="about" className="py-20 sm:py-24 scroll-mt">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <SectionLabel kicker={dict.about.section} />
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="display mt-5 max-w-[22ch] text-[clamp(2.2rem,4.8vw,4rem)]"
        >
          {dict.about.headingPart1}
          <br />
          <span className="text-sky-400">{dict.about.headingPart2}</span>
        </motion.h2>

        <div className="mt-12 grid lg:grid-cols-[1.5fr_1fr] gap-12">
          <div className="space-y-5 text-ink-300 text-[18px] sm:text-[19px] leading-[1.75] max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              {dict.about.longBio}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              {dict.about.paragraph2Prefix}
              <span className="text-ink-100">{dict.about.paragraph2Region1}</span>
              {dict.about.paragraph2And}
              <span className="text-ink-100">{dict.about.paragraph2Region2}</span>
              {dict.about.paragraph2Suffix}
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
              <span className="tab">{dict.about.profileTab}</span>
            </div>
            <pre className="code-block px-5 py-5 whitespace-pre-wrap text-[14px] sm:text-[14.5px]">
<span className="c-key">{dict.about.colophonRoleKey}</span>: <span className="c-str">{dict.about.colophonRoleVal}</span>{'\n'}<span className="c-key">{dict.about.colophonStackKey}</span>: <span className="c-str">{dict.about.colophonStackVal}</span>{'\n'}<span className="c-key">{dict.about.colophonLocationKey}</span>: <span className="c-str">{dict.about.colophonLocationVal}</span>{'\n'}<span className="c-key">{dict.about.colophonLanguagesKey}</span>: [<span className="c-str">en</span>, <span className="c-str">es</span>]{'\n'}<span className="c-key">{dict.about.colophonExperienceKey}</span>: <span className="c-num">5</span>+ <span className="c-com">{dict.about.colophonExperienceComment}</span>{'\n'}<span className="c-key">{dict.about.colophonProjectsKey}</span>: <span className="c-num">80</span>+ <span className="c-com">{dict.about.colophonProjectsComment}</span>{'\n'}<span className="c-key">{dict.about.colophonStyleKey}</span>: <span className="c-str">{dict.about.colophonStyleVal}</span> <span className="c-com"># ✨</span>{'\n'}<span className="c-key">{dict.about.colophonStatusKey}</span>: <span className="c-str">{dict.about.colophonStatusVal}</span>
            </pre>
          </motion.aside>
        </div>

        <div className="mt-24">
          <p className="eyebrow"><span className="dot" /> {dict.about.approachEyebrow}</p>
          <h3 className="display mt-4 text-[clamp(1.8rem,3.4vw,2.6rem)] max-w-[22ch]">
            {dict.about.approachHeading}
          </h3>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dict.about.approach.map((p, i) => (
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
                <p className="mt-3 text-[15px] leading-[1.7] text-ink-300">{p.body}</p>
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
