import "./globals.css";
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import Navbar from './components/Navbar';

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

export const metadata = {
  title: 'Jaskaran Bothra Foundation',
  description: 'Creating lasting change through sustainable initiatives',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-white font-montserrat" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}