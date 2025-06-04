import Newsletter from '../../components/ui/Newsletter';
import Footer from '../components/Footer';
import ExploreNav from '../about-us/ExploreNav';

export default function UpcomingCampaignsLayout({ children }) {
  const navItems = [
    { label: 'Eternal Flame Campaign', href: '/upcoming-campaigns/eternal-flame-campaign' },
    { label: 'Named After Mom', href: '/upcoming-campaigns/named-after-mom' },
    { label: 'She for Sustainability', href: '/upcoming-campaigns/she-for-sustainability' },
    // { label: 'Accessible Future', href: '/upcoming-campaigns/upcoming-campaigns/accessible-future' },
  ];
  return (
    <>
      {children}
      {/* <Newsletter /> */}
      <ExploreNav navItems={navItems}/>
      <Footer />
     
    </>

  );
}

export const metadata = {
  title: 'Upcoming Campaigns | Jaskaran Bothra Foundation',
  description: 'Discover our upcoming initiatives and how you can participate in creating sustainable change.',
}; 