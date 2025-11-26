import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Workflow,
  Bot,
  Cable,
  AlertTriangle,
  Activity,
  RefreshCcw,
  Layers,
} from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import dashboardIllustration from "@/assets/WorkflowAutomation.png";

// ------------------------------------------------------------
// PAGE START
// ------------------------------------------------------------
const WorkflowAutomation = () => {

  /* ------------------------------------------------------------
      FEATURES (with icons)
  ------------------------------------------------------------ */
  const features = [
    {
      title: "Process Analysis",
      icon: Layers,
      items: [
        "Identify repetitive workflows",
        "Map automation opportunities",
      ],
    },
    {
      title: "Automation Development",
      icon: Bot,
      items: [
        "Python automation scripts",
        "Power Automate flows",
        "WhatsApp Business API automations",
        "Email + PDF automation",
        "Scheduled jobs",
      ],
    },
    {
      title: "Integration",
      icon: Cable,
      items: [
        "SQL ↔ Excel ↔ APIs",
        "CRM/ERP integration",
      ],
    },
    {
      title: "Monitoring & Alerts",
      icon: AlertTriangle,
      items: [
        "Error notifications",
        "Automated quality checks",
      ],
    },
  ];

  /* ------------------------------------------------------------
      BENEFITS (with icons)
  ------------------------------------------------------------ */
  const benefits = [
    { text: "Save 20–40 hours/week of manual work", icon: RefreshCcw },
    { text: "Reduce human errors", icon: AlertTriangle },
    { text: "Faster data delivery", icon: Activity },
    { text: "Improved compliance & auditability", icon: Workflow },
  ];

  /* ------------------------------------------------------------
      USE CASES (with icons)
  ------------------------------------------------------------ */
  const useCases = [
    { industry: "Recruitment", use: "Automated CV parsing & follow-ups", icon: Bot },
    { industry: "Finance", use: "Automated reconciliations & reporting", icon: Layers },
    { industry: "Operations", use: "SLA alerts, data validations", icon: Activity },
    { industry: "Customer Service", use: "WhatsApp automated messaging", icon: Cable },
  ];

  /* ------------------------------------------------------------
      DELIVERABLES (with icons)
  ------------------------------------------------------------ */
  const deliverables = [
    { text: "Automated scripts/workflows", icon: Bot },
    { text: "Deployment on local/VM/server", icon: Layers },
    { text: "Documentation + failover plan", icon: Workflow },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ------------------------------------------------------------
          HERO SECTION WITH IMAGE
      ------------------------------------------------------------ */}
      <section className="pt-32 pb-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center max-w-6xl">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Workflow{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Automation
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl">
              Automate manual, repetitive processes to save time, reduce errors, and
              increase efficiency across your entire organization.
            </p>

            <ConsultationDialog>
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ConsultationDialog>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={dashboardIllustration}
              alt="Workflow Automation Illustration"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </section>

      {/* ------------------------------------------------------------
          FEATURES SECTION
      ------------------------------------------------------------ */}
      <section className="py-28 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6 max-w-6xl">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-20 text-center"
          >
            Core <span className="text-primary">Features</span>
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
                    <h3 className="text-2xl font-semibold text-primary">{feature.title}</h3>
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
          BENEFITS SECTION
      ------------------------------------------------------------ */}
      <section className="py-28 bg-primary/5">
        <div className="container mx-auto px-6 max-w-5xl">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-20 text-center"
          >
            Benefits of <span className="text-primary">Automation</span>
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
                  <span className="text-xl leading-relaxed">{benefit.text}</span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------
          USE CASES SECTION
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
                    <h3 className="text-2xl font-semibold text-primary">{useCase.industry}</h3>
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
          DELIVERABLES SECTION
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

export default WorkflowAutomation;
