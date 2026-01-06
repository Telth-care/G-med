import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GMed ID™ Healthcare | Global Digital Medical Identity',
  description: 'Secure, blockchain-powered medical records accessible worldwide. Your health data, anytime, anywhere.',
  keywords: 'healthcare, medical ID, blockchain, digital health, telemedicine, medical records',
  openGraph: {
    title: 'GMed ID™ Healthcare | Global Digital Medical Identity',
    description: 'Secure, blockchain-powered medical records accessible worldwide.',
    images: [
      {
        url: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
        width: 1200,
        height: 630,
        alt: 'GMed ID Healthcare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GMed ID™ Healthcare | Global Digital Medical Identity',
    description: 'Secure, blockchain-powered medical records accessible worldwide.',
    images: ['https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
