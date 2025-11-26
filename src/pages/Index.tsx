import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ProblemSolution from "@/components/ProblemSolution";
import DeliveryProcess from "@/components/DeliveryProcess";
import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <ProblemSolution />
      <DeliveryProcess />
      <AboutUs />
      <CTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
