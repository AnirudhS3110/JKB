import Newsletter from '../../components/ui/Newsletter';
import Footer from '../components/Footer';

export default function UpcomingCampaignsLayout({ children }) {
  
  return (
    <>
      {children}
      {/* <Newsletter /> */}
      <Footer />
     
    </>

  );
}

export const metadata = {
  title: 'Upcoming Campaigns | Jaskaran Bothra Foundation',
  description: 'Discover our upcoming initiatives and how you can participate in creating sustainable change.',
}; 