'use client';

/**
 * i18n context — exposes the active locale + dict to every client
 * component in the tree.
 *
 *   <I18nProvider value={{ lang: 'es', dict: es }}>
 *     <Hero />     ← Hero calls useI18n() to get its strings
 *   </I18nProvider>
 *
 * Section IDs (#about, #stack, #experience, ...) intentionally stay in
 * English in both locales so the nav anchors work cross-language and we
 * only translate labels, never URLs.
 */

import { createContext, useContext } from 'react';
import type { Dict, Locale } from './types';

type I18n = { lang: Locale; dict: Dict };

const I18nContext = createContext<I18n | null>(null);

export function I18nProvider({
  value,
  children,
}: {
  value: I18n;
  children: React.ReactNode;
}) {
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used inside <I18nProvider>');
  }
  return ctx;
}

/** Returns the URL for the *other* locale (for the language switcher). */
export function otherLocaleHref(currentLang: Locale, hash?: string): string {
  const base = currentLang === 'es' ? '/' : '/es/';
  return hash ? `${base}${hash}` : base;
}
