import React from "react";
import SuccessStories from "./successStories.jsx"
import Footer from "@/app/components/Footer";
import Impact from "../facts-and-figures/impact.jsx"

export default function Page() {
  return (
    <>
      <SuccessStories />
      <Impact />
      <div className="h-[4vh] bg-[#151419]"></div>
      <Footer />
    </>
  );
} 