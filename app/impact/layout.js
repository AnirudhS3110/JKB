import React from "react";

export default function ImpactLayout({ children }) {
  return (
    <section>
      {/* Common elements for all Impact pages can go here */}
      <div>{children}</div>
    </section>
  );
} 