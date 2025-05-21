import "./globals.css";
import { Cormorant_Garamond, Montserrat, DM_Serif_Text, Merriweather } from 'next/font/google';
import ImprovedNavbar from './components/Navbar';

// Define premium fonts
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
});

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600', '700'],
//   display: 'swap',
//   variable: '--font-montserrat',
// });

// Add Noto Sans and Noto Serif
// const notoSans = Noto_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
//   variable: '--font-noto-sans',
// });

// const notoSerif = Noto_Serif({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
//   variable: '--font-noto-serif',
// });

// Add DM Serif Text
const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: ['400'], // DM Serif Text only comes in weight 400
  display: 'swap',
  variable: '--font-dm-serif-text',
});

// Add Merriweather with all weights
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'], // All available weights for Merriweather
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-merriweather',
});

export const metadata = {
  title: 'Jaskaran Bothra Foundation',
  description: 'Creating lasting change through sustainable initiatives',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable}   ${dmSerifText.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <body className="bg-white " suppressHydrationWarning>
        <ImprovedNavbar />
        {children}
      </body>
    </html>
  );
}