import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BarChart3,
  Database,
  Workflow,
  Search,
  LineChart,
  ClipboardList,
  TrendingUp,
  Filter,
  Layers,
  PieChart,
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationDialog from "@/components/ConsultationDialog";
import dashboardillustration from "@/assets/DataAnalysisPage.png";

const capabilities = [
  {
    title: "Operational KPI Framework",
    icon: BarChart3,
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    items: [
      "Define execution-focused KPIs across teams and processes",
      "Align metrics with SLAs, targets, and business objectives",
    ],
  },
  {
    title: "Unified Operational Data",
    icon: Database,
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    items: [
      "Consolidate data from multiple operational systems",
      "Establish a single source of performance truth",
    ],
  },
  {
    title: "Process & Bottleneck Analysis",
    icon: Workflow,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    items: [
      "Identify delays, handoff issues, and capacity constraints",
      "Expose throughput and efficiency gaps",
    ],
  },
  {
    title: "Root-Cause Diagnostics",
    icon: Search,
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
    items: [
      "Explain why performance changed",
      "Drill by team, time, location, or process stage",
    ],
  },
  {
    title: "Cost & Productivity Analytics",
    icon: LineChart,
    gradient: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-400",
    items: [
      "Detect cost leakage and underutilization",
      "Measure output versus effort and spend",
    ],
  },
  {
    title: "Insight-to-Action Narratives",
    icon: ClipboardList,
    gradient: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-400",
    items: [
      "Clear summaries for leadership",
      "Actionable recommendations, not raw data",
    ],
  },
];

const benefits = [
  {
    text: "Clear visibility into operational performance",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    text: "Early detection of inefficiencies and bottlenecks",
    icon: Search,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    text: "Higher productivity without increasing headcount",
    icon: BarChart3,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    text: "Reduced cost leakage and operational waste",
    icon: Filter,
    gradient: "from-orange-500 to-amber-600",
  },
  {
    text: "Faster, more confident execution decisions",
    icon: Layers,
    gradient: "from-pink-500 to-rose-600",
  },
];

const useCases = [
  {
    industry: "Operations",
    use: "Bottlenecks, delays, throughput and capacity gaps",
    icon: Workflow,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    industry: "Customer Support",
    use: "Response times, resolution efficiency, workload balance",
    icon: PieChart,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    industry: "Finance",
    use: "Cost variance, productivity versus spend",
    icon: BarChart3,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    industry: "HR & Workforce",
    use: "Utilization, attendance patterns, performance gaps",
    icon: LineChart,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    industry: "Healthcare & Services",
    use: "Demand vs capacity, service delays, throughput",
    icon: Search,
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
];

const PerformanceOperationsAnalytics = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* HERO */}
      <section className="relative pt-32 pb-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.14),transparent_55%)]" />
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative">
          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT: TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-300 font-medium">Descriptive & Diagnostic Analytics</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
                Performance &
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Operations Analytics
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed mb-6 max-w-xl">
                Measure execution. Identify leakage. Improve outcomes.
                <br />
                We help leadership see where performance breaks — and what to fix.
              </p>

              {/* Capability Pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-200 border border-slate-700/50 backdrop-blur-sm">
                  <Zap className="w-3.5 h-3.5 inline mr-2" />
                  KPI Frameworks
                </span>
                <span className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-200 border border-slate-700/50 backdrop-blur-sm">
                  <Search className="w-3.5 h-3.5 inline mr-2" />
                  Root-Cause Analysis
                </span>
                <span className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-200 border border-slate-700/50 backdrop-blur-sm">
                  <Target className="w-3.5 h-3.5 inline mr-2" />
                  Actionable Insights
                </span>
              </div>

              <ConsultationDialog>
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white px-8 py-6 text-lg"
                >
                  Discuss Your Operations
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
            </motion.div>

            {/* RIGHT: IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-cyan-500/30 blur-3xl rounded-full" />
              <img
                src={dashboardillustration}
                alt="Operations Analytics Illustration"
                className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
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
              Core <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              End-to-end analytics focused on execution — not theory
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className="relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800/50 backdrop-blur-xl hover:border-primary/30 transition-all duration-300 h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center mb-6`}>
                      <Icon className={`w-7 h-7 ${cap.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{cap.title}</h3>
                    <ul className="space-y-3">
                      {cap.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
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

      {/* BENEFITS */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/30 via-slate-950 to-emerald-950/30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Key <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Benefits</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                  className="backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 flex items-center gap-4 hover:border-cyan-500/30 transition-all"
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} flex-shrink-0`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-200">{benefit.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-slate-950" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
          >
            Where This Creates <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Impact</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 rounded-3xl p-8 hover:border-cyan-500/30 transition-all"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-slate-300 leading-relaxed">{useCase.use}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-950 to-emerald-950/20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Improve{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Operational Performance?
              </span>
            </h2>
            <p className="text-lg text-slate-300 mb-10">
              Let's identify where performance leaks — and how to fix them.
            </p>
            <ConsultationDialog>
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-white px-10 py-6 text-lg"
              >
                Start the Conversation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ConsultationDialog>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceOperationsAnalytics;
