import Footer from '../components/Footer';
import ExploreNav from '../about-us/ExploreNav';

export default function PartnershipLayout({ children }) {
  const navItems = [
    { label: 'Knowledge and Research Collaborations', href: '/partnership/knowledge-research' },
    {label: 'Technology & Innovation Collaboration', href: '/partnership/technology-innovation'},
    {label: 'Media & Communication Collaborations', href: '/partnership/media-communication'},
    {label: 'Volunteer and Capacity building Engagements', href: '/partnership/volunteer-capacity'},
    {label: 'Government and Civic Collaborations', href: '/partnership/government-civic'},
    {label: 'Institutional and Infrastrucutre Support', href: '/partnership/institutional-infrastructure'},
  ];
  return (
    <>
      {children}
      <ExploreNav navItems={navItems}/>
      <Footer />
    </>
  );
}

export const metadata = {
  title: 'Partnership | Jaskaran Bothra Foundation',
  description: 'Explore our partnership opportunities and join us in creating sustainable change.',
}; 