'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Briefcase, ArrowRight } from 'lucide-react';
import { profile } from '@/lib/data';
import { SectionLabel } from './About';
import { trackEvent } from '@/lib/analytics';
import { useI18n } from '@/lib/i18n/context';

export default function Contact() {
  const { dict } = useI18n();
  return (
    <section id="contact" className="py-20 sm:py-24 scroll-mt">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <SectionLabel kicker={dict.contact.section} />
        <h2 className="display mt-5 text-[clamp(2.2rem,4.8vw,4rem)] max-w-[24ch]">
          {dict.contact.headingPart1}
          <span className="text-sky-400">{dict.contact.headingPart2}</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 card p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute -top-32 -left-20 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-64 w-64 rounded-full bg-violet-400/8 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-10">
            <div>
              <p className="eyebrow">
                <span className="dot" />
                {dict.contact.eyebrow}
              </p>
              <h3 className="mt-5 font-display text-2xl md:text-3xl text-ink-100 leading-tight tracking-display">
                {dict.contact.leadHeading}
              </h3>
              <p className="mt-5 text-ink-300 text-[17px] sm:text-[18px] leading-[1.7] max-w-md">
                {dict.contact.leadBody}
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="btn-primary mt-7 group !rounded-full"
                onClick={() => trackEvent('email_click', { location: 'contact' })}
              >
                <Mail className="h-4 w-4" />
                {profile.email}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>

            <ul className="space-y-3">
              <ContactLink
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
                value="@leonardojaaziel"
                href={profile.links.linkedin}
              />
              <ContactLink
                icon={<Github className="h-4 w-4" />}
                label="GitHub"
                value="@titobrenes123"
                href={profile.links.github}
              />
              <ContactLink
                icon={<Briefcase className="h-4 w-4" />}
                label="Fiverr"
                value="@leonardojaaziel"
                href={profile.links.fiverr}
              />
              <ContactLink
                icon={<Briefcase className="h-4 w-4" />}
                label="Upwork"
                value="@leonardojaaziel"
                href={profile.links.upwork}
              />
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent('social_click', { network: label.toLowerCase(), location: 'contact' })}
        className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-3 hover:border-sky-400/40 hover:bg-sky-400/5 transition group"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/8 text-sky-400">
            {icon}
          </div>
          <div className="min-w-0">
            <div className="text-[10.5px] font-mono uppercase tracking-eyebrow text-ink-400">
              {label}
            </div>
            <div className="text-[14px] text-ink-100 truncate">{value}</div>
          </div>
        </div>
        <span className="flex-shrink-0 text-ink-500 group-hover:text-sky-400 transition">→</span>
      </a>
    </li>
  );
}
