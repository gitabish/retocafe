import type { Metadata } from 'next';
import { Archivo_Black, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const kinetic = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kinetic',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'retocafe | Sip. Play. Vibe.',
  description: 'Neo-Brutalist Cafe & Gaming Hangout',
  icons: {
    icon: '/coffeeicon.jpg',
    apple: '/coffeeicon.jpg',
  },
  openGraph: {
    title: 'retocafe | Sip. Play. Vibe.',
    description: 'Neo-Brutalist Cafe & Gaming Hangout',
    images: ['/remedy.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${kinetic.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="bg-[#fdfcf5] text-[#1a1a1a] selection:bg-[#ff5c00] selection:text-white antialiased overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
