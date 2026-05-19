'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import HeroBackground from './HeroBackground';
import RotatingTech from './RotatingTech';
import CountUp from './CountUp';
import { trackEvent } from '@/lib/analytics';
import { useI18n } from '@/lib/i18n/context';

export default function Hero() {
  const { dict } = useI18n();
  return (
    <section
      id="top"
      className="relative isolate pt-32 sm:pt-36 md:pt-44 pb-20 sm:pb-24 scroll-mt overflow-hidden"
    >
      <HeroBackground />
      <div className="hero-spot" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <span className="status-pill">
                <span className="dot animate-pulseDot" />
                {dict.hero.statusAvailable}
              </span>
              <span className="eyebrow"><span className="dot" /> {dict.hero.location}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="display mt-6 text-[clamp(2.4rem,7.2vw,5.4rem)]"
            >
              {dict.hero.titleLine1}{' '}
              <span className="text-ink-400 font-medium">{dict.hero.titleAmpersand}</span>{' '}
              {dict.hero.titleLine2}
              <br />
              <span className="text-ink-300 font-normal">{dict.hero.titleBuildingOn}</span>{' '}
              <RotatingTech />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              className="mt-6 sm:mt-7 max-w-xl text-ink-300 text-[17px] sm:text-[18.5px] leading-[1.7]"
            >
              <span className="text-ink-100 font-medium">{dict.hero.bioName}.</span>{' '}
              {dict.hero.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-8 sm:mt-9 flex flex-wrap gap-2.5 sm:gap-3"
            >
              <a
                href="#projects"
                className="btn-primary group"
                onClick={() => trackEvent('cta_click', { location: 'hero', target: 'projects' })}
              >
                {dict.hero.ctaProjects}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="btn-ghost"
                onClick={() => trackEvent('cta_click', { location: 'hero', target: 'contact' })}
              >
                <Terminal className="h-4 w-4" />
                {dict.hero.ctaContact}
              </a>
              <a
                href="/resume.pdf"
                download="Leonardo-Gonzalez-Resume.pdf"
                className="btn-ghost"
                onClick={() => trackEvent('resume_download', { location: 'hero', format: 'pdf' })}
              >
                <Download className="h-4 w-4" />
                {dict.hero.ctaResume}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-xl"
            >
              <Stat label={dict.hero.stats.years}>
                <CountUp to={5} suffix="+" duration={1200} />
              </Stat>
              <Stat label={dict.hero.stats.certs}>
                <CountUp to={4} duration={1400} />
              </Stat>
              <Stat label={dict.hero.stats.projects}>
                <CountUp to={80} suffix="+" duration={1800} />
              </Stat>
              <Stat label={dict.hero.stats.bilingual}>{dict.hero.stats.bilingualValue}</Stat>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none"
          >
            <div className="portrait-window">
              <div className="window-bar">
                <div className="traffic">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="tab">{dict.hero.portraitTab}</span>
              </div>
              <div className="frame">
                <Image
                  src="/leonardo-portrait.png"
                  alt="Leonardo Gonzalez"
                  fill
                  priority
                  sizes="(min-width:1024px) 440px, (min-width:640px) 360px, 80vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 50%' }}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-6 -left-4 md:-left-8 window w-[260px] sm:w-[280px] hidden md:block"
            >
              <div className="window-bar">
                <div className="traffic">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="tab">{dict.hero.whoamiTab}</span>
              </div>
              <pre className="code-block px-4 py-3 text-[12.5px] leading-[1.7] whitespace-pre-wrap">
<span className="c-com">$</span> <span className="c-fn">whoami</span>{'\n'}<span className="c-prop">name</span>: <span className="c-str">&quot;Leonardo Gonzalez&quot;</span>{'\n'}<span className="c-prop">role</span>: <span className="c-str">&quot;{dict.nav.role}&quot;</span>{'\n'}<span className="c-prop">stack</span>: [<span className="c-str">&quot;GCP&quot;</span>, <span className="c-str">&quot;Workspace&quot;</span>]{'\n'}<span className="c-com">$</span> <span className="cursor" />
              </pre>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="section-divider mt-20 sm:mt-28">
        <span className="dot" />
      </div>
    </section>
  );
}

function Stat({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col">
      <div className="font-display text-ink-100 text-xl sm:text-2xl md:text-3xl leading-none tracking-tight tabular-nums">
        {children}
      </div>
      <div className="mt-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-eyebrow text-ink-400">
        {label}
      </div>
    </div>
  );
}
