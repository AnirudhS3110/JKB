export const metadata = {
  title: 'News | Jaskaran Bothra Foundation',
  description: 'Latest news, publications and media coverage of Jaskaran Bothra Foundation initiatives and campaigns.',
};
import Footer from "../components/Footer";
import ExploreNav from "../about-us/ExploreNav";

export default function NewsLayout({ children }) {
  const navItems = [
    { href: '/news/archives', label: 'Archives' },
    { href: '/news/media-coverage', label: 'Media Coverage' },
    { href: '/news/socialMedia', label: 'Social Media' },
  ];
  return (
    <main>
      
      {children}
      <ExploreNav navItems={navItems} />
      <Footer />
    </main>
  );
} 