import '~/styles/globals.css';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A simple blog created with Next.js',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
