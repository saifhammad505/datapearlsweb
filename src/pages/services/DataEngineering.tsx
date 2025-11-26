import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Database,
  Cable,
  Workflow,
  ServerCog,
  Network,
  Wrench,
  HardDrive,
  Layers,
  ShieldCheck,
  LineChart,
  BarChart3,
} from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import dashboardIllustration from "@/assets/DataEngineeringPage.png";

const DataEngineering = () => {
  /* ------------------------------------------------------------
      FEATURES WITH ICONS
  ------------------------------------------------------------ */
  const features = [
    {
      title: "Data Integration",
      icon: Network,
      items: [
        "Connect SQL Server, MySQL, Azure, APIs, Excel, CRMs",
        "Consolidate into a unified source of truth",
      ],
    },
    {
      title: "Data Pipelines (ETL/ELT)",
      icon: Workflow,
      items: [
        "Python ETL scripts, SQL stored procedures, SSIS/ADF pipelines",
        "Automated scheduling & refresh orchestration",
      ],
    },
    {
      title: "Data Warehousing",
      icon: Layers,
      items: [
        "Star schema & dimensional modeling",
        "Fact + dimension table structure",
        "Performance tuning & index optimization",
      ],
    },
    {
      title: "Data Quality & Governance",
      icon: ShieldCheck,
      items: [
        "Validation rules & data accuracy checks",
        "Data lineage documentation",
        "Standardized definitions & naming conventions",
      ],
    },
  ];

  /* ------------------------------------------------------------
      BENEFITS WITH ICONS
  ------------------------------------------------------------ */
  const benefits = [
    { text: "One version of the truth across your organization", icon: HardDrive },
    { text: "Scalable architecture built for long-term growth", icon: ServerCog },
    { text: "Faster insights through optimized pipelines", icon: LineChart },
    { text: "Reduced manual effort with automated refresh cycles", icon: Cable },
  ];

  /* ------------------------------------------------------------
      USE CASES WITH ICONS
  ------------------------------------------------------------ */
  const useCases = [
    {
      industry: "Financial Services",
      use: "Consolidate financial, ledger, compliance, and audit datasets",
      icon: Database,
    },
    {
      industry: "Healthcare",
      use: "Integrate patient, staffing, appointment, and clinical data",
      icon: Network,
    },
    {
      industry: "Enterprise Operations",
      use: "Multi-system reconciliation & performance visibility",
      icon: Workflow,
    },
    {
      industry: "E-Commerce",
      use: "Unify product, orders, inventory, marketing & customer data",
      icon: BarChart3,
    },
  ];

  /* ------------------------------------------------------------
      DELIVERABLES WITH ICONS
  ------------------------------------------------------------ */
  const deliverables = [
    { text: "Modern data warehouse", icon: Layers },
    { text: "Automated ETL/ELT pipelines", icon: Workflow },
    { text: "Data dictionary & documentation", icon: Wrench },
    { text: "Monitoring & alerting system", icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ------------------------------------------------------------
          HERO SECTION
      ------------------------------------------------------------ */}
        <section className="pt-32 pb-28 bg-gradient-to-b from-primary/5 to-background">
  <div className="container mx-auto px-6 max-w-7xl">

    <div className="grid md:grid-cols-2 gap-16 items-center">

      {/* LEFT — TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          Data Engineering{" "}

        </h1>

        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
          Build robust data pipelines, unified data warehouses, and scalable architectures that power enterprise analytics.
        </p>

        <ConsultationDialog>
          <Button size="lg" className="text-lg px-8 py-6 group">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </ConsultationDialog>
      </motion.div>

      {/* RIGHT — IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center"
      >
        <img
          src={dashboardIllustration}
          alt="Data Engineering Illustration"
          className="w-full max-w-lg md:max-w-xl drop-shadow-2xl"
        />
      </motion.div>

    </div>

  </div>
</section>


      {/* ------------------------------------------------------------
          PREMIUM FEATURES SECTION
      ------------------------------------------------------------ */}
      <section className="py-28 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6 max-w-6xl">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-20 text-center tracking-tight"
          >
            Core <span className="text-primary">Engineering Features</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-14">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-10 bg-card border border-border/50 rounded-3xl shadow-sm hover:shadow-xl transition"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-primary tracking-tight">
                      {feature.title}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg text-muted-foreground">
                        <Check className="w-5 h-5 text-primary mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------
          PREMIUM BENEFITS SECTION
      ------------------------------------------------------------ */}
      <section className="py-28 bg-primary/5">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-20 text-center"
          >
            Key <span className="text-primary">Benefits</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5 bg-card p-8 rounded-2xl border border-border/40 hover:shadow-lg transition"
                >
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xl leading-relaxed">
                    {benefit.text}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------
          PREMIUM USE CASES SECTION
      ------------------------------------------------------------ */}
      <section className="py-28 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-6 max-w-5xl">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-20 text-center"
          >
            Industry <span className="text-primary">Use Cases</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-14">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-10 bg-card rounded-3xl border border-border shadow-sm hover:shadow-xl transition"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-primary">
                      {useCase.industry}
                    </h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {useCase.use}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------
          PREMIUM DELIVERABLES SECTION
      ------------------------------------------------------------ */}
      <section className="py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-20 text-center"
          >
            What You <span className="text-primary">Receive</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {deliverables.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-5 bg-background p-6 rounded-2xl border border-border/40 shadow-sm"
                >
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xl">{item.text}</span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataEngineering;
