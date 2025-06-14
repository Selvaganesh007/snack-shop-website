import './globals.css';
import { Pacifico, Outfit } from 'next/font/google';

// Load fonts with subsets & weights
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
});

const outfit = Outfit({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Anand Sweets',
  description: 'Sweeten your day with Anand Sweets!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pacifico.variable} ${outfit.variable}`}>
      <body className="font-sans bg-pink-50 text-pink-900">{children}</body>
    </html>
  );
}
