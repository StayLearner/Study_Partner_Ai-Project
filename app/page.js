import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import VantaBackground from "./course/[courseId]/_components/VantaGlobeBackground";

import LandingPage from "./landing/LandingPage";
import Header from "./landing/DashboardHeaderLanding";
import Navbar from "./landing/DashboardHeaderLanding";
import Footer from "./landing/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Vanta.js Background - Positioned behind everything */}
      <div className="absolute inset-0 -z-10">
        <VantaBackground />
       
      </div>

       <Navbar/>
      {/* Landing Page Content - Positioned on top with transparency */}
      <div className="relative z-10   min-h-screen flex justify-center items-center">
        <LandingPage />
      </div>
       
       <Footer/>
    </div>
  );
}
