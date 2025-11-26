import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import ConsultationDialog from "./ConsultationDialog";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Business Intelligence & Analytics</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transforming{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Data Chaos
            </span>
            <br />
            Into Insights & Action
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Unlock real-time decision-making through powerful Business
            Intelligence, Advanced Analytics & Intelligent Automation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <ConsultationDialog>
            <Button size="lg" className="text-lg px-8 group">
              Let's Unlock Your Insights
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </ConsultationDialog>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          
            
         
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
