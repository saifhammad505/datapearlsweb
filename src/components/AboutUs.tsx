import { BarChart3, Users, Target, Sparkles, ShieldCheck, LineChart } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower organizations with data intelligence—turning complexity into clarity and enabling faster, smarter, and more confident decisions.",
    },
    {
      icon: Sparkles,
      title: "Our Vision",
      description:
        "To become the most trusted BI & Analytics partner for businesses seeking meaningful insights, scalable data systems, and measurable outcomes.",
    },
    {
      icon: BarChart3,
      title: "Data Excellence",
      description:
        "We merge engineering precision with analytical depth to deliver dashboards, insights, and automations that leaders rely on every day.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "We immerse ourselves in your business, ensuring every dashboard, model, and report directly contributes to your operational and strategic goals.",
    },
  ];

  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* ------------------------------------------------------------
            HEADER
        ------------------------------------------------------------ */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent tracking-tight">
            About DataPearls
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A modern BI & Analytics agency, helping businesses turn data chaos
            into clarity, insight, and action.
          </p>
        </div>

        {/* ------------------------------------------------------------
            WHO WE ARE CARD
        ------------------------------------------------------------ */}
        <div className="max-w-5xl mx-auto mb-24 animate-fade-in">
          <div className="bg-card rounded-3xl p-12 shadow-xl border border-border/50">
            <h3 className="text-3xl font-bold mb-8 text-foreground tracking-tight">
              Who We Are
            </h3>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                DataPearls is a specialist Business Intelligence and Data Analytics
                agency built to solve one problem—help teams make better decisions
                with their data. We design data models, build dashboards,
                automate workflows, and generate insights that drive measurable
                performance improvements.
              </p>

              <p>
                Our work spans industries including healthcare, operations,
                finance, HR, logistics, and e-commerce. Whether it's real-time KPIs,
                diagnostic analytics, predictive modelling, or workflow automation,
                we build systems that become an integral part of how companies
                operate and grow.
              </p>

              <p>
                Every engagement is personal. We don’t use templates—we build
                data ecosystems tailored to each organization, ensuring accuracy,
                clarity, and long-term scalability.
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------
            VALUES GRID
        ------------------------------------------------------------ */}
        <div className="grid md:grid-cols-2 gap-10 animate-fade-in max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-10 shadow-md border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-5">
                <div>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-3 text-foreground tracking-tight">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ------------------------------------------------------------
            WHY CHOOSE US
        ------------------------------------------------------------ */}
        <div className="mt-24 text-center animate-fade-in">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-foreground tracking-tight">
              Why DataPearls?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Because we combine technical engineering, analytical thinking, and
              business understanding into one unified service.  
              We don’t just deliver dashboards—we deliver systems that
              accelerate performance, improve decision-making, and reveal what
              truly drives your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
