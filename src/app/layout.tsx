import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ghunaghost Tech Ltd - Building Africa\'s Digital Future',
  description: 'We design and build secure, scalable digital solutions — from web platforms and mobile apps to cybersecurity and tech education.',
  keywords: 'web development, cybersecurity, UI/UX design, tech education, Nigeria, digital solutions',
  authors: [{ name: 'Ghunaghost Tech Ltd' }],
  openGraph: {
    title: 'Ghunaghost Tech Ltd',
    description: 'Building Africa\'s Digital Future',
    url: 'https://ghunaghost.tech',
    siteName: 'Ghunaghost Tech Ltd',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}