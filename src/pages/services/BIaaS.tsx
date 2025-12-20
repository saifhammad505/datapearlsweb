// BIAAS Page Component

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Database,
  BarChart3,
  Headphones,
  Target,
  TrendingUp,
  DollarSign,
  Zap,
  CheckCircle,
  LayoutDashboard,
  ShieldCheck,
  ClipboardCheck,
  RefreshCcw,
  Sparkles,
  HeartPulse,
  ShoppingBag,
  Workflow,
  CreditCard,
} from "lucide-react";
import ConsultationDialog from "@/components/ConsultationDialog";
import presentationImage from "@/assets/BISaasPage.png";

const BIaaS = () => {
  const features = [
    {
      title: "Data Platform Development",
      icon: Database,
      gradient: "from-cyan-500 to-blue-600",
      items: [
        "Build SQL/Cloud data warehouses",
        "Define data models, facts, dimensions",
        "Create scalable ETL/ELT pipelines",
      ],
    },
    {
      title: "Dashboard Development & Maintenance",
      icon: LayoutDashboard,
      gradient: "from-violet-500 to-purple-600",
      items: [
        "Build executive, operational, financial, and departmental dashboards",
        "Maintain and enhance existing reports",
        "Standardize metrics, KPIs, and definitions",
      ],
    },
    {
      title: "Data Governance & Quality",
      icon: ShieldCheck,
      gradient: "from-emerald-500 to-teal-600",
      items: [
        "Apply best practices for naming conventions",
        "Data validation and continuous monitoring",
        "Implement role-based security",
      ],
    },
    {
      title: "Ongoing BI Support",
      icon: RefreshCcw,
      gradient: "from-orange-500 to-amber-600",
      items: [
        "Regular enhancements & new KPIs",
        "Query optimization",
        "Monthly or weekly meetings with stakeholders",
        "Automated data refresh & issue resolution",
      ],
    },
    {
      title: "Strategic Insights & Advisory",
      icon: Sparkles,
      gradient: "from-pink-500 to-rose-600",
      items: [
        "Provide monthly insights report",
        "Recommend process improvements",
        "Conduct root-cause analysis",
      ],
    },
  ];

  const benefits = [
    { text: "Lower BI Costs by 60–80% vs hiring a full team", icon: DollarSign, gradient: "from-emerald-500 to-green-600" },
    { text: "Always-on support from BI & Data Engineering experts", icon: Headphones, gradient: "from-cyan-500 to-blue-600" },
    { text: "Consistency across KPIs → no more conflicting numbers", icon: Target, gradient: "from-violet-500 to-purple-600" },
    { text: "Faster decision making with real-time dashboards", icon: Zap, gradient: "from-amber-500 to-orange-600" },
    { text: "Future-proof analytics aligned with industry best practices", icon: TrendingUp, gradient: "from-pink-500 to-rose-600" },
  ];

  const useCases = [
    { industry: "Healthcare", use: "Patient wait-time analytics, OT utilization", icon: HeartPulse, gradient: "from-red-500 to-pink-600" },
    { industry: "Retail", use: "Sales forecasting, customer journeys", icon: ShoppingBag, gradient: "from-violet-500 to-purple-600" },
    { industry: "Operations", use: "Staffing, SLA adherence, logistics", icon: Workflow, gradient: "from-cyan-500 to-blue-600" },
    { industry: "Finance", use: "Budgeting, expense control, profitability", icon: CreditCard, gradient: "from-emerald-500 to-teal-600" },
  ];

  const deliverables = [
    { text: "Fully managed data warehouse", icon: Database },
    { text: "Enterprise-grade dashboards", icon: LayoutDashboard },
    { text: "KPI standardization document", icon: ClipboardCheck },
    { text: "Monthly BI insights report", icon: BarChart3 },
    { text: "Automated workflows & refresh", icon: RefreshCcw },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm font-medium text-cyan-300">Fully Managed BI Department</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">BI-as-a-Service</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                (BIaaS)
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Your outsourced BI department — delivering everything from data
              warehousing to dashboards, analysis, and ongoing support.
            </p>
            <ConsultationDialog>
              <Button size="lg" className="group bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white border-0 px-8 py-6 text-lg">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ConsultationDialog>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM IMAGE + TEXT SECTION */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* LEFT: TEXT */}
              <div className="space-y-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold">
                  Transform Your Analytics
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Transform your{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    analytics foundation
                  </span>{" "}
                  with BIaaS
                </h2>

                <p className="text-lg text-slate-400 leading-relaxed">
                  We design, build, and maintain your entire BI ecosystem —
                  data platform, dashboards, KPIs, and workflows — so your
                  team always makes decisions based on real-time, reliable data.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Single source of truth for your data",
                    "Standardized KPIs across departments",
                    "No in-house BI hiring required",
                    "Continuous improvements, not one-off builds",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="p-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-slate-300">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <ConsultationDialog>
                  <Button size="lg" className="group bg-white/10 hover:bg-white/20 text-white border border-white/20 mt-4">
                    Book a Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </ConsultationDialog>
              </div>

              {/* RIGHT: IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-violet-500/30 blur-3xl rounded-full" />
                <img
                  src={presentationImage}
                  alt="BI-as-a-Service illustration"
                  className="relative w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Service <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive BI capabilities delivered as a managed service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>

                    <ul className="space-y-3">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
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
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/30 via-violet-950/30 to-cyan-950/30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Service <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Benefits</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-4 p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} shadow-lg flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-300 leading-relaxed">{benefit.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Industry <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Use Cases</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                  className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${useCase.gradient} shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{useCase.use}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/30 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            What You <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Receive</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-slate-300">{item.text}</span>
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

export default BIaaS;
