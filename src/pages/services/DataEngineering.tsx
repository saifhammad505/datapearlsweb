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
  Zap,
} from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import dashboardIllustration from "@/assets/DataEngineeringPage.png";

const capabilities = [
  {
    title: "Data Integration",
    icon: Network,
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    items: [
      "Connect SQL Server, MySQL, Azure, APIs, Excel, CRMs",
      "Consolidate into a unified source of truth",
    ],
  },
  {
    title: "Data Pipelines (ETL/ELT)",
    icon: Workflow,
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    items: [
      "Python ETL scripts, SQL stored procedures, SSIS/ADF pipelines",
      "Automated scheduling & refresh orchestration",
    ],
  },
  {
    title: "Data Warehousing",
    icon: Layers,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    items: [
      "Star schema & dimensional modeling",
      "Fact + dimension table structure",
      "Performance tuning & index optimization",
    ],
  },
  {
    title: "Data Quality & Governance",
    icon: ShieldCheck,
    gradient: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-400",
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
  { industry: "Financial Services", use: "Consolidate financial, ledger, compliance, and audit datasets", icon: Database, gradient: "from-emerald-500/20 to-teal-500/20" },
  { industry: "Healthcare", use: "Integrate patient, staffing, appointment, and clinical data", icon: Network, gradient: "from-pink-500/20 to-rose-500/20" },
  { industry: "Enterprise Operations", use: "Multi-system reconciliation & performance visibility", icon: Workflow, gradient: "from-cyan-500/20 to-blue-500/20" },
  { industry: "E-Commerce", use: "Unify product, orders, inventory, marketing & customer data", icon: BarChart3, gradient: "from-violet-500/20 to-purple-500/20" },
];

const deliverables = [
  { text: "Modern data warehouse", icon: Layers },
  { text: "Automated ETL/ELT pipelines", icon: Workflow },
  { text: "Data dictionary & documentation", icon: Wrench },
  { text: "Monitoring & alerting system", icon: ShieldCheck },
];

const DataEngineering = () => {
  return (
    <div className="min-h-screen bg-slate-950">
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

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
                Data Foundation &
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-violet-400 bg-clip-text text-transparent">
                  Warehousing
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed mb-6 max-w-xl">
                Build robust data pipelines, unified data warehouses, and scalable architectures that power enterprise analytics.
              </p>

              {/* Capability Pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-200 border border-slate-700/50 backdrop-blur-sm">
                  <Database className="w-3.5 h-3.5 inline mr-2" />
                  Data Warehousing
                </span>
                <span className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-200 border border-slate-700/50 backdrop-blur-sm">
                  <Workflow className="w-3.5 h-3.5 inline mr-2" />
                  ETL Pipelines
                </span>
                <span className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-200 border border-slate-700/50 backdrop-blur-sm">
                  <Zap className="w-3.5 h-3.5 inline mr-2" />
                  Automation
                </span>
              </div>

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

      {/* CORE CAPABILITIES */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Core <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              End-to-end data infrastructure built for scale and reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className="relative backdrop-blur-xl bg-slate-900/80 border border-slate-800/50 rounded-3xl p-10 hover:border-orange-500/30 transition-all duration-500 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${cap.gradient}`}>
                        <Icon className={`w-8 h-8 ${cap.iconColor}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{cap.title}</h3>
                    </div>

                    <ul className="space-y-4">
                      {cap.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-lg text-slate-300">
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/30 via-slate-950 to-violet-950/30" />
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
                  className="flex gap-5 p-8 backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 rounded-2xl hover:border-orange-500/30 transition-all"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} shadow-lg flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xl text-slate-200 leading-relaxed">{benefit.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
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
                  className="group backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 rounded-3xl p-10 hover:border-orange-500/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${useCase.gradient}`}>
                      <Icon className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed">{useCase.use}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERABLES SECTION */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/20 via-slate-950 to-slate-950" />
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
                  className="flex items-center gap-5 p-6 backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 rounded-2xl hover:border-orange-500/30 transition-all"
                >
                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-violet-500/20 border border-orange-500/30">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-xl text-slate-200">{item.text}</span>
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
