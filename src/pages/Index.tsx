import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PipelineSection from "@/components/PipelineSection";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PipelineSection />
      <StatsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
