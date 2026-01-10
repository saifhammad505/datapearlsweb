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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardillustration from "@/assets/DataAnalysisPage.png";

const features = [
  {
    title: "Operational KPI Framework",
    icon: BarChart3,
    gradient: "from-cyan-500 to-blue-600",
    items: [
      "Define execution-focused KPIs across teams and processes",
      "Align metrics with SLAs, targets, and business objectives",
    ],
  },
  {
    title: "Unified Operational Data",
    icon: Database,
    gradient: "from-violet-500 to-purple-600",
    items: [
      "Consolidate data from multiple operational systems",
      "Establish a single source of performance truth",
    ],
  },
  {
    title: "Process & Bottleneck Analysis",
    icon: Workflow,
    gradient: "from-emerald-500 to-teal-600",
    items: [
      "Identify delays, handoff issues, and capacity constraints",
      "Expose throughput and efficiency gaps",
    ],
  },
  {
    title: "Root-Cause Diagnostics",
    icon: Search,
    gradient: "from-pink-500 to-rose-600",
    items: [
      "Explain why performance changed",
      "Drill by team, time, location, or process stage",
    ],
  },
  {
    title: "Cost & Productivity Analytics",
    icon: LineChart,
    gradient: "from-orange-500 to-amber-600",
    items: [
      "Detect cost leakage and underutilization",
      "Measure output versus effort and spend",
    ],
  },
  {
    title: "Insight-to-Action Narratives",
    icon: ClipboardList,
    gradient: "from-indigo-500 to-blue-600",
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
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    industry: "Customer Support",
    use: "Response times, resolution efficiency, workload balance",
    icon: PieChart,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    industry: "Finance",
    use: "Cost variance, productivity versus spend",
    icon: BarChart3,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    industry: "HR & Workforce",
    use: "Utilization, attendance patterns, performance gaps",
    icon: LineChart,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    industry: "Healthcare & Services",
    use: "Demand vs capacity, service delays, throughput",
    icon: Search,
    gradient: "from-orange-500 to-amber-600",
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
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="text-white">Performance &</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Operations Analytics
          </span>
        </h1>

        <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
          Measure execution. Identify leakage. Improve outcomes.
          <br />
          We help leadership see where performance breaks — and what to fix.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-cyan-500 hover:bg-cyan-400 text-white px-8"
        >
          <Link to="/contact">
            Discuss Your Operations
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
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

      {/* WHAT THIS SERVICE IS */}
      <section className="py-28 border-t border-slate-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Performance & Operations Analytics Delivers
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              This service focuses on execution — not theory.
              It reveals where operational performance drops, why it happens,
              and how to correct it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-6`}
                  >
                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>

                  <ul className="space-y-2 text-slate-400 text-sm">
                    {feature.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-28 bg-slate-900/40">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4"
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${benefit.gradient}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-300">{benefit.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Where This Creates Impact
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.gradient} p-[1px] mb-6`}
                  >
                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {useCase.industry}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {useCase.use}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center bg-slate-900/30">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Improve Operational Performance?
        </h2>
        <p className="text-lg text-slate-400 mb-10">
          Let’s identify where performance leaks — and how to fix them.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-cyan-500 hover:bg-cyan-400 text-white px-10"
        >
          <Link to="/contact">
            Start the Conversation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </section>
            <Footer />
    </div>
  );
};

export default PerformanceOperationsAnalytics;
