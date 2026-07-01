
import LandingPage from "./landing/LandingPage";
import Navbar from "./landing/DashboardHeaderLanding";
import Footer from "./landing/Footer";
import { LandingBackground } from "@/components/backgrounds";

export default function Home() {
  return (
    <div className="relative min-h-screen lg:h-screen lg:overflow-hidden flex flex-col justify-between">
      <LandingBackground />
      
      {/* Spacer for floating navbar */}
      <div className="h-14 lg:h-20 shrink-0" />
      
      <Navbar />
      
      {/* Landing Page Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center min-h-0 w-full">
        <LandingPage />
      </div>
       
      <Footer />
    </div>
  );
}
