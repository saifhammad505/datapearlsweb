// BIDashboards Page Component
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ConsultationDialog from "@/components/ConsultationDialog";
import {
  ArrowRight,
  Check,
  ListChecks,
  Database,
  Video,
  LayoutDashboard,
  Palette,
  BrainCircuit,
  Headphones,
  Target,
  Zap,
  BarChart3,
  ClipboardCheck,
  TrendingUp,
  Sparkles,
  PieChart,
} from "lucide-react";
import dashboardIllustration from "@/assets/BIDashboardPage.png";

const capabilities = [
  {
    title: "Requirement Workshops",
    icon: ListChecks,
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    items: [
      "Understand KPIs, metrics, and user journeys",
      "Define success criteria for the dashboard",
    ],
  },
  {
    title: "Data Modeling",
    icon: Database,
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    items: [
      "Build optimized DAX measures",
      "Create fact/dimension tables",
      "Improve refresh speed and performance",
    ],
  },
  {
    title: "Visual Design",
    icon: Palette,
    gradient: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
    items: [
      "UI/UX best practices for BI",
      "Drill-through, bookmarks, mobile view",
      "Role-based access & security",
    ],
  },
  {
    title: "Implementation",
    icon: LayoutDashboard,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
    items: [
      "Connect to SQL / APIs / Cloud / Excel",
      "Automate refresh schedules",
      "User training & detailed documentation",
    ],
  },
];

const benefits = [
  { text: "Instant visibility into performance", icon: Zap, gradient: "from-amber-500 to-orange-600" },
  { text: "Eliminate manual Excel reporting forever", icon: ClipboardCheck, gradient: "from-emerald-500 to-teal-600" },
  { text: "Standardized KPIs across the entire business", icon: Target, gradient: "from-violet-500 to-purple-600" },
  { text: "Interactive insights (filters, drilldowns, segmentation)", icon: BrainCircuit, gradient: "from-cyan-500 to-blue-600" },
  { text: "Decision-making powered by accurate, real-time data", icon: TrendingUp, gradient: "from-pink-500 to-rose-600" },
];

const useCases = [
  { industry: "Call Centers", use: "Queue performance, agent KPIs, SLAs", icon: Headphones, gradient: "from-cyan-500/20 to-blue-500/20" },
  { industry: "HR", use: "Attendance & punctuality, KPIs, headcount", icon: ListChecks, gradient: "from-violet-500/20 to-purple-500/20" },
  { industry: "Finance", use: "Revenue insights, profitability analysis", icon: BarChart3, gradient: "from-emerald-500/20 to-teal-500/20" },
  { industry: "Operations", use: "Supply chain visibility, turnaround tracking", icon: Database, gradient: "from-amber-500/20 to-yellow-500/20" },
];

const deliverables = [
  { text: "Complete Power BI Dashboard", icon: LayoutDashboard },
  { text: "Documentation (KPI Dictionary + Data Model)", icon: ClipboardCheck },
  { text: "Training Video for Users", icon: Video },
  { text: "Source Files & Datasets Provided", icon: Database },
];

const BIDashboards = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* LEFT: TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 mb-8"
              >
                <Sparkles className="w-4 h-4 text-violet-400 mr-2" />
                <span className="text-sm font-medium text-violet-300">Premium BI Dashboards</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Decision-Ready
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  Dashboards
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-6 max-w-xl leading-relaxed">
                Transform complex data into real-time insights. We design premium Power BI dashboards for Operations, HR, Finance, Sales, and Customer Experience.
              </p>

              {/* Capability Pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-200 border border-slate-700/50 backdrop-blur-sm">
                  <LayoutDashboard className="w-3.5 h-3.5 inline mr-2" />
                  Power BI
                </span>
                <span className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-200 border border-slate-700/50 backdrop-blur-sm">
                  <PieChart className="w-3.5 h-3.5 inline mr-2" />
                  Interactive Visuals
                </span>
                <span className="px-4 py-2 text-sm rounded-full bg-slate-800/60 text-slate-200 border border-slate-700/50 backdrop-blur-sm">
                  <Zap className="w-3.5 h-3.5 inline mr-2" />
                  Real-time Refresh
                </span>
              </div>

              <ConsultationDialog>
                <Button size="lg" className="group bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-400 hover:to-cyan-400 text-white border-0 px-8 py-6 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ConsultationDialog>
            </motion.div>

            {/* RIGHT: HERO IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-cyan-500/30 blur-3xl rounded-full" />
              <img
                src={dashboardIllustration}
                alt="Dashboards Illustration"
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
              Core <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              End-to-end dashboard development with enterprise-grade quality
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
                  <div className="relative backdrop-blur-xl bg-slate-900/80 border border-slate-800/50 rounded-3xl p-10 hover:border-violet-500/30 transition-all duration-500 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${cap.gradient}`}>
                        <Icon className={`w-8 h-8 ${cap.iconColor}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{cap.title}</h3>
                    </div>

                    <ul className="space-y-4">
                      {cap.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-lg text-slate-300">
                          <Check className="w-5 h-5 text-violet-400 mt-1 flex-shrink-0" />
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
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-slate-950 to-cyan-950/30" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Key <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Benefits</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
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
                  className="flex gap-5 p-6 backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 rounded-2xl hover:border-violet-500/30 transition-all"
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} shadow-lg flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-slate-200 leading-relaxed">{benefit.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Industry <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Use Cases</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/30 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${useCase.gradient}`}>
                      <Icon className="w-7 h-7 text-violet-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{useCase.industry}</h3>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">{useCase.use}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 via-slate-950 to-slate-950" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            What You <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Receive</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-5 backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 rounded-xl hover:border-violet-500/30 transition-all"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/30">
                    <Icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="text-slate-200 text-lg">{item.text}</span>
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

export default BIDashboards;
