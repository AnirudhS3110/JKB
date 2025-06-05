"use client";

import React from "react";
import dynamic from "next/dynamic";

const FactsAndFigures = dynamic(() => import("./factsandfigures"), { ssr: false });

export default function Page() {
  return (
    <>
      <FactsAndFigures />
    </>
  );
}