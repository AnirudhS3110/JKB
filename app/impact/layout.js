import React from "react";
import ExploreNav from "../about-us/ExploreNav";
import Footer from "../components/Footer";

export default function ImpactLayout({ children }) {
  const navItems = [
    { label: 'Facts and Figures', href: '/impact/facts-and-figures' },
    { label: 'Success Stories', href: '/impact/success-stories' },
  ];
  return (
    <section>
      {/* Common elements for all Impact pages can go here */}
      <div>{children}</div>
      {/* <ExploreNav navItems={navItems}/> */}
      <Footer />
    </section>
  );
} 