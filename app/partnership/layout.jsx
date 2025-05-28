import Footer from '../components/Footer';

export default function PartnershipLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Partnership | Jaskaran Bothra Foundation',
  description: 'Explore our partnership opportunities and join us in creating sustainable change.',
}; 