// DataEngineering Page Component
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
  Sparkles,
} from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import dashboardIllustration from "@/assets/DataEngineeringPage.png";

const DataEngineering = () => {
  const features = [
    {
      title: "Data Integration",
      icon: Network,
      gradient: "from-cyan-500 to-blue-600",
      items: [
        "Connect SQL Server, MySQL, Azure, APIs, Excel, CRMs",
        "Consolidate into a unified source of truth",
      ],
    },
    {
      title: "Data Pipelines (ETL/ELT)",
      icon: Workflow,
      gradient: "from-violet-500 to-purple-600",
      items: [
        "Python ETL scripts, SQL stored procedures, SSIS/ADF pipelines",
        "Automated scheduling & refresh orchestration",
      ],
    },
    {
      title: "Data Warehousing",
      icon: Layers,
      gradient: "from-emerald-500 to-teal-600",
      items: [
        "Star schema & dimensional modeling",
        "Fact + dimension table structure",
        "Performance tuning & index optimization",
      ],
    },
    {
      title: "Data Quality & Governance",
      icon: ShieldCheck,
      gradient: "from-orange-500 to-amber-600",
      items: [
        "Validation rules & data accuracy checks",
        "Data lineage documentation",
        "Standardized definitions & naming conventions",
      ],
    },
  ];

  const benefits = [
    { text: "One version of the truth across your organization", icon: HardDrive, gradient: "from-cyan-500 to-blue-600" },
    { text: "Scalable architecture built for long-term growth", icon: ServerCog, gradient: "from-violet-500 to-purple-600" },
    { text: "Faster insights through optimized pipelines", icon: LineChart, gradient: "from-emerald-500 to-teal-600" },
    { text: "Reduced manual effort with automated refresh cycles", icon: Cable, gradient: "from-orange-500 to-amber-600" },
  ];

  const useCases = [
    { industry: "Financial Services", use: "Consolidate financial, ledger, compliance, and audit datasets", icon: Database, gradient: "from-emerald-500 to-teal-600" },
    { industry: "Healthcare", use: "Integrate patient, staffing, appointment, and clinical data", icon: Network, gradient: "from-pink-500 to-rose-600" },
    { industry: "Enterprise Operations", use: "Multi-system reconciliation & performance visibility", icon: Workflow, gradient: "from-cyan-500 to-blue-600" },
    { industry: "E-Commerce", use: "Unify product, orders, inventory, marketing & customer data", icon: BarChart3, gradient: "from-violet-500 to-purple-600" },
  ];

  const deliverables = [
    { text: "Modern data warehouse", icon: Layers },
    { text: "Automated ETL/ELT pipelines", icon: Workflow },
    { text: "Data dictionary & documentation", icon: Wrench },
    { text: "Monitoring & alerting system", icon: ShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT — TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-violet-500/10 border border-orange-500/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-sm font-medium text-orange-300">Enterprise-Grade Infrastructure</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Data</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-violet-400 bg-clip-text text-transparent">
                  Engineering
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                Build robust data pipelines, unified data warehouses, and scalable architectures that power enterprise analytics.
              </p>

              <ConsultationDialog>
                <Button size="lg" className="group bg-gradient-to-r from-orange-500 to-violet-500 hover:from-orange-400 hover:to-violet-400 text-white border-0 px-8 py-6 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
            </motion.div>

            {/* RIGHT — IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-violet-500/30 blur-3xl rounded-full" />
              <img
                src={dashboardIllustration}
                alt="Data Engineering Illustration"
                className="relative w-full max-w-lg md:max-w-xl drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/20 to-transparent" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Core <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text text-transparent">Engineering Features</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              End-to-end data infrastructure built for scale and reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-white/20 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    </div>

                    <ul className="space-y-4">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-lg text-slate-400">
                          <Check className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
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

      {/* BENEFITS SECTION */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/30 via-violet-950/30 to-orange-950/30" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Key <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text text-transparent">Benefits</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex gap-5 p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} shadow-lg flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xl text-slate-300 leading-relaxed">{benefit.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Industry <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text text-transparent">Use Cases</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${useCase.gradient} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                  </div>
                  <p className="text-lg text-slate-400 leading-relaxed">{useCase.use}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/30 to-transparent" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            What You <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text text-transparent">Receive</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-5 p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-violet-500/20 border border-orange-500/30">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-xl text-slate-300">{item.text}</span>
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
