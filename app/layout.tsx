import type { Metadata } from 'next';
import './globals.css';
import Analytics from '@/components/Analytics';

export const metadata: Metadata = {
  title: 'Leonardo Gonzalez — Google Cloud Architect · Workspace Specialist',
  description:
    'Google Cloud certified Architect & Engineer. 80+ projects shipped across GKE, Cloud Run, BigQuery, Vertex AI, and Workspace.',
  metadataBase: new URL('https://leonardojaaziel.com'),
  openGraph: {
    title: 'Leonardo Gonzalez — Google Cloud Architect · Workspace Specialist',
    description:
      'Cloud architecture, Workspace administration, automation, and AI integrations on Google Cloud.',
    type: 'website',
  },
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
      </body>
    </html>
  );
}
