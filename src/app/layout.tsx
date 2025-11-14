import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { WatchlistProvider } from '@/contexts/watchlist-context';

export const metadata: Metadata = {
  title: 'CineStream',
  description: 'Tu plataforma de streaming favorita.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background min-h-screen">
        <WatchlistProvider>
          {children}
        </WatchlistProvider>
        <Toaster />
      </body>
    </html>
  );
}
