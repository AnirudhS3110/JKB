import React from "react";
import HonoringJaskaranBothra from "./hounoringjkb";
import TimelineSection from "./TimelineSection";
import Footer from "@/app/components/Footer";

export default function Page() {
    return (
        <>
            <HonoringJaskaranBothra />
            <TimelineSection />
            <div className="h-[4vh] bg-[#151419]"></div>
            <Footer />
        </>   
    );
} 