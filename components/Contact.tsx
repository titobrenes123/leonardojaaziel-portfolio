'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Briefcase, ArrowRight } from 'lucide-react';
import { profile } from '@/lib/data';
import { SectionLabel } from './About';
import { trackEvent } from '@/lib/analytics';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 scroll-mt">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-10">
        <SectionLabel kicker="06 // contact" />
        <h2 className="display mt-5 text-[clamp(2.2rem,4.8vw,4rem)] max-w-[24ch]">
          Have a cloud project? <span className="text-sky-400">Let&apos;s talk.</span>
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
                discovery call · free · 30 minutes
              </p>
              <h3 className="mt-5 font-display text-2xl md:text-3xl text-ink-100 leading-tight tracking-display">
                Send me what you&apos;re working on.
              </h3>
              <p className="mt-5 text-ink-300 text-[17px] sm:text-[18px] leading-[1.7] max-w-md">
                Migration, GCP architecture review, deliverability mess, or an AI
                workflow you want wired up — drop me a line. I usually answer within
                a business day in EN or ES.
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
                value="linkedin.com/in/leonardojaaziel"
                href={profile.links.linkedin}
              />
              <ContactLink
                icon={<Github className="h-4 w-4" />}
                label="GitHub"
                value="github.com/leonardojaaziel"
                href={profile.links.github}
              />
              <ContactLink
                icon={<Briefcase className="h-4 w-4" />}
                label="Fiverr"
                value="fiverr.com/leonardojaaziel"
                href={profile.links.fiverr}
              />
              <ContactLink
                icon={<Briefcase className="h-4 w-4" />}
                label="Upwork"
                value="upwork.com/freelancers/leonardojaaziel"
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
        className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-4 hover:border-sky-400/40 hover:bg-sky-400/5 transition group"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/8 text-sky-400">
            {icon}
          </div>
          <div>
            <div className="text-[10.5px] font-mono uppercase tracking-eyebrow text-ink-400">
              {label}
            </div>
            <div className="text-[14px] text-ink-100">{value}</div>
          </div>
        </div>
        <span className="text-ink-500 group-hover:text-sky-400 transition">→</span>
      </a>
    </li>
  );
}
