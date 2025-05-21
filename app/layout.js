import "./globals.css";
import { Cormorant_Garamond, Montserrat, Noto_Sans, Noto_Serif } from 'next/font/google';
import ImprovedNavbar from './components/Navbar';

// Define premium fonts
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

// Add Noto Sans and Noto Serif
const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-serif',
});

export const metadata = {
  title: 'Jaskaran Bothra Foundation',
  description: 'Creating lasting change through sustainable initiatives',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} ${notoSans.variable} ${notoSerif.variable}`} suppressHydrationWarning>
      <body className="bg-white font-montserrat" suppressHydrationWarning>
        <ImprovedNavbar />
        {children}
      </body>
    </html>
  );
}