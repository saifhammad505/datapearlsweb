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
  Sparkles,
  Zap,
} from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import dashboardIllustration from "@/assets/WorkflowAutomation.png";

const WorkflowAutomation = () => {
  const features = [
    {
      title: "Process Analysis",
      icon: Layers,
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconColor: "text-cyan-400",
      items: [
        "Identify repetitive workflows",
        "Map automation opportunities",
      ],
    },
    {
      title: "Automation Development",
      icon: Bot,
      gradient: "from-violet-500/20 to-purple-500/20",
      iconColor: "text-violet-400",
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
      gradient: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      items: [
        "SQL ↔ Excel ↔ APIs",
        "CRM/ERP integration",
      ],
    },
    {
      title: "Monitoring & Alerts",
      icon: AlertTriangle,
      gradient: "from-amber-500/20 to-orange-500/20",
      iconColor: "text-amber-400",
      items: [
        "Error notifications",
        "Automated quality checks",
      ],
    },
  ];

  const benefits = [
    { text: "Save 20–40 hours/week of manual work", icon: RefreshCcw, gradient: "from-cyan-500 to-blue-500" },
    { text: "Reduce human errors", icon: AlertTriangle, gradient: "from-amber-500 to-orange-500" },
    { text: "Faster data delivery", icon: Zap, gradient: "from-emerald-500 to-teal-500" },
    { text: "Improved compliance & auditability", icon: Workflow, gradient: "from-violet-500 to-purple-500" },
  ];

  const useCases = [
    { industry: "Recruitment", use: "Automated CV parsing & follow-ups", icon: Bot, gradient: "from-violet-500/20 to-purple-500/20" },
    { industry: "Finance", use: "Automated reconciliations & reporting", icon: Layers, gradient: "from-cyan-500/20 to-blue-500/20" },
    { industry: "Operations", use: "SLA alerts, data validations", icon: Activity, gradient: "from-emerald-500/20 to-teal-500/20" },
    { industry: "Customer Service", use: "WhatsApp automated messaging", icon: Cable, gradient: "from-amber-500/20 to-orange-500/20" },
  ];

  const deliverables = [
    { text: "Automated scripts/workflows", icon: Bot, gradient: "from-violet-500 to-purple-500" },
    { text: "Deployment on local/VM/server", icon: Layers, gradient: "from-cyan-500 to-blue-500" },
    { text: "Documentation + failover plan", icon: Workflow, gradient: "from-emerald-500 to-teal-500" },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-slate-950 to-slate-950" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl opacity-20" />

        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Process Automation</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Workflow{" "}
                <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                Automate manual, repetitive processes to save time, reduce errors, and
                increase efficiency across your entire organization.
              </p>

              <ConsultationDialog>
                <Button size="lg" className="text-lg px-8 py-6 group bg-primary hover:bg-primary/90">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-emerald-500/30 rounded-3xl blur-3xl opacity-40" />
              <img
                src={dashboardIllustration}
                alt="Workflow Automation Illustration"
                className="relative w-full max-w-lg drop-shadow-2xl rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

        <div className="container relative mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Core <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive automation solutions to streamline your operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className="relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800/50 backdrop-blur-xl hover:border-primary/30 transition-all duration-300">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                      <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>

                    <ul className="space-y-3">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-slate-900/30 to-slate-950" />

        <div className="container relative mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Benefits of <span className="text-primary">Automation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-5 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-xl hover:border-primary/30 transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-slate-300 leading-relaxed self-center">{benefit.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-slate-950" />

        <div className="container relative mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Industry <span className="text-primary">Use Cases</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group p-8 rounded-3xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-xl hover:border-primary/30 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-slate-400">{useCase.use}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900/50" />

        <div className="container relative mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              What You <span className="text-primary">Receive</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-xl"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-lg text-slate-300">{item.text}</span>
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
