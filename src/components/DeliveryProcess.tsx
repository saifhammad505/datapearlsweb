import { Search, Code, Headphones } from "lucide-react";

const DeliveryProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Data Review",
      description: "Deep-dive into systems, data sources, KPIs & business goals to tailor the perfect solution.",
      icon: Search,
    },
    {
      number: "02",
      title: "Build & Integrate",
      description: "Develop custom dashboards, pipelines, data models, automations & documentation.",
      icon: Code,
    },
    {
      number: "03",
      title: "Deliver, Train & Support",
      description: "Handover, training, optimization & continuous improvement.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Our Delivery Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our structured approach ensures efficient and effective implementation of your data solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-card border border-border rounded-lg p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryProcess;