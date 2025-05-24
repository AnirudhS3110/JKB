import React from "react";
import SuccessStories from "./successstories";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <>
      <SuccessStories />
      <div className="h-[4vh] bg-[#151419]"></div>
      <Footer />
    </>
  );
} 