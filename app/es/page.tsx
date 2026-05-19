import HomeContent from '@/components/HomeContent';
import es from '@/lib/i18n/es';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: es.meta.title,
  description: es.meta.description,
  alternates: {
    canonical: 'https://leonardojaaziel.com/es',
    languages: {
      en: 'https://leonardojaaziel.com/',
      es: 'https://leonardojaaziel.com/es',
      'x-default': 'https://leonardojaaziel.com/',
    },
  },
  openGraph: {
    title: es.meta.title,
    description: es.meta.description,
    locale: 'es_ES',
    type: 'website',
    url: 'https://leonardojaaziel.com/es',
  },
};

export default function HomeEs() {
  return <HomeContent lang="es" />;
}
