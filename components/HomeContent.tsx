'use client';

import { I18nProvider } from '@/lib/i18n/context';
import en from '@/lib/i18n/en';
import es from '@/lib/i18n/es';
import type { Locale } from '@/lib/i18n/types';
import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Certifications from './Certifications';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

export default function HomeContent({ lang }: { lang: Locale }) {
  const dict = lang === 'es' ? es : en;
  return (
    <I18nProvider value={{ lang, dict }}>
      <main className="relative min-h-screen overflow-x-hidden bg-bg0">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </I18nProvider>
  );
}
