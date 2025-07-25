import "./globals.css";
import { Cormorant_Garamond,Open_Sans,Lato,Cinzel, Source_Serif_4, Playfair_Display, DM_Serif_Text, Merriweather } from 'next/font/google';
import ImprovedNavbar from './components/Navbar';

// Define premium fonts
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-cinzel',
});
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
});
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-playfair-display',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-open-sans',
});



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

const sourceSerifPro = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-source-serif-pro',
});



  export const metadata = {
  title: 'Jaskaran Bothra Foundation',
  description: 'Creating lasting change through sustainable initiatives',
  icons: {
    icon: '/images/favicon-2.png', // This sets the favicon properly!
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable} ${cinzel.variable}   ${dmSerifText.variable} ${merriweather.variable} ${playfairDisplay.variable} ${sourceSerifPro.variable} ${openSans.variable}   `} suppressHydrationWarning>
       
      <body className="bg-white " suppressHydrationWarning>
        <ImprovedNavbar />
        {children}
      </body>
    </html>
  );
}