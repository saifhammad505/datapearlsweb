// DataAnalytics Page Component
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Search,
  Database,
  LineChart,
  BarChart3,
  Workflow,
  ClipboardList,
  PieChart,
  Layers,
  TrendingUp,
  Filter,
  Sparkles,
} from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import dashboardIllustration from "@/assets/DataAnalysisPage.png";

const DataAnalytics = () => {
  const features = [
    {
      title: "Business Understanding",
      icon: Search,
      gradient: "from-cyan-500 to-blue-600",
      items: [
        "Identify KPIs, pain points, and decision needs",
        "Stakeholder interviews",
      ],
    },
    {
      title: "Data Collection",
      icon: Database,
      gradient: "from-violet-500 to-purple-600",
      items: [
        "Pull data from SQL, Excel, CRM, ERP, APIs, and cloud systems",
      ],
    },
    {
      title: "Data Cleaning & Transformation",
      icon: Workflow,
      gradient: "from-emerald-500 to-teal-600",
      items: [
        "Fix missing data & inconsistencies",
        "Standardize fields & categories",
        "Transform into analysis-ready datasets",
      ],
    },
    {
      title: "Exploratory Analysis",
      icon: PieChart,
      gradient: "from-pink-500 to-rose-600",
      items: [
        "Trend analysis & segmentation",
        "Cohort analysis",
        "Correlation & pattern detection",
      ],
    },
    {
      title: "Diagnostic Analysis",
      icon: LineChart,
      gradient: "from-orange-500 to-amber-600",
      items: [
        "Identify root causes of performance changes",
        "Compare periods, categories, teams, products",
      ],
    },
    {
      title: "Insight Narratives",
      icon: ClipboardList,
      gradient: "from-indigo-500 to-blue-600",
      items: [
        "Storytelling-based insights",
        "Recommendations slide deck",
        "Executive summaries",
      ],
    },
  ];

  const benefits = [
    { text: "Stronger decisions based on facts", icon: TrendingUp, gradient: "from-emerald-500 to-teal-600" },
    { text: "Identify hidden risks & opportunities", icon: Search, gradient: "from-cyan-500 to-blue-600" },
    { text: "Improve performance across teams", icon: BarChart3, gradient: "from-violet-500 to-purple-600" },
    { text: "Reduce inefficiencies & cost leakages", icon: Filter, gradient: "from-orange-500 to-amber-600" },
    { text: "Enhance customer & operational understanding", icon: Layers, gradient: "from-pink-500 to-rose-600" },
  ];

  const useCases = [
    { industry: "Operations", use: "Identify delays, bottlenecks, excess capacity", icon: Workflow, gradient: "from-cyan-500 to-blue-600" },
    { industry: "HR", use: "Attrition patterns, attendance trends", icon: PieChart, gradient: "from-violet-500 to-purple-600" },
    { industry: "Finance", use: "Variance analysis, spend optimization", icon: BarChart3, gradient: "from-emerald-500 to-teal-600" },
    { industry: "E-Commerce", use: "Funnel drop-offs, product performance", icon: LineChart, gradient: "from-pink-500 to-rose-600" },
    { industry: "Healthcare", use: "Appointment trends, service gaps", icon: Search, gradient: "from-orange-500 to-amber-600" },
  ];

  const deliverables = [
    { text: "Clean, structured dataset", icon: Database },
    { text: "Analytical report (PDF/PPT)", icon: ClipboardList },
    { text: "Insight recommendations", icon: TrendingUp },
    { text: "Charts & visual summaries", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

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
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-sm font-medium text-emerald-300">Data-Driven Insights</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Business Analytics</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  (Descriptive + Diagnostic)
                </span>
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                Transform raw data into clear insights, trends, root-cause explanations, and actionable strategies that drive business performance.
              </p>

              <ConsultationDialog>
                <Button size="lg" className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white border-0 px-8 py-6 text-lg">
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
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 blur-3xl rounded-full" />
              <img
                src={dashboardIllustration}
                alt="Data Analytics Illustration"
                className="relative w-full max-w-lg md:max-w-xl drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Analytics <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive analytics capabilities from data collection to actionable insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                          <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
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
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-cyan-950/30 to-emerald-950/30" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Key <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Benefits</span>
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
            Industry <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Use Cases</span>
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
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            What You <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Receive</span>
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
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30">
                    <Icon className="w-6 h-6 text-emerald-400" />
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

export default DataAnalytics;
