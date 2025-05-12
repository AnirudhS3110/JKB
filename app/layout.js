import "./globals.css";
import Navbar from './components/Navbar';



export const metadata = {
  title: 'Jaskaran Bothra Foundation',
  description: 'Creating lasting change through sustainable initiatives',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}