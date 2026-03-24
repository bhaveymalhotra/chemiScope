import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { StickyCta } from '@/components/sticky-cta';

export const metadata: Metadata = {
  title: 'Chemiscope | B2B Chemical Solutions',
  description: 'Procurement-friendly industrial and institutional cleaning solutions with technical support.',
  openGraph: {
    title: 'Chemiscope',
    description: 'B2B chemical solutions and Satol portfolio',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyCta />
      </body>
    </html>
  );
}
