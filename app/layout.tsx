import type { Metadata } from 'next';
import './globals.css';
import Analytics from '@/components/Analytics';
import Clarity from '@/components/Clarity';
import en from '@/lib/i18n/en';

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
  metadataBase: new URL('https://leonardojaaziel.com'),
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-bg0 text-ink-200">
        {children}
        <Analytics />
        <Clarity />
      </body>
    </html>
  );
}
