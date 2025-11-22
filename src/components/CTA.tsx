import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ConsultationDialog from "./ConsultationDialog";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Data Journey?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's unlock the power of your data together. Get started with a
            free consultation and see how we can help your business thrive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <ConsultationDialog>
              <Button size="lg" className="text-lg px-8 group">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ConsultationDialog>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#services">View Our Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
